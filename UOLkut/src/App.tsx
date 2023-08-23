
import { FooterLogin } from './Components/Footer/footer'
import { HeaderLogin } from './Components/Header/header'
import Login from './Pages/Login'
import { GlobalStyle } from './style/global'


const App = () => {
  return (
    <>
      <HeaderLogin />
      
      <Login />
      <GlobalStyle />
      <FooterLogin />
    </>
  )
}

export default App