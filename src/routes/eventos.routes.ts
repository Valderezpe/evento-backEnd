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

eventosRouter.get("/eventos", async function(req: Request, res: Response) {
    const allUsers = await eventosRepository.find();
     return res.json(allUsers);
});

eventosRouter.post("/eventos", async function(req: Request, res: Response) {
    const eventos = await eventosRepository.create(req.body);
    const results = await eventosRepository.save(eventos);
    return res.send(results);
});
eventosRouter.put("/eventos", async function(req: Request, res: Response) {
    const eventos = await eventosRepository.findOne(req.params.id);
    eventosRepository.merge(eventos, req.body);
    const results = await eventosRepository.save(eventos);
    return res.send(results);
});
eventosRouter.delete("/eventos/:id", async function(req: Request, res: Response) {
    const results = await eventosRepository.delete(req.params.id);
    return res.send(results);
});

})


export default eventosRouter;