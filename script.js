const apiUrl = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/hexagrams.json`;

async function fetchiching() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.hexagrams);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

document.addEventListener("DOMContentLoaded", fetchiching);
