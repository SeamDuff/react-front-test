import React from 'react';

type CardProps = {
  title: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="p-4 border border-gray-300 rounded shadow">
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <div>{children}</div>
  </div>
);

export default Card;
