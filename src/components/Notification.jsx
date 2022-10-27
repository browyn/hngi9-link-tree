import React from 'react';

const Notification = ({
    text,
}) => {
    const handleClickNotifcation = () => {
        return (
            <></>
        );
    }

    return (
        <>
            <div className="link-tree-notification">
                <span>
                    {text}
                </span>
                <span className="material-symbols-outlined">
                    close
                </span>
            </div>
        </>
    );
};

export default Notification;