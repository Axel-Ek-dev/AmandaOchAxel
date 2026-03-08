import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import React from 'react'

export default function Layout({ children, title = 'Axel & Amanda' }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#E8E6DF" />
      </Head>
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  )
}
