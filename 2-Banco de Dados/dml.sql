USE dentista_DB;

select * from tb_funcionario;
select * from tb_agendamento;




-- carga inicial usuário admin
INSERT INTO tb_funcionario (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');




-- CSU01:: efetuar login
select id_funcionario 	  id,
       nm_usuario		      nome,
       ds_email			      email
  from tb_usuario
  where ds_email 		= 'admin@admin.com.br'
  and ds_senha			= '1234';
   
   
    -- CSU02:: Agendar consulta
insert into tb_agendamento(nm_paciente, nm_idade, dt_nascimento,  ds_CPF,   ds_RG,  nm_doutor, ds_servico, dt_agendamento,  vl_agendamento,  ds_forma_pagamento, ds_data_pagamento )
values ('Maria de Lourdes Rodrigues','25','1996-05-02','475.185.458-07','12 345 678-9','Dra. Hana Lewis','Especialista em Periodontia','2022-05-06','500','Cartão de débito','2022-05-07');


-- CSU03:: excluir consulta
DELETE FROM tb_agendamento
      WHERE id_agendamento = 1;
      
      
-- CSU04:: pesquisar data da consulta
SELECT  id_agendamento		  'id',
	      nm_paciente  	      'nome',
        ds_CPF              'cpf',
        ds_servico     	    'servico'
  FROM tb_agendamento
  WHERE dt_agendamento    like '%a%';
  

  -- CSU05:: alterar dados da consulta
UPDATE tb_agendamento 
   SET nm_paciente   	 = 'Maria de Lourdes Rodrigues',
    ds_servico     	   ='Especialista em Periodontia',
	  dt_agendamento   	 = '2022-05-15',
    dt_agendamentoNovo = '2022-05-06'
 WHERE id_agendamento	 = 4;
