import orkutIcon from '../../assets/orkutIcon.svg';
import { FormsLogin } from './style';



const FormLogin = () => {
    return (
        
        <FormsLogin>
            <form>
                        
                <img src={orkutIcon} alt="ps_orkut" />
                    <h2>Acesse o Orkut</h2>


                <label htmlFor="email"></label>
                <input type="text" placeholder="E-mail" id="email" />

                <label htmlFor="password"></label>
                <input type="password" placeholder="Senha" id="password" />

                
                    <input className='passwordCheck' type="checkbox" name="remember-password" />
                    <label htmlFor="remember-password">Lembrar minha senha</label>
                

                <button>Entrar na conta</button>
                <button>Criar uma conta</button>
                <a >Esqueci a minha senha</a>

            </form>
        </FormsLogin>
    
    )
}

export default FormLogin
                