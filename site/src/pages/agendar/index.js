
import './index.scss'

import {inserirAgendamento, alterardadosdaconsulta } from '../../api/agendamentoApi.js'
import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'
// import { toast } from 'react-toastify'

export default function Index(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState('');
    const [nasc, setNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [doutor, setDoutor] = useState('Dra.Monica Araujo');
    const [servico, setServico] = useState('');
    const [dataAgendamento, setDataAgendamento] = useState('');
    const [valorAgendamento, setValorAgendamento] = useState('');
    const [forma_pag, setForma_pag] = useState('PIX');
    const [data_pag, setData_pag] = useState('Será realizado no dia da consulta');

    const [id, setId] = useState(0);
    const { idParam } = useParams();

    useEffect(() => { 
        if (idParam) {
            carregarConsulta()
        }
    }, [])

    async function carregarConsulta() {
        const resposta = await alterardadosdaconsulta(idParam);
        console.log(resposta);

        setNome(resposta.paciente);
        setIdade(resposta.idade);
        setNasc(resposta.nascimento);
        setCpf(resposta.cpf);
        setRg(resposta.rg);
        setDoutor(resposta.doutor);
        setServico(resposta.servico)
        setValorAgendamento(resposta.preco);
        setDataAgendamento(resposta.dataAgendamento);

        setId(resposta.Id);
    }

    async function SalvarClick() {
        try{
            const r = await inserirAgendamento(nome, idade, nasc, cpf, rg, doutor, servico, dataAgendamento, valorAgendamento, forma_pag, data_pag);
            
            alert('Agendamento cadastrado com sucesso!');
        } 
        catch(err){
            console.log(err);
            alert(err.response.data.erro)
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
                        <input className="txt" type="text" value={nome} onChange={e => setNome(e.target.value)}   />
                    </div>
                    <div className='caixa'>
                        <p>Qual a idade*</p>
                        <input className="txt" type="number" value={idade} onChange={e => setIdade(e.target.value)}  />
                    </div>
                    <div className='caixa'>
                        <p>Data de nascimento*</p>
                        <input className="txt" type="date" value={nasc} onChange={e => setNasc(e.target.value)}  />

                    </div>
                    <div className='caixa'>
                        <p>CPF*</p>
                        <input className="txt" type="text" value={cpf} onChange={e => setCpf(e.target.value)}   />
                    </div>
                    <div className='caixa'>
                        <p>RG*</p>
                        <input className='txt' type='text' value={rg} onChange={e => setRg(e.target.value)} />
                    </div>
                   
                    <div className='f2-doutor'>
                        <p>Doutor</p>
                    <select className='txt' value={doutor} onChange={(e) =>setDoutor(e.target.value)}>
                        <option>Dra.Monica Araujo</option>
                        <option>Dra. Hana Lewis</option>
                        <option>Dr.Yuri Ikar</option>
                        <option> Dr.Fernando Winson</option>
                     </select>
                        
                        <div className='caixa-txt'>
                            <p>Serviços*</p>
                            <input className='txt' type='text' value={servico} onChange={e => setServico(e.target.value)} />
                        </div>
                        <div className='caixa'>
                            <p>Data agendamento*</p>
                            <input className="txt" type="date" value={dataAgendamento} onChange={e => setDataAgendamento(e.target.value)} />
                        </div>
                        <div className='caixa'>
                            <p>Valor*</p>
                            <input className="txt" type="text" value={valorAgendamento} onChange={e => setValorAgendamento(e.target.value)} /> 
                        </div>
                    </div>
                 
                    <div className='f2-doutor'>
                        <p >Qual a forma de pagamento?</p>
                            <select value={forma_pag} onChange={(e) =>setForma_pag(e.target.value)}>
                            <option>PIX</option>
                            <option>Dinheiro</option>
                            <option>Cartão de débito</option>
                            <option>Cartão de crédito</option>
                        </select>
                        </div>
                    <div>
                        <p className='caixa-txt'>Pagamento:</p>
                        <div className='radio' name='dia'>
                        <select className='txt' value={data_pag} onChange={(e) =>setData_pag(e.target.value)}>
                            
                            <option>Será realizado no dia da consulta</option>
                            <option>Pagamento já foi realizado</option>
                            <option>Pagamento realizado em 50%</option>
                            </select>
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