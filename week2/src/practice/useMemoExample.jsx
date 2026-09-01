import { memo, useCallback, useMemo, useState } from "react";

function SlowSquare(n) {
  for (let i = 0; i < 10000000; i++) {}
  return n * n;
}

const Display = memo(function Display({ rslt }) {
  console.log("Display rendered");
  return <p>Square : {rslt}</p>;
});

export default function Memo() {
  const [number, setNumber] = useState(2);
  const [unrelated, setUnrelated] = useState(0);

  const squared = useMemo(() => SlowSquare(number), [number]); //recompute only when changed
  const handleClick = useCallback(() => setUnrelated((u) => u + 1), []);

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <Display rslt={squared} />
      <button onClick={handleClick}>Unrelated re-render ({unrelated})</button>
    </>
  );
}
