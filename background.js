chrome.browserAction.onClicked.addListener((tab) => {
  if (tab) {
    chrome.tabs.sendMessage(tab.id, true);
  }
});
