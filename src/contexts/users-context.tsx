import React, { useState, useEffect } from "react";
import { useAxios } from "../utility/hooks";

export const UserContext = React.createContext({});

const UserContextProvider = (props:any) => {
  console.log("UserContextProvider")
  const [users, setUsers] = useState<[] | null>([]);
  const result = useAxios({
    url: "https://jsonplaceholder.typicode.com/users",
    headers: {},
  });
  useEffect(() => {
    setUsers(result?.response);
  }, [result]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
