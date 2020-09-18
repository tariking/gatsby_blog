import Typography from 'typography'
import theme from 'typography-theme-github'

theme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3,h4,h5': {
    marginBottom: rhythm(1 / 2),
    marginTop: rhythm(2),
  },
})

theme.googleFonts = [
  {
    name: 'Noto+Sans+JP',
    styles: ['400'],
  },
]

theme.headerFontFamily = ['Noto Sans JP']
theme.bodyFontFamily = ['Noto Sans JP']

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
