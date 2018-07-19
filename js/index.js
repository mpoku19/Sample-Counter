function countWords() {
  let popup = document.getElementById("bottom");

  if (popup.style.display === "none") {
    popup.style.display = "block";
  }  else {
        popup.style.display = "none";
    }

  let sample = document.getElementById("Textarea").value;
  let wordsum = document.getElementById("wordtotal");
  let final = document.getElementById("words");
  sample = sample.toString();
  sample = sample.toLowerCase();
  const myRegex = /([a-z0-9])\w*/gi;

  let word = sample.match(myRegex);
  let hold = [];
  let print = [];

  for (i of word) {
    if (hold.includes(i)) {
      continue;
    } else {
      hold.push(i);
    }
  }

  for (j of hold) {
    let sum = 0;
    for (k of word) {
      if (j === k) {
        sum += 1;
      } else {
        continue;
      }
    }
    print.push(`Word:    <b>${j}</b>    |    Total:    <b>${sum}</b> <br/> `);
  }

  wordsum.innerHTML = `You have <b>${
    word.length
  } words</b> in this sample. Below is your word count...`;
  final.innerHTML = print.join(" ");
}

function hideit() {
 let pop = document.getElementById("bottom");

  if (pop.style.display === "block") {
    pop.style.display = "none";
  }  else {
      pop.style.display = "none";
    }
  
}