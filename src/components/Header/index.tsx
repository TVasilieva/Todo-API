import { FC, useEffect, useState } from "react";
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
import getBlob from "utils/getBlob";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  const image = useAppSelector(getImage);
  const account = useAppSelector(getUser);

  const navigator = useNavigate();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  useEffect(() => {
    if (account) dispatch(getImageRequest(account?.id || ""));
    if (image) dispatch(uploadImageRequest(image as File));
  }, [account?.id]);

  const toggleDropdownMenu = () => {
    setIsOpened(!isOpened);
  };

  const handleLogout = (): void => {
    dispatch(logoutRequest());
    navigator(Routes.Home);
  };

  const blob = getBlob(image);

  return (
    <Portal>
      <div className="header">
        <div className="header__logo">
          <CatchingPokemonSharpIcon
            sx={{ color: common.white, fontSize: "40px" }}
            data-testid="logo"
          />
          <h1 className="header__title">todo</h1>
        </div>
        <div
          className="header__account"
          data-testid="header-account"
          onClick={toggleDropdownMenu}
        >
          <img
            src={image ? blob : "./assets/icon.png"}
            alt="logo-img"
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
