
	// TODO:

		// Create VM from scratch

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
		},

		snapshots: {
			take: require('../actions/snapshots/take'),
			restore: require('../actions/snapshots/restore'),
			list: require('../actions/snapshots/list'),
			delete: require('../actions/snapshots/delete')
		}

	};