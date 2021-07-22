import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'

const Tag = props => {

  return (
    <div className={props.index ? 'tag-index' : 'tag'}>
      {props.tags.map((tag, index) => {
        return (
          <Link
            to={`/tags/${_.kebabCase(tag)}/`}
            key={index}
            className={props.index ? 'tag__listindex' : 'tag__list'}
          >
            #{tag}
          </Link>
        )
      })}
    </div>
  )
}

export default Tag
