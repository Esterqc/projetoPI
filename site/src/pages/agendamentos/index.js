
import './index.scss'
import { useEffect, useState} from 'react'

import logo from '../../assets/images/logo.png';
import lupa from '../../assets/images/lupa.png';
import lapis from '../../assets/images/ferramenta-lapis.png';
import lixeira from '../../assets/images/lixeira.png';
import calendario from '../../assets/images/calendario.png';

import { listarTodasConsultas, consultarData, removerConsulta } from '../../api/agendamentoApi'


export default function Index(){
    const [consultar, setConsultar] = useState([]);
    const [filtro, setFiltro] = useState('');
    
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
            <section className='faixa-principal'>
                    <div className='card'>
                        <div className='titulo-card' >
                            <h4> Consulta </h4>
                            <div className='img-cards'>
                                <img src={lapis} />
                                <img src={lixeira} />
                            </div>
                        </div>
                        
                        <div className='data-card'>
                            <img src={calendario} />

                            <p> dd/mm/aaaa</p>
                        </div>

                        <div className='descricao-card'>
                            <p> Maria de Loudes Rodrigues</p>
                            <p> Dra. Hanna Lewis</p>
                        </div>
                    </div>
                    
                    <div className='card'>
                        <div className='titulo-card' >
                            <h4> Consulta </h4>
                            <div className='img-cards'>
                                <img src={lapis} />
                                <img src={lixeira} />
                            </div>
                        </div>
                        
                        <div className='data-card'>
                            <img src={calendario} />

                            <p> dd/mm/aaaa</p>
                        </div>

                        <div className='descricao-card'>
                            <p> Maria de Loudes Rodrigues</p>
                            <p> Dra. Hanna Lewis</p>
                        </div>
                    </div>
            </section>

        </main>
    );
}