async function updateCount() {
  try {
    let tabs = await chrome.tabs.query({});
    document.getElementById("count").innerText = tabs.length;
  } catch (error) {
    console.error("Error querying tabs:", error);
    document.getElementById("count").innerText = "Error";
  }
}
updateCount();
