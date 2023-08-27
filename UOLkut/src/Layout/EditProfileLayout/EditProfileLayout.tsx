
import EditProfile from "../../Components/EditProfile/editProfile"

import Navbar from "../../Components/NavbarProfile/Navbar"
import CardProfile from "../../Components/CardProfile/cardProfile"
import { ContainerEditLayout } from "./style"





const EditProfileLayout = () => {
    return (
        <div>
            <Navbar />
            <ContainerEditLayout>
                <div className="profile-section left-section">
                    <CardProfile />
                    
                </div>
                <div className="content-center">
                <EditProfile/>
                </div>
            </ContainerEditLayout>
            
        </div>
    )
}

export default EditProfileLayout
