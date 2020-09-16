import React from "react";

const Toc = props => {
  if(props.data !== "" ) {
    return (
      <div className="toc">
        <h4 className="toc__title">目次</h4>
        <div
          className="toc__content"
          dangerouslySetInnerHTML={{
            __html: props.data,
          }}
        />
      </div>
    );
  } else {
    return ""
  }
};

export default Toc;