import Card from '../Card/card'
import ProfilePicture from '../../assets/Profile/UserProfileImage.svg'
import { ContainerCardProfile } from './styleProfileCard'


const Profile: React.FC = () => {
    return (
        <ContainerCardProfile>
            <Card>
                <img className='profile-picture' src={ProfilePicture} alt="Profile picture" />
                <span className='profile-name'>Gabriel Barbosa</span>
                <span className='profile-summary'>Solteiro, Brasil</span>
            </Card>
        </ContainerCardProfile>
    )
}

export default Profile;