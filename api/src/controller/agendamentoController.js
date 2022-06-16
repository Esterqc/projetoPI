import {
  inserirAgendamento,
  consultarData,
  excluirconsulta,
  alterardadosdaconsulta,
  listarTodasConsultas,
} from "../repository/agendamentoRepository.js";

import { Router } from "express";
const server = Router();


server.post("/agendamento", async (req, resp) => {
  try {
    const novoAgendamento = req.body;

    if (!novoAgendamento.nome)
      throw new Error("Nome do paciente é obrigatorio!");

    if (!novoAgendamento.idade)
      throw new Error("Idade do paciente é obrigatorio!");

    if (!novoAgendamento.nasc)
      throw new Error("Data de nascimento do paciente é obrigatorio!");

    if (!novoAgendamento.cpf)
      throw new Error("CPF do paciente é obrigatorio!");

    if (!novoAgendamento.rg) throw new Error("RG do paciente é obrigatorio!");

    if (!novoAgendamento.doutor)
      throw new Error("Nome do doutor não válido!");

    if (!novoAgendamento.servico) throw new Error("Servico é obrigatorio!");

    if (!novoAgendamento.dataAgendamento)
      throw new Error("Data do agendamento é obrigatorio!");

    if (!novoAgendamento.valorAgendamento)
    throw new Error("Data do agendamento é obrigatorio!");

    const Agendarconsulta = await inserirAgendamento(novoAgendamento);
    resp.send(Agendarconsulta);
  } catch (err) {
    resp.status(400).send({
      erro: err.message,
    });
  }
});

server.get('/consultas', async (req, resp) => {
  try {
    const resposta = await listarTodasConsultas();
    resp.send(resposta);
  }catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

// CONSULTAR POR DATA

server.get('/consultar/busca', async (req, resp) => {
  try {
    
      const data  = req.query.data;
      const resposta = await consultarData(data);
      console.log(resposta)
      if(!resposta || data <= 0){
        throw new Error('Digite uma data Válida!')
      }
      else if(resposta.length == 0){
        resp.send({
          ops: "Não foi achada nenhuma consulta com essa data!"
        });
      }
      else
        resp.send(resposta);
  } catch (err) {
    resp.status(400).send({
      erro: err.message
    })
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

server.put("/alterardados/:id", async (req, resp) => {
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
    if (resposta != 1)
      throw new Error("Agendamento não pode ser alterado");

    else
      resp.sendStatus(204);

  } catch (err) {
    resp.send({
      erro: err.message,
    });
  }
});

export default server;