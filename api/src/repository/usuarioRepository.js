import { con } from "./connection.js";

export async function login(email, senha) {
  console.log(email)
  console.log(senha)
  const comando = `
    select ID_funcionario 	id,
           nm_usuario	      nome,
           ds_email		      email
      from tb_funcionario
     where ds_email		      = ?
       and ds_senha		      = ?`;

  const [linhas] = await con.query(comando, [email, senha]);
  return linhas[0];
}
