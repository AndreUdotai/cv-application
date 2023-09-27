// import ReactDOMServer from 'react-dom/server';
// import html2pdf from 'html2pdf.js/dist/html2pdf.min';

import { Preview, print } from 'react-html2pdf';

import Cv from './Cv';

export default function Download() {
    return (
        <div>
            <Preview id={'html-template'} html={< Cv />} />
            <button onClick={() => print('a', 'html-template')}> print</button>
            <Preview id={'jsx-template'}>
                <Cv />
            </Preview>
            <button onClick={() => print('a', 'jsx-template')}> print</button>
        </div>
    );
}

// export default function Download() {
//     // const pdfJSX = () => {
//     //   return (
//     //     < Cv />
//     //   )
//     // }

//     const printHandler = () => {
//       const printElement = ReactDOMServer.renderToString(<Cv/>);

//       html2pdf().from(printElement).save();
//     }

//     return (
//       <div className="App">
//         <button onClick={printHandler}>Download</button>
//       </div>
//     );
//   }
