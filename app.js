const hobbiesList = document.getElementById('hobbyListPrint');
const navbar = document.getElementById('navbar');
const randomizerBtn = document.getElementById('randomizerBtn');
const heroSection = document.getElementById('heroSection');
const infoContainer = document.createElement('DIV');
const txtBlock = document.createElement('P');
const newH3 = document.createElement('H3');

const jsonData = async () => {
  try {
    const response = await fetch('./hobbies.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const hobbyArray = await jsonData();

//! Destructuring av array fra JSON
const {
  Kreative,
  Sport_og_Friluft,
  Teknologi_og_Gaming,
  Samfunn_og_Kultur,
  Avslapping_og_Livsstil,
} = hobbyArray;

console.log(Kreative);
console.log(hobbyArray);

const renderHobbiesList = (data) => {
  hobbiesList.innerHTML = '';

  Object.entries(data).forEach(([kategori, aktiviteter]) => {
    const categorySection = document.createElement('SECTION');
    categorySection.classList.add('category-section');

    const categoryHeader = newH3.cloneNode();
    const categoryTxtBlock = txtBlock.cloneNode();

    categoryHeader.textContent = kategori.replaceAll('_', ' ');
    categoryTxtBlock.textContent = `Antall aktiviteter: ${aktiviteter.length}`;

    const hobbyUl = document.createElement('UL');
    hobbyUl.classList.add('hobby-list');

    aktiviteter.forEach(({ navn, beskrivelse }) => {
      const hobbyLi = document.createElement('LI');
      hobbyLi.classList.add('hobby-item');
      hobbyLi.innerHTML = `<strong>${navn}<br>${beskrivelse}`;
      hobbyUl.appendChild(hobbyLi);
    });

    categorySection.appendChild(categoryHeader);
    categorySection.appendChild(categoryTxtBlock);
    categorySection.appendChild(hobbyUl);
    hobbiesList.appendChild(categorySection);
  });
};

//? renderHobbiesList legger ikke faktisk til det den egentlig skal, aktiveres ikke. Finn ut
//? hvor å sette inn aktiveringen av koden

//* randomizer-funksjoner for kategori og objekt innen
//* kategori fra første funksjonen under her
const categories = (data) => {
  let arr = Object.keys(data);
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

console.log(categories(hobbyArray));

const randomHobby = (data) => {
  const result = hobbyArray[categories(data)];

  let i = Math.floor(Math.random() * result.length);
  return result[i];
};

console.log(randomHobby(hobbyArray));

//* knapp som viser et resultat basert på randomHobby
//* funksjonen som er skrevet over
randomizerBtn.addEventListener('click', () => {
  const hobby = randomHobby(hobbyArray);
  txtBlock.classList.add('output-txt');
  txtBlock.innerHTML = `${hobby.navn} <br> ${hobby.beskrivelse}`;
  heroSection.appendChild(txtBlock);
});

const listInfo = () => {};

//* funksjon som skal vise en liste basert
//* på kategoriene fra JSON fil
// const createListItem = () => {
//   //? bruke array mapping?
//   const hobbyCategories = Object.keys(hobbyArray);
//   newH3.innerText = `${hobbyCategories}`;
//   hobbiesList.appendChild(newH3);
// };
