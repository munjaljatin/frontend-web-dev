import { usersData } from "./usersData.js";
import { productsData } from "./productsData.js";
import { object } from "./data.js";

console.log(usersData[0].username);
console.log(productsData[0]?.description);
console.log(usersData, object, productsData);
