import React, { useState } from "react";



const Ternury = ({ list }) => {
  // let show;

  // const redButtonStyle = {
  //   background: "red",
  //   fontSize: "18px",
  // };

  // if (list.state ==1) {
  //   b =
  //     <p>
  //       {list.name} = {<button>click me</button>}
  //     </p>

  // } else {
  //   b = <p>please logindddddddddddddddddd</p>;
  // }
  // } else if (user.isGuest) {
  //   blue = <p>you Guest</p>;
  // } else {
  //   blue = <p>not ok</p>;
  // }
  // const clickHandlerStyle = () => {
  //   if(list.state === 3){
  //     console.log("d")
  //   }else {
  //     console.log("bad")
  //   }
  // }
  



  return (
    <>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            <h2>
              {user.name} , state : {user.state===1 ? 
              <span className="stateStyleGreen">{user.state}</span>:
              user.state===2 ? <span className="stateStyleOrange">{user.state}</span>:
              user.state===3 ?<span className="stateStyleRed">{user.state}</span> :
              user.state===4 ?<span>User rejected</span> :
              user.state===5 ?<span>Unverified user</span> :null
                }
            </h2>
          </li>
          
        ))}
        
      
        
      </ul>
    </>
  );
};

export default Ternury;
