import abi from './abis/src/contracts/Freedom721.sol/Freedom721.json'
import address from './abis/contractAddress.json'
import { getGlobalState, setGlobalState } from './store'
import { ethers } from 'ethers'

const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi

const getEthereumContract = () => {
  const connectedAccount = getGlobalState('connectedAccount')
  if (!connectedAccount) return null

  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  return new ethers.Contract(contractAddress, contractAbi, signer)
}

const isWalletConnected = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_accounts' })

    window.ethereum.on('chainChanged', () => window.location.reload())

    window.ethereum.on('accountsChanged', async () => {
      setGlobalState('connectedAccount', accounts[0])
      await isWalletConnected()
    })

    if (accounts.length) {
      setGlobalState('connectedAccount', accounts[0])
    } else {
      alert('Please connect wallet.')
      console.log('No accounts found.')
    }
  } catch (error) {
    reportError(error)
  }
}

const connectWallet = async () => {
  try {
    if (!ethereum) return alert('Please install Metamask')
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
    setGlobalState('connectedAccount', accounts[0])
  } catch (error) {
    reportError(error)
  }
}

// NUEVA función: cargar NFTs uno por uno
const loadNfts = async () => {
  try {
    const contract = getEthereumContract()
    if (!contract) return

    const nfts = []
    const MAX_SUPPLY = 20 // ajusta al total que quieras recorrer

    for (let i = 0; i < MAX_SUPPLY; i++) {
      try {
        const tokenURI = await contract.tokenURI(i)
        const url = tokenURI.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/')
        const res = await fetch(url)
        const metadata = await res.json()

        nfts.push({
          id: i,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/')
        })
      } catch (err) {
        console.log(`🔍 Token ${i} no encontrado aún`)
      }
    }

    setGlobalState('nfts', nfts.reverse())
  } catch (error) {
    reportError(error)
  }
}

// Eliminamos payToMint porque tu contrato usa mintNFT() directamente

const reportError = (error) => {
  console.log(error.message)
  throw new Error('No ethereum object.')
}

export {
  isWalletConnected,
  connectWallet,
  loadNfts
}