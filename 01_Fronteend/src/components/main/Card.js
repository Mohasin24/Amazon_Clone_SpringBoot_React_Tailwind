import React from "react";

const Card = ({ CardDetails, title }) => {

  return (
    <div className="bg-white flex flex-col">
      <p className="text-[1.2rem] font-bold p-2">{title}</p>

      <div className="grid grid-cols-2 p-2 cursor-pointer">
        {CardDetails.map(({ src, text }) => (
          <div className="text-[0.8rem] flex flex-col justify-evenly m-1">
            <div className="h-full w-full">
              <img src={src} alt={text} />
            </div>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
