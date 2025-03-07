

# Voting Smart Contract

## Overview
This Solidity smart contract implements a decentralized voting system. It allows voters to register, candidates to enroll, and elections to be conducted with transparency and security. The contract ensures only eligible voters can participate and prevents duplicate voting.

## Features
- **Voter Registration**: Users can register as voters if they meet the age requirement (18+).
- **Candidate Registration**: Candidates can register to participate in the election.
- **Voting Process**: Registered voters can cast their vote for a candidate of their choice.
- **Voting Status**: The contract tracks whether the election is in progress, not started, or ended.
- **Voting Period Management**: The election commissioner can set start and end times for voting.
- **Vote Counting & Winner Announcement**: The contract counts votes and determines the winner.
- **Emergency Stop**: The election commissioner can halt voting in case of an emergency.

## Technologies Used
- Solidity 0.8.26
- Ethereum Blockchain

## Contract Structure
### Entities
1. **Voter**:
   - Name
   - Age
   - Voter ID
   - Gender
   - Voted Candidate ID
   - Wallet Address

2. **Candidate**:
   - Name
   - Party
   - Age
   - Gender
   - Candidate ID
   - Wallet Address
   - Vote Count

3. **Election Commissioner**:
   - Responsible for managing the election.

### Key Functions
- `registerCandidate()` – Allows a user to register as a candidate.
- `registerVoter()` – Allows a user to register as a voter.
- `getCandidateList()` – Returns the list of registered candidates.
- `getVoterList()` – Returns the list of registered voters.
- `castVote()` – Enables a voter to vote for a candidate.
- `setVotingPeriod()` – Sets the start and end time for voting.
- `getVotingStatus()` – Returns the current status of the election.
- `announceVotingResult()` – Declares the winner of the election.
- `emergencyStopVoting()` – Stops the voting process immediately.

## Deployment Instructions
1. Deploy the contract on the Ethereum network.
2. The deployer becomes the Election Commissioner.
3. Register candidates and voters before starting the election.
4. Set the voting period.
5. Allow registered voters to cast votes.
6. After the voting period ends, announce the results.

## License
This project is licensed under the MIT License.

