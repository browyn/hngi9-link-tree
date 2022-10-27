import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const CardContainer = () => {

    return (
        <>
            <div className="link-tree-cardContainer">
                <div className="link-tree-cardContainer-content">
                    <CardHeader />
                    <CardBody />
                </div>
            </div>
        </>
    );
};

export default CardContainer;