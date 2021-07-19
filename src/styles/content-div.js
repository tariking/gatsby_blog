import { rhythm } from '../utils/typography'

export const contentStyle = {
  backgroundColor: 'var(--navHead)',
  color: 'var(--textNormal)',
  transition: 'color 0.2s ease-out, background 0.2s ease-out',
  marginLeft: `auto`,
  marginRight: `28px`,
  maxWidth: rhythm(30),
  paddingLeft: `${rhythm(4 / 4)}`,
  paddingRight: `${rhythm(3 / 4)}`,
  paddingTop: '0',
  paddingBottom: '0',
}

export const postContentStyle = {
  backgroundColor: 'var(--navHead)',
  color: 'var(--textNormal)',
  transition: 'color 0.2s ease-out, background 0.2s ease-out',
  marginLeft: `auto`,
  marginRight: `30px`,
  maxWidth: rhythm(30),
  paddingLeft: `28px`,
  paddingRight: `${rhythm(3 / 4)}`,
  paddingTop: '0',
  paddingBottom: '0',
}

export const postContentSideStyle = {
  backgroundColor: 'var(--bg)',
  marginRight: `auto`,
  marginTop: '150px',
  width: '198px',
}
