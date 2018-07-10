<?php
/**
 * Enqueue scripts and styles.
 *
 * @since Enviro 1.0
 */


function enviro_get_author_name( $object, $field_name, $request ) {
	return get_the_author_meta( 'display_name' );
}
function enviro_get_image_src( $object, $field_name, $request ) {
    if($object[ 'featured_media' ] == 0) {
        return $object[ 'featured_media' ];
    }
	$feat_img_array = wp_get_attachment_image_src( $object[ 'featured_media' ], 'thumbnail', true );
    return $feat_img_array[0];
}
function enviro_published_date( $object, $field_name, $request ) {
	return get_the_time('F j, Y');
}
function enviro_excerpt_length( $length ) {
    return 20;
}
add_filter( 'excerpt_length', 'enviro_excerpt_length' );
