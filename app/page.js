import Header from '../components/Header'
import Footer from '../components/Footer'
import Principal from '@/components/Principal'
import News from '@/components/News'

export default function Home() {
  return (
    <div>

    <header >
      <Header></Header>
    </header>

    <main>
      <Principal>
        <News></News>
      </Principal>
      
    </main>

    <footer>
      <Footer></Footer>
    </footer>

    </div>
  )
}
