
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

		// RDP
			// Set rdp password

	module.exports = {

		start: require('../actions/start'),
		stop: require('../actions/stop'),
		rdp: {
			enableRdpAuth: require('../actions/rdp/enable'),
			setPort: require('../actions/rdp/setPort'),
			addUser: require('../actions/rdp/addUser'),
			listUsers: require('../actions/rdp/listUsers'),
		}

	};