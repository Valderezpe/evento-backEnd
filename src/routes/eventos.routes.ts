import { Router } from 'express';
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import {Eventos} from "../entity/Eventos";
import { checkJwt } from "../middleware/checkJwt";

const eventosRouter = Router();

createConnection().then(connection =>{
    const eventosRepository = connection.getRepository(Eventos)
eventosRouter.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg: "server is alive"})
})

// eventosRouter.get("/eventos",  async function(req: Request, res: Response) {
//     const eventos = await eventosRepository.find();
//     res.json(eventos);
// });
eventosRouter.get("/eventos", async function(req: Request, res: Response) {
    const results = await eventosRepository.findOne(req.params.id);
    return res.send();
});
eventosRouter.post("/eventos", async function(req: Request, res: Response) {
    const eventos = await eventosRepository.create(req.body);
    const results = await eventosRepository.save(eventos);
    return res.send("evento cadastrado dom suceso!");
});
eventosRouter.put("/eventos", async function(req: Request, res: Response) {
    const eventos = await eventosRepository.findOne(req.params.id);
    eventosRepository.merge(eventos, req.body);
    const results = await eventosRepository.save(eventos);
    return res.send("alteração feito com sucesso.");
});
eventosRouter.delete("/eventos", async function(req: Request, res: Response) {
    const results = await eventosRepository.delete(req.params.id);
    return res.send("evento deletado com sucesso!");
});

})


export default eventosRouter;