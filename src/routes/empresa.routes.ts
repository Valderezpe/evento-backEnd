import { Router } from 'express';
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import {Empresas} from "../entity/Empresas";
import { checkJwt } from "../middleware/checkJwt";


const empresaRouter = Router();

createConnection().then(connection =>{
    const empresaRepository = connection.getRepository(Empresas)
empresaRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg: "server is alive"})
})

empresaRouter.get("/empresa", async function(req: Request, res: Response) {
    const empresa = await empresaRepository.find();
    res.json(empresa);
});

empresaRouter.post("/empresa",  async function(req: Request, res: Response) {
    const empresa = await empresaRepository.create(req.body);
    const results = await empresaRepository.save(empresa);
    return res.send("cadastro feito com sucesso!");
});
empresaRouter.put("/empresa", async function(req: Request, res: Response) {
    const empresa = await empresaRepository.findOne(req.params.id);
    empresaRepository.merge(empresa, req.body);
    const results = await empresaRepository.save(empresa);
    return res.send("alteração feita com sucesso!");
});
empresaRouter.delete("/empresa", async function(req: Request, res: Response) {
    const results = await empresaRepository.delete(req.params.id);
    return res.send("empresa excluida com sucesso");
});
})


export default empresaRouter;