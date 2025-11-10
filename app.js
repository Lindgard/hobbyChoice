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
