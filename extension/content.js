// Adding Iframe to page
const chromeID = 'dkeaeobllglbgicoiicbfbnefkenpgma';


$(function(){
  // Add Image to Page
  $('body').append('<iframe id="picdrop" class="closed" src="chrome-extension://' + chromeID + '/iframe.html#/" frameborder="0"></iframe>');
});

// Sending Messages to content pages
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // Open and Close When clicking on Icon
    if (request.icon) {
      if ( $('#picdrop').hasClass('closed') ) {
       $('#picdrop').removeClass('closed');
        if (document.getElementById('picdrop').src === 'chrome-extension://' + chromeID + '/iframe.html#/') {
          document.getElementById('picdrop').src = 'chrome-extension://' + chromeID + '/iframe.html#/a';
        }
      } else {
        $('#picdrop').addClass('closed');
      }
    }
    //If clicking on image open side and update view to AddImage
    if (request.url) {
      // Grab all images on page
      var pageImages = document.getElementsByTagName("IMG");
      //Find Selected Image and add Alt to Request Obj
      for (var key in pageImages) {
        if (pageImages[key].src === request.url.srcUrl) {
          request.url.alt = pageImages[key].alt;
        }
      }

      // Send updated request obj to background.js
      chrome.extension.sendMessage({ type: 'setAlt', data: request.url }, function(res) {});

      if ( $('#picdrop').hasClass('closed') ) {
        $('#picdrop').removeClass('closed');
      }
      document.getElementById('picdrop').src = 'chrome-extension://' + chromeID + '/iframe.html#/a/addimage';
    }
  }
);

// var testFrame = document.createElement("IFRAME");
//   testFrame.id = "picdrop";
//   testFrame.src = 'chrome-extension://' + chromeID + '/iframe.html#/';
//   document.body.appendChild(testFrame);
