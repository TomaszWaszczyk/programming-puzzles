// Instructions:
//
// Implement `Discovery.getNodes`

export interface RemoteNode {
    id: number;
    ip: string;
    port: number;
    enabledProtocols: Protocol[];
}

export enum Protocol {
    Http = "http",
    Https = "https",
    TCP = "TCP"
}

export interface NodesPerProtocolWanted {
    relay: number;
    store: number;
    filter: number;
}

/**
 * Find new nodes to connect to.
 *
 * Usage:
 *
 * const disc = new Discovery();
 * const nodes = await disc.getNodes({relay: 1});
 // nodes = [RelayNode];
 // RelayNode.enabledProtocols = ["relay"];
 *
 * dial(nodes);
 */
export class Discovery {
    /**
     * Returns a node using an unreliable discovery method.
     * May sometimes return `undefined`.
     * May return the same node several times.
     */
    async next(): Promise<RemoteNode | undefined> {
        throw "Assume this is working, this is not part of the exercise.";
    }

    /**
     * Returns an array of nodes that fulfills the passed `wantedCapabilities`.
     *
     * Uses `Discovery.next` to find the nodes.
     */
    public async getNodes(wanted: NodesPerProtocolWanted): Promise<RemoteNode[]> {
        // throw "To be implemented";
        // wanted
        // can use this.next();
        const {filter, relay, store} = wanted;

        // this is what I want to return
        const nodes;

        while (nodes,) {
          const node = await this.next();
        }

        // "the task is protcol agnostic"
        for (protocol in founded_node.WorkingProtocolInGivenNode) {
          nodes.push(node);
        }

      return nodes;
    }
}
