import './index.scss';




export default function Administrativo(){
    return(
        <main className='page-adm'>
            <section className='faixa-work'>
                <div className='work-logo'>
                    <img src='/images/odontotooths 1.svg' alt='' width='150'></img>
                    <a className='link' href='/'>Página inicial</a>
                </div>
                <div className='work-elements'>
                    <p>Qual o serviço?</p>
                    <div className='work-button'>
                        <a href='/admin/agendar'>
                            <button>
                     
                                Agendar consulta
                            </button>
                        </a>
                        <a href='/admin/agendamento'>
                            <button>
                                Consultas
                            </button>
                        </a>
                        <a href='/admin/agendamento'>
                            <button>
                                Pesquisar consultas
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}