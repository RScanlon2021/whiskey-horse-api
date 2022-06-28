const whiskeyName = document.querySelector("h2");

async function getWhiskey() {
  const res = await fetch(
    "https://rap-names-api-fun.herokuapp.com/api/chance the rapper"
  );
  const data = await res.json();
  console.log(data);
  whiskeyName.innerHTML = data.birthName;
}

// getWhiskey();