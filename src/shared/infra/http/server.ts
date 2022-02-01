import "reflect-metadata";
import express from "express";
import "express-async-errors"; // importe a biblioteca
import "../typeorm";
import routes from "./routes/index.routes";
import ErrorHandler from "./middlewares/ErrorHandler";
import "dotenv"

const app = express();

app.use(express.json()); // necessário para que o servidor entenda JSON

app.use(routes); // rotas da aplicação

/* Se um erro é disparado na aplicação ele será tratado pelo ErrorHandler
 * Se não for tratado a requisição fica carregando e não finaliza.
 */
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
