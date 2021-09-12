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
        <div className="spinner_container" id = "spin_id">
          <div className="spinner">
              <div className="spinner-item"></div>
              <div className="spinner-item"></div>
              <div className="spinner-item"></div>
            </div>
        </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
