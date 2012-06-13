var is_html5 = $('#watch-player').find("video").length > 0;

$('#watch-headline-user-info').append(
  '<button id="skip-ad" class="yt-uix-button yt-uix-button-default">Skip ad</button>');
$('#skip-ad').on('click', function() {
  if($(this).attr('disabled')) return false;
  skip_ad();
  $(this).attr('disabled', 'disabled');
  return false;
});

function skip_ad() {
  if (is_html5) {
    $('div.video-ads').hide();
    return true;
  }

  var embed_elem = $('#watch-player').children('embed').clone();
  embed_elem.attr('src' , 'http://www.youtube.com/v/' +
                  location.href.split("v=")[1].split("&")[0] +
                  '&version=3&autoplay=1&fs=1');
  $('#watch-player').children('embed').remove();
  $('#watch-player').prepend(embed_elem);
  return true;
}
