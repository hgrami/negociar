import React from 'react';

const MembersInfo: React.FC = () => {
  const authors = [
    { name: "Héctor Gabriel Ramírez Asturias", id: "202405195" },
    { name: "Ana Beatriz Alejandra Aguilar Pérez", id: "202405864" },
    { name: "Karen Yecenia Dubón Camey", id: "201726003" },
    { name: "Herminia Jiménez Carillo", id: "201840254" },
    { name: "Mario René Ramírez Caracún", id: "202407905" },
    { name: "Angelica Pedro Ajanel", id: "202005612" },
  ];

  const firstLineAuthors = authors.slice(0, 3);
  const secondLineAuthors = authors.slice(3);

  const renderAuthorLine = (authorGroup: typeof authors) => (
    <p className="text-center">
      {authorGroup.map((author, index) => (
        <span key={author.id}>
          {author.name} ({author.id})
          {index < authorGroup.length - 1 ? ', ' : ''}
        </span>
      ))}
    </p>
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-xs">
      <p className="text-center font-bold mb-1">Presentado por:</p>
      {renderAuthorLine(firstLineAuthors)}
      {renderAuthorLine(secondLineAuthors)}
    </div>
  );
};

export default MembersInfo;