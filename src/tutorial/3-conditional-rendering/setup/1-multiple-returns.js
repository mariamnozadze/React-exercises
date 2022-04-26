import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(()=> {
    //setIsLoading(true);
    fetch(url)
    .then((resp) => {
      if (resp.status >= 200 && resp.status <= 299) {
        return resp.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(resp.statusText);
      }
    })
      .then((user) => {
        const {login} = user;
        setUser (login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error))
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>loading...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>error....</h1>
      </div>
    );
  }
  return <h2>{user}</h2>;
};

export default MultipleReturns;