import React from 'react';

const Notification = ({
    text,
}) => {

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