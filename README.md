# NodeVBox
Interact with virtualbox from nodejs using promises.

# Installation

Obtain the package

```bash
$ npm install node-vbox [--save] [-g]
```

Import package

```javascript
  const nodevbox = require('node-vbox');
```

# Usage

## Example

```javascript

  const nodevbox = require('node-vbox');

  nodevbox.list().then(vms => {
      console.log(vms);
  }).catch(error => {
      console.log(error);
  });

```

More examples can be found on the test folder

## All methods

`nodevbox`

- `version()` Returns the current vbox version

- `.start(uuid|vmname, gui)` Starts a headless vm by default, to start with gui, pass true as second arguemtn
- `.stop(uuid|vmname)` Stops a VM
- `.save(uuid|vmname)` Saves the state of the vm

- `.clone(uuid|vmname, newvmname)` Clones a vm

- `.isRunning(uuid|vmname)` Returns whatever a vm is running or not
- `.getRunning()` Returns a list of all running vms

- `.list()` Returns a list of all vms
- `.vmInfo(uuid|vmname)` Returns a list of vm properties

- `.rdp`
  - `.enableRdpAuth()` Sets VBoxAuthSimple as the vbox rdp auth library
  - `.setRdpStatus(uuid|vmname, true|false)` Enables or disabled RDP for a specific vm
  - `.setPort(uuid|vmname, port)` Sets the port in which the vm can be accessed via rdp
  - `.addUser(uuid|vmname, username, password)` Creates a new RDP user on the vm
  - `.removeUser(uuid|vmname, username)` Deleted a rdp user from the specified vm
  - `.listUsers(uuid|vmname)` Lists all users that can connect to a vm via RDP

- `.snapshots`
  - `.take(uuid|vmname, name, desc)` Takes a snapshots from a vm, with name and optional description
  - `.restore(uuid|vmname, name)` Restores the specified snapshot
  - `.list(uuid|vmname)` List all snapshots for a vm
  - `.delete(uuid|vmname, name)` Deletes a created snapshot

- `.metrics`
  - `.enable(uuid|vmname)` Enables metrics collection on a vm
  - `.disable(uuid|vmname)` Disables metrics collection on a vm
  - `.get(uuid|vmname)` Returns metrics for a vm

- `.storage`
  - `.listMounted(uuid|vmname)` Lists all disks on a vm by controller
  - `.attachVdi(uuid|vmname, path, storagectl, device, port)` Adds vdi to vm (Default SATA controller, port 0, device 0)
  - `.attachISO(uuid|vmname, path, storagectl, device, port)` Adds iso to vm (Default IDE controller, port 0, device 0)
  - `.detach(uuid|vmname, storagectl, device, port)` Detaches device on storagectl, port, device of a vm



# License

[MIT](https://github.com/lluiscab/NodeVBox/blob/master/LICENSE)

