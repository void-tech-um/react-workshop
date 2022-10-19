const axios = require("axios");
const data = require("./data.json");

data.forEach(async (item) => {
  await axios.post("http://santiagomed.pythonanywhere.com/api/v1/items/", item);
});
