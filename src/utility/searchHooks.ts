import React, { useEffect, useState } from "react";

const useSearchUser = (users: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [renderingUsers, setRenderingUsers] = useState(users);
  const [timeOut, setTimeOut] = useState(null);

  const searchUsers = () => {
    const filteredUsers = users.filter((user: any) => {
      const recordName = user.name.toLowerCase();
      const recordUserName = user.username.toLowerCase();
      const recordEmail = user.email.toLowerCase();
      const searchName = name.toLowerCase();
      const searchEmail = email.toLowerCase();

      if (name !== "" && email !== "") {
        return (
          (recordName.indexOf(searchName) !== -1 ||
            recordUserName.indexOf(searchName) !== -1) &&
          recordEmail.indexOf(searchEmail) !== -1
        );
      }

      if (name) {
        return (
          recordName.indexOf(searchName) !== -1 ||
          recordUserName.indexOf(searchName) !== -1
        );
      }

      if (email) {
        return recordEmail.indexOf(searchEmail) !== -1;
      }

      return false;
    });
    setRenderingUsers(filteredUsers);
  };

  const searchDebounce = () => {
    console.log(timeOut)
    let timeout: any;
    if (timeOut) {
      setTimeOut(null);
    }
    timeout = setTimeout(() => {
      searchUsers();
    }, 100);
    setTimeOut(timeout);
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type === "name") {
      setName(event.target.value);
    } else {
      setEmail(event.target.value);
    }
  };

  useEffect(() => {
    if (name !== "" || email !== "") {
      searchDebounce();
    } else {
      setRenderingUsers(users);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users, name, email]);

  return { name, email, renderingUsers, handleInputChange };
};

export default useSearchUser;
