const cards = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };

const getGame = () => [ ...Array(parseInt(readline())) ].fill().map(() => cards[ readline().replace(/([DHCS])/, '') ]);

let isPAT = false;
let rounds = 0;
let playerACards = getGame();
let playerBCards = getGame();

const hasALoser = () => (playerACards.length <= 0 || playerBCards.length <= 0);

const playOneRound = (graveyardA, graveyardB) => {
    const cardA = playerACards.shift();
    const cardB = playerBCards.shift();

    if (cardA > cardB) {
        playerACards = playerACards.concat([ ...graveyardA, cardA, ...graveyardB, cardB ]);
        return false;
    } else if (cardA < cardB) {
        playerBCards = playerBCards.concat([ ...graveyardA, cardA, ...graveyardB, cardB ]);
        return false;
    } else {
        graveyardA = [ ...graveyardA, cardA, playerACards.shift(), playerACards.shift(), playerACards.shift() ];
        graveyardB = [ ...graveyardB, cardB, playerBCards.shift(), playerBCards.shift(), playerBCards.shift() ];

        return (!hasALoser() ? playOneRound(graveyardA, graveyardB) : true); // It's a PAT
    }
};

while (!isPAT && !hasALoser()) {
    ++rounds;
    isPAT = playOneRound([], []);
}

print(isPAT ? 'PAT' : (playerACards.length > 0 ? '1 ' : '2 ') + rounds);