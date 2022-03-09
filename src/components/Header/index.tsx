import { FC } from "react";
import "./style.scss";
import Portal from "components/Portal";
import CatchingPokemonSharpIcon from "@mui/icons-material/CatchingPokemonSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import { common } from "@mui/material/colors";

const Header: FC = () => {
  return (
    <Portal>
      <div className="header">
        <div className="header__logo">
          <CatchingPokemonSharpIcon
            sx={{ color: common.white, fontSize: "40px" }}
          />
          <h1 className="header__title">todo</h1>
        </div>
        <div className="header__account" onClick={() => {}}>
          <img
            src="./assets/favicon.png"
            alt="logo"
            className="header__image"
          />
          <KeyboardArrowDownSharpIcon
            color="disabled"
            className="header__arrow"
          />
        </div>
      </div>
    </Portal>
  );
};

export default Header;
