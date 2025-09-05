chrome.tabs.onCreated.addListener(updateBadge);
chrome.tabs.onUpdated.addListener(updateBadge);
chrome.tabs.onRemoved.addListener(updateBadge);
// chrome.tabGroups.onUpdated.addListener(updategrp);

async function updateBadge() {
  let tabs = await chrome.tabs.query({});
  let count = tabs.length.toString();

  chrome.action.setBadgeText({ text: count });
  chrome.action.setBadgeBackgroundColor({ color: "#4CAF50" });
}

// async function updategrp() {
//   let groups = await chrome.tabGroups.query({});
//   let gcount = groups.length.toString();

//   chrome.action.setBadgeText({ text: gcount });
//   chrome.action.setBadgeBackgroundColor({ color: "#FF5722" });
// }

// updategrp();
updateBadge();
