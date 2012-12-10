( function() {
    var $embed, $skip_btn, is_html5;
    $embed = $( 'embed[src*="//s.ytimg.com/"]' );
    is_html5 = $('#watch-player').find("video").length > 0;

    if ( $embed.length === 0 ) return;
    $( '<button id="chrome-extension-skip-ad-btn">Skip ad</button>' )
        .appendTo( 'body' )
        .on( 'click', function() {
            if( $( this ).attr( 'disabled' ) ) {
                return;
            }
            skip_ad();
            $( this ).attr( 'disabled', 'disabled' );
        });

    function skip_ad() {
        if (is_html5) {
            $('div.video-ads').hide();
            return true;
        }

        var $embed_new;
        $embed_new = $embed.clone();
        $embed_new.attr( 'src',
                         'http://www.youtube.com/v/' +
                         location.href.split( 'v=' )[1].split( '&' )[0] +
                         '&version=3&autoplay=1&fs=1' );
        $embed.replaceWith( $embed_new );
        return true;
    }

    skip_ad();
} ) ();
