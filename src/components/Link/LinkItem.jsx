import React from 'react';

import { Tooltip, Zoom } from '@mui/material';

const LinkItem = ({
    id,
    link,
    linkText,
    linkDetails
}) => {
    return (
        <>
            <Tooltip
                title={linkDetails}
                TransitionComponent={Zoom}
                disableFocusListener
                disableTouchListener
                arrow
            >
                <a href={link} id={id} className="link-tree-linkItem">
                    {linkText}
                </a>
            </Tooltip>
        </>
    );
};

export default LinkItem;