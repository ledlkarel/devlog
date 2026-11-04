import { Router, Request, Response } from "express";
import pool from "../config/postgres";

const router = Router();

router.get("/api/entries", async (req: Request, res: Response) => {
    const result = await pool.query(
        `SELECT * FROM entries`
    )

    res.status(200).json({
        success: true,
        data: result.rows
    });
});

export default router;