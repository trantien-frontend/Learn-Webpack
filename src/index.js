import { sum } from "./utils.js";
import "core-js/modules/es.object.values.js";
import "core-js/modules/es.promise.js";
import "./assets/style/style.scss";
import { render } from "./dom.js";

render();

console.log(sum(20, 50));

const person = { name: "Tien", age: 26 };
const newPerson = { ...person };

console.log(newPerson);

// Es7 :
console.log(Object.values(newPerson));

const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });

const main = async () => {
  try {
    const data = await promise();
    console.log("value", data);
  } catch (errors) {
    console.log("errors message");
  }
};
