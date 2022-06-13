import {
  InserirAgendamento,
  pesquisardatadaconsulta,
  excluirconsulta,
  alterardadosdaconsulta,
} from "../repository/agendamentoRepository.js";

import { Router } from "express";
const server = Router();

server.post("/agendar", async (req, resp) => {
  try {
    const novoAgendamento = req.body;

    if (!novoAgendamento.nome)
      throw new Error("Nome Do Paciente é obrigatorio!");

    if (!novoAgendamento.idade)
      throw new Error("idade Do Paciente é obrigatorio!");

    if (!novoAgendamento.nasc)
      throw new Error("Data de nasc Do Paciente é obrigatorio!");

    if (!novoAgendamento.cpf)
      throw new Error("cpf Do Paciente é obrigatorio!");

    if (!novoAgendamento.rg) throw new Error("rg Do Paciente é obrigatorio!");

    if (!novoAgendamento.doutor)
      throw new Error(" nome do doutor é obrigatorio!");

    if (!novoAgendamento.servico) throw new Error(" servico é obrigatorio!");

    if (!novoAgendamento.agendamento)
      throw new Error("  agendamento é obrigatorio!");

    const Agendarconsulta = await InserirAgendamento(novoAgendamento);
    resp.send(Agendarconsulta);
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

server.get("/agendamento/buscar", async (req, resp) => {
  try {
    const buscar = req.query;
    const resposta = await pesquisardatadaconsulta();
    resp.send(resposta);
  } catch (err) {
    resp.send(400).send({
      erro: err.message,
    });
  }
});

server.get("/agendamento/buscar/data", async (req, resp) => {
  try {
    const { dt } = req.query;

    const resposta = await pesquisardatadaconsulta(dt);
    if (!resposta) {
      resp.status(404).send([]);
    } else {
      resp.send(resposta);
    }
  } catch (err) {
    resp.send({
      erro: err.message,
    });
  }
});

server.delete("/agendamento/:id", async (req, resp) => {
  try {
    const { id } = req.params;
    const resposta = await excluirconsulta(id);

    if (resposta != 1) {
      throw new Error("Agendamento não pode ser removido");
    }
    resp.status(204).send();
  } catch (err) {
    resp.status(404).send({
      erro: err.message,
    });
  }
});

server.put("/agendamento", async (req, resp) => {
  try {
    const agendamento = req.body;
    const { id } = req.params;

    if (!novoAgendamento.nome)
      throw new Error("Nome Do Paciente é obrigatorio!");

    if (!novoAgendamento.idade)
      throw new Error("Idade Do Paciente é obrigatorio!");

    if (!novoAgendamento.nasc)
      throw new Error("Data de nasc Do Paciente é obrigatorio!");

    if (!novoAgendamento.cpf)
      throw new Error("cpf Do Paciente é obrigatorio!");

    if (!novoAgendamento.rg) throw new Error("rg Do Paciente é obrigatorio!");

    if (!novoAgendamento.doutor)
      throw new Error(" nome do doutor é obrigatorio!");

    if (!novoAgendamento.servico) throw new Error(" servico é obrigatorio!");

    if (!novoAgendamento.agendamento)
      throw new Error("  agendamento é obrigatorio!");

    const resposta = await alterardadosdaconsulta(id, agendamento);
    if (resposta != 1) throw new Error("Agendamento não pode ser alterado");
    else resp.sendStatus(204);
  } catch (err) {
    resp.send({
      erro: err.message,
    });
  }
});

export default server;