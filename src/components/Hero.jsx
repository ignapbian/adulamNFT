import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import background from '../assets/bg.jpg'
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
      className="relative h-[600px] w-full bg-no-repeat bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10">
        <div className="flex flex-col justify-center items-center mx-auto py-10">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-5xl font-bold text-center">
              A.I Arts <br />
              <span className="text-gradient">NFTs</span> Collection
            </h1>

            <p className="text-white font-semibold text-sm mt-3">
              Mint and collect the hottest NFTs around.
            </p>

            <p className="text-white text-sm font-medium text-center">
            Welcome to the future of digital art! <br></br> Our platform offers a revolutionary collection of NFTs, each uniquely crafted by cutting-edge artificial intelligence.<br></br> These AI-generated masterpieces are set to transform the NFT market, offering collectors and enthusiasts an unparalleled opportunity to own a piece of the future.<br></br> Dive into a world where technology meets creativity, and explore the limitless possibilities of AI-driven art.<br></br> Join us in redefining the boundaries of digital ownership and innovation.
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
