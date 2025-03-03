import express, {Request, Response, NextFunction} from 'express'
import {useExpressServer} from "routing-controllers";
import FilmsController from "./controllers/FilmsController";
import PeoplesControllers from "./controllers/PeoplesControllers";
import {AppDataSource} from "./database/config";

const app = express();
const PORT = 8080;

AppDataSource.initialize()
    .then(() => console.log("Database connected"))
    .catch((error) => console.error("Database connection error:", error));

app.use(express.json());

useExpressServer(app, {
    controllers: [FilmsController, PeoplesControllers],
    middlewares: [],
    defaultErrorHandler: false
})

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    console.log(err.message);
    res.status(400).json({error: err.message});
})

async function startServer() {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
}

startServer().catch(console.error);