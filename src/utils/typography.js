import Typography from 'typography'
import theme from 'typography-theme-github'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3,h4,h5': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
  h2: {
    borderBottom: '1px solid #c0c0c0'
  },
  a: {
    color: 'var(--textLink)',
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
})

theme.headerFontFamily = ['sans-serif']
theme.bodyFontFamily = ['sans-serif']

// const theme = {
//   baseFontSize: "16px",
//   baseLineHeight: 1.75,
//   scaleRatio: 2,
//   headerFontFamily: ["sans-serif"],
//   bodyFontFamily: ["sans-serif"],
// }
const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
