import { useEffect, useState } from 'react'
import { useGlobalState } from './store'
import { isWalletConnected, loadNfts } from './Adulam'
import Alert from './components/Alert'
import MyNFTs from './components/myNFTS'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'

const App = () => {
  const [nfts] = useGlobalState('nfts')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBlockchainData = async () => {
      await isWalletConnected().then(() => console.log('Blockchain Loaded'))
      await loadNfts()
      setLoading(false)
    }
    loadBlockchainData()
  }, [])

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div className="gradient-bg-hero">
            <Header />
            <Hero />
          </div>
          <MyNFTs />
          <Footer />
          <Loading />
          <Alert />
        </>
      )}
    </div>
  )
}

export default App
