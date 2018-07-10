<?php
/**
 * Enqueue scripts and styles.
 *
 * @since Enviro 1.0
 */

function enviro_get_author_name2( $object, $field_name, $request ) {
	return get_the_author_meta( 'display_name' );
}
