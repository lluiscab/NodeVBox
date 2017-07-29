
	// TODO:

		// Create VM from scratch

		// Snapshots
			// List
			// Create
			// Delete
			// Restore

		// Clone
		// Metrics

	module.exports = {

		start: require('../actions/start'),
		stop: require('../actions/stop'),
		save: require('../actions/save'),

		isRunning: require('../actions/isRunning'),
		getRunning: require('../actions/getRunning'),

		list: require('../actions/list'),
		vmInfo: require('../actions/vmInfo'),

		rdp: {
			enableRdpAuth: require('../actions/rdp/enable'),
			setPort: require('../actions/rdp/setPort'),
			addUser: require('../actions/rdp/addUser'),
			listUsers: require('../actions/rdp/listUsers'),
		}

	};