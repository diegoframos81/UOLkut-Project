import orkutIcon from '../assets/orkutIcon.svg';
import ImageLogin from '../assets/imageform.svg'
import Bg from '../assets/bg (2).svg'
import { ReactElement } from 'react';

export const Login: React.FC = (): ReactElement => {

    
    return (
        <>
        
            <main >
                <img src={ImageLogin} alt="Orkut" />
                <div>
                    <img src={Bg} alt="Background" />
                </div>
                <p>Conecta-se aos seus amigos e familiares <br />
                    usando recados e mensagens instantâneas</p>
                

                <form>
                
                    <img src={orkutIcon} alt="ps_orkut" />
                        <h2>Acesse o Orkut</h2>


                    <label htmlFor="email"></label>
                    <input type="text" placeholder="E-mail" id="email" />

                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Senha" id="password" />

                    <div>
                        <input type="checkbox" name="remember-password" />
                        <label htmlFor="remember-password">Lembrar minha senha</label>
                    </div>

                    <button>Entrar na conta</button>
                    <button>Criar uma conta</button>
                    <a >Esqueci a minha senha</a>
                </form>
            </main>
            
            

            
        </>
    );
};