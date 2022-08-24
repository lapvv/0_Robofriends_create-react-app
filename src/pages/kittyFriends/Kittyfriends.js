import React, { Component, useState, useEffect } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "tachyons";

function Kittyfriends() {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: robots,
  //     searchfield: "",
  //   };
  // }
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
    // console.log(event.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        setRobots(users);
      });
  }, []);

  const filteredRobots = robots.filter((robots) => {
    return robots.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  // console.log(filteredRobots);
  return (
    <div className="tc">
      <h1
        className="f1 mt0"
        style={{
          fontFamily: "Kaushan Scripts, cursive",
          color: "darkblue",
          padding: "10px 0",
        }}
      >
        KITTYFRIENDS
      </h1>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobots} />
    </div>
  );
}

export default Kittyfriends;
