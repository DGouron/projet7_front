import React, { useState } from "react";

function ListAccordion({ header, list }) {
  const [open, setOpen] = useState(false);

  return (
    <article>
      <button onClick={() => setOpen(!open)}>{header}</button>
      {open && (
        <div>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </div>
      )}
    </article>
  );
}

export default ListAccordion;
