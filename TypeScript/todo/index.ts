import {Discovery, Protocol} from "./main";

const relayFilterNode = {id: 1, ip: "1.1.1.1", port: 1111, enabledProtocols: [Protocol.Relay, Protocol.Filter]};
const relayNode = {id: 2, ip: "2.2.2.2", port: 2222, enabledProtocols: [Protocol.Relay]};
const storeNode = {id: 3, ip: "3.3.3.3", port: 3333, enabledProtocols: [Protocol.Store]};
