import React from "react";

const Logic = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            <h2>
              {user.name}state :
              {user.state === 1 && (
                <span className="stateStyleGreen">{user.name}</span>
              )}
              {user.state === 2 && (
                <span className="stateStyleOrange">{user.name} </span>
              )}
              {user.state === 3 && (
                <span className="stateStyleRed">{user.name} </span>
              )}
              {user.state === 4 && <span>User rejected</span>}
              {user.state === 5 && <span>Unverified user</span>}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Logic;
