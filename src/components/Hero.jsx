import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import background from '../assets/bg.jpg'
import MyNFTs from './myNFTS'
import { setAlert, setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="relative h-screen w-full bg-no-repeat bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center mx-auto py-10 px-4 sm:px-8">
        <div className="flex flex-col justify-center items-center max-w-2xl text-center space-y-6">
          <h1 className="text-white text-4xl sm:text-6xl font-bold leading-tight mb-4 animate-fadeIn">
            NFTBlockBrothers <br />
            <span className="text-gradient">Unlocking Financial Freedom Through Art</span>
          </h1>

          <p className="text-white font-semibold text-lg sm:text-xl mt-2 animate-fadeIn delay-100">
            Welcome to NFTBlockBrothers, a pioneering Web3 platform where art meets empowerment.
          </p>

          <p className="text-white text-base sm:text-lg font-medium mt-4 animate-fadeIn delay-200">
            Our mission is to offer collectible NFTs that embody themes of financial freedom, empowerment, and social impact. Each piece is a unique, AI-crafted digital artwork, providing not just ownership, but identity and purpose.
          </p>

          <p className="text-white text-base sm:text-lg font-medium mt-4 animate-fadeIn delay-300">
            We facilitate seamless transactions through our proprietary platform, supporting card payments, Apple Pay, and Google Pay, with revenue received in USDT for transparency and efficiency.
          </p>

          <p className="text-white text-base sm:text-lg font-medium mt-4 animate-fadeIn delay-400">
            By purchasing an NFT from NFTBlockBrothers, you gain access to a world of exclusive benefits:
          </p>

          <ul className="text-white text-base sm:text-lg font-medium mt-4 space-y-2 animate-fadeIn delay-500">
            <li>- Ownership of a unique, AI-generated digital masterpiece.</li>
            <li>- A stake in a community that values independence, prosperity, and social impact.</li>
            <li>- Opportunities for future rewards and exclusive access to new collections and events.</li>
          </ul>
          <MyNFTs />
        </div>
      </div>
    </div>
  )
}

export default Hero
