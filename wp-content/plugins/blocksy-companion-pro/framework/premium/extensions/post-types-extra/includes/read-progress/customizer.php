<?php

$options = [
	'label' => __('Read Progress', 'blc'),
	'type' => 'ct-panel',
	'switch' => true,
	'value' => 'no',
	'sync' => blocksy_sync_whole_page([
		'prefix' => $prefix,
	]),
	'inner-options' => [

		blocksy_rand_md5() => [
			'title' => __( 'General', 'blocksy' ),
			'type' => 'tab',
			'options' => [

				$prefix . '_has_auto_hide' => [
					'label' => __( 'Auto Hide', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
					'desc' => __( 'Automatically hide the read progress bar once you arrive at the bottom of the article.', 'blocksy' ),
					'setting' => [ 'transport' => 'postMessage' ],
				],

				$prefix . '_read_progress_visibility' => [
					'label' => __( 'Visibility', 'blc' ),
					'type' => 'ct-visibility',
					'design' => 'block',
					'divider' => 'top',
					'setting' => [ 'transport' => 'postMessage' ],

					'value' => [
						'desktop' => true,
						'tablet' => true,
						'mobile' => false,
					],

					'choices' => blocksy_ordered_keys([
						'desktop' => __( 'Desktop', 'blc' ),
						'tablet' => __( 'Tablet', 'blc' ),
						'mobile' => __( 'Mobile', 'blc' ),
					]),
				],

			],
		],

		blocksy_rand_md5() => [
			'title' => __( 'Design', 'blocksy' ),
			'type' => 'tab',
			'options' => [

				$prefix . '_progress_bar_filled_color' => [
					'label' => __( 'Main Color', 'blc' ),
					'type'  => 'ct-color-picker',
					'design' => 'inline',
					'sync' => 'live',

					'value' => [
						'default' => [
							'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
						],
					],

					'pickers' => [
						[
							'title' => __( 'Initial', 'blc' ),
							'id' => 'default',
							'inherit' => 'var(--paletteColor1)'
						],
					],
				],

				$prefix . '_progress_bar_background_color' => [
					'label' => __( 'Background Color', 'blc' ),
					'type'  => 'ct-color-picker',
					'design' => 'inline',
					'sync' => 'live',

					'value' => [
						'default' => [
							'color' => Blocksy_Css_Injector::get_skip_rule_keyword('DEFAULT'),
						],
					],

					'pickers' => [
						[
							'title' => __( 'Initial', 'blc' ),
							'id' => 'default',
						],
					],
				],

			],
		],
	],
];
