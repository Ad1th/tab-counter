async function updateCount() {
  let tabs = await chrome.tabs.query({});
  document.getElementById("count").innerText = tabs.length;
}
updateCount();
