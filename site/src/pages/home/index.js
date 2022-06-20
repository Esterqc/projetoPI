import './index.scss';

import { useNavigate } from 'react-router-dom';


export default function Home(){

    const navigate = useNavigate();

    function navegarClick(){
        navigate('/admin')
    }

    return(
        <main className='page-home'>
            <div className='faixa-1'>
               
               <img src='/images/odontotooths 1.svg' className='logo'></img>
             <a className='login' onClick={navegarClick}>Login</a>
                   
            </div>

            <section className='fundo'>
                <div>
                    <div className='texto1'>
                        <h1>Mudando sorrisos, renovando vidas</h1>
                    </div>
                </div>
            </section>

            <section className='faixa-2'>
                <div className='titulo'>
                    <h2>Nossos serviços</h2>
                </div>
                <div className='cards-page'>
                    <div className='cards-1'>
                        <div>
                            <div className='card'>
                                <img src='/images/clareamento 2.svg' alt=''></img>
                                <button>Clareamento dental</button>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='/images/siso 2.svg' alt=''></img>
                                <button >Dentes do siso</button>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src="/images/gegiva 2.svg " alt=" "/>
                                <button>Tratamento de gengiva</button>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='/images/canal 2.svg' alt=''></img>
                                <button >Tratamento de canal do dente</button>
                            </div>
                        </div>
                    </div>
                    <div className='cards-2'>
                        <div>
                            <div className='card'>
                                <img src='/images/estetica 2.svg' alt=''></img>
                                <button>Odontologia estética</button>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='/images/implantes-1 2.svg' alt=''></img>
                                <button>Implante dentário</button>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='/images/preventivos-1 2.svg' alt=''></img>
                                <button>Odontologia preventva</button>
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <img src='/images/restauradora 2.svg' alt=''></img>
                                <button>Perda de dentes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='faixa-3'>
                <div className='sobrenos'>
                    <h1 className='f3-titulo'>Sobre Nós</h1>
                    <h2 className='f3-texto'>A ODONTO TOOTH's é uma clínica odontológica que atua desde 2010 e conta com ótimas instalações no bairro de Alphaville, agradável recepção, consultórios modernos e confortáveis. Em nossa clínica o ambiente é acolhedor para que se sintam em casa. Utilizamos materiais e equipamentos da mais alta qualidade,associados a conceitos técnicos atuais e estritos procedimentos de biosssegurança. Nossa equipe é treinada para que sua experiência seja a mais satisfatória possível e assim consigamos alcançar a excelência em tudo que nos propomos a fazer pela sua saúde e seu bem estar.</h2>
                </div>
            </section>

            <section className='faixa-4'>
                <div className='f4-titulo'>Profissionais</div>
                <div className='f4-images'>
                    <div className='f4-img'>
                        <img className='f4-img-1' src='/images/dentista1.svg' alt=''></img>
                        <p>Dra. Mônica Araujo<br/>Especialista em Dentistica</p>
                    </div>
                    <div className="f4-img">
                    <img className="f4-imgs" src="/images/dentista2.svg" alt=''/>
                    <p>Dra. Hana Lewis<br/>Especialista em Periodontia</p>
                </div>
                    <div className='f4-img'>
                        <img className='f4-imgs' src='/images/dentista3.svg' alt=''></img>
                        <p>Dr. Yuri Ikari<br/>Especialista em implantodontia</p>
                    </div>
                    <div className='f4-img'>
                        <img className='f4-imgs' src='/images/dentista4.svg' alt=''></img>
                        <p>Dr. Fernando Wilson<br/>Especialista em Traumatologia</p>
                    </div>
                </div>
            </section>

            <section className='faixa-5'>
                <div className='f5-fundo'>
                    <div className='f5-texto'>
                        <p>Ficamos localizados
                        
                        </p>
                        <br/>
                        <h3 className='f5-t'>Rua Fernando Diaz, 27 - Alphaville, São Paulo - SP CEP: 55909-287</h3>
                    </div>
                    <div className='f5-images'>
                        <img className='f5-logo' src='/images/odontotooths 1.svg' alt=''></img>
                        <br/><br/>
                        <img className='icon' src='/images/instagram (2) 2.svg' alt='instagram' width='25'/>
                        <img className='f5-icon' src='/images/telefone 1.svg' alt='telefone' width='25'/>
                        <img className='f5-icon' src='/images/twitter (2) 2.svg' alt='twitter' width='25'/>
                        <img className='f5-icon' src='/images/whatsapp (1) 2.svg' alt='whatsapp' width='25'/>
                        <p>Agende uma avaliação</p>
                    </div>
                    <div className='f5-texto-3'>
                        <p>Atendimento</p>
                        <p className='f5-texto-2'> 
                        Seg a Sex 8:00 - 19:00
                        Sáb 8:00 - 14:00
                        </p>
                     <p>Venha conhecer nossos serviços</p>
                    </div>
                </div>
            </section>
        </main>
    );
}      