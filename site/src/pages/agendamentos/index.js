
import './index.scss'

import logo from '../../assets/images/logo.png';
import lupa from '../../assets/images/lupa.png';
import lapis from '../../assets/images/ferramenta-lapis.png';
import lixeira from '../../assets/images/lixeira.png';
import calendario from '../../assets/images/calendario.png';

export default function Index(){


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
                    <input type='text' placeholder='Digite a data da consulta' />
                    <img src={lupa} />
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