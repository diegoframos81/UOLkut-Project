import orkutIcon from "../../assets/orkutIcon.svg";

import { Button } from "../Inputs/styleButtons";
import { useNavigate } from "react-router-dom";
import { ContentFormRegister } from "./style";

const FormRegister = () => {
    const navigate = useNavigate();
    return (
        <ContentFormRegister>
            <form>
                <img src={orkutIcon} alt="ps_orkut" />
                <h2>Cadastre-se o UOLkut</h2>

                <div className="contentEmail">
                    <input
                        type="email"
                        placeholder="  "
                        id="input-email"
                        name="email"
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="input-email" className={"id-email"}>
                        E-mail
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
                        Password
                    </label>
                </div>

                <div className="contentName">
                    <input
                        type="text"
                        placeholder="  "
                        id="input-name"
                        autoComplete="off"
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
                            placeholder="Nascimento "
                            id="input-date"
                            autoComplete="off"
                            required
                        />
                        <label htmlFor="input-date" className={"id-date"}></label>

                        <input
                            type="text"
                            placeholder="  "
                            id="input-country"
                            autoComplete="off"
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
                                placeholder="  "
                                id="input-Job"
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="input-Job" className={"id-job"}>
                                Profissão
                            </label>
                        </div>

                        <div className="contentCity">
                            <input
                                type="text"
                                placeholder="  "
                                id="input-city"
                                autoComplete="off"
                                required
                            />
                            <label htmlFor="input-city" className={"id-city"}>
                                Cidade
                            </label>
                        </div>
                        <div className="contentRelationShip">
                            <select name="relationship" id="input-select" required>
                                <option value="">Relacionamento</option>
                                <option value="Solteiro">Solteiro</option>
                                <option value="Casado">Casado</option>
                                <option value="Divorciado">Divorciado</option>
                                <option value="Namorando">Namorando</option>
                                <option value="Preocupado">Preocupado</option>
                            </select>
                        </div>
                    </div>
                </div>

                <Button $primary onClick={() => navigate("/")} className="button">
                    Criar Conta
                </Button>
            </form>
        </ContentFormRegister>
    );
};

export default FormRegister;
