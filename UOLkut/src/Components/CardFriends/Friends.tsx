import Card from "../Card/card";

import photo1 from "../../assets/profile-pictures/Profile1.svg";
import photo2 from "../../assets/profile-pictures/Profile2.svg";
import photo3 from "../../assets/profile-pictures/Profile3.svg";
import photo4 from "../../assets/profile-pictures/Profile4.svg";
import photo5 from "../../assets/profile-pictures/Profile5.svg";
import photo6 from "../../assets/profile-pictures/Profile6.svg";
import photo7 from "../../assets/profile-pictures/Profile7.svg";
import photo8 from "../../assets/profile-pictures/Profile8.svg";
import photo9 from "../../assets/profile-pictures/Profile9.svg";
import { ContentFriends } from "./styleFriends";


const Friends: React.FC = () => {
    return (
        <ContentFriends>
            <Card>
            
                <header className="card-header">
                    <span>Amigos (248)</span>
                    <span>Ver todos</span>
                </header>
                <section className="card-body-friends">
                    <div className="friends-row">
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo1} alt="Friend photo" />
                            <span>Fernando</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo2} alt="Friend photo" />
                            <span>Ana</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo3} alt="Friend photo" />
                            <span>Carlos</span>
                        </div>
                    </div>
                    <div className="friends-row">
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo4} alt="Friend photo" />
                            <span>Vitor</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo5} alt="Friend photo" />
                            <span>Matheus</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo6} alt="Friend photo" />
                            <span>Ramos</span>
                        </div>
                    </div>
                    <div className="friends-row">
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo7} alt="Friend photo" />
                            <span>Eiji</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo8} alt="Friend photo" />
                            <span>Julia</span>
                        </div>
                        <div className="friends-thumb-container">
                            <img className="friend-tumb" src={photo9} alt="Friend photo" />
                            <span>Carol</span>
                        </div>
                    </div>
                </section>
                </Card>
            </ContentFriends>
        
    );
};

export default Friends;