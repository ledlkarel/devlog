import 'dotenv/config'
import express, { Request, Response } from 'express'
import entriesRouter from './routes/entries'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(entriesRouter);

app.get('/healt', (req: Request, res, Response) => {
    res.status(200).json({
        success: true,
        msg: "hello"
    });
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`))