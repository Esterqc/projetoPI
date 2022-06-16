CREATE DATABASE dentista_DB;

USE Dentista;

CREATE TABLE tb_funcionario(
	id_funcionario       INT PRIMARY KEY auto_increment,
			nm_usuario            varchar(20),
			ds_email              varchar(100),
			ds_senha              varchar(8)
);

CREATE TABLE tb_agendamento(
	        id_agendamento                 INT PRIMARY KEY AUTO_INCREMENT,
			nm_paciente                    varchar(200),  
            nm_idade                       int,
            dt_nascimento                  datetime,
            ds_CPF                         varchar(14),
            ds_RG                          varchar(13),
            nm_doutor                      varchar (100),
            ds_servico                     varchar(100),
            dt_agendamento                 datetime,
            vl_agendamento                 decimal(10,2),
            ds_forma_pagamento             varchar(100),
            ds_data_pagameto               varchar(100)
);