import CssBaseline from "@mui/material/CssBaseline"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <CssBaseline>
      <Component {...pageProps} />
    </CssBaseline>
  )
}

export default MyApp
