<?php
if ( ! current_user_can( 'manage_options' ) ) {
	return;
}
$key = 'lighthouse-checkup-notice';
$dismissed_messages = get_user_meta( get_current_user_id(), 'wds_dismissed_messages', true );
$is_message_dismissed = smartcrawl_get_array_value( $dismissed_messages, $key ) === true;
if ( $is_message_dismissed ) {
	return;
}

$logo_url = sprintf( '%s/assets/images/%s', SMARTCRAWL_PLUGIN_URL, 'lighthouse-logo.svg' );
$lighthouse_url = Smartcrawl_Settings_Admin::admin_url( Smartcrawl_Settings::TAB_HEALTH ) . '&tab=tab_settings#seo-test-mode';
?>
<div class="wds-notice smartcrawl-notice" data-key="<?php echo esc_attr( $key ); ?>">
	<div class="smartcrawl-notice-logo">
		<img src="<?php echo esc_attr( $logo_url ); ?>"
		     alt="<?php esc_attr_e( 'Lighthouse Logo', 'wds' ); ?>"
		/>
	</div>
	<div class="smartcrawl-notice-message">
		<?php printf(
			esc_html__( 'Smartcrawl has integrated a new SEO checkup that uses %s to measure your website and optimize your web pages for search engine results ranking.', 'wds' ),
			'<strong>' . esc_html__( 'Google Lighthouse', 'wds' ) . '</strong>'
		); ?><br>
		<span class="smartcrawl-notice-only-admins"><?php esc_html_e( '*You can switch to Lighthouse at any time via your settings page', 'wds' ); ?></span>
	</div>
	<div class="smartcrawl-notice-cta">
		<a href="<?php echo esc_attr( $lighthouse_url ); ?>"
		   class="sui-button sui-button-blue">
			<?php esc_html_e( 'Try Lighthouse Audits', 'wds' ); ?>
		</a>
		<button class="smartcrawl-notice-dismiss wds-notice-dismiss">
			<?php esc_html_e( 'Dismiss', 'wds' ); ?>
		</button>
	</div>
</div>