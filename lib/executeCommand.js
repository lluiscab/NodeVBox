
	const exec = require('child_process').exec;

	module.exports = function(args) {

		return new Promise(function (resolve, reject) {

			let args = this.args.join(' ');
			let cmd = 'vboxmanage '+ args;

			// console.log('Executing', cmd);

			exec(cmd, (error, stdout, stderr) => {

				if(error) {
					reject(error);
				} else {
					resolve(stdout, stderr);
				}

			});

		}.bind({args}));

	};