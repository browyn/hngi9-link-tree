import React from 'react';
import { RWebShare } from "react-web-share";
import { Tooltip } from '@mui/material';

// import profileImage from '../../assets/images/profile__img.svg';
import camera from '../../assets/images/camera.svg';

import MobileMenu from '../MobileMenu';

const CardHeader = () => {

    const [showImage, setShowImage] = React.useState(false);
    const [showMenu, setShowMenu] = React.useState(false);
    const handleClickImage = (e) => {
        setShowImage(!showImage);
        console.log(showImage);
    }
    const handleClickMenu = (e) => {
        setShowMenu(!showMenu);
        console.log(showMenu);
    }

    return (
        <>
            <div className="link-tree-cardHeader">
                <div className="link-tree-cardHeader-content">
                    <div className="link-tree-cardHeader-profileInfo">
                        <div className="link-tree-cardHeader-options">
                            {/* Share Icon */}
                            <Tooltip title="Share" placement="left" arrow>


                                <RWebShare
                                    data={{
                                        text: "Browyn Louis",
                                        url: window.location.href,
                                        title: "Link Tree Application By Browyn Louis - HNGi9 Frontend Task",
                                    }}
                                    onClick={() => console.log("shared successfully!")}
                                >
                                    <div className="share-icon">
                                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.3261 8.50617C16.5296 8.3318 16.6313 8.24461 16.6686 8.14086C16.7013 8.0498 16.7013 7.9502 16.6686 7.85914C16.6313 7.75539 16.5296 7.6682 16.3261 7.49383L9.26719 1.44331C8.917 1.14315 8.74191 0.993063 8.59367 0.989386C8.46483 0.986191 8.34177 1.04279 8.26035 1.14269C8.16667 1.25764 8.16667 1.48825 8.16667 1.94948V5.52886C6.38777 5.84007 4.75966 6.74146 3.54976 8.09489C2.23069 9.57043 1.50103 11.48 1.5 13.4591V13.9691C2.37445 12.9157 3.46626 12.0638 4.70063 11.4716C5.78891 10.9495 6.96535 10.6403 8.16667 10.5588V14.0505C8.16667 14.5117 8.16667 14.7424 8.26035 14.8573C8.34177 14.9572 8.46483 15.0138 8.59367 15.0106C8.74191 15.0069 8.917 14.8569 9.26719 14.5567L16.3261 8.50617Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </RWebShare>
                            </Tooltip>
                            {/* Ellipsis Icon */}
                            <div className="menu-icon" onClick={handleClickMenu}>
                                <svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99998 2.83341C8.46022 2.83341 8.83331 2.46032 8.83331 2.00008C8.83331 1.53984 8.46022 1.16675 7.99998 1.16675C7.53974 1.16675 7.16665 1.53984 7.16665 2.00008C7.16665 2.46032 7.53974 2.83341 7.99998 2.83341Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.8333 2.83341C14.2935 2.83341 14.6666 2.46032 14.6666 2.00008C14.6666 1.53984 14.2935 1.16675 13.8333 1.16675C13.3731 1.16675 13 1.53984 13 2.00008C13 2.46032 13.3731 2.83341 13.8333 2.83341Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.16665 2.83341C2.62688 2.83341 2.99998 2.46032 2.99998 2.00008C2.99998 1.53984 2.62688 1.16675 2.16665 1.16675C1.70641 1.16675 1.33331 1.53984 1.33331 2.00008C1.33331 2.46032 1.70641 2.83341 2.16665 2.83341Z" stroke="#98A2B3" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <MobileMenu showMenu={showMenu} handleClickMenu={handleClickMenu} />
                        </div>
                        <div className="link-tree-cardHeader-profileImage">

                            <img
                                src="https://portfolio.browyn.repl.co/images/louis.jpg"
                                alt=""
                                tabIndex="0"
                                id="profile__img"
                                onClick={handleClickImage}
                            />

                            <div
                                className={`profileImageOverlay ${showImage ? "show" : ''}`}
                                onClick={handleClickImage}
                            >
                                <img
                                    src={camera}
                                    alt=""
                                    tabIndex="0"
                                />
                            </div>
                        </div>
                        <h1>Browyn Louis</h1>
                        <div className="link-tree-twitter-link-con">
                            <span className="fa-brands fa-twitter"></span>
                            <strong>
                                <a href="https://twitter.com/browyn_louis" target="_black" rel="noreferrer nooppener" id="twitter">@browyn_louis</a>
                            </strong>
                        </div>
                        <div className="link-tree-slack-link-con">
                            <span className="fa-brands fa-slack"></span>
                            <strong>
                                <a href="https://slack.com/browynlouis" target="_black" rel="noreferrer nooppener" id="slack">@browynlouis</a>
                            </strong>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardHeader;