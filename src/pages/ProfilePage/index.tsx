/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";

import "./style.scss";
import Header from "components/Header";
import Loader from "components/Loader";
import AppDropzone from "components/Dropzone";
import Portal from "components/Portal";
import AddAPhotoSharpIcon from "@mui/icons-material/AddAPhotoSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NoPhotographyRoundedIcon from "@mui/icons-material/NoPhotographyRounded";

import { useAppDispatch, useAppSelector } from "state";
import { getIsLoading, getUser, getUsername } from "state/user/selectors";
import { editProfileRequest, getUserRequest } from "state/user/actions";
import { getImage, getImageIsLoading } from "state/image/selectors";
import { getImageRequest, removeImageRequest } from "state/image/actions";
import getBlob from "utils/getBlob";
import Input from "components/Input";

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
    if (account) dispatch(getImageRequest(account?.id || ""));
  }, [account?.id]);

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  const toggleEditMenu = (): void => {
    if (!isEditMenuOpened && !isLoading) setName(username);
    setIsEditMenuOpened(!isEditMenuOpened);
  };

  const handleEditProfile = (): void => {
    toggleEditMenu();
    if (name) {
      dispatch(
        editProfileRequest({
          name,
        })
      );
      dispatch(getUserRequest());
    }
  };

  const handleKeyDown = (event: any): void => {
    if (event.key === "Enter") {
      if (name) {
        dispatch(
          editProfileRequest({
            name,
          })
        );
        dispatch(getUserRequest());
        toggleEditMenu();
      }
    }
  };

  const handleRemoveImage = (): void => {
    dispatch(removeImageRequest());
  };

  const blob = getBlob(image);

  return (
    <>
      <div data-testid="profile-link">
        <Header />
        <Portal>
          <div className="profile" data-testid="profile">
            <AppDropzone>
              {!image && !imageIsLoading ? (
                <img
                  src={require("../../assets/icon.png")}
                  alt="logo"
                  className="profile__image"
                />
              ) : image && !imageIsLoading ? (
                <img src={blob} alt="logo" className="profile__image" />
              ) : (
                <>
                  <img
                    src={require("../../assets/icon.png")}
                    alt="logo"
                    className="profile__image"
                  />
                  <Loader />
                </>
              )}
            </AppDropzone>
            {!isEditMenuOpened ? (
              <div className="profile__name">{username}</div>
            ) : (
              <Input
                name={name}
                handleKeyDown={handleKeyDown}
                onInputChange={(e) => setName(e.target.value)}
              />
            )}
            <div className="profile__tools">
              <AppDropzone>
                <AddAPhotoSharpIcon className="profile__tools_add" />
              </AppDropzone>
              {!isEditMenuOpened ? (
                <EditSharpIcon
                  className="profile__tools_edit"
                  data-testid="edit-profile"
                  onKeyDown={() => console.log("key pressed")}
                  onClick={toggleEditMenu}
                />
              ) : (
                <AddCircleOutlineIcon
                  className="profile__tools_save"
                  data-testid="save-profile"
                  onClick={handleEditProfile}
                />
              )}
              <NoPhotographyRoundedIcon
                className="profile__tools_remove"
                data-testid="remove-image"
                onClick={handleRemoveImage}
              />
            </div>
          </div>
        </Portal>
      </div>
    </>
  );
};

export default ProfilePage;
