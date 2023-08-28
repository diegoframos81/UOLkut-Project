import Card from '../Card/card'
import ProfilePicture from '../../assets/Profile/UserProfileImage.svg'
import { ContainerCardProfile } from './styleProfileCard'
import { useContext, useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from '@firebase/firestore';
import { UserContextId } from '../../Context/userContext';

interface UserData  {
    uid: string;
    name: string;
    job: string;
    country: string;
    city: string;
    date: string;
    relationship: string;
    
  } 

    export function CardProfile() {
  
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
        <ContainerCardProfile>
            <Card>
                <img className='profile-picture' src={ProfilePicture} alt="Profile picture" />
                <span className='profile-name'>{profileData?.name}</span>
                <span className='profile-summary'>{profileData?.relationship}, {profileData?.country}</span>
            </Card>
        </ContainerCardProfile>
    )
}

