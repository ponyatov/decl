# srvProcess

```decl
use srvService

const BUS_NAMES_LIST = ['sysBus', 'logBus', 'mdbBus', 'dataBus'];

class ClassProcessSrv: srvService.ClassBaseService_S {
	busList
	node
	SourcesState = {}
	ServicesState = {}

	// @param busList список шин, созданных в проекте
	init busList node {
		super process_name BUS_NAMES_LIST busList node
		self.Init
	}
	
	Init {
		for bus in BUS_NAMES_LIST { self.CreateBus bus }
		config = load ./app/config.json
		for sysservice in config.Primary {
			servName = sysservice.Name
			ServicesState[servName] = sysservice
			let ServicesState[servName].Service = match servName
			| 'process' ->  self
			| _ -> sysservice.Module (busList node) sysservice.Options
		}
		self.EmitEvents_process_init0
		timeout PROCESS_DB_TIMEOUT {
            let arrSources   = use app/Sources
            let arrServices  = use app/Services
            let arrTemplates = use app/Templates
            let arrChannels  = use app/Channels
            
            this.Fill arrServices arrSources arrTemplates arrChannels
			
		}
	}
}
```
- [[decl/horizon/srvService|srvService]]
