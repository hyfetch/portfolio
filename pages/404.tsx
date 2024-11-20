import React, { ReactNode } from "react";
import Link from "next/link";

type WrapperProps = {
  children: ReactNode;
  className?: string; // Allow customization of additional classes
};

// Wrapper component for consistent styling
const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div className={`wrapper ${className}`}>
      <main className="content max-w-4xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
};

// Custom 404 component for page not found
const Custom404: React.FC = () => {
  return (
    <Wrapper>
      <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to Home
      </Link>
    </Wrapper>
  );
};

export default Custom404;
