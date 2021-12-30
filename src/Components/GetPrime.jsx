import React, { useMemo } from "react";

const isPrime = (n) => {
  let count = 0;
  if (n === 1 || n === 0) {
    return false;
  }
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  return true;
};

const getNthPrimeNo = (n) => {
  console.log(`getting ${n}th prime no`);
  let count = 1;
  let i = 0;
  while (count <= n) {
    i++;
    let res = isPrime(i);
    if (res) {
      count++;
    }
  }
  return i;
};

const GetPrime = ({ number, label, next }) => {
  const val = getNthPrimeNo(number);

  // expensive operation is being memoised
  // const val = useMemo(() => getNthPrimeNo(number), [number]);

  return (
    <div>
      <h3> {label} </h3>
      <h3> The {number} th Prime number is </h3>
      <h5> {val} </h5>
      <button onClick={next}>NEXT</button>
    </div>
  );
};

// React.memo
// Higher order component
// export default React.memo(GetPrime, (prevProps, nextProps) => {
//   return prevProps.number === nextProps.number;
// });

export default React.memo(GetPrime);
