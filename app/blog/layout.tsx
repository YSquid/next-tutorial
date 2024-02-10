import React, { ReactNode } from "react";

//This layout will only been rendered on /blog routes as its defined in the /blog directory
//In this way, we can use components common to blog in this layout, vs components common to all in the root layout 
const BlogLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>This is the blog Layout</h2>
      {children}
    </div>
  );
};

export default BlogLayout;
