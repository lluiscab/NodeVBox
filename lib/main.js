
	// TODO:

		// Create VM from scratch

		// Snapshots
			// List
			// Create
			// Delete
			// Restore

		// Clone
		// Metrics

		// Storage

			// Setup storage controllers (IDE and SATA)

			// List drives
			// Add drive
			// Resize drive
			// Remove drive

			// Attach ISO
			// Detach ISO
	
	module.exports = {

		version: require('../actions/version'),

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