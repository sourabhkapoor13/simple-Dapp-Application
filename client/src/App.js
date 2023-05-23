import abi from "./contract/chai.json";
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import c from "./chai.png";
import './App.css';

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x2837ed4ecb5cd82a1d29b8506c69ad07cd5d6b1b";
      const contractABI = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });

          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });

          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractABI,
            signer
          );
          setAccount(account);
          setState({ provider, signer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  //   useEffect(() => {
  //     const connectWallet = async () => {
  //       const contractAddress = "0x2837ed4ecb5cd82a1d29b8506c69ad07cd5d6b1b";
  //       const contractABI = abi.abi;
  //       try {
  //         const { ethereum } = window;
  //         if (ethereum) {
  //           const account = await ethereum.request({method:"eth_requestAccounts",});
  //         }
  //         window.ethereum.on("chainChanged", () => {
  //           window.location.reload();
  //         });

  //         window.ethereum.on("accountsChanged", () => {
  //           window.location.reload();
  //         });
  //         const provider = new ethers.providers.Web3Provider(ethereum);
  //         const signer = provider.getSigner();
  //         const contract = new ethers.Contract(contractAddress, contractABI, signer);
  //         setAccount(account);
  //         setState({ provider, signer, contract });
  //       }  else {
  //         alert("Please install metamask");
  //       }
  //     }  catch(error) {
  //         console.log(error);
  //       }
  //     };
  //     connectWallet();},
  //  []);
  //console.log(state);
  //const [account, setAccount] = useState("None");
  return (
    <div className="bg-div " >
      <img src={c} style={{ minWidth: "17vw", maxHeight: "50vh" }} className=" imgs img-fluid d-flex justify-content-center align-items-center " alt=".."/>
      <div> <p
        className="text-muted lead  "
        style={{ marginTop: "-200px", marginLeft: "-200px" }}
      >
        <small className="sml">Connected Account - {account}</small>
      </p>
      </div>
      <div className="container">
        <Buy state={state}></Buy>
        <Memos state={state}></Memos>
      </div>
    </div>
  );
};

export default App;
