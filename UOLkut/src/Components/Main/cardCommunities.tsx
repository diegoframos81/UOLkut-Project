import Card from "./card";
import { ContentCommunitie } from "./styleCardCommunities";
import photo1 from "../../assets/communities-pictures/photo1.svg"
import photo2 from "../../assets/communities-pictures/photo2.svg";
import photo3 from "../../assets/communities-pictures/photo3.svg";
import photo4 from "../../assets/communities-pictures/photo4.svg";
import photo5 from "../../assets/communities-pictures/photo5.svg";
import photo6 from "../../assets/communities-pictures/photo6.svg";
import photo7 from "../../assets/communities-pictures/photo7.svg";
import photo8 from "../../assets/communities-pictures/photo8.svg";
import photo9 from "../../assets/communities-pictures/photo7.svg";


const Communities: React.FC = () => {
    return (
        <Card>
            <ContentCommunitie>
                <header className="card-header">
                    <span>Comunidade (42)</span>
                    <span className="seeAll">Ver todos</span>
                </header>
                <section className="card-body-communities">
                    <div className="communities-row">
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo1} alt="Community image" />
                            <span>Carros</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo2} alt="Community image" />
                            <span>Desenhos</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo3} alt="Community image" />
                            <span>Crazy</span>
                        </div>
                    </div>
                    <div className="communities-row">
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo4} alt="Community image" />
                            <span>Fofos</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo5} alt="Community image" />
                            <span>Animes</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo6} alt="Community image" />
                            <span>Leitura</span>
                        </div>
                    </div>
                    <div className="communities-row">
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo7} alt="Community image" />
                            <span>Meu ovo</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo8} alt="Community image" />
                            <span>My books</span>
                        </div>
                        <div className="communities-thumb-container">
                            <img className="community-tumb" src={photo9} alt="Community image" />
                            <span>Cafeeee</span>
                        </div>
                    </div>
                </section>
            </ContentCommunitie>
        </Card>
    );
};

export default Communities;