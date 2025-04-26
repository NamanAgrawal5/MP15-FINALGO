import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();

  const user = {
    name: "Naman Agrawal",
    email: "namanagarwal578@gmail.com",
    balance: "$2600",
    profit: "$1600",
    totalTrades: 10,
    winRate: "80%",
    profilePic: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    recentTrades: [
      { id: 1, asset: "TSLA", type: "BUY", profit: "+$300" },
      { id: 2, asset: "TSLA", type: "SELL", profit: "+$250" },
      { id: 3, asset: "TSLA", type: "BUY", profit: "+$200" },
      { id: 10, asset: "TSLA", type: "BUY", profit: "-$100" },
      { id: 4, asset: "TSLA", type: "BUY", profit: "+$150" },
      { id: 5, asset: "TSLA", type: "SELL", profit: "+$250" },
      { id: 6, asset: "TSLA", type: "BUY", profit: "+$200" },
      { id: 7, asset: "TSLA", type: "SELL", profit: "+$250" },
      { id: 8, asset: "TSLA", type: "BUY", profit: "+$200" },
      { id: 9, asset: "TSLA", type: "SELL", profit: "-$100" },
    ]    
  };

  return (
    <div className="profile-container">
      <button className="back-button" onClick={() => navigate("/home")}>← Back to Dashboard</button>

      <div className="card user-info">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <div>
          <h1 className="user-name">{user.name}</h1>
          <p className="user-email">📧 {user.email}</p>
          <p className="user-balance">💰 Balance: {user.balance}</p>
          <p className="user-trades">📊 Total Trades: {user.totalTrades}</p>
          <p className="user-winrate">🏆 Win Rate: {user.winRate}</p>
        </div>
      </div>

      <div className="card">
        <h2>Recent Trades</h2>
        <table>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Type</th>
              <th>Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {user.recentTrades.map((trade) => (
              <tr key={trade.id}>
                <td>{trade.asset}</td>
                <td className={trade.type === "BUY" ? "buy" : "sell"}>{trade.type}</td>
                <td className={trade.profit.startsWith("+") ? "profit" : "loss"}>{trade.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
