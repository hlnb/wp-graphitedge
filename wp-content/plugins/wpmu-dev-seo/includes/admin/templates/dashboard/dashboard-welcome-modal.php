<?php
$id = 'wds-welcome-modal';
$types_builder_url = Smartcrawl_Settings_Admin::admin_url( Smartcrawl_Settings::TAB_SCHEMA ) . '&tab=tab_types&add_type=1';
?>

<div class="sui-modal sui-modal-md">
	<div role="dialog"
	     id="<?php echo esc_attr( $id ); ?>"
	     class="sui-modal-content <?php echo esc_attr( $id ); ?>-dialog"
	     aria-modal="true"
	     aria-labelledby="<?php echo esc_attr( $id ); ?>-dialog-title"
	     aria-describedby="<?php echo esc_attr( $id ); ?>-dialog-description">

		<div class="sui-box" role="document">
			<div class="sui-box-header sui-flatten sui-content-center sui-spacing-top--40">
				<div class="sui-box-banner" role="banner" aria-hidden="true">
					<img src="<?php echo esc_attr( SMARTCRAWL_PLUGIN_URL ); ?>assets/images/graphic-upgrade-header.svg"/>
				</div>

				<button class="sui-button-icon sui-button-float--right" data-modal-close
				        id="<?php echo esc_attr( $id ); ?>-close-button"
				        type="button">
					<span class="sui-icon-close sui-md" aria-hidden="true"></span>
					<span class="sui-screen-reader-text"><?php esc_html_e( 'Close this dialog window', 'wds' ); ?></span>
				</button>

				<h3 class="sui-box-title sui-lg"
				    id="<?php echo esc_attr( $id ); ?>-dialog-title">

					<?php esc_html_e( 'Preset configurations are here!', 'wds' ); ?>
				</h3>

				<div class="sui-box-body">
					<p class="sui-description"
					   id="<?php echo esc_attr( $id ); ?>-dialog-description">
						<span>
							<?php esc_html_e( "You can now save your SmartCrawl settings, download them and reapply them on another site in just a few clicks! No more having to repeat setting up SmartCrawl on all your new client sites, just upload your config and go.", 'wds' ); ?>
						</span>
					</p>

					<div id="wds-apply-presets-via-hub">
						<small>
							<strong>
								<span class="sui-icon-hub" aria-hidden="true"></span>
								<?php esc_html_e( 'Apply presets to multiple sites via The Hub', 'wds' ); ?>
							</strong>
						</small>

						<p class="sui-description">
							<span>
								<?php esc_html_e( "If you're a WPMU DEV member, you get it one better - all your configs are automatically uploaded and shared across all your sites, ready to be applied whenever you like from either The Hub or the plugin.", 'wds' ); ?>
							</span>
						</p>
					</div>

					<button id="<?php echo esc_attr( $id ); ?>-get-started"
					        type="button"
					        class="sui-button">
						<span class="sui-loading-text">
							<?php esc_html_e( "Awesome, let's go!", 'wds' ); ?>
						</span>
						<span class="sui-icon-loader sui-loading" aria-hidden="true"></span>
					</button>
				</div>
			</div>
		</div>

		<a id="<?php echo esc_attr( $id ); ?>-skip"
		   href="#">

			<?php esc_html_e( 'Skip This', 'wds' ); ?>
		</a>
	</div>
</div>