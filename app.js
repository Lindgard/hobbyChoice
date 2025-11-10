const hobbiesList = document.getElementById("hobbyListPrint");
const navbar = document.getElementById("navbar");

const jsonData = async () => {
  try {
    const response = await fetch("./hobbies.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

jsonData();
// console.log(jsonData);
for (let i = 0; i < jsonData.length; i++) {
  //* create a loop that iterates new list items
  //* for each hobby within the unordered list
}
