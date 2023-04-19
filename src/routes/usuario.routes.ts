import { Router } from 'express';
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import * as bcrypt from 'bcryptjs';
import {Usuario} from "../entity/Usuarios";
import * as jwt from "jsonwebtoken";
// import config from "../config/config";
// import { checkJwt } from "../middleware/checkJwt";

const usuarioRouter = Router();

createConnection().then(connection =>{
    const usuarioRepository = connection.getRepository(Usuario)
usuarioRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg: "server is alive"})
})

usuarioRouter.get("/usuario", async function(req: Request, res: Response) {
    const allUsers = await usuarioRepository.find();
     return res.json(allUsers);
});

usuarioRouter.post("/usuario", async function(req: Request, res: Response) {
    const results = await usuarioRepository.findOne(req.params.id);
    return res.json(results);
});

usuarioRouter.delete("/usuario/:id", async function(req: Request, res: Response) {
    const results = await usuarioRepository.delete(req.params.id);
    return res.send(results);
});
})

export default usuarioRouter;