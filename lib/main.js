
	// TODO:

		// Save machine state
		// Create VM from scratch

		// Snapshots
			// List
			// Create
			// Delete
			// Restore

		// Is running
		// Clone
		// List created vms
		// Metrics
		// VM Info

	module.exports = {

		start: require('../actions/start'),
		stop: require('../actions/stop'),

		isRunning: require('../actions/isRunning'),
		getRunning: require('../actions/getRunning'),

		list: require('../actions/list'),

		rdp: {
			enableRdpAuth: require('../actions/rdp/enable'),
			setPort: require('../actions/rdp/setPort'),
			addUser: require('../actions/rdp/addUser'),
			listUsers: require('../actions/rdp/listUsers'),
		}

	};