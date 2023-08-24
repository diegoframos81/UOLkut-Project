import orkutIcon from '../../assets/orkutIcon.svg';
import { CheckPassword } from '../Inputs/sytleCheck';
import { FormsLogin } from './style';
import { Button } from '../Inputs/styleButtons';


const FormLogin = () => {
    return (
        
        <FormsLogin>
            <form>
                        
                <img src={orkutIcon} alt="ps_orkut" />
                    <h2>Acesse o Orkut</h2>
                <div className='contentEmail'>
                    <input type="email" placeholder="  Email" id="id-email" name="email" />
                    <label htmlFor="floatingInput" id="id-email"></label>
                </div>

                <div className='contentPassword'>
                    <input type="password" placeholder="  Password" id="id-password" autoComplete="off"/>
                    <label htmlFor="floatingInput" id='id-password' ></label>
                </div>

                <CheckPassword>
                        <div className='CheckPassword'>
                            <input className='passwordCheck' type="checkbox" name="remember-password" />
                            <label htmlFor="remember-password">Lembrar minha senha</label>
                        </div>
                </CheckPassword>
                    <Button $primary>Entrar na conta</Button>
                    <Button>Criar uma conta</Button>
                    <a>Esqueci a minha senha</a>

            </form>
        </FormsLogin>
    
    )
}

export default FormLogin
                