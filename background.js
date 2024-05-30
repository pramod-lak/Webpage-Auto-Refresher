let refreshIntervalId = null;

chrome.browserAction.onClicked.addListener((tab) => {
  if (refreshIntervalId) {
    clearInterval(refreshIntervalId);
    refreshIntervalId = null;
  } else {
    refreshIntervalId = setInterval(() => {
      chrome.tabs.reload(tab.id);
    }, 3000); // 3000 milliseconds = 3 seconds
  }
});