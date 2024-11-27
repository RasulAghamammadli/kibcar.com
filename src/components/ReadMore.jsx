import { useState } from "react";

export default function ReadMore({ text = "", maxLength }) {
  // initial
  const [isExpanded, setIsExpanded] = useState(false);

  // text not null&undefined
  if (!text || !maxLength || text.length <= maxLength) {
    return <div>{text}</div>;
  }

  return (
    <div className="pt-[15px]">
      <div>{isExpanded ? text : `${text.substring(0, maxLength)}...`}</div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}
