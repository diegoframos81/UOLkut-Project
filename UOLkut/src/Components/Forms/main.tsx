
import ImageLogin from '../../assets/imageform.svg'

import { ReactElement } from 'react';
import { ContainerMain, ContentMain } from './style';
import FormLogin from '../Form/formLogin';

export const MainForm: React.FC = (): ReactElement => {

    
    return (
        <>
            <ContainerMain>
                <ContentMain>
                    <main >
                        <img src={ImageLogin} alt="Orkut" />
                        
                        <p>Conecta-se aos seus amigos e familiares <br />
                            usando recados e mensagens instantâneas</p>
                        
                    </main>
                    <FormLogin/>
                </ContentMain>
            </ContainerMain>
        </>
    );
};