<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'graphitedge');

/** MySQL database username */
define('DB_USER', 'graphitedge');

/** MySQL database password */
define('DB_PASSWORD', '8G4k6HbKIZ9CC0S');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1:3306');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '?,hpeR[ob6-7nkH(Azuh{Y@U$`Xvl;ck)</KYi<I=1+?:I_xp*<Ep+38;L0>c]UD');
define('SECURE_AUTH_KEY',  'j=jbmd|gj+Z<ygK0u(MERhW==-}c1Lq,eQ^a/@LZ_qF~x5/*I>cuY<:D,#qJ{FZ%');
define('LOGGED_IN_KEY',    '| 6I^)}XBnB2?72w0,mp9B|4e:z#pXx.eZ2kJvtnZs=(TXEai7E|ZWMJ5^?MHzaS');
define('NONCE_KEY',        'RHV#_UbDrA#LHPF#.~Or1z`~7QE OW<QJADIb<N+_SbHh;lBFU7Pp5;cGI KG>Z;');
define('AUTH_SALT',        'k600|$fl/JB/_~/LDnp^)SF-7*6eDuo6$#fUH/,5[3Hh*|Sv5Eu5F;EKA6/#Zq2d');
define('SECURE_AUTH_SALT', ')=+GiK QNA^Q/kpW1e;-1:R|r<+VMB?:@,#.gd-r6A)gFSd=OCTl97:)oLE)|EsA');
define('LOGGED_IN_SALT',   '7-@DG|_@|`-H;b0/G47)>5Ob8=0+=6tIP!M2QKxf+TbsUPBw+XY-$1_`NKe4u-a.');
define('NONCE_SALT',       '>;sRUU ?Tb7xdXLKT;P_nP)@!S,iKr?i<+!UeXgj1!1wd23`St(!Tqkcu:gtlnc+');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = "wp_u9bhps1dym_";

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

define( 'WP_POST_REVISIONS', 5 );

/** Disable the Plugin and Theme Editor **/
define( 'DISALLOW_FILE_EDIT', true );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');