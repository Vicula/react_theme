<?php
/**
 * The main template file
 *
 * @package WordPress
 * @subpackage Enviro
 * @since Enviro 1.0
 */
 ?>
 <!DOCTYPE html>

 <html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width">
        <link rel="profile" href="http://gmpg.org/xfn/11">
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <title>Enviro</title>
        <!-- TYPEKIT -->
        <script src="https://use.typekit.net/gsj1tlx.js"></script>
        <script>try{Typekit.load({ async: false });}catch(e){}</script>
        <!-- END TYPEKIT -->
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <div class="loading-panel">
          <section>
            <div class="loader loader-stars">
              <svg class="loader-star star1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 23.172 23.346" xml:space="preserve">
                    <polygon fill="#ffffff" points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9" />
                 </svg>
              <svg class="loader-star star2" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 23.172 23.346" xml:space="preserve">
                    <polygon fill="#ddebda" points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  " />
                 </svg>
              <svg class="loader-star star3" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 23.172 23.346" xml:space="preserve">
                    <polygon fill="#f4f1d4" points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  " />
                 </svg>
            </div>
          </section>
        </div>
        <div id="page" class="hfeed site">
            <div id="content">
                <div class="loader-gif">
                    <img src="<?php echo home_url() ?>/wp-content/themes/Enviro/dist/images/loading-icon.gif" alt="Loader">
                </div>
            </div>
            <?php wp_footer(); ?>
        </div>
    </body>
</html>
