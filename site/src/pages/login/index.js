import { login } from '../../api/usuarioApi'
import { useNavigate } from 'react-router-dom'

import storage from 'local-storage'
import LoadingBar from 'react-top-loading-bar'
import { useState, useRef } from 'react'
import './index.scss'


export default function Index() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const navigate = useNavigate();
  const ref = useRef();


  async function entrarClick() {
      ref.current.continuousStart();
      setCarregando(true);

      try { 
          const resposta = await login(email, senha);
          storage('usuario-logado', resposta);

          setTimeout(() => {
            navigate('/admin');
          }, 3000);
          
      } catch (err) {
        ref.current.complete(); 
        setCarregando(false);
        if (err.response.status === 401) {
          setErro(err.response.data.erro);
        }
      }

  }

  return (
    <main className='page-login'>
       <LoadingBar color='#2BC8A2' ref={ref} />

      <section className='faixa-login'>
        <div className="logo">
          <img src="/images/odontotooths 1.svg" alt="logo" />
          <a className="voltar" href="../home">Voltar</a>
        </div>
        <div className="destacar-login">
          <div className="conteudo">
            <div className="txt-icones">
              <p>Seja bem-vindo</p>
            </div>
            

            <div>
                <h2 class="subtitulo"> E-mail*</h2> 
                <input class="tag-input" type="text" name="email"  value={email} onChange={e => setEmail(e.target.value)} />
                <img src="/images/o-email 1.svg" alt="email" width='30'/>
            </div>

            <div>
                <h2 class="subtitulo">Senha*</h2>
               
                <input class="tag-input" type="password" name="senha"  value={senha} onChange={e => setSenha(e.target.value)}/>
                <img src="/images/cadeado 1.svg" alt="cadeado" width='30'/>
            </div>
      
            <a href="/admin/home">
              <button className="botao" onClick={entrarClick} disabled={carregando}>Entrar</button>
            </a>
            <div className='erro'>
                {erro}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}