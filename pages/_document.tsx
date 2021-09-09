import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        {/* Google Analytics 추적을 위한 스크립트 삽입 */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

//

// _document는 Next.js에서 제공하는 document를 커스텀해서 사용할 수 있게하는 파일이다.
// Next.js는 Markup 정의를 건너 뛰기 때문에 HTML이나 head, body 태그를 수정해야 할 때 사용한다.
// _document는 서버에서만 렌더링하며 onClick등의 EventHandler도 사용하지 않는다.
// 모든 페이지에서 적용되어야 하는 것은 _app에서 작성한다.
// _document에서 사용하는 Head와 _app에서 사용하는 Head는 다르다.
// title등을 바꿀때에는 _app에서 변경하거나 각 컴포넌트에서 Head를 import해서 변경해야 한다.
