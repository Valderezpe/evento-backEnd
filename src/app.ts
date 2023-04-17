import * as express from "express";
import {Request, Response} from "express";
import * as helmet from "helmet";
import * as cors from "cors";
import * as swaggerUi from 'swagger-ui-express';
import empresaRoutes from './routes/empresa.routes';
import eventosRoutes from './routes/eventos.routes';
import comprasRouter from './routes/compras.router';
import ingresosRouter from "./routes/ingresso.routes";
import usuarioRouter from "./routes/usuario.routes";


const app = express();
app.use(cors());     
app.use(helmet());
app.use(express.json());


app.use("/docs", swaggerUi.serve, async (req: express.Request, res: express.Response) => {
    return res.send(swaggerUi.generateHTML(await import("../swagger.json")));
  });

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({msg: "server is alive"})
})

app.use(comprasRouter);
app.use(empresaRoutes);
app.use(eventosRoutes);
app.use(ingresosRouter);
app.use(usuarioRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});

export default app;
