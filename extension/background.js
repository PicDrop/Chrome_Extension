
// Drop Down Menu options on control click when in browser
chrome.contextMenus.create({
    "title": "PicDrop.io",
    "contexts": ["all"],
    "onclick": function (data) {
      
      //chrome.extension.getBackgroundPage().console.log(data);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {url: data}, function(response) {
      });
    });
    }
  });

//Fired when User Clicks ICON
chrome.browserAction.onClicked.addListener(function (tab) { 
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {icon: "clicked"}, function(response) {
         alert("sending message");
      });
    });
});
