import $ from 'jQuery';

export default class RequestUtil {
	static post(action, nonce, data = {}) {
		return new Promise(function (resolve, reject) {
			const request = Object.assign({}, {
				action: action,
				_wds_nonce: nonce
			}, data);

			$.post(ajaxurl, request)
				.done(function (response) {
					if (response.success) {
						resolve(
							response?.data
						);
					} else {
						reject(response?.data?.message);
					}
				})
				.fail(() => reject());
		});
	}
}
