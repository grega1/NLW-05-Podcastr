/* Arquivo que informa o formato da HTML em volta da aplicação */
// Será chamado uma unica vez, diferente do App que é carregado toda vez que temos uma
// Variação de rota
import Document, { Html, Head, Main, NextScript } from 'next/document';

//Next necessita de componentes no formato de classes
// Main Onde fica a aplicação
// NextScript - Scripts que a aplicação necessita
export default class MyDocument extends Document{
  render(){
    return(
      <Html>
        <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main /> 
          <NextScript />  
        </body>
      </Html>

    );
  }
}