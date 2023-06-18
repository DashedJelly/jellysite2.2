import { useContract, useNFTs, Web3Button } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";



export default function Buy() {
  
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract);

  return (
    
    <Container maxWidth="lg">
      <h1>Buy Alphas</h1>
      <p>Browse which Alphas are available from the collection.</p>
      
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
    
  );
}
