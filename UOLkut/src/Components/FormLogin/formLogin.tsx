import orkutIcon from '../../assets/orkutIcon.svg';
import { CheckPassword } from '../Inputs/sytleCheck';
import { FormsLogin } from './style';
import { Button } from '../Inputs/styleButtons';
import { useNavigate } from 'react-router-dom';


const FormLogin = () => {
    const navigate = useNavigate();
    return (
        
        <FormsLogin>
            <form>
                        
                <img src={orkutIcon} alt="ps_orkut" />
                    <h2>Acesse o Orkut</h2>
                    
                        <div className='contentEmail'>
                            <input type="email" placeholder="  " id="input-email" name="email" />
                            <label htmlFor="input-email" className={'id-email'}>E-mail</label>
                        </div>

                        <div className='contentPassword'>
                            <input type="password" placeholder="  " id="input-password" autoComplete="off"/>
                            <label htmlFor="input-password" className={'id-password'}>Password</label>
                        </div>
                    
                <CheckPassword>
                        <div className='CheckPassword'>
                            <input className='passwordCheck' type="checkbox" name="remember-password" />
                            <label htmlFor="remember-password">Lembrar minha senha</label>
                        </div>
                </CheckPassword>
                
                    <Button $primary onClick={() =>navigate("/Profile")}>Entrar na conta</Button>
                    <Button onClick={() =>navigate("/Register")}>Criar uma conta</Button>
                    <a>Esqueci a minha senha</a>

            </form>
        </FormsLogin>
    
    )
}

export default FormLogin
                