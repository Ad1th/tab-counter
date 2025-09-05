chrome.tabs.onCreated.addListener(updateBadge);
chrome.tabs.onUpdated.addListener(updateBadge);
chrome.tabs.onRemoved.addListener(updateBadge);

async function updateBadge() {
  try {
    let tabs = await chrome.tabs.query({});
    let count = tabs.length.toString();

    chrome.action.setBadgeText({ text: count });
    chrome.action.setBadgeBackgroundColor({ color: "#4CAF50" });
  } catch (error) {
    console.error("Error updating badge:", error);
  }
}
updateBadge().catch(console.error);
