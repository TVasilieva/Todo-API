import { FC } from "react";

import "./style.scss";
import Header from "components/Header";
import AddAPhotoSharpIcon from "@mui/icons-material/AddAPhotoSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";

const ProfilePage: FC = () => {
  return (
    <>
      <Header />
      <div className="profile">
        <img
          src="./assets/favicon.png"
          alt="logo"
          className="profile__image"
          onClick={() => {
            console.log("image");
          }}
        />

        <div className="profile__name">Vendi Testaburger</div>
        <div className="profile__tools">
          <AddAPhotoSharpIcon className="profile__tools_add" />
          <EditSharpIcon className="profile__tools_edit" />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
