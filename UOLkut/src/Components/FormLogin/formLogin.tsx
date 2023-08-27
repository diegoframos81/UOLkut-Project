import orkutIcon from "../../assets/orkutIcon.svg";
import { CheckPassword } from "../Inputs/sytleCheck";
import { FormsLogin } from "./style";
import { Button } from "../Inputs/styleButtons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from "react-router-dom"

const FormLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const AuthLogin =  (event: React.SyntheticEvent) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

        const user = userCredential.user;

        console.log(user);
        setUid(userCredential.user?.uid);
        navigate('/Profile');

        })

        .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("Autentição de email e senhas não conferem",errorCode,errorMessage);
        });
    }
    
    
    
    
    return (
            <FormsLogin>
            <form onSubmit={AuthLogin}>
                <img src={orkutIcon} alt="ps_orkut" />
                <h2>Acesse o Orkut</h2>

                <div className="contentEmail">
                <input
                    type="email"
                    value={email}
                    placeholder="  "
                    id="input-email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="input-email" className={"id-email"}>
                    E-mail
                </label>
                </div>

                <div className="contentPassword">
                <input
                    type="password"
                    value={password}
                    placeholder="  "
                    id="input-password"
                    autoComplete="off"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <label htmlFor="input-password" className={"id-password"}>
                    Password
                </label>
                </div>

                <CheckPassword>
                <div className="CheckPassword">
                    <input
                    className="passwordCheck"
                    type="checkbox"
                    name="remember-password"
                    />
                    <label htmlFor="remember-password">Lembrar minha senha</label>
                </div>
                </CheckPassword>

                <Button $primary onClick={AuthLogin}>
                    <input type="submit" className="submit" />
                        Entrar na conta
                </Button>
                <Button onClick={() => navigate("/Register")}>Criar uma conta</Button>
                <Link to={"/RecoveryPassword"}><a>Esqueci a minha senha</a></Link>
            </form>
            </FormsLogin>
        );
        };

export default FormLogin;
