import React from "react";

import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

const CardContainer = () => {
  const scrollTopRef = React.useRef();

  React.useEffect(() => {
    if (scrollTopRef.current)
      scrollTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="link-tree-cardContainer" ref={scrollTopRef}>
        <div className="link-tree-cardContainer-content">
          <CardHeader />
          <CardBody />
        </div>
      </div>
    </>
  );
};

export default CardContainer;
