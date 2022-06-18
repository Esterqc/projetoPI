import './index.scss'
import storage from 'local-storage'
import {cadastrarAgendamento} from '../../api/AgendamentoApi.js'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Index(){
    const[nome,setNome] =useState('');
    const [idade, setIdade] = useState('');
    const [data_de_nascimento, setData_de_nascimento] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [doutor, setDoutor] = useState('');

    const [serviços, setServiços] = useState('');
    const [data_e_hora, setData_e_hora] = useState('');
    const [ valor, setValor] = useState('');
    const [forma_de_pagamento, setForma_de_pagamento] = useState('');
    const [data_do_pagamento, setData_do_pagamento] = useState('');

    

    


    async function SalvarClick() {
        try{
            const usuario = storage('usuario-logado').id;
            const r = await cadastrarAgendamento(nome,idade,data_de_nascimento,cpf,rg,doutor,serviços,data_e_hora,valor,forma_de_pagamento,data_do_pagamento,usuario);

            toast('Agendamento cadastrado com sucesso!');
        } catch (err){
            toast.error(err.message)
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
                        <input class="nome" type="text" value={nome} onChange={e => setNome(e.target.value)}   />
                    </div>
                    <div className='caixa'>
                        <p>Qual a idade*</p>
                        <input class="idade" type="idade" value={idade} onChange={e => setIdade(e.target.value)}  />
                    </div>
                    <div className='caixa'>
                        <p>Data de nascimento*</p>
                        <input class="dt-conf" type="date" value={data_de_nascimento} onChange={e => setData_de_nascimento(e.target.value)}  />

                    </div>
                    <div className='caixa'>
                        <p>CPF*</p>
                        <input class="genero-CPF" type="text" value={cpf} onChange={e => setCpf(e.target.value)}   />
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
                            <input class="caixa" type="text" value={data_e_hora} onChange={e => setData_e_hora(e.target.value)} /> 
                        </div>
                        <div className='caixa'>
                            <p>Valor*</p>
                            <input class="caixa" type="text" value={valor} onChange={e => setValor(e.target.value)} /> 
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
                        <a href= ''>
                            <button className='botao'onClick={SalvarClick}>Salvar
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}