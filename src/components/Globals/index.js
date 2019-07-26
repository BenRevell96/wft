import React from 'react'
import Head from 'next/head'

export const GlobalHtml = () => {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <style jsx global>{`
        body {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </div>
  )
}
