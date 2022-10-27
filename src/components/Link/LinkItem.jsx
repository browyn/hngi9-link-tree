import React from 'react';

import { Tooltip } from '@mui/material';

const LinkItem = ({
    id,
    link,
    linkText,
    linkDetails
}) => {
    return (
        <div>
            <Tooltip
                title={linkDetails}
                arrow
            >
                <a href={link} id={id} className="link-tree-linkItem" target="_black" rel="noreferrer nooppener">
                    {linkText}
                </a>
            </Tooltip>
        </div>
    );
};

export default LinkItem;