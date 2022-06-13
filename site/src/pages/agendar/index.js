import './index.scss';




export default function Agendar(){
    return(
        <main className='page-agendar'>
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
                        <input className='txt' type='text'></input>
                    </div>
                    <div className='caixa'>
                        <p>Qual a idade*</p>
                        <input className='txt' type='text'></input>
                    </div>
                    <div className='caixa'>
                        <p>Data de nascimento*</p>
                        <input className='txt' type='date'></input>
                    </div>
                    <div className='caixa'>
                        <p>CPF*</p>
                        <input className='txt' type='text'></input>
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
                            <input className='txt' type='datetime-local'></input>
                        </div>
                        <div className='caixa'>
                            <p>Valor*</p>
                            <input className='txt' type='text'></input>
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
                        <a href='../agendamentos'>
                            <button className='botao'>Salvar
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}