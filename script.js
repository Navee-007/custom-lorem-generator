const input = document.getElementById("input");
const output = document.getElementById("output");

const lyrics = ["naveen", "for ", "lorem"];

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
};

const lorem = (num) => {
  const LiftYourself = ["text,", "hiii "];
  for (let i = 0; i < num; i++) {
    if (i % 8 === 0) {
      LiftYourself.push(
        lyrics[randomNum(lyrics.length)] +
          "-di-" +
          lyrics[randomNum(lyrics.length)]
      );
    } else if (i % 3 === 0) {
      LiftYourself.push(lyrics[randomNum(lyrics.length)] + "ity");
    } else {
      LiftYourself.push(lyrics[randomNum(lyrics.length)]);
    }
  }
  return LiftYourself.join(" ");
};
const generate = () => {
  output.innerHTML = lorem(input.value);
};
input.addEventListener("change", generate);
document.getElementById("generate").addEventListener("click", generate);
