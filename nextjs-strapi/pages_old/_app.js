import '../styles/globals.css'
import Header from '../components/Header'
import { useTheme, ThemeProvider, withTheme } from '@emotion/react'
import GlobalStyles from '../components/GlobalStyles/GlobalStyles'


const theme = {
  colors: {
    primary: '#ff0000'
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles isDark />
        <Header />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
