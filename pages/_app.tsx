import '../styles/global.css'
import { AppProps } from 'next/app'
import { ServerStyleSheet } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  const sheet = new ServerStyleSheet()
  return sheet.collectStyles(<Component {...pageProps} />)
}

