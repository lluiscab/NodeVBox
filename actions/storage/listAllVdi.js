
	const execute = require('../../lib/executeCommand');

	module.exports = () => {

		return new Promise((resolve, reject) => {

			execute(['list', 'hdds']).then(stdout => {

				let disks = [];

				let regex = /^UUID: (.*)\nParent UUID: (.*)\nState: (.*)\nType: (.*)\nLocation: (.*)\nStorage format: (.*)\nCapacity: (.*)\nEncryption: (.*)\n/gm;
				let match;

				while ((match = regex.exec(stdout)) !== null) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}
					
					disks.push({
						uuid: match[1].trim(),
						parent: match[2].trim(),
						state: match[3].trim(),
						type: match[4].trim(),
						path: match[5].trim(),
						format: match[6].trim(),
						size: parseInt(match[7]),
						encryption: match[8].trim() !== 'disabled'
					})
				}

				resolve(disks);


			}).catch(reject);


		});

	};