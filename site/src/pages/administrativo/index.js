

import './index.scss';
import storage from 'local-storage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Administrativo(){
    const navigate = useNavigate();

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/admin')
        }
    }, [])
    
    function sairClick(){
        storage.remove('usuario-logado')
    };

    
    return(
        <main className='page-adm'>
            <section className='faixa-work'>
                <div className='work-logo'>
                    <img src='/images/odontotooths 1.svg' alt='' width='150'></img>
                    <div className='link' href='/admin/home' onClick={sairClick}> Sair </div>
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
                    </div>
                </div>
            </section>
        </main>
    );
}