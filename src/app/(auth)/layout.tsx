import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>layout for auth group only</div>
      {children}
    </>
  );
};

export default AuthLayout;
