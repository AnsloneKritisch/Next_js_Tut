import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p>Dashboad Navbar</p>
      {children}
      <p>Dashboad Footer</p>
    </div>
  );
};

export default layout;
