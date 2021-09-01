<?php //phpcs:ignore -- \r\n notice.
/**
 * Plugin Name: WPMU DEV Hosting
 * Description: Provides functions and features for compatibility with the managed WPMU DEV hosting environment. Please don't delete, we'll just add it back ;-)
 * Author:      WPMU DEV
 * Version:     0.1
 * Author URI:  https://premium.wpmudev.org/
*/

// only include our code if in our hosting environment (be nice to people migrating away from WPMU DEV).
if (
	isset( $_SERVER['WPMUDEV_HOSTED'] ) ||
	( defined( 'WP_CLI' ) && WP_CLI )
) {
	// Disable NewRelic on Staging.
	if ( defined( 'ABSPATH' ) && ABSPATH && preg_match( '#/staging/public_html#', ABSPATH ) && extension_loaded( 'newrelic' ) && function_exists( 'newrelic_ignore_transaction' ) ) {
			newrelic_ignore_transaction();
	}

	define( 'WPMUDEV_HOSTING_SITE_ID', gethostname() );

	// WP CLI commands.
	require_once 'hosting/wp-cli.php';

	// If not CLI only load in production.
	if ( isset( $_SERVER['WPMUDEV_HOSTING_ENV'] ) && 'production' === $_SERVER['WPMUDEV_HOSTING_ENV'] ) {
		// StatsD plugin.
		require_once 'hosting/statsd.php';
	}

	// Miscellaneous functions.
	require_once 'hosting/misc-functions.php';
}

//Setting WP_ENVIRONMENT_TYPE in staging, production is default.
if ( '/var/web/staging/public_html' === $_SERVER['DOCUMENT_ROOT'] ) {
	define( 'WP_ENVIRONMENT_TYPE', 'staging' );
}
