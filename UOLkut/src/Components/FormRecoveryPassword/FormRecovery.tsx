
import { Button } from '../Inputs/styleButtons'
import orkutIcon from "../../assets/orkutIcon.svg";
import { FormsRecovery } from './style';
import { useNavigate } from 'react-router-dom';

const FormRecovery = () => {
    const navigate = useNavigate();
    return (

        <FormsRecovery>
            <form>
                        <img src={orkutIcon} alt="ps_orkut" />
                        <h2>Recupere sua senha</h2>

                        <div className="contentEmail">
                        <input
                            type="email"
                            
                            placeholder="  "
                            id="input-email"
                            name="email"
                            
                            required
                        />
                        <label htmlFor="input-email" className={"id-email"}>
                            E-mail cadastrado
                        </label>
                        </div>

                        <Button $primary>
                            <input type="submit" className="submit" />
                                Enviar código
                        </Button>
                        <a>Lembrou sua Senha?</a>
                        <Button onClick={() => navigate("/")}>Entrar com as credenciais</Button>
                    </form>
                </FormsRecovery>
    )
    }

export default FormRecovery
