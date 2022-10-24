import React from 'react';

import links from '../../data/links';

import LinkItem from '../LinkItem';
import github from '../../assets/images/github.svg';
import slack from '../../assets/images/slack.svg';

const CardBody = () => {

    return (
        <>
            <div className="link-tree-cardBody">
                <div className="link-tree-cardBody-content">
                    <div className="link-tree-cardBody-linkItems">
                        {links.map((link) => (
                            <LinkItem
                                key={`link-tree-linkItem${link.linkText}`}
                                linkText={link.linkText}
                                link={link.link}
                            />
                        ))
                        }
                    </div>
                    <div className="link-tree-cardBody-social">
                        <img src={slack} alt="" />
                        <img src={github} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardBody;