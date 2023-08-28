
import { FooterLogin } from "../../Components/Footer/footer"
import { HeaderLogin } from "../../Components/Header/header"
import { MainForm } from "../../Components/MainLogin/main"


const LoginLayout = () => {
    return (
        <div>
            <HeaderLogin />
            <MainForm/>
            <FooterLogin />
            
        </div>
    )
}

export default LoginLayout
