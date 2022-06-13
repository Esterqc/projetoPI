SE Dentista;

select * from TB_funcionário;
select * from TB_Agendamento;




-- carga inicial usuário admin
INSERT INTO TB_funcionário (nm_usuario, ds_email, ds_senha)
     VALUES ('admin', 'admin@admin.com.br', '1234');




-- CSU01:: efetuar login
select ID_funcionário 	id,
       nm_usuario		nome,
       ds_email			email
  from tb_usuario
 where ds_email 		= 'admin@admin.com.br'
   and ds_senha			= '1234';
   
   
    -- CSU02:: Agendar consulta
insert into TB_Agendamento(NM_paciente   ,  NR_idade ,  DT_nasc  , DS_CPF ,   DS_RG  ,  NM_doutor,   DS_servico,DT_agendamento,  VL_agendamento,  DS_forma_pag, DS_data_pag )
values ('Maria de Lourdes Rodrigues','25','1996-05-02','475.185.458-07','12 345 678-9','Dra. Hana Lewis','Especialista em Periodontia','2022-05-06','500','Cartão de débito','2022-05-07');

-- CSU03:: excluir consulta
DELETE FROM TB_Agendamento
      WHERE ID_agendamento = 1;
      
      
-- CSU04:: pesquisar data da consulta
SELECT  ID_agendamento		'id',
	   NM_paciente  	'nome',
        DS_CPF          'cpf',
        DS_servico     	'servico'
  FROM TB_agendamento
  WHERE DT_agendamento	=  '2022-05-06';
  
  -- CSU05:: alterar dados da consulta
UPDATE TB_agendamento 
   SET NM_paciente   	 = 'Maria de Lourdes Rodrigues',
     DS_servico     	='Especialista em Periodontia',
	DT_agendamento   	= '2022-05-15',
     DT_agendamento      = '2022-05-06'
 WHERE ID_agendamento	 = 4;
 
  
  




