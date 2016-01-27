var url = ''

$(function(){
  $("body").append('<div id="pd_ex" class="closed"><div id="img_placeholder"></div><button id="pd_submit">Upload</button></div>');
  $("#pd_submit").on('click', function () {
      
      $.ajax({
        url: 'https://localhost:4000/api/user/drop',
        type: "POST",
        data: {"test": url}
      }).done(function (data) {
          console.log(data);
      });
    
  })
});




console.log("yo")
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.url) {
      console.log(request.url)
       url = request.url.srcUrl;
       $("#pd_ex").removeClass("closed");
      $('#img_placeholder').html('<div>' + request.url.srcUrl +'</div><img src="' + request.url.srcUrl + '"/>')
    }

  });