import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const FetchingData = () => {
  const [user, setUser] = useState(null);

  // Set up two state values isLoading & isError
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(url);
        const obj = await res.json();
        setUser(obj);
        if(!res.ok){
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        // Set error state to true
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchUser();
  }, []);

  // If the data is loading...
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  // If there is an error...
  if (isError) {
    return <h2>Error!</h2>;
  }

  // Default return statement.
  return (
  <div>
    <img style={{width: '150px', borderRadius: '25px'}}
                src={user.avatar_url}
                alt={user.name}
    />
    <h2>{user.name}</h2>
    <h3>Works at {user.company}</h3>
    <p>{user.bio}</p>
  </div>);
};

export default FetchingData;
