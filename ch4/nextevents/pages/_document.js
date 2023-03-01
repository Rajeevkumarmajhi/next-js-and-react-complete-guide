import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id='overlay'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
