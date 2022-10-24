import React from 'react';

import profileImage from '../../assets/images/profile__img.svg';
import camera from '../../assets/images/camera.svg';

const CardHeader = () => {

    const [show, setShow] = React.useState(false);
    const handleClick = (e) => {
        setShow(!show);
        console.log(show);
    }

    return (
        <>
            <div className="link-tree-cardHeader">
                <div className="link-tree-cardHeader-content">
                    <div className="link-tree-cardHeader-profileInfo">
                        <div className="link-tree-cardHeader-profileImage">

                            <img
                                src={profileImage} alt=""
                                tabindex="0"
                                onClick={handleClick}
                            />

                            <div
                                className={`profileImageOverlay ${show ? "show" : ''}`}
                                onClick={handleClick}
                            >
                                <img
                                    src={camera}
                                    alt=""
                                    tabindex="0"
                                />
                            </div>
                        </div>
                        <h1>Annette Black</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardHeader;