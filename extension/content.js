// Adding Iframe to page
$(function(){
  $('body').append('<iframe id="picdrop" class="closed" src="chrome-extension://nlmfjalfhbaeclmijpiamgealocldiab/iframe.html" frameborder="0"></iframe>');
});

// Sending Messages to content pages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Open and Close When clicking on Icon
    if (request.icon) {
      console.log("tying to open and close")
      
      if ( $('#picdrop').hasClass("closed") ) {
        $("#picdrop").removeClass("closed");
        if (document.getElementById("picdrop").src !== "chrome-extension://nlmfjalfhbaeclmijpiamgealocldiab/iframe.html#/a/addimage")
        document.getElementById("picdrop").src = "chrome-extension://nlmfjalfhbaeclmijpiamgealocldiab/iframe.html#/a"
      } else {
        $("#picdrop").addClass("closed");
      }
    }

    if (request.url) {
      if ( $('#picdrop').hasClass("closed") ) {
        $("#picdrop").removeClass("closed");
      }
      document.getElementById("picdrop").src = "chrome-extension://nlmfjalfhbaeclmijpiamgealocldiab/iframe.html#/a/addimage"
    }

  });


//save


//load
chrome.extension.sendRequest({cmd: "load"}, function(response) {
    console.log("tab data:", response)
});