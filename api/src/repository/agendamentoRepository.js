import { con } from "./connection.js";

export async function InserirAgendamento(agendar) {
  const comando = `Insert into TB_Agendamento(NM_paciente, NR_idade, DT_nasc, DS_CPF, DS_RG, NM_doutor, DS_servico,DT_agendamento, VL_agendamento, DS_forma_pag, DS_data_pag)
            values (?,?,?,?,?,?,?,?,?,?,?)`;

  const [resposta] = await con.query(comando, [
    agendar.nome,
    agendar.idade,
    agendar.nascimento,
    agendar.cpf,
    agendar.rg,
    agendar.doutor,
    agendar.servico,
    agendar.datadoagendamento,
    agendar.valordoagendamento,
    agendar.formapag,
    agendar.datapag,
  ]);
  agendar.id = resposta.insertID;
  return agendar;
}

export async function listarTodasConsultas() {
  const comando = 
    `SELECT ID_agendamento    id,
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
    DT_agendamentoNovo         = ?
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
