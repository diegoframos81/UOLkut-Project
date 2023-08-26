
import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/NavbarProfile/Navbar';
import Profile from '../../Components/CardProfile/cardProfile';
import EditProfileButton from '../../Components/Inputs/EditProfileButtom';
import Friends from '../../Components/CardFriends/Friends';
import Communities from '../../Components/Communities/cardCommunities';
import { Routes, Route } from 'react-router-dom';
import UserProfile from '../../Components/InfoProfile/headerCardProfile';
import EditProfile from '../../Components/EditProfile/editProfile';
import { ContainerLayout } from './styleLayoutProfile';

const ProfileLayout: React.FC = () => {
  let isMobile: boolean = window.innerWidth < 1280;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if(windowWidth < 1280) {
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
      isMobile = true;
    } else {
      isMobile = false;
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
    <ContainerLayout>
        <Navbar />
        <div className="body-container">
          <div className="body-content">

            <div className="profile-section left-section">
              <Profile />
              <EditProfileButton />
            </div>

            {!isMobile && 
            <div className="profile-section center-section">
              <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="/edit" element={<EditProfile />} />
              </Routes>
            </div>
            }

            <div className="profile-section right-section">
              <Friends />
              {isMobile && 
                <Routes>
                  <Route path="/Profile" element={<UserProfile />} />
                  <Route path="/edit" element={<EditProfile />} />
                </Routes>
              }
              <Communities />
            </div>

          </div>
        </div>
      </ContainerLayout>
    </>
  )
};

export default ProfileLayout;
