const inputs = readline().split(' ');
const N = parseInt(inputs[ 0 ]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[ 1 ]); // the number of links
const E = parseInt(inputs[ 2 ]); // the number of exit gateways

const createLink = (A, B) => {
    map[ A ] = {
        connect: (map[ A ] ? [ B ].concat(...map[ A ].connect) : [ B ]),
        isGateway: false
    };
};

const getClosestGatewayLinkFrom = (start) => {
    let gateway = null;
    map[ start ].connect.forEach(node => {
        if (map[ node ].isGateway) {
            gateway = node;
        }
    });

    if (gateway === null) {
        return getClosestGatewayLinkFrom(map[ start ].connect[ 0 ]);
    }

    return start + ' ' + gateway;
};

let map = [];

for (let i = 0; i < L; i++) {
    let inputs = readline().split(' ');
    let N1 = parseInt(inputs[ 0 ]); // N1 and N2 defines a link between these nodes
    let N2 = parseInt(inputs[ 1 ]);
    createLink(N1, N2);
    createLink(N2, N1);
}

for (let i = 0; i < E; i++) {
    map[ parseInt(readline()) ].isGateway = true;
}

while (true) {
    let SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn

    // Example: 0 1 are the indices of the nodes you wish to sever the link between
    print(getClosestGatewayLinkFrom(SI));
}