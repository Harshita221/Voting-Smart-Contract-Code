
export const contractAddress = "0xYourContractAddress";

export const contractABI = [
  {
    "inputs": [],
    "name": "getCandidateList",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "party", "type": "string" },
          { "internalType": "uint256", "name": "age", "type": "uint256" },
          { "internalType": "uint8", "name": "gender", "type": "uint8" },
          { "internalType": "uint256", "name": "candidateId", "type": "uint256" },
          { "internalType": "address", "name": "candidateAddress", "type": "address" },
          { "internalType": "uint256", "name": "votes", "type": "uint256" }
        ],
        "internalType": "struct Vote.Candidate[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
