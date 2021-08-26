import Document, { Html, Head, Main, NextScript } from 'next/document'
import "@ant-design/pro-table/dist/table.css"
import "@ant-design/pro-field/dist/field.css"
import "@ant-design/pro-card/dist/card.css"
import "antd/dist/antd.css"
export default class MyDocument extends Document {
     render() {
          return (
               <html>
                    <Head>
                         <meta charSet={process.env.CHARSET} />
                         <link
                              rel='shortcut icon'
                              type='images/x-icon'
                              href='/static/favicon.ico'
                         />
                    </Head>
                    <body>
                         <Main />
                         <NextScript />
                    </body>
               </html>
          )
     }
}
