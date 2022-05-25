import React, { useState, useEffect } from "react";
import Web3 from "web3";
import "./assets/css/App.css";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css"

function App(props) {
  const loadweb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.requestAccounts;
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("No ethereum browser detected, Check Metamask");
    }
  }
  useEffect(() => {
     loadweb3();
  }, []);
  const [account, setAccount] = useState("0x0");
  return (
    <>
      <Navbar account={account} />
      <div className="text-center">
        Hello world
      </div>
    </>

  );
}

export default App;
