import React from "react";

const Else = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((user) => {
          if (user.state === 1) {
            
            return (
              <li key={user.id}>
                <h2>
                  {user.name} , state :
                  <span className="stateStyleGreen">{user.state}</span>
                </h2>
              </li>
            );
          } else if (user.state === 2) {
            return (
              <li key={user.id}>
                <h2>
                  {user.name} , state :
                  <span className="stateStyleOrange">{user.state}</span>
                  
                </h2>
              </li>
            );
          } else if (user.state === 3) {
            return (
              <li key={user.id}>
                <h2>
                  {user.name} , state :
                  <span className="stateStyleRed">{user.state}</span>
                  
                </h2>
              </li>
            );
          } else if (user.state === 4) {
            return (
              <li key={user.id}>
                <h2>
                  {user.name} , state :
                  <span>User rejected</span>
                  
                </h2>
              </li>
            );
          }else if (user.state === 5) {
            return (
              <li key={user.id}>
                <h2>
                  {user.name} , state :
                  <span>Unverified user</span>
                  
                </h2>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

export default Else;


