
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "./contract";

const App = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loadCandidates = async () => {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      const data = await contract.getCandidateList();
      setCandidates(data);
    };

    loadCandidates();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>VoteChain DApp</h1>
      <h2>Candidates</h2>
      <ul>
        {candidates.map((cand, idx) => (
          <li key={idx}>
            <strong>{cand.name}</strong> ({cand.party}) - Votes: {cand.votes.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
