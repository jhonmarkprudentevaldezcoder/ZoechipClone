import React from 'react';

const MiddleContent = () => {
  return (
    <div className="container  md:w-1/2 lg:w-1/3">
      <div className="p-4 text-white">
        <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl ">Movies</h2>
        <p className="mt-2 md:mt-4 font-semibold text-base">
          Movies move us like nothing else can, whether they’re scary, funny,
          dramatic, romantic or anywhere in-between. So many titles, so much to
          experience.
        </p>
      </div>
    </div>
  );
};

export default MiddleContent;
