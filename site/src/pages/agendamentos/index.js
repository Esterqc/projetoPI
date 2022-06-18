
import './index.scss'

export default function Index(){


    return(
        <main className='page-consultar'>
            <section className='cabecalho'>
                <div className='img-cabecalho'>
                    <img src='' />
                </div>
                <div className='titulo-cabecalho'>
                    <h3>
                        Agendamentos
                    </h3>
                </div>
                <div className='barraPesquisa-cabecalho'>
                    <input type='text' placeholder='Digite a data da consulta' />
                    <img src='' />
                </div>
            </section>
            <section className='faixa-principal'>
                    <div className='card'>
                        <div className='titulo-card' >
                            <h4> Consulta </h4>

                            <img src='' />
                            <img src='' />
                        </div>
                        
                        <div className='data-card'>
                            <img src='' />

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