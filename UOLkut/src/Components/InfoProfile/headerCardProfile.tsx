import React from 'react';
import Bubble from "../../assets/Bubble.svg"
import UserInfo from '../UserInfo/UserInfo';
import UserTags from '../UserTags/UserTags';
import { ContainerUserHeaderInfo } from './styleHeaderInfo';

const UserProfile: React.FC = () => {
  return (
    <ContainerUserHeaderInfo>
    <div className="user-profile-container">
      <div className="user-profile-box">
        <div className="user-info">
          <span className='welcome-text'>Boa tarde, Gabriel Barbosa</span>
          <div className="balloon-box">
            <img src={Bubble} alt="" />
            <p>Programar sem café é igual poeta sem poesia.</p>
            </div>
        </div>
        <UserTags/>
        <UserInfo/>
      </div>
    </div>
    </ContainerUserHeaderInfo>
  );
};

export default UserProfile;