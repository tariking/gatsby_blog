import React from 'react'

const Toc = props => {
  if (props.data !== '') {
    return (
      <div className="toc">
        <h5 className="toc__title">CONTENTS</h5>
        <div
          className="toc__content"
          dangerouslySetInnerHTML={{
            __html: props.toc,
          }}
        />
      </div>
    )
  } else {
    return ''
  }
}

export default Toc
