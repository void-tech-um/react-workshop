import axios from "axios";

const data = [
  {
    name: "Burger",
    price: 6.82,
    calories: 1977,
  },
  {
    name: "Pollo",
    price: 53.22,
    calories: 1430,
  },
  {
    name: "Salmon",
    price: 74.63,
    calories: 557,
  },
  {
    name: "Salt",
    price: 14.91,
    calories: 921,
  },
  {
    name: "Cheese",
    price: 67.98,
    calories: 1330,
  },
  {
    name: "Pasta",
    price: 2.71,
    calories: 830,
  },
  {
    name: "Rice",
    price: 71.57,
    calories: 1700,
  },
  {
    name: "Soda",
    price: 9.65,
    calories: 513,
  },
  {
    name: "Beer",
    price: 20.21,
    calories: 1951,
  },
  {
    name: "Wine",
    price: 6.89,
    calories: 629,
  },
  {
    name: "Tea",
    price: 93.77,
    calories: 518,
  },
  {
    name: "Coffee",
    price: 54.97,
    calories: 88,
  },
  {
    name: "Milk",
    price: 49.91,
    calories: 311,
  },
  {
    name: "Water",
    price: 75.13,
    calories: 279,
  },
];

data.forEach((item) => {
  axios.post("http://santiagomed.pythonanywhere.com/api/v1/items", item);
});
