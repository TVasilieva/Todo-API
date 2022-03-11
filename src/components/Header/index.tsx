import { FC, useState } from "react";
import "./style.scss";
import Portal from "components/Portal";
import DropdownMenu from "components/DropdownMenu";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { common } from "@mui/material/colors";

import { Routes } from "constants/routes";
import { useAppDispatch, useAppSelector } from "state";
import { logoutRequest } from "state/user/actions";
import { useNavigate } from "react-router-dom";
import { getImage } from "state/image/selectors";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const image = useAppSelector(getImage);

  const navigator = useNavigate();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const toggleDropdownMenu = () => {
    setIsOpened(!isOpened);
  };

  const handleLogout = (): void => {
    dispatch(logoutRequest());
    navigator(Routes.Home);
  };

  const getBlob = (): string | undefined => {
    if (image) {
      let url: string = "";
      try {
        url = URL.createObjectURL(image as Blob | MediaSource);
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
    <Portal>
      <div className="header">
        <div className="header__logo">
          <CatchingPokemonSharpIcon
            sx={{ color: common.white, fontSize: "40px" }}
          />
          <h1 className="header__title">todo</h1>
        </div>
        <div className="header__account" onClick={toggleDropdownMenu}>
          <img
            src={image ? getBlob() : "./assets/icon.png"}
            alt="logo"
            className="header__image"
          />
          {isOpened && (
            <DropdownMenu
              logout={handleLogout}
              profile={Routes.Profile}
              todos={Routes.Todo}
              isOpened={isOpened}
            />
          )}

          <KeyboardArrowDownSharpIcon className="header__arrow" />
        </div>
      </div>
    </Portal>
  );
};

export default Header;
