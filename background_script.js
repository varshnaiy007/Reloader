// File: background_script.js
chrome.action.onClicked.addListener(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.reload(tabs[0].id);
    });
  });
  
  chrome.action.setBadgeText({ text: "10s" });
  