import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/card';
import { ContainerButton } from './styleEditButtom';


const EditProfileButton: React.FC = () => {
    const navigate = useNavigate();
    const handleEditProfileClick = () => {
        navigate('/EditProfile');
    };

    return (
        <ContainerButton>
            <Card>
                <span 
                    className='edit-profile-button' 
                    onClick={handleEditProfileClick}
                >
                    Editar meu perfil
                </span>
            </Card>
        </ContainerButton>
    );
}

export default EditProfileButton;