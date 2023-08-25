import { ReactNode } from "react";
import { CardStyle } from "./styleCard";


interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = (props) => {
    return (
        <CardStyle>
            <div className="card-outer">
                <div className="card-inner">
                    {props.children}
                </div>
            </div>
        </CardStyle>
    );
};

export default Card;