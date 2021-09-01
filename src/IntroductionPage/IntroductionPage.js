import React, {useEffect} from "react";
import logo from "../resources/images/logo1.png"
import ConnectingButtons from "./ConnectingButtons";
import { connect } from "react-redux";
import {setIsRoomHost} from "../store/actions";

import "./IntroductionPage.css";

const IntroductionPage = ({ setIsRoomHostAction }) => {
  useEffect(() => {
    setIsRoomHostAction(false);
  }, []);

  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <h1 className="title">ChatBubble</h1>
        <img src={logo} className="introduction_page_image" />
        <ConnectingButtons />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsRoomHostAction: (isRoomHost) => dispatch(setIsRoomHost(isRoomHost)),
  };
};

export default connect(null, mapDispatchToProps)(IntroductionPage);
