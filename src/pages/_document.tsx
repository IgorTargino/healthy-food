import Document, { Head, Html, Main, NextScript } from 'next/document';

class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default myDocument;