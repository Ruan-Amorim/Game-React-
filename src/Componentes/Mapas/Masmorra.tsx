import React, { ReactNode } from 'react';

interface MasmorraProps {
  children: ReactNode;
}

const Masmorra: React.FC<MasmorraProps> = ({ children }) => {
  return (
    <div className="container-masmorra">
      {children}
    </div>
  );
};

export default Masmorra;