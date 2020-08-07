import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TelegramIcon from "@material-ui/icons/Telegram";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";

/**
 * @author
 * @function Header
 **/

const Header = ({ backButton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
          <ArrowBackIcon fontSize="large" className="header__back" />
        </IconButton>
      ) : (
        <IconButton>
          <AccountCircleIcon className="header__icon" fontSize="Large" />
        </IconButton>
      )}

      <img
        className="header__logo"
        src="https://media1.giphy.com/media/4NcRoXBtemK2QHkLVd/source.gif"
        alt="tinderlog"
      />
      <Link to="/chat">
        <IconButton>
          <TelegramIcon className="header__icon" fontSize="Large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
