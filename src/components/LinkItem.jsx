import React from 'react';

const LinkItem = ({
    id,
    link,
    linkText,
}) => {
    return (
        <>
            <a href={link} id={id} className="link-tree-linkItem">
                {linkText}
            </a>
        </>
    );
};

export default LinkItem;