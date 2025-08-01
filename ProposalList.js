
import React, { useEffect, useState } from "react";
import { getContract } from "../contract";

const ProposalList = () => {
  const [proposals, setProposals] = useState([]);
  const [results, setResults] = useState([]);
  const [voted, setVoted] = useState(false);

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    const contract = await getContract();
    const props = await contract.getProposals();
    setProposals(props);
  };

  const handleVote = async (index) => {
    const contract = await getContract();
    const tx = await contract.vote(index);
    await tx.wait();
    setVoted(true);
    alert("Vote submitted!");
  };

  const viewResults = async () => {
    const contract = await getContract();
    const res = await contract.getResults();
    setResults(res.map((count) => count.toString()));
  };

  return (
    <div>
      <h2>VoteChain – Voting App</h2>
      <ul>
        {proposals.map((proposal, idx) => (
          <li key={idx}>
            {proposal}{" "}
            <button onClick={() => handleVote(idx)} disabled={voted}>
              Vote
            </button>
          </li>
        ))}
      </ul>
      <button onClick={viewResults}>Show Results</button>
      {results.length > 0 && (
        <ul>
          {proposals.map((proposal, i) => (
            <li key={i}>
              {proposal}: {results[i]} votes
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProposalList;
