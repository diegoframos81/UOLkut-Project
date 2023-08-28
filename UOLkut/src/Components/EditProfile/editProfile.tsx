import { useState } from "react";
import CaretDown from "../../assets/CaretDown.svg"
import { ContainerEditProfile } from "./styleEditeProfile";
import { Button } from "../Inputs/styleButtons";
import { useNavigate } from "react-router-dom";

const FormEditProfile = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        job: "",
        name: "",
        city: "",
        country: "",
        date: "",
        password: "",
        confirmPassword: "",
        relationship: "",
    });
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (event: { target: { name: any; value: any } }) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: { preventDefault: () => void }) => {
        event.preventDefault();
        
        console.log(formData);
    };

    return (
        <ContainerEditProfile>
            <div>
                <h2>Editar informações</h2>
            </div>
                <form onSubmit={handleSubmit}>

                <div className="first-column">
                    
                        <input
                            type="text"
                            name="job"
                            value={formData.job}
                            placeholder="Profissão"
                            onChange={handleChange}
                        />
                    
                    
                    
                        
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nome"
                        />
                    
                    
                    
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Cidade"
                        />
                    
                
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                        />
            
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder="Nascimento"
                        />
                    

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Senha"
                        />
                    

                        <input 
                            className="id-confirm-password"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Repetir senha"
                        />
                    
                    </div>

                    <div className="second-column">
                        <select name="relationship"  id="input-select">
                                    <option value="">Relacionamento</option>
                                        
                                    <option value="Solteiro">Solteiro</option>
                                        
                                    <option value="Casado">Casado</option>
                                        
                                    <option value="Divorciado">Divorciado</option>
                                        
                                    <option value="Namorando">Namorando</option>
                                        
                                    <option value="Preocupado">Preocupado</option>
                                </select>
                        </div>
                        <img src={CaretDown} className="caretDown" alt="seta" />
                        <div className="SaveButtom">
                            <Button $primary onClick={() => navigate("/Profile")}>
                                Salvar
                                <input type="submit"/>
                            </Button>
                        </div>
                </form>
            
        </ContainerEditProfile>
    );
};

export default FormEditProfile;
