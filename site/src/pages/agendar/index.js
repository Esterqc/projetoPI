
import './index.scss'

import {inserirAgendamento} from '../../api/agendamentoApi.js'
import { useState } from 'react'


export default function Index(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [nasc, setNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [doutor, setDoutor] = useState('');
    const [servico, setServico] = useState('');
    const [dataAgendamento, setDataAgendamento] = useState('');
    const [valorAgendamento, setValorAgendamento] = useState('');
    const [forma_pag, setForma_pag] = useState('');
    const [data_pag, setData_pag] = useState('');


    async function SalvarClick() {
        try{
            const r = await inserirAgendamento(nome, idade, nasc, cpf, rg, doutor, servico, dataAgendamento, valorAgendamento, forma_pag, data_pag);
            
            alert('Agendamento cadastrado com sucesso!');
        } 
        catch(err){
            
            alert(err.message)
        }
    }

    return(
        <main className='page-agendar'>
            
            <nav className='faixa-1'>
                <div className='texto-1'>
                <a href='../administrativo'>
                    <img className='logo' src='/images/odontotooths 1.svg' alt='' />
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
                        <input className="idade" type="number" value={idade} onChange={e => setIdade(e.target.value)}  />
                    </div>
                    <div className='caixa'>
                        <p>Data de nascimento*</p>
                        <input className="dt-conf" type="date" value={nasc} onChange={e => setNasc(e.target.value)}  />

                    </div>
                    <div className='caixa'>
                        <p>CPF*</p>
                        <input className="genero-CPF" type="text" value={cpf} onChange={e => setCpf(e.target.value)}   />
                    </div>
                    <div className='caixa'>
                        <p>RG*</p>
                        <input className='txt' type='text' value={rg} onChange={e => setRg(e.target.value)} />
                    </div>
                    <div className='f2-doutor'>
                        <h3 className='caixa-txt'>Doutor</h3>
                        <div className='radio'>
                            <input type='radio' name='Doutor' checked={doutor} onChange={e => setDoutor(e.target.checked)} />
                            <p>Dra. Mônica Araujo</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Doutor' checked={doutor} onChange={e => setDoutor(e.target.checked)} />
                            <p>Dra. Hana Lewis</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Doutor' checked={doutor} onChange={e => setDoutor(e.target.checked)} />
                            <p>Dr. Yuri Ikari</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Doutor' checked={doutor} onChange={e => setDoutor(e.target.checked)} />
                            <p>Dr. Fernando Winson</p>
                        </div>
                    </div>
                    <div>
                        <div className='caixa-txt'>
                            <p>Serviços*</p>
                            <input className='txt' type='text' value={servico} onChange={e => setServico(e.target.value)} />
                        </div>
                        <div className='caixa'>
                            <p>Data agendamento*</p>
                            <input className="dt-conf" type="date" value={dataAgendamento} onChange={e => setDataAgendamento(e.target.value)} />
                        </div>
                        <div className='caixa'>
                            <p>Valor*</p>
                            <input className="caixa" type="text" value={valorAgendamento} onChange={e => setValorAgendamento(e.target.value)} /> 
                        </div>
                    </div>
                    <div>
                        <p className='caixa-txt'>Qual a forma de pagamento?</p>
                        <div className='radio'>
                            <input type='radio' name='Pix' checked={forma_pag} onChange={e => setForma_pag(e.target.checked)} />
                            <p>PIX</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Dinheiro' checked={forma_pag} onChange={e => setForma_pag(e.target.checked)} />
                            <p>Dinheiro</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Débito' checked={forma_pag} onChange={e => setForma_pag(e.target.checked)} />
                            <p>Cartão de débito</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='Crédito' checked={forma_pag} onChange={e => setForma_pag(e.target.checked)} />
                            <p>Cartão de crédito</p>
                        </div>
                    </div>
                    <div>
                        <p className='caixa-txt'>Data do pagamento</p>
                        <div className='radio' name='dia'>
                            <input type='radio' name='dia' checked={data_pag} onChange={e => setData_pag(e.target.checked)} />
                            <p>Será realizado no dia da consulta</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='realizado' checked={data_pag} onChange={e => setData_pag(e.target.checked)} />
                            <p>Pagamento já foi realizado</p>
                        </div>
                        <div className='radio'>
                            <input type='radio' name='metade' checked={data_pag} onChange={e => setData_pag(e.target.checked)} />
                            <p>Pagamento realizado em 50%</p>
                        </div>
                    </div>
                    <div className='f2-botao'>
                        <button className='botao'onClick={SalvarClick}> Salvar </button>
                    </div>
                </div>
            </section>
        </main>
    );
}