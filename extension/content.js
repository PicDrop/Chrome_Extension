// Adding Iframe to page
$(function(){
  $('body').append('<iframe id="picdrop" class="closed" src="chrome-extension://oakddnfkgimmchdijmoadjkdlhohokla/iframe.html" frameborder="0"></iframe>');
});

// Sending Messages to content pages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Open and Close When clicking on Icon
    if (request.icon) {
      console.log("tying to open and close")
      alert("tying to open and close")
      if ( $('#picdrop').hasClass("closed") ) {
        $("#picdrop").removeClass("closed");
      } else {
        $("#picdrop").addClass("closed");
      }
    }

  });


