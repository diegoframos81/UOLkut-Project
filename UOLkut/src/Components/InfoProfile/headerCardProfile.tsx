import { useContext, useEffect, useState } from 'react';
import Bubble from "../../assets/Bubble.svg"

import UserTags from '../UserTags/UserTags';
import { ContainerUserHeaderInfo } from './styleHeaderInfo';
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';

import { UserContextId } from '../../Context/userContext';
import Card from '../Card/card';

interface UserData  {
  uid: string;
  name: string;
  job: string;
  country: string;
  city: string;
  date: string;
  relationship: string;
  
} 

export function ProfileInfo() {

  const [ profileData, setProfileData ] = useState<UserData | null>(null)
  const { userUid } = useContext(UserContextId)!;

  useEffect(() => {
    getProfileData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[userUid])

  const getProfileData = async () => {
    try {
      console.log(userUid);
      
      const db = getFirestore();
      const get = query(collection(db, "dbUolkut"), where("uid", "==", userUid));

      const querySnapshot = await getDocs(get);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setProfileData(doc.data() as UserData);
      });
    } catch (error) { 
      console.error("Error fetching user data:", error);
    }
    console.log(profileData)
  }



  return (
    <>
    <ContainerUserHeaderInfo>
      <Card>
      <div className="user-profile-container">
        <div className="user-profile-box">
          <div className="user-info">
            <span className='welcome-text'>Boa tarde, {profileData?.name}</span>
            <div className="balloon-box">
              <img src={Bubble} alt="" />
              <p>Programar sem café é igual poeta sem poesia.</p>
            </div>
          </div>
          <UserTags />

        </div>
      </div>
    
    
          <dl className='user_details'>
              <div>
                <dt>Relacionamento:</dt>
                <dd>{profileData?.relationship}</dd>
              </div>
              <div>
                <dt>Aniversário:</dt>
                <dd>{profileData?.date}</dd>
              </div>
              <div>
                <dt>Quem sou eu:</dt>
                <dd>{profileData?.job}</dd>
              </div>
              <div>
                <dt>Moro:</dt>
                <dd>{profileData?.city}</dd>
              </div>
              <div>
                <dt>País:</dt>
                <dd>{profileData?.country}</dd>
              </div>
              <div>
                <dt>Cidade:</dt>
                <dd>{profileData?.city}</dd>
              </div>
              <div className='multiple_options_field_details'>
                <div className='firstchild'>
                  <dt>Músicas:</dt>
                  <dd>Trap</dd>
                  <dd className='isMobile'>Rap</dd>
                  <dd className='isMobile'>Indie</dd>
                  <span>Ver todos</span>
                </div>
              </div>
              <div className='multiple_options_field_details'>
                <dt>Filmes:</dt>
                <dd>A rede social</dd>
                <dd className='isMobile'>Run</dd>
                <span>Ver todos</span>
              </div>
            </dl> 
            </Card>
      </ContainerUserHeaderInfo>
      </>
    );
}


