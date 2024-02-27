import React, { useState } from "react";
import UserAuthentication from "./UserAuthentication";

export default function Authentication() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div>
      {isLogin ? (
        <>
          <UserAuthentication
            type="Login"
            isLogin={true}
            setIsLogin={setIsLogin}
          />
        </>
      ) : (
        <UserAuthentication
          type="SignUp"
          isLogin={false}
          setIsLogin={setIsLogin}
        />
      )}
    </div>
  );
}
