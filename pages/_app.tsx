import { AppProps } from 'next/app'
import { ServerStyleSheet } from 'styled-components'
import '../styles/global.css'

export default ({ Component, pageProps }: AppProps) => {
  const sheet = new ServerStyleSheet()
  return sheet.collectStyles(<Component {...pageProps} />)
}
