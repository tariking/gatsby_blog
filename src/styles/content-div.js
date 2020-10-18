import { rhythm } from '../utils/typography'

export const contentStyle = {
  backgroundColor: 'var(--navHead)',
  color: 'var(--textNormal)',
  transition: 'color 0.2s ease-out, background 0.2s ease-out',
  marginLeft: `auto`,
  marginRight: `auto`,
  marginTop: '50px',
  maxWidth: rhythm(26),
  paddingLeft: `${rhythm(3 / 4)}`,
  paddingRight: `${rhythm(3 / 4)}`,
  paddingTop: '0',
  paddingBottom: `${rhythm(1.5)}`,
}

export const postContentStyle = {
  backgroundColor: 'var(--navHead)',
  color: 'var(--textNormal)',
  marginLeft: `auto`,
  //marginRight: `auto`,
  marginTop: '50px',
  maxWidth: rhythm(26),
  paddingLeft: `${rhythm(3 / 4)}`,
  paddingRight: `${rhythm(3 / 4)}`,
  paddingTop: '0',
  paddingBottom: `${rhythm(1.5)}`,
}

export const postContentSideStyle = {
  backgroundColor: 'var(--bg)',
  marginRight: `auto`,
  marginTop: '50px',
}
