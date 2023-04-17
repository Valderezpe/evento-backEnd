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
    const usuario = await usuarioRepository.find();
    res.json(usuario);
});

usuarioRouter.post("/usuario", async function(req: Request, res: Response) {
    const usuario = await usuarioRepository.find();
    res.json("Cadastro feito com sucesso!");
});

usuarioRouter.delete("/usuario", async function(req: Request, res: Response) {
    const results = await usuarioRepository.delete(req.params.id);
    return res.send("excluida com sucesso!");
});
})

export default usuarioRouter;