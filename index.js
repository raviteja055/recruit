


// function selectWinner(cometitions, results) {
//     let obj = {}
//     for (i = 0; i < cometitions.length; i++) {
//         let groupWinner = results[i] == 1 ? cometitions[i][0] : cometitions[i][1]

//         if (obj[groupWinner]) {
//             obj[groupWinner] = obj[groupWinner] + 3
//         } else {
//             obj[groupWinner] = 3
//         }
//     }
//     let points = 0
//     let winner;
//     for (let i in obj) {
//         if (obj[i] > points) {
//             points = obj[i]
//             winner = i
//         }
//     }
//     console.log(winner)

// }


// let competitions = [
//     ["HTML", "Java"],
//     ["Java", "Python"],
//     ["Python", "HTML"],
//     ["C#", "Python"],
//     ["Java", "C#"],
//     ["C#", "HTML"],
//     ["SQL", "C#"],
//     ["HTML", "SQL"],
//     ["SQL", "Python"],
//     ["SQL", "Java"]
// ]
// let results = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]

// selectWinner(competitions, results)



// let string = "abc"
// let Key = 52


// function shiftIndex(string, Key) {
//     let alphabets = "abcdefghijklmnopqrstuvwxyz"
//     let res = "";
//     for (let i = 0; i < string.length; i++) {
//         let index = alphabets.indexOf(string[i])
//         let newIndex = index + Key
//         if (newIndex >= 26) {
//             newIndex = newIndex % 26

//         }
//         res = res + alphabets[newIndex]
//         // console.log(alphabets[newIndex])
//     }
//     console.log(res)
// }

// shiftIndex(string, Key)
















function snakeGame() {
    const players = ["p1", "p2"]

    const snakes = {
        23: 17,
        45: 5,
        67: 28,
        52: 33,
        90: 50
    }
    const ladders = {
        22: 61,
        65: 97,
        54: 68,
        8: 29
    }
    let positions = { "p1": 0, "p2": 0 }
    let currentPlayer = 0;
    const rollDice = () => {
        return (Math.floor(Math.random() * 6) + 1)
    }
    const play = (player, totalPlayers, index) => {
        // console.log(totalPlayers, index + 1)
        const diceVal = rollDice()
        positions[player] = positions[player] + diceVal
        if (snakes[positions[player]]) {
            positions[player] = snakes[positions[player]]
        } else if (ladders[positions[player]]) {
            positions[player] = ladders[positions[player]]
        }
        if (positions[player] > 100) {
            positions[player] = positions[player] - diceVal
        } else if (positions[player] == 100) {
            console.log("winner", player)
            return "winner"
        }
        console.log(positions, diceVal, player)


        if (totalPlayers == index + 1) {
            interate()
        }
    }
    const interate = () => {
        for (let i = 0; i < players.length; i++) {
            play(players[i], players.length, i)

        }
    }
    interate()
}

snakeGame()