import React from 'react'
import { useEffect, useState } from 'react'
import { useGlobalState } from './store'
import { isWalletConnected, loadNfts } from './Adulam'
import Alert from './components/Alert'
import MyNFTs from './components/myNFTS'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Loading from './components/Loading'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './components/AboutUs'

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
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
