// function that will split an array into groups of n and return as one array with sub arrays.
const groupByN = (n, arr) => {
  if (arr.length < 1) return ["empty array"];
  if (!arr) return undefined;
  
  const grouped = [];
  for (let i = 0; i < arr?.length; i += n) {
    grouped.push(arr.slice(i, i + n));
  };

  return grouped;
};

export { groupByN };