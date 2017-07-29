
	const getRunning = require('./getRunning');

	module.exports = (vm) => {

		return new Promise((resolve, reject) => {

			getRunning().then(running => {

				if(running.length) {

					let found = false;

					running.forEach(runningVm => {
						if(runningVm.name === vm || runningVm.uuid === vm) {
							found = true;
						}
					});

					resolve(found);

				} else {
					resolve(false);
				}

			}).catch(reject);

		});

	};