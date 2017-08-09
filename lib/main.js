
	module.exports = {

		version: require('../actions/version'),
		hostInformation: require('../actions/hostInfo'),
		systemProps: require('../actions/systemProps'),

		createVm: require('../actions/create'),

		start: require('../actions/start'),
		stop: require('../actions/stop'),
		save: require('../actions/save'),

		clone: require('../actions/clone'),
		screenshot: require('../actions/screenshot'),

		isRunning: require('../actions/isRunning'),
		getRunning: require('../actions/getRunning'),

		list: require('../actions/list'),
		vmInfo: require('../actions/vmInfo'),

		setVmRam: require('../actions/setVmRam'),
		setBootOrder: require('../actions/bootOrder'),

		network: {
			getSettings: false,
			setAdapter: false, // number, name
		},

		rdp: {
			enableRdpAuth: require('../actions/rdp/enable'),
			setRdpStatus: require('../actions/rdp/setRdpStatus'),
			setPort: require('../actions/rdp/setPort'),
			addUser: require('../actions/rdp/addUser'),
			removeUser: require('../actions/rdp/removeUser'),
			listUsers: require('../actions/rdp/listUsers'),
		},

		snapshots: {
			take: require('../actions/snapshots/take'),
			restore: require('../actions/snapshots/restore'),
			list: require('../actions/snapshots/list'),
			delete: require('../actions/snapshots/delete')
		},

		storage: {

			listMounted: require('../actions/storage/listMounted'),
			listAllVdi: require('../actions/storage/listAllVdi'),

			attachVdi: require('../actions/storage/vdi.attach'),
			attachISO: require('../actions/storage/iso.attach'),

			detach: require('../actions/storage/detach'),
			resizeVdi: require('../actions/storage/vdi.resize'),
			createVdi: require('../actions/storage/vdi.create'),

		},

		metrics: {
			query: require('../actions/metrics/query'),
			enable: require('../actions/metrics/enable'),
			disable: require('../actions/metrics/disable')
		}

	};