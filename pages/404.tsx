import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="wrapper">
      <div className="content max-w-4xl mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

const Custom404 = () => {
  return (
    <Wrapper>
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </Wrapper>
  );
};

export default Custom404;

