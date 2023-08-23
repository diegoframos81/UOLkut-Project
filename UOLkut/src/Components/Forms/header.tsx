import orkutIcon from '../../assets/orkutIcon.svg';




export const HeaderLogin = () => {
    return (
        <div className='App'>
            <header>
                <nav>
                    <img src={orkutIcon} alt="Orkut" />
                    <ul>
                        <li>Sobre o Orkut</li>
                        <li>Centro de segurança</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};