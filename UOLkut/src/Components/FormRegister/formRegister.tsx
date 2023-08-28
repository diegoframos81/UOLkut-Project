import orkutIcon from "../../assets/orkutIcon.svg";
import CaretDown from "../../assets/CaretDown.svg"
import { Button } from "../Inputs/styleButtons";
import { useNavigate } from "react-router-dom";
import { ContentFormRegister } from "./style";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { auth } from "../../service/FireBaseConfig";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { firebaseConfig } from "../../service/FireBaseConfig";

const FormRegister = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ name, setName ] = useState('');
    const [ date, setDate ] = useState('');
    const [ country, setCountry ] = useState('');
    const [ job, setJob ] = useState('');
    const [ city, setCity ] = useState('');
    const [ relationship, setRelationship ] = useState('');

    
    const [createUserWithEmailAndPassword,] =
        useCreateUserWithEmailAndPassword(auth);
    const db = getFirestore(firebaseConfig);
    const listUser = collection(db,"dbUolkut");



    const navigate = useNavigate();

    const handleFormSubmit = async (event: React.SyntheticEvent) => {
            event.preventDefault();
            try{
                const createUser = await createUserWithEmailAndPassword(email, password);
                
                console.log(createUser);
                const userValues = await addDoc(listUser,{
                    
                    uid:createUser?.user.uid,
                    city,
                    country,
                    date,
                    job,
                    name,
                    relationship,
                }); 
                console.log(userValues);

        }catch (error) {

            console.log("error:", error);
            
        }
        navigate("/");
    };
    return (
        <ContentFormRegister>
            <form onSubmit={handleFormSubmit}>
                <img src={orkutIcon} alt="ps_orkut" />
                <h2>Cadastre-se o UOLkut</h2>

                <div className="contentEmail">
                    <input
                        type="email"
                        value={email}
                        placeholder="  "
                        id="input-email"
                        name="email"
                        autoComplete="off"
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

                <div className="contentName">
                    <input
                        type="text"
                        value={name}
                        placeholder="  "
                        id="input-name"
                        autoComplete="off"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label htmlFor="input-name" className={"id-name"}>
                        Nome
                    </label>
                </div>

                <div className="containerInputs">
                    <div id="first-column">
                        <input
                            type="date"
                            value={date}
                            placeholder=" "
                            id="input-date"
                            autoComplete="off"
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                        <label htmlFor="input-date" className={"id-date"}>
                            Nascimento
                        </label>

                        <input
                            type="text"
                            value={country}
                            placeholder="  "
                            id="input-country"
                            autoComplete="off"
                            onChange={(e) => setCountry(e.target.value)}
                            required
                        />
                        <label htmlFor="input-country" className={"id-country"}>
                            País
                        </label>
                    </div>

                    <div id="second-column">
                        <div className="contentJob">
                            <input
                                type="text"
                                value={job}
                                placeholder="  "
                                id="input-Job"
                                autoComplete="off"
                                onChange={(e) => setJob(e.target.value)}
                                required
                            />
                            <label htmlFor="input-Job" className={"id-job"}>
                                Profissão
                            </label>
                        </div>

                        <div className="contentCity">
                            <input
                                type="text"
                                value={city}
                                placeholder="  "
                                id="input-city"
                                autoComplete="off"
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                            <label htmlFor="input-city" className={"id-city"}>
                                Cidade
                            </label>
                        </div>
                        <div className="contentRelationShip">
                            <select name="relationship" value={relationship} id="input-select" required  onChange={(e) => setRelationship(e.target.value)}>
                                <option value="" disabled>Relacionamento</option> 
                                <hr />
                                <option value="Solteiro">Solteiro</option>
                                <hr />
                                <option value="Casado">Casado</option>
                                <hr />
                                <option value="Divorciado">Divorciado</option>
                                <hr />
                                <option value="Namorando">Namorando</option>
                                <hr />
                                <option value="Preocupado">Preocupado</option>
                            </select>

                            <img src={CaretDown} className="caretDown" alt="seta" />
                        </div>
                    </div>
                </div>

                <Button $primary className="button">
                    <input type="submit" value=""/> Criar Conta 
                </Button>
            </form>
        </ContentFormRegister>
    );
};


export default FormRegister;
