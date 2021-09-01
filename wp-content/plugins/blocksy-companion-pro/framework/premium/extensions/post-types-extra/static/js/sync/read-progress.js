import {
	watchOptionsWithPrefix,
	getPrefixFor,
	getOptionFor,
} from 'blocksy-customizer-sync'

import { handleVariablesFor } from 'customizer-sync-helpers'
import {
	handleBackgroundOptionFor,
	responsiveClassesFor,
	typographyOption,
	applyPrefixFor,
} from 'blocksy-customizer-sync'

const prefix = getPrefixFor()

handleVariablesFor({
	[`${prefix}_progress_bar_filled_color`]: [
		{
			selector: applyPrefixFor('.ct-read-progress-bar', prefix),
			variable: 'progress-bar-scroll',
			type: 'color:default',

			responsive: true,
		},
	],

	[`${prefix}_progress_bar_background_color`]: [
		{
			selector: applyPrefixFor('.ct-read-progress-bar', prefix),
			variable: 'progress-bar-background',
			type: 'color:default',
			responsive: true,
		},
	],
})

watchOptionsWithPrefix({
	getPrefix: () => prefix,
	getOptionsForPrefix: () => [
		`${prefix}_read_progress_visibility`,
		`${prefix}_has_auto_hide`,
	],

	render: () => {
		;[...document.querySelectorAll('.ct-read-progress-bar')].map((el) => {
			responsiveClassesFor(
				getOptionFor('read_progress_visibility', prefix),
				el
			)

			el.classList.remove('ct-auto-hide')

			if (getOptionFor('has_auto_hide', prefix) === 'yes') {
				el.classList.add('ct-auto-hide')
			}
		})
	},
})
