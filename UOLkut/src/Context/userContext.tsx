import React, { createContext, ReactNode, useState } from "react";

interface userId  {

  userUid: string;
  setUserUid: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContextId = createContext<userId | null>(null);

interface Props  {
  
  children: ReactNode;
}


export function UserContextProvider(props: Props) {

  const [userUid, setUserUid] = useState(" ");

  
  return (
    <UserContextId.Provider value={{ userUid, setUserUid }}>
        {props.children}
    </UserContextId.Provider>
  );
}

