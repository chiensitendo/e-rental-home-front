import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends NextDocument {
  static async getInitialProps(ctx) {
    
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    
    return (
      <Html lang="en">
        <Head>
          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link rel="icon" href="/app_icon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
