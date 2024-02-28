import { readFile } from "fs/promises";

const readItems = () => {
  return readFile(`src/day_01/input.txt`, {
    encoding: "utf8",
  });
};

const splitWordAndFilterNumber = (word: string) =>
  word.split("").filter((word) => word.length > 0 && !isNaN(Number(word)));

const transformArrayIntoNumbers = (array: string[]) => {
  return array
    .map((item) => splitWordAndFilterNumber(item))
    .filter((item) => item.length > 0)
    .map((item) => (item.length === 1 ? [...item[0], item[0]] : item))
    .map((item) => item[0] + item[item.length - 1])
    .map((item) => +item);
};

export const main = async () => {
  const read = await readItems();
  const parse = read.split("\n");
  const calibrationArray = transformArrayIntoNumbers(parse);
  const calibrationValue = calibrationArray.reduce(
    (acc, value) => acc + value,
    0
  );
  console.log(calibrationValue);
};
