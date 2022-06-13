CREATE DATABASE Dentista;

USE Dentista;

CREATE TABLE TB_Funcionário(
	ID_funcionario       INT PRIMARY KEY AUTO_INCREMENT,
			Nm_usuario            Varchar(20),
			DS_email              Varchar(100),
			Ds_senha              Varchar(8)
);

CREATE TABLE TB_Agendamento(
	ID_agendamento      INT PRIMARY KEY AUTO_INCREMENT,
			NM_paciente                    varchar(200),  
            NR_idade                          int,
            DT_nasc                          datetime,
            DS_CPF                           varchar(14),
            DS_RG                            varchar(13),
            NM_doutor                        varchar (100),
            DS_servico                        varchar(100),
            DT_agendamento                     datetime,
            VL_agendamento                      decimal(10,2),
            DS_forma_pag                        varchar(100),
            DS_data_pag                         varchar(100)
);