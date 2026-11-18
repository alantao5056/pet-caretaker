const express = require("express");
const app = express();

let foodDispensed = 0;

function dispenseFood() {
  foodDispensed++;
  console.log("Motor activated: dispensing food");
}

app.post("/feed", (req, res) => {
  dispenseFood();
  res.json({
    success: true,
    foodDispensed
  });
});

app.listen(3000, () => {
  console.log("Pet caretaker running on port 3000");
});
