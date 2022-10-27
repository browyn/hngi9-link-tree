import React from 'react';

import links from '../../data/links';

import LinkItem from '../Link/LinkItem';
import LinkDetails from '../Link/LinkDetails';
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
                                id={link.id}
                                linkDetails={<LinkDetails title={link.title} subText={link.subText} />}
                            />
                        ))
                        }
                    </div>
                    <div className="link-tree-cardBody-social">
                        <a href="https://hng9.slack.com/" target="_black" rel="noreferrer nooppener">
                            <img src={slack} alt="" />
                        </a>

                        <a href="https://github.com/browyn" target="_black" rel="noreferrer nooppener">
                            <img src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardBody;