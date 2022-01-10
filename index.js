const sentance =
  "Esse boy boy2 laboris minim nostrud fugiat boy velit consectetur boy boy2 enim ex boy2 ex.";

const words = sentance.split(" ");

const res = words.filter((item, key) => words.indexOf(item) === key).join(" ");

console.log("res", res);
