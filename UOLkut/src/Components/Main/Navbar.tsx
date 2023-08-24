import logo from '../../assets/logo.svg';
import searchIcon from '../../assets/searchIcon.svg';
import userImage from '../../assets/userImage.svg';
import { ContainerProfile, ContentProfile } from './styleNavBar';


const Navbar = () => {
  return (
    <>
    <ContainerProfile>
      <ContentProfile>
            <nav className="navbar">
              <div className='navbar-content'>
                <div className="nav-group-left">
                  <img className='img-nav' src={logo} alt="Logo"/>
                  <span className="nav-link desktop-only">Início</span>
                  <span className="nav-link desktop-only profile-link">Perfil</span>
                  <span className="nav-link desktop-only">Comunidades</span>
                  <span className="nav-link desktop-only">Jogos</span>
                </div>
                <div className="nav-group-right">
                  <div className="search-bar-desktop-wrapper desktop-only">
                    <img src={searchIcon} alt="Pesquisar" className="search-icon" />
                    <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" />
                  </div>
                  <div className="user-profile">
                    <img src={userImage} alt="Usuário" className="user-profile-img" />
                    <span className="user-name desktop-only">Gabriel Barbosa</span>
                    <i className="arrow-down desktop-only"></i>
                  </div>
                </div>
              </div>
            </nav>
      </ContentProfile>
      </ContainerProfile>
    </>
  )
}

export default Navbar
