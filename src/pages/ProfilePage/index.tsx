import { FC, useEffect, useState } from "react";

import "./style.scss";
import Header from "components/Header";
import Loader from "components/Loader";
import AppDropzone from "components/Dropzone";
import AddAPhotoSharpIcon from "@mui/icons-material/AddAPhotoSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useAppDispatch, useAppSelector } from "state";
import { getIsLoading, getUser, getUsername } from "state/user/selectors";
import { editProfileRequest, getUserRequest } from "state/user/actions";
import { getImage } from "state/image/selectors";
import { getImageRequest } from "state/image/actions";

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  const account = useAppSelector(getUser);
  const username = useAppSelector(getUsername);
  const image = useAppSelector(getImage);
  const isLoading = useAppSelector(getIsLoading);

  const [name, setName] = useState<string>(username);
  const [isEditMenuOpened, setIsEditMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getImageRequest("6213ab46484936001756df92"));
    }
  }, []);

  useEffect(() => {
    if (!isLoading) {
      dispatch(getUserRequest());
    }
  }, [account]);

  const toggleEditMenu = (): void => {
    if (!isLoading) {
      dispatch(getUserRequest());
    }
    setIsEditMenuOpened(!isEditMenuOpened);
  };

  const handleEditProfile = (): void => {
    if (name) {
      dispatch(
        editProfileRequest({
          name,
        })
      );
      toggleEditMenu();
    }
  };

  const getBlob = () => {
    if (image && !isLoading) {
      let url: string = "";
      try {
        url = URL.createObjectURL(image as any);
        setTimeout(() => {
          URL.revokeObjectURL(url);
        }, 0);

        return url;
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Header />
      {isLoading && <Loader />}
      <div className="profile">
        <AppDropzone>
          {!!getBlob() && (
            <img src={getBlob()} alt="logo" className="profile__image" />
          )}
        </AppDropzone>
        {!isEditMenuOpened ? (
          <div className="profile__name">{username}</div>
        ) : (
          <input
            className="profile__input"
            placeholder="type your name..."
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <div className="profile__tools">
          <AppDropzone>
            <AddAPhotoSharpIcon className="profile__tools_add" />
          </AppDropzone>
          {!isEditMenuOpened ? (
            <EditSharpIcon
              className="profile__tools_edit"
              onClick={toggleEditMenu}
            />
          ) : (
            <AddCircleOutlineIcon
              className="profile__tools_save"
              onClick={handleEditProfile}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
