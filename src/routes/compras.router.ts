import { Router, response } from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { Compras } from "../entity/compras";
import { checkJwt } from "../middleware/checkJwt";


const comprasRouter = Router();

createConnection().then((connection) => {
  const comprasRepository = connection.getRepository(Compras);
  comprasRouter.get("/", (req: Request, res: Response) => {
    res.status(200).json({ msg: "server is alive" });
  });

  comprasRouter.get(
    "/compras",
    async function (req: Request, res: Response) {
      const results = await comprasRepository.findOne(req.params.id);
      return res.send();
    }
  );
  comprasRouter.post("/compras", async function (req: Request, res: Response) {
    const compras = await comprasRepository.create(req.body);
    const results = await comprasRepository.save(compras);
    return res.send("compra adicionada.");
    
  });

  comprasRouter.delete(
    "/compras",
    async function (req: Request, res: Response) {
      const results = await comprasRepository.delete(req.params.id);
      return res.send("compra deletada com sucesso");
    }
  );
});

export default comprasRouter;
