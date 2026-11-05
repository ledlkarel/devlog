import 'dotenv/config'
import cors from 'cors'
import express, { Request, Response } from 'express'
import entriesRouter from './routes/entries'

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:5173',
}))

app.use(entriesRouter);

app.get('/healt', (req: Request, res, Response) => {
    res.status(200).json({
        success: true,
        msg: "hello"
    });
});

app.listen(PORT, () => console.log(`app is listening on port: ${PORT}`))