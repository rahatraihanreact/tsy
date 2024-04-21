import React, { useState, useEffect } from "react";
import "./Friends.css";
import sauravIMG from "./images/saurav.jpg";
import emonIMG from "./images/emon.jpg";
import slutIMG from "./images/slut.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


export const Friends = () => {
  // Load friend requests from local storage or initialize to default values
  const initialFriendRequests = JSON.parse(localStorage.getItem("friendRequests")) || {
    saurav: false,
    emon: false,
    slut: false,
  };

  // State to keep track of friend request status
  const [friendRequests, setFriendRequests] = useState(initialFriendRequests);

  // Update local storage whenever friendRequests state changes
  useEffect(() => {
    localStorage.setItem("friendRequests", JSON.stringify(friendRequests));
  }, [friendRequests]);

  // Function to handle friend request
  const handleFriendRequest = (person) => {
    // Toggle friend request status
    setFriendRequests((prevRequests) => ({
      ...prevRequests,
      [person]: !prevRequests[person],
    }));
    // Display pop-up message based on friend request status
    if (!friendRequests[person]) {
      alert(`Friend request sent to ${person}!`);
    } else {
      alert(`Friend request cancelled for ${person}!`);
    }
  };






  // Load counts from local storage or default to 0
  const initialSauravCount = parseInt(localStorage.getItem("saurav"), 10) || 0;
  const initialEmonCount = parseInt(localStorage.getItem("emon"), 10) || 0;
  const initialSlutCount = parseInt(localStorage.getItem("slut"), 10) || 0;

  // State to hold the counts
  const [sauravCount, setSauravCount] = useState(initialSauravCount);
  const [emonCount, setEmonCount] = useState(initialEmonCount);
  const [slutCount, setSlutCount] = useState(initialSlutCount);

  // Update local storage whenever counts change
  useEffect(() => {
      localStorage.setItem("saurav", sauravCount.toString());
      localStorage.setItem("emon", emonCount.toString());
      localStorage.setItem("slut", slutCount.toString());
  }, [sauravCount, emonCount, slutCount]);

  // Functions to increment counts
  const hitSaurav = () => {
      setSauravCount(sauravCount + 1);
  };

  const hitEmon = () => {
      setEmonCount(emonCount + 1);
  };

  const hitSlut = () => {
      setSlutCount(slutCount + 1);
  };







  return (
    <div className="container">
      <div className="saurav">
        <img src={sauravIMG} alt="" />
        <h3>Name : Raht Raihan</h3>
        <h5>Age : 30</h5>
        <p>HITS : {sauravCount}</p>
        <button onClick={hitSaurav}><FontAwesomeIcon className="like" icon={faThumbsUp} /></button>
        <button
          className="add-friend-button"
          onClick={() => handleFriendRequest("saurav")}
        >
          {friendRequests.saurav ? "Cancel Request" : "Add Friend"}
        </button>
      </div>
      <div className="emon">
        <img src={emonIMG} alt="" />
        <h3>Name : Hanif Sarker</h3>
        <h5>Age : 29</h5>
        <p>HITS : {emonCount}</p>
        <button onClick={hitEmon}><FontAwesomeIcon className="like" icon={faThumbsUp} /></button>

        <button
          className="add-friend-button"
          onClick={() => handleFriendRequest("emon")}
        >
          {friendRequests.emon ? "Cancel Request" : "Add Friend"}
        </button>
      </div>
      <div className="slut">
        <img src={slutIMG} alt="" />
        <h3>Name : Unknown Slut</h3>
        <h5>Age : Unknown</h5>
        <p>HITS : {slutCount}</p>
        <button onClick={hitSlut}><FontAwesomeIcon className="like" icon={faThumbsUp} /></button>

        <button
          className="add-friend-button"
          onClick={() => handleFriendRequest("slut")}
        >
          {friendRequests.slut ? "Cancel Request" : "Add Friend"}
        </button>
      </div>
    </div>
  );
};
