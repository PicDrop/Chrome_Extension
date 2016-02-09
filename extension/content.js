// Adding Iframe to page
const chromeID = 'nlmfjalfhbaeclmijpiamgealocldiab'

$(function(){
  // Add Image to Page
  $('body').append('<iframe id="picdrop" class="closed" src="chrome-extension://' + chromeID + '/iframe.html#/a" frameborder="0"></iframe>');
});

// Sending Messages to content pages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Open and Close When clicking on Icon
    if (request.icon) {
      $('#picdrop').hasClass("closed") ? $("#picdrop").removeClass("closed") : $("#picdrop").addClass("closed"); 
    }
    // If clicking on image open side and update view to AddImage
    if (request.url) {
      $('#picdrop').hasClass("closed") ? $("#picdrop").removeClass("closed") : document.getElementById("picdrop").src = "chrome-extension://" + chromeID + "/iframe.html#/a/addimage";    
    }

  });



// //load
// chrome.extension.sendRequest({cmd: "load"}, function(response) {
//     console.log("tab data:", response)
// });