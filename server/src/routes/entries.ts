import { Router, Request, Response } from "express";
import pool from "../config/postgres";
import { supabase } from "../config/supabase";

const router = Router();

async function getAuthenticatedUser(
    req: Request,
    res: Response
): Promise<string | null> {
    const authorization = req.get("Authorization");
    const token = authorization?.match(/^Bearer\s+(\S+)$/i)?.[1];

    if (!token) {
        res.status(401).json({ error: "Missing or invalid access token" });
        return null;
    }

    const {
        data: { user },
        error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
        res.status(401).json({ error: "Invalid or expired access token" });
        return null;
    }

    return user.id;
}


router.get("/api/entries", async (req: Request, res: Response) => {
    const userId = await getAuthenticatedUser(req, res);
    if (!userId) return;

    const result = await pool.query(
        "SELECT * FROM entries WHERE user_id = $1",
        [userId]
    );


    res.status(200).json({
        success: true,
        data: result.rows
    });
});

export default router;