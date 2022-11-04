import React from "react";

import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import LinkShare from "./LinkShare";

const LinkItem = ({
  id,
  link,
  linkText,
  linkDetails,
  linkTitle,
  linkSubText,
}) => {
  return (
    <div>
      {link === "/contact" ? (
        <Link
          to={link}
          id={id}
          className="link-tree-linkItem"
          onClick={(e) => {
            if (e.target !== e.currentTarget) {
              e.preventDefault();
            }
          }}
        >
          <span></span>

          {linkText}

          <LinkShare
            link={link}
            linkTitle={linkTitle}
            linkSubText={linkSubText}
          />
        </Link>
      ) : (
        <Tooltip title={linkDetails} placement="top-end" arrow>
          <a
            href={link}
            id={id}
            className="link-tree-linkItem"
            target="_blank"
            rel="noreferrer nooppener"
            onClick={(e) => {
              e.preventDefault();
              if (e.target === e.currentTarget) {
                window.open(link, "_blank");
              }
            }}
          >
            <span></span>

            {linkText}

            <LinkShare
              link={link}
              linkTitle={linkTitle}
              linkSubText={linkSubText}
            />
          </a>
        </Tooltip>
      )}
    </div>
  );
};

export default LinkItem;
