import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractABI from "../abis/src/contracts/Freedom721.sol/Freedom721.json";
import contractAddress from "../abis/contractAddress.json";

const MyNFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const provider = new ethers.providers.JsonRpcProvider("https://polygon-rpc.com");
        const contract = new ethers.Contract(contractAddress.address, contractABI.abi, provider);

        const items = [];

        for (let i = 0; i < 20; i++) {
          try {
            const tokenURI = await contract.tokenURI(i);
            const response = await fetch(tokenURI.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"));
            const metadata = await response.json();
            items.push({
              tokenId: i,
              image: metadata.image.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
              name: metadata.name,
              description: metadata.description,
            });
          } catch (err) {
            console.log("Token", i, "no existe aún.");
          }
        }

        setNfts(items);
        setLoading(false);
      } catch (err) {
        console.error("❌ Error cargando NFTs:", err);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  return (
    <div id="#nfts" className="bg-black/10 z-40">
      {loading ? (
        <div className="flex justify-center items-center h-2">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {nfts.map((nft) => (
            <div key={nft.tokenId} className="bg-white rounded-xl shadow p-3">
              <img src={nft.image} alt={nft.name} className="rounded-xl" />
              <h2 className="text-lg font-bold mt-2">{nft.name}</h2>
              <p className="text-sm text-gray-600">{nft.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyNFTs;