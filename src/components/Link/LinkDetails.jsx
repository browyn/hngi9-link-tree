import React from 'react';


const LinkDetails = ({
    title,
    subText
}) => {
    return (
        <>
            <div className="link-tree-linkDetails">
                <div className="link-tree-linkDetails-container">
                    <p>
                        <strong>{title}</strong>
                    </p>
                    <span>
                        {subText}
                    </span>
                </div>
            </div>
        </>
    );
};

export default LinkDetails;