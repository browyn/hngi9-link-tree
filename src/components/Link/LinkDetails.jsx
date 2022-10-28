import React from 'react';


const LinkDetails = ({
    title,
    subText
}) => {
    return (
        <>
            <div className="link-tree-linkDetails">
                <div className="link-tree-linkDetails-container">
                    {title
                        &&
                        <p>
                            <strong>{title}</strong>
                        </p>
                    }
                    {subText
                        && <span>
                            {subText}
                        </span>
                    }
                </div>
            </div>
        </>
    );
};

export default LinkDetails;