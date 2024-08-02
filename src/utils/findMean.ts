import { Review } from "@src/types";

function findMean(array: Review[]): number {
  const count = array.length;
  let total = 0;
  array.forEach((item) => {
    total = total + item.rating;
  });
  const mean = Math.floor(total / count);
  return mean;
}

export default findMean;
