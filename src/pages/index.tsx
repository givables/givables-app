import Head from 'next/head'
import Footer from '../components/layout/footer'
import Navbar from '../components/layout/navbar'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>Givables</title>
      </Head>

      <nav>
        <Navbar/>
      </nav>

      <main className="flex flex-col flex-grow items-center justify-center w-full">

      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  )
}
