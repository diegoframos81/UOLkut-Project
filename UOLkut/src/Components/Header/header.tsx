import { Link } from "react-router-dom";
import { Container, Content } from "./style";


export const HeaderLogin = () => {
    return (
        <div className='App'>
            <Container>
                <Content>
                    <nav>
                        
                        <Link to={"/"}>
                            <span>UOLkut</span>
                        </Link>
                        
                            <p>Centro de segurança</p>
                    </nav>
                </Content>
            </Container>
        </div>
    );
};