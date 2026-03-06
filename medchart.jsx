async function loadData() {
  const response = await fetch("http://localhost:3000/api/vitals");
  const data = await response.json();
  console.log(data);
}

loadData();