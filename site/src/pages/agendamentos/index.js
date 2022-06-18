import './index.scss'
import storage from 'local-storage'
import {inserirAgendamento} from '../../api/agendamentoApi.js'

import { ToastContainer, toast } from 'react-toast'

import { useState } from 'react'



export default function Index(){
    const[nome,setNome] =useState('');
    const [idade, setIdade] = useState('');
    const [nasc, setData_de_nascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [doutor, setDoutor] = useState('');

    const [servicos, setServicos] = useState('');
    const [dataAgendamento, setData_e_hora] = useState('');
    const [ valor, setValor] = useState('');
    const [forma_pag, setForma_de_pagamento] = useState('');
    const [data_pag, setData_do_pagamento] = useState('');

    

    


    async function SalvarClick() {
        try{
            const usuario = storage('usuario-logado').id;
            const r = await inserirAgendamento(nome,idade,nasc,cpf,rg,doutor,servicos,dataAgendamento,valor,forma_pag,data_pag,usuario);

            toast('Agendamento cadastrado com sucesso!');
        } catch (err){
            toast.error(err.message)
            console.log(err.message)
        }
    }

    return(
        <main className='page-agendar'>
            <ToastContainer />
            <nav className='faixa-1'>
                <div className='texto-1'>
                <a href='../administrativo'>
                    <img className='logo' src='/images/odontotooths 1.svg' alt=''></img>
                </a>
                <p>Documentação</p>
                </div>
            </nav>

            <section className='faixa-2'>
                <div>
                    <h1>Agendar consulta</h1>
                    <div>
                        <p>Nome do paciente*</p>
                        <input className="nome" type="text" value={nome} onChange={e => setNome(e.target.value)}   />
                    </div>
                    <div className='caixa'>
                        <p>Qual a idade*</p>
                        <input className="idade" type="idade" value={idade} onChange={e => setIdade(e.target.value)}  />
                    </div>
                    <div className='caixa'>
                        <p>Data de nascimento*</p>
                        <input className="dt-conf" type="date" value={nasc} onChange={e => setData_de_nascimento(e.target.value)}  />

                    </div>
                    <div className='caixa'>
                        <p>CPF*</p>
                        <input className="genero-CPF" type="text" value={cpf} onChange={e => setCpf(e.target.value)}   />
                    </div>
                    <div className='caixa'>
                        <p>RG*</p>
                        <input className='txt' type='text'></input>
                    </div>
                    <div className='f2-doutor'>
                        <h3 className='caixa-txt'>Doutor</h3>
                        <div className='radio'>
                            <input type='radio' name='Doutor' value='Dra.Mônica Araujo'/>Dra. Mônica Araujo
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Doutor'/>Dra. Hana Lewis
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Doutor'/>Dr. Yuri Ikari
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Doutor'/>Dr. Fernando Winson
                        </div>
                    </div>
                    <div>
                        <div className='caixa-txt'>
                            <p>Serviços*</p>
                            <input className='txt' type='text'></input>
                        </div>
                        <div className='caixa'>
                            <p>Data e hora*</p>
                            <input className="caixa" type="text" value={dataAgendamento} onChange={e => setData_e_hora(e.target.value)} /> 
                        </div>
                        <div className='caixa'>
                            <p>Valor*</p>
                            <input className="caixa" type="text" value={valor} onChange={e => setValor(e.target.value)} /> 
                        </div>
                    </div>
                    <div>
                        <p className='caixa-txt'>Qual a forma de pagamento?</p>
                        <div className='radio'>
                            
                            <input type='radio' name='Pix'></input>Pix
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Dinheiro'></input>Dinheiro
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Débito'></input>Cartão de débito
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Crédito'></input>Cartão de crédito
                        </div>
                    </div>
                    <div>
                        <p className='caixa-txt'>Data do pagamento</p>
                        <div className='radio' name='dia'>
                            <input type='radio' name='dia'></input>Será realizado no dia da consulta
                        </div>
                        <div className='radio'>
                            <input type='radio' name='realizado'></input>Pagamneto já foi realizado
                        </div>
                        <div className='radio'>
                            <input type='radio' name='metade'></input>Pagamento realizado em 50
                        </div>
                    </div>
                    <div className='f2-botao'>
                        
                            <button className='botao'onClick={SalvarClick}>Salvar
                            </button>
                        
                    </div>
                </div>
            </section>
        </main>
    );
}