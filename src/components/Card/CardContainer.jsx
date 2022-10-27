import React from 'react';

import CardHeader from './CardHeader';
import CardBody from './CardBody';
import Notification from '../Notification';

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