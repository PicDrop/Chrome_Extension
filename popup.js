
chrome.contextMenus.create({
    "title": "Hey there",
    "contexts": ["all"],
    "onclick": function (data) {
      
      chrome.extension.getBackgroundPage().console.log(data);
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {url: data}, function(response) {
        // alert("sending url info")
      });
    });
    }
  });


chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        alert("sending message")
      });
    });

    chrome.extension.getBackgroundPage().console.log("ypoyoyoyo");
});

// function myAlert(){
//     alert('hello world');
// }

// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('alertButton').addEventListener('click', myAlert);
// });