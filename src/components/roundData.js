export function generateNewRoundData(numCards, numPlayers) {
  var totalRounds = Math.floor(numCards / numPlayers);
  var randomNo = Math.floor(Math.random() * totalRounds);
  console.log(randomNo);
  var roundData = [];

  /* Round Data */
  function roundTemp(roundNo, numCards, numPlayers, final = false) {
    return {
      round: roundNo,
      cards: numCards,
      suit: !final ? getSuit(roundNo) : 5,
      dealer: false,
      caller: ((roundNo - 1) % numPlayers) + 1,
      final: final,
      blind: 0,
    };
  }

  var suitCount = 0;
  var rangeCount = 0;

  function getSuit(roundNo) {
    if (numPlayers != 5) return (roundNo + 4 + randomNo) % 5;
    else {
      return (roundNo + (Math.floor(roundNo / 5) + 1) + (randomNo - 2)) % 5;
    }
  }

  var RoundNo = 1;

  /* Going down */
  for (var x = totalRounds; x > 0; x--) {
    roundData.push(roundTemp(RoundNo, x, numPlayers));
    RoundNo++;
  }

  /* Going up! */
  for (var x = 2; x <= totalRounds; x++) {
    roundData.push(roundTemp(RoundNo, x, numPlayers));
    RoundNo++;
  }

  /*SORT BLINDS*/
  var blinds = [];
  for (var x = 1; x <= numPlayers; x++) {
    blinds.push(x);
  }
  console.log('blinds:' + blinds);

  console.log('test: 9%4=' + (10 % 4));

  var bLength = blinds.length;
  for (var x = 1; x <= bLength; x++) {
    var validRounds = [];

    roundData.forEach((round) => {
      if ((round.round + x) % numPlayers == 0) {
        validRounds.push(round);
      }
    });

    var chosenRound = Math.floor(Math.random() * validRounds.length);
    roundData[validRounds[chosenRound].round - 1].blind = 1;

    console.log('aaa', validRounds);
  }

  /*ADD FINAL ROUND*/

  roundData.push(roundTemp(RoundNo, 'FIN', numPlayers, true));

  return roundData;
}
