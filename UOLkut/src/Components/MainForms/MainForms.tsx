
import ImageLogin from '../../assets/imageform.svg'
import Bg from '../../assets/bg.svg'

import { ReactElement } from 'react';
import { ContainerMainForms, ContentMainForms } from './styleMain';

import FormRegister from '../FormRegister/formRegister';

export const MainForms: React.FC = (): ReactElement => {

    
    return (
        <>
            <ContainerMainForms>
                <ContentMainForms>
                    <main >
                        <div className='gradient'>
                            <img src={ImageLogin} alt="Image Login" />
                            <img className='Bg' src={Bg} alt="Linear Background" />
                        </div>

                        <p>Conecta-se aos seus amigos e familiares <br />
                            usando recados e mensagens instantâneas</p>
                        
                    </main>
                    <FormRegister/>
                </ContentMainForms>
            </ContainerMainForms>
        </>
    );
};