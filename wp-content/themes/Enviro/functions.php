<?php
/**
 * Enqueue scripts and styles.
 *
 * @since Enviro 1.0
 */
 include_once dirname(__FILE__) . '/inc/custom-fields.php';
/**
 *
 * TAKE GLOBAL DESCRIPTION OUT OF HEADER.PHP AND GENERATE IT FROM A FUNCTION
 *
 */
 show_admin_bar( false );
function site_global_description()
{
	global $page, $paged;
	wp_title( '|', true, 'right' );
	bloginfo( 'name' );
	$site_description = get_bloginfo( 'description', 'display' );
	if ( $site_description && ( is_home() || is_front_page() ) )
	{
		echo " | $site_description";
	}
}


/**
 * REMOVE UNWANTED CAPITAL <P> TAGS
 */
remove_filter( 'the_content', 'capital_P_dangit' );
remove_filter( 'the_title', 'capital_P_dangit' );
remove_filter( 'comment_text', 'capital_P_dangit' );


/**
 * REGISTER NAV MENUS FOR HEADER FOOTER AND UTILITY
 */
register_nav_menus( array(
	'primary' => __( 'Primary Menu', 'themename' ),
	'footer' => __( 'Footer Menu', 'themename' ),
	'utility' => __( 'Utility Menu', 'themename' )
) );


/**
 * DEFAULT COMMENTS & RSS LINKS IN HEAD
 */
add_theme_support( 'automatic-feed-links' );


/**
 * THEME SUPPORTS THUMBNAILS
 */
add_theme_support( 'post-thumbnails' );


/**
 *	ADD TINY IMAGE SIZE FOR ACF FIELDS, BETTER USABILITY
 */
add_image_size( 'mini-thumbnail', 50, 50 );


// custom post type

add_action( 'init', 'create_post_type' );
function create_post_type() {

	$args1 = array(
		'labels' => array(
			'name' => __( 'Retailers' ),
			'singular_name' => __( 'Retailer' )
		),
		'show_in_rest'       => true,
  	'rest_controller_class' => 'WP_REST_Posts_Controller',
		'public' => true,
		'exclude_from_search' => true,
		'menu_icon' => 'dashicons-screenoptions',
		'publicly_queryable'  => false,
		'rewrite' => array('with_front' => false, 'slug' => 'retailers'),
		'supports' => array( 'title', 'editor', 'thumbnail' )
	);
  	register_post_type( 'Retailers', $args1);
  	register_taxonomy_for_object_type('category', 'post_type');
  	$args2 = array(
		'labels' => array(
			'name' => __( 'Press' ),
			'singular_name' => __( 'Press' )
		),
		'show_in_rest'       => true,
  	'rest_controller_class' => 'WP_REST_Posts_Controller',
		'public' => true,
		'exclude_from_search' => true,
		'menu_icon' => 'dashicons-screenoptions',
		'publicly_queryable'  => false,
		'rewrite' => array('with_front' => false, 'slug' => 'press'),
		'supports' => array( 'title', 'editor', 'thumbnail' )
	);
  	register_post_type( 'Press', $args2);

  	flush_rewrite_rules();
}

function enviro_scripts() {
	// Load our main stylesheet.
	wp_enqueue_style( 'enviro-style-dist', get_stylesheet_directory_uri() . '/dist/style.css');
  wp_enqueue_style( 'font-awesome', '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css', 'screen');
	wp_enqueue_style( 'enviro-style', get_stylesheet_uri() );
    // Load scripts
	wp_enqueue_script( 'jquery', 'https://code.jquery.com/jquery-3.2.1.slim.min.js', '20171006', false );
	wp_enqueue_script( 'scrollmagic', 'https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js' , array( 'jquery' ), '1.0', false );
	wp_enqueue_script( 'popper', 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js', array( 'jquery' ), '20171006', false );

    wp_enqueue_script( 'enviro-script', get_stylesheet_directory_uri() . '/dist/app.js' , array(), '1.0', true );
	$url = trailingslashit( home_url('/') );
	$path = trailingslashit( parse_url( $url, PHP_URL_PATH ) );
  $primaryMenu = wp_get_nav_menu_items('Primary Menu');
	wp_scripts()->add_data( 'enviro-script', 'data', sprintf( 'var EnviroSettings = %s;', wp_json_encode( array(
		'title' => get_bloginfo( 'name', 'display' ),
		'path' => $path,
    'menu' => $primaryMenu,
		'URL' => array(
			'api' => esc_url_raw( get_rest_url( null, '/wp/v2' ) ),
			'root' => esc_url_raw( $url ),
		),
		'woo' => array(
			'url' => esc_url_raw( 'https://localhost/enviro/wp-json/wc/v2/' ),
			'consumer_key' => 'ck_803bcdcaa73d3a406a0f107041b07ef6217e05b9',
			'consumer_secret' => 'cs_c50ba3a77cc88c3bf46ebac49bbc96de3a543f03'
		),
	) ) ) );
}
add_action( 'wp_enqueue_scripts', 'enviro_scripts' );
// Add various fields to the JSON output
function enviro_register_fields() {
	// Add Author Name
	register_rest_field( 'post',
		'author_name',
		array(
			'get_callback'		=> 'enviro_get_author_name',
			'update_callback'	=> null,
			'schema'			=> null
		)
	);
	// Add Featured Image
	register_rest_field( 'post',
		'featured_image_src',
		array(
			'get_callback'		=> 'enviro_get_image_src',
			'update_callback'	=> null,
			'schema'			=> null
		)
    );
    // Add Published Date
	register_rest_field( 'post',
        'published_date',
        array(
            'get_callback'		=> 'enviro_published_date',
            'update_callback'	=> null,
            'schema'			=> null
        )
	);
	register_rest_field( 'post',
        'custom_fields',
        array(
            'get_callback'		=> 'add_post_custom_fields',
            'update_callback'	=> null,
            'schema'			=> null
        )
	);
	register_rest_field( 'press',
        'custom_fields',
        array(
            'get_callback'		=> 'add_post_custom_fields',
            'update_callback'	=> null,
            'schema'			=> null
        )
	);
	register_rest_field( 'page',
        'custom_fields',
        array(
            'get_callback'		=> 'add_post_custom_fields',
            'update_callback'	=> null,
            'schema'			=> null
        )
	);
}
add_action( 'rest_api_init', 'enviro_register_fields' );
