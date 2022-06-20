import { login } from '../../api/usuarioApi.js'; 
import { Navigate, useNavigate } from 'react-router-dom';

import storage from 'local-storage';
import LoadingBar from 'react-top-loading-bar';
import { useState, useRef, useEffect } from 'react';
import './index.scss';


export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    if(storage('usuario-logado')){
      navigate('/admin/home');
    }
  });


  async function entrarClick() {
    ref.current.continuousStart();

    try {
      setCarregando(true)
      const resposta = await login(email, senha) 
      storage('usuario-logado', resposta)
      setTimeout(() => {
        navigate('/admin/home');
      }, 2000)

    } catch (err) {
      ref.current.complete();
      setCarregando(false)
      if (err.response.status === 401) {
        setErro(err.response.data.erro);
      }
    }

  }

  function voltarClick() {
    navigate('/')
  }

  
    return (
      <main className='page-login'>
        <LoadingBar color='#287D01' ref={ref} />
  
        <section className='faixa-login'>
          <div className='logomarca'>
           <div className="logo">
              <img src="/images/odontotooths 1.svg" alt="logo" />
            </div>
            <div className="voltar">
              <a onClick={voltarClick}>Voltar</a>
            </div>
          </div>
          <div className="destacar-login">
            <div className="conteudo">
  
              <div>
                <div className='textos'>
                  <img src="/images/o-email 1.svg" alt="email" width='25' />
                  <h2 class="subtitulo"> E-mail</h2>
                </div>
                <div>
                  <input class="tag-input" type="text" placeholder='ex: exemplo@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
                </div>
              </div>
  
              <div>
                <div className='textos'>
                  <img src="/images/cadeado 1.svg" alt="cadeado" width='25' />
                  <h2 class="subtitulo">Senha</h2>
                </div>
                <div>
                  <input class="tag-input" type="password" placeholder='***' value={senha} onChange={e => setSenha(e.target.value)} />
                </div>
              </div>
  
  
              <button className="botao" onClick={entrarClick} disabled={carregando}>Entrar</button>
  
              <div className='erro'>
                {erro}
              </div>
            </div>
  
          </div>
        </section>
      </main>
    );
}