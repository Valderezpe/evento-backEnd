import { Router } from 'express';
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import * as bcrypt from 'bcryptjs';
import {Ingressos} from "../entity/Ingressos";
import * as jwt from "jsonwebtoken";
import config from "../config/config";
import { checkJwt } from "../middleware/checkJwt";

const ingresosRouter = Router();

createConnection().then(connection =>{
    const ingressoRepository = connection.getRepository(Ingressos)
ingresosRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg: "server is alive"})
})

ingresosRouter.get("/ingresso", async function(req: Request, res: Response) {
    const allUsers = await ingressoRepository.find();
    return res.json(allUsers);
});

ingresosRouter.post("/ingresso", async function(req: Request, res: Response) {
    const results = await ingressoRepository.findOne(req.params.id);
    return res.send(results);
});

ingresosRouter.delete("/ingresso/:id", async function(req: Request, res: Response) {
    const results = await ingressoRepository.delete(req.params.id);
   
    return res.send(results);
});
})

export default ingresosRouter;