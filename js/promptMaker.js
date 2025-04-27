function makePrompt() {
   $.getJSON("../data/randomPrompts.json", (data) => {
      const randomType = getRandomEl(Object.keys(data));
      const randomAudience = getRandomEl(data[randomType].audience);
      const randomAction = getRandomEl(data[randomType].action);
      const randomTech = getRandomEl(data[randomType].technology);

      $("#type").text(randomType);
      $("#audience").text(randomAudience);
      $("#action").text(randomAction);
      $("#technology").text(randomTech);
   });
}

function getRandomEl(arr) {
   return arr[Math.floor(Math.random() * arr.length)];
}

makePrompt();
