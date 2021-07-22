import React from 'react'
import { Link } from 'gatsby'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTag } from '@fortawesome/free-solid-svg-icons'

const Tag = props => {
  library.add(faTag)

  return (
    <div className={props.index ? 'tag-index' : 'tag'}>
      {props.tags.map((tag, index) => {
        return (
          <Link
            to={`/tags/${_.kebabCase(tag)}/`}
            key={index}
            className={props.index ? 'tag__listindex' : 'tag__list'}
          >
            <FontAwesomeIcon icon={faTag} style={{
                  marginRight: 1.3,
                }}/>{tag}
          </Link>
        )
      })}
    </div>
  )
}

export default Tag
