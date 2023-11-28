import React from "react";

const Switch = ({ list }) => {
  return (
    <>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            <h2>
              {user.name}, state:
              {(() => {
                switch (user.state) {
                  case 1:
                    return <span className="stateStyleGreen">{user.state}</span>;
                  case 2:
                    return <span className="stateStyleOrange">{user.state}</span>;
                  case 3:
                    return <span className="stateStyleRed">{user.state}</span>;
                  case 4:
                    return <span>User rejected</span>;
                  case 5:
                    return <span>Unverified user</span>;
                  default:
                    return null; // or a default case if needed
                }
              })()}
            </h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Switch;


