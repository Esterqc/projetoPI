import { con } from "./connection.js";

export async function inserirAgendamento(agendar) {
  const comando = `Insert into tb_agendamento(nm_paciente, nm_idade, dt_nascimento,  ds_CPF,   ds_RG,  nm_doutor, ds_servico, dt_agendamento,  vl_agendamento,  ds_forma_pagamento, ds_data_pagameto)
            values (?,?,?,?,?,?,?,?,?,?,?)`;

  const [resposta] = await con.query(comando, [
    agendar.nome,
    agendar.idade,
    agendar.nasc,
    agendar.cpf,
    agendar.rg,
    agendar.doutor,
    agendar.servico,
    agendar.dataAgendamento,
    agendar.valorAgendamento,
    agendar.forma_pag,
    agendar.data_pag,
  ]);
  agendar.id = resposta.insertID;
  return agendar;
}

export async function listarTodasConsultas() {
  const comando = 
    `SELECT id_agendamento          id,
            nm_paciente             paciente,
            nm_idade                idade,
            dt_nascimento           nascimento,
            ds_CPF                  cpf,
            ds_RG                   rg,
            nm_doutor               doutor,
            ds_servico              servico,
            dt_agendamento          agendamento,
            vl_agendamento          preco,
            ds_forma_pagamento      formaPagamento,
            ds_data_pagameto       dataPagamento
       FROM tb_agendamento    `;

  const [linhas] = await con.query(comando);
  return linhas;
}

export async function consultarData(data) {
  const comando = 
    `SELECT  ID_agendamento    id,
              NM_paciente       paciente,
              NR_idade          idade,
              DT_nasc           nascimento,
              DS_CPF            cpf,
              DS_RG             rg,
              NM_doutor         doutor,
              DS_servico        servico,
              DT_agendamento    data,
              VL_agendamento    preco,
              DS_forma_pag      formaPagamento,
              DS_data_pag       dataPagamento
      FROM TB_agendamento
    WHERE DT_agendamento	like ?`;

  const [linhas] = await con.query(comando, [ `%${data}%` ]);
  return linhas;
}

export async function excluirconsulta(id) {
  const comando = `
    DELETE FROM tb_agendamento 
    WHERE id_agendamento = ?;
    `;

  const [resposta] = await con.query(comando, [id]);
  return resposta.affectedRows;
}

export async function alterardadosdaconsulta(id, agendamento) {
  const comando = `
    UPDATE TB_agendamento 
    SET NM_paciente   	   = ?,
    DS_servico     	       = ?,
	  DT_agendamento   	     = ?,
    DT_agendamentoNovo     = ?
    WHERE ID_agendamento	 = ?;
    `;
  const [resposta] = await con.query(comando, [
    agendamento.nome,
    agendamento.servico,
    agendamento.agendamento,
    agendamento.agendamentoNovo,
    id,
  ]);
  return resposta.affectedRows;
}
