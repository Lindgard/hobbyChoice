const hobbiesList = document.getElementById("hobbyListPrint");
const navbar = document.getElementById("navbar");
const randomizerBtn = document.getElementById("randomizerBtn");
const heroSection = document.getElementById("heroSection");
const txtBlock = document.createElement("P");
const newH3 = document.createElement("H3");

const jsonData = async () => {
  try {
    const response = await fetch("./hobbies.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const hobbyArray = await jsonData();

hobbyArray{: {navn, beskrivelse}}

// console.log(hobbyArray);

// const categories = (data) => {
//   let arr = Object.keys(data);
//   let i = Math.floor(Math.random() * arr.length);
//   return arr[i];
// };

// console.log(categories(hobbyArray));

// const randomHobby = (data) => {
//   const result = hobbyArray[categories(data)];

//   let i = Math.floor(Math.random() * result.length);
//   return result[i];
// };

// console.log(randomHobby(hobbyArray));

//* knapp som viser et resultat basert på randomHobby
//* funksjonen som er skrevet over
// randomizerBtn.addEventListener("click", () => {
//   const hobby = randomHobby(hobbyArray);
//   txtBlock.classList.add("output-txt");
//   txtBlock.innerHTML = `${hobby.navn} <br> ${hobby.beskrivelse}`;
//   heroSection.appendChild(txtBlock);
// });

//* funksjon som skal vise en liste basert
//* på kategoriene fra JSON fil
// const createListItem = () => {
//   //? bruke array mapping?
//   const hobbyCategories = Object.keys(hobbyArray);
//   newH3.innerText = `${hobbyCategories}`;
//   hobbiesList.appendChild(newH3);
// };

// console.log(createListItem());

//* console.log(data.hobbyer.[randomCategory][randomHobby]);

// for (let i = 0; i < jsonData.length; i++) {
//   //* create a loop that iterates new list items
//   //* for each hobby within the unordered list
// }

//? Fischer-Yates Shuffle Algorithm attempt
//* const randomCategory = (data) => {
//*   for (let i = data.length - 1; i > 0; i--) {
//*     let j = Math.floor(Math.random() * (i + 1));

//*     [data[i], data[j]] = [data[j], data[i]];
//*   }
//* };
//? console.log(randomCategory());
