
import { FooterLogin } from './Components/Footer/footer'
import { HeaderLogin } from './Components/Header/header'
import { GlobalStyle } from './style/global'
import   Login  from './Pages/Login'


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