import "dotenv/config";

import usuarioController from "./controller/usuarioController.js";
import agendamentoController from "./controller/agendamentoController.js";

import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

// configuração dos endpoints
server.use(usuarioController);
server.use(agendamentoController);

server.listen(process.env.PORT, () =>
  console.log(`API NA PORTA ${process.env.PORT}`)
);
