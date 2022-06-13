import './index.scss';




export default function Administrativo(){
    return(
        <main className='page-adm'>
            <section className='faixa-work'>
                <div className='work-logo'>
                    <img src='/images/odontotooths 1.svg' alt='' width='150'></img>
                    <a className='link' href='../home'>Página inicial</a>
                </div>
                <div className='work-elements'>
                    <p>Qual o serviço?</p>
                    <div className='work-button'>
                        <a href='../agendar'>
                            <button>
                                Agendar consulta
                            </button>
                        </a>
                        <a href='../agendamentos'>
                            <button>
                                Consultas
                            </button>
                        </a>
                        <a href='../agendamentos'>
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