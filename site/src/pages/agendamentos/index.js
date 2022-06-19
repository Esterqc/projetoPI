import './index.scss'

import logo from '../../assets/images/logo.png';
import lupa from '../../assets/images/lupa.png';
import lapis from '../../assets/images/ferramenta-lapis.png';
import lixeira from '../../assets/images/lixeira.png';
import calendario from '../../assets/images/calendario.png';

import { listarTodasConsultas, consultarData, removerConsulta } from '../../api/agendamentoApi'

import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toast'
import { useEffect, useState} from 'react'  

export default function Index(){
    const [consultar, setConsultar] = useState([]);
    const [filtro, setFiltro] = useState('');
    

    async function removerConsultaClick (id, nome) {

        confirmAlert({
            title: 'Remover Consulta',
            message: `Deseja remover a consulta ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await removerConsulta(id, nome);
                        if (filtro === '')
                            carregarTodasConsultas();
                        else
                            filtrar();
                        toast.dark('Consulta removida!');
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
         
    }

    async function filtrar() {
        const resp = await consultarData(filtro);
        setConsultar(resp); 
    }

    async function carregarTodasConsultas() {
        const resp = await listarTodasConsultas();
        setConsultar(resp);
    }


    useEffect(() => {
        carregarTodasConsultas()
    })


    return(
        <main className='page-consultar'>
            <section className='cabecalho'>
                <div className='img-cabecalho'>
                    <img src={logo} />
                </div>
                <div className='titulo-cabecalho'>
                    <h3>
                        Agendamentos
                    </h3>
                </div>
                <div className='barraPesquisa-cabecalho'>
                    <input type='text' placeholder='Digite a data da consulta' value={filtro} onChange={e => setFiltro(e.target.value)} />
                    <img src={lupa} onClick={filtrar}/>
                </div>
            </section>
            
            {consultar.map(item => 
                
                <section className='faixa-principal'>
                    
                    <div className='card'>
                        <div className='titulo-card' >
                            <h4> Consulta </h4>
                            <div className='img-cards'>
                                <img src={lapis} />
                                <img src={lixeira} onClick={() => removerConsultaClick(item.id, item.paciente)} />
                            </div>
                        </div>
                        
                        <div className='data-card'>

                            <img src={calendario} />

                            <p> {item.agendamento.substr(0, 10)}</p>
                        </div>
                        <div className='descricao-card'>
                            <p>Nome: {item.paciente} </p>
                            <p>Doutor(a): {item.doutor} </p>
                        </div>
                    </div>
                </section>   
            )}
        </main>
    );
}