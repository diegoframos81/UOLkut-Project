
import ImageLogin from '../../assets/imageform.svg'
import Bg from '../../assets/bg.svg'

import { ReactElement } from 'react';
import { ContainerMain, ContentMain } from './style';
import FormLogin from '../Form/formLogin';

export const MainForm: React.FC = (): ReactElement => {

    
    return (
        <>
            <ContainerMain>
                <ContentMain>
                    <main >
                        <div className='gradient'>
                            <img src={ImageLogin} alt="Image Login" />
                            <img className='Bg' src={Bg} alt="Linear Background" />
                        </div>

                        <p>Conecta-se aos seus amigos e familiares <br />
                            usando recados e mensagens instantâneas</p>
                        
                    </main>
                    <FormLogin/>
                </ContentMain>
            </ContainerMain>
        </>
    );
};