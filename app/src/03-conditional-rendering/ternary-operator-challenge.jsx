import React, { useState } from "react";

const UserChallenge = () => {
  const [user,setUser] = useState(null);

  const login = () => {
    setUser({name:'Mathew'})
  }

  const logout = () => {
    setUser(null)
  }

  return (
  <>
    <h2>Ternary Operator : User Challenge</h2>
    {user?(
    <>
    <h4>Hello there {user.name}</h4>
    <button type="button" onClick={logout}>logout</button>
    </>
    )
    :(
    <>
      <h4>Please login</h4>
      <button type="button" onClick={login}>login</button>
    </>)}
  </>
  );
};

export default UserChallenge;
