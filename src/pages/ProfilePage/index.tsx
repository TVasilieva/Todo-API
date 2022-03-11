import { FC, useEffect, useState } from "react";

import "./style.scss";
import Header from "components/Header";
import Loader from "components/Loader";
import AppDropzone from "components/Dropzone";
import AddAPhotoSharpIcon from "@mui/icons-material/AddAPhotoSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NoPhotographyRoundedIcon from "@mui/icons-material/NoPhotographyRounded";

import { useAppDispatch, useAppSelector } from "state";
import { getIsLoading, getUser, getUsername } from "state/user/selectors";
import { editProfileRequest, getUserRequest } from "state/user/actions";
import { getImage, getImageIsLoading } from "state/image/selectors";
import { getImageRequest, removeImageRequest } from "state/image/actions";

const ProfilePage: FC = () => {
  const dispatch = useAppDispatch();

  const account = useAppSelector(getUser);
  const username = useAppSelector(getUsername);
  const image = useAppSelector(getImage);
  const isLoading = useAppSelector(getIsLoading);
  const imageIsLoading = useAppSelector(getImageIsLoading);

  const [name, setName] = useState<string>(username);
  const [isEditMenuOpened, setIsEditMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getImageRequest(account?.id || ""));
  }, [account?.id]);

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  const toggleEditMenu = (): void => {
    if (!isEditMenuOpened && !isLoading) setName(username);
    setIsEditMenuOpened(!isEditMenuOpened);
  };

  const handleEditProfile = (): void => {
    if (name) {
      dispatch(
        editProfileRequest({
          name,
        })
      );
      dispatch(getUserRequest());
      toggleEditMenu();
    }
  };

  const handleRemoveImage = (): void => {
    dispatch(removeImageRequest());
  };

  const getBlob = (): string | undefined => {
    console.log(image);
    if (image) {
      let url: string = "";
      try {
        url = URL.createObjectURL(image as Blob | MediaSource | File);
        // setTimeout(() => {
        //   URL.revokeObjectURL(url);
        // }, 0);
        return url;
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="profile">
        <AppDropzone>
          {!image && !imageIsLoading ? (
            <img
              src="./assets/icon.png"
              alt="logo"
              className="profile__image"
            />
          ) : image && !imageIsLoading ? (
            <img src={getBlob()} alt="logo" className="profile__image" />
          ) : (
            <>
              <img
                src="./assets/icon.png"
                alt="logo"
                className="profile__image"
              />
              <Loader />
            </>
          )}
        </AppDropzone>

        {!isEditMenuOpened && !isLoading ? (
          <div className="profile__name">{username}</div>
        ) : username ? (
          <input
            className="profile__input"
            placeholder="type your name..."
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        ) : (
          <Loader />
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
          <NoPhotographyRoundedIcon
            className="profile__tools_remove"
            onClick={handleRemoveImage}
          />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
