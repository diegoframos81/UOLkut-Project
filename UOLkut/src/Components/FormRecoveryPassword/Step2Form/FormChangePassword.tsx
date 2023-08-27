
import { Button } from '../../Inputs/styleButtons'
import orkutIcon from "../../../assets/orkutIcon.svg";
import { FormsRecoveryPassword } from './style';
import { useNavigate } from 'react-router-dom';

const FormChangePassword = () => {
    const navigate = useNavigate();
    return (

        <FormsRecoveryPassword>
            <form>
                        <img src={orkutIcon} alt="ps_orkut" />
                        <h2>Nova senha</h2>

                        <div className="contentCode">
                            <input
                                type="text"
                                placeholder="  "
                                id="input-code"
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="input-code" className={"id-code"}>
                                Informe o código
                            </label>
                        </div>

                        <div className="contentPassword">
                            <input
                                type="password"
                                placeholder="  "
                                id="input-password"
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="input-password" className={"id-password"}>
                                Senha
                            </label>
                        </div>

                        <div className="contentPasswordConfirmed">
                            <input
                                type="password"
                                placeholder="  "
                                id="input-password-confirmed"
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="input-password-confirmed" className={"passwordConfirmed"}>
                                Confirme a senha
                            </label>
                        </div>







                        <Button $primary > 
                            <input type="submit" className="submit" />
                                Salvar
                        </Button>
                        <a>Lembrou sua Senha?</a>
                        <Button onClick={() => navigate("/")}>Entrar com as credenciais</Button>
                    </form>
                </FormsRecoveryPassword>
    )
    }

export default FormChangePassword
