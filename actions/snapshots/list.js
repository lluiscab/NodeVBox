
	const execute = require('../../lib/executeCommand');

	module.exports = vm => {

		return new Promise((resolve, reject) => {

			execute(['snapshot', vm, 'list', '--machinereadable']).then(stdout => {

				let regex = /^Snapshot([^=]*)="([^"]*)"\nSnapshot([^=]*)="([^"]*)"\nSnapshot([^=]*)="([^"]*)"/gm;
				let match;

				let snapshots = [];
				let lastSnapshotUUID = null;

				while ((match = regex.exec(stdout)) !== null) {

					if (match.index === regex.lastIndex) {
						regex.lastIndex++;
					}

					snapshots.push({
						name: match[2],
						uuid: match[4],
						description: match[6],
						parent: lastSnapshotUUID
					});

					lastSnapshotUUID = match[4];

				}

				let regexCurrent = /CurrentSnapshot([^=]*)="([^"]*)"\nCurrentSnapshot([^=]*)="([^"]*)"\nCurrentSnapshot([^=]*)="([^"]*)"/;

				let matchCurrent = regexCurrent.exec(stdout);

				if(matchCurrent) {

					let currentUUID = matchCurrent[4];
					snapshots.forEach(snapshot => {

						if(snapshot.uuid === currentUUID) {
							snapshot.current = true;
						}

					})

				}

				resolve(snapshots);

			}).catch(reject);

		});

	};