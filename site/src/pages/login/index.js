import { login } from '../../api/usuarioApi.js'; 
import { useNavigate } from 'react-router-dom';

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

  return (
    <main className='page-login'>
      <LoadingBar color='#287D01' ref={ref} />

      <section className='faixa-login'>
        <div className="logo">
          <img src="/images/odontotooths 1.svg" alt="logo" />
          <a className="voltar" href="../home">Voltar</a>
        </div>
        <div className="destacar-login">
          <div className="conteudo">
           


            <div className="txt-icones1">
            <img src="/images/o-email 1.svg" alt="email" width='30'/>
            <h2 class="subtitulo"> E-mail*</h2>
           <input class="tag-input1" type="text" placeholder='ex: exemplo@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="txt-icones2">
            <img src="/images/cadeado 1.svg" alt="cadeado" width='30' />
              <h2 class="subtitulo">Senha*</h2>
              <input class="tag-input2" type="password" placeholder='***' value={senha} onChange={e => setSenha(e.target.value)} />
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