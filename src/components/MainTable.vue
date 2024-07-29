<template>
  <div style="margin-bottom: -10px">Number of players:</div>
  <div class="buttons">
    <div class="btn" @click="newSheet()">🔄</div>
    <div class="btn" @click="setPlayers(3)">3</div>
    <div class="btn" @click="setPlayers(4)">4</div>
    <div class="btn" @click="setPlayers(5)">5</div>
    <div class="btn" @click="setPlayers(6)">6</div>
    <div class="btn" @click="setPlayers(7)">7</div>
    <div class="btn" @click="printSheet()">🖨️</div>
  </div>
  <div id="theTable">
    <div class="table">
      <!--HEAD-->
      <div class="tableHeader tableRow">
        <div class="cards">Cards</div>
        <div class="suit">Suit</div>
        <div class="player" v-for="n in parseInt(numPlayers)" :key="n">
          <br />
          <br />
        </div>
      </div>

      <!--BODY-->
      <div
        class="tableRow"
        v-for="n in newRoundData"
        :key="n"
        :class="n.blind == 1 ? 'blind' : ''"
      >
        <div class="cards">{{ n.cards }}</div>
        <div class="suitHold">
          <div class="suit" :class="">
            {{
              suits[n.suit] == 'end'
                ? '💩'
                : suits[n.suit] == 'nt'
                ? 'NT'
                : suits[n.suit].toUpperCase()
            }}
          </div>
        </div>
        <div
          class="player"
          v-for="y in parseInt(numPlayers)"
          :key="y"
          :class="y == n.dealer ? 'deal' : ''"
        >
          <div class="slot predict" :class="y == n.caller ? 'call' : ''"></div>
          <div class="slot score"></div>
          <div class="slot totalScore"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { generateNewRoundData } from './roundData.js';

export default {
  props: {
    startSuit: Number,
    numberPlayers: Number,
  },

  data() {
    return {
      numPlayers: this.numberPlayers,
      newRoundData: null,
      numCards: 52,
      suits: ['s', 'h', 'c', 'd', 'nt', 'end'],
    };
  },

  beforeMount() {
    console.log('yeet');
    this.newRoundData = generateNewRoundData(this.numCards, this.numPlayers);
  },

  methods: {
    setPlayers(playerCount) {
      this.numPlayers = playerCount;
      this.newSheet();
    },
    newSheet() {
      this.newRoundData = generateNewRoundData(this.numCards, this.numPlayers);
    },
    printSheet() {
      // Get HTML to print from element
      const prtHtml = document.getElementById('theTable').innerHTML;

      // Get all stylesheets HTML
      let stylesHtml = '';
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }

      // Open the print window
      const WinPrint = window.open(
        '',
        '',
        'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'
      );

      WinPrint.document.write(`<!DOCTYPE html>
          <html>
            <head>
              ${stylesHtml}
            </head>
            <body>
              <div class="noPrint btn" onclick="window.print()">Print</div>
              <div id="theTable">
                ${prtHtml}
              </div>
              <div class="footer">onyeroppo.stackblitz.io - @SpacedDood</div>
            </body>
          </html>`);

      WinPrint.document.close();
      WinPrint.focus();
      WinPrint.print();
      //WinPrint.close();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons {
  display: flex;
  max-width: 900px;
  margin: auto;
}

.table {
  margin: 0 auto 60px;
  width: 90%;
  max-width: 800px;
  background: white;
}
.table div {
  border: 1px solid black;
  justify-content: center;
  text-align: center;
  align-content: middle;
}
.tableRow {
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.tableRow:last-child {
  border-top: 5px solid black;
  border-bottom: 5px solid black;
}

.tableRow:last-child .predict.call {
  border: none;
}

.tableRow:last-child .score {
  border-left: 1px solid white;
}

.hover {
  top: -20px;
  display: block;
  position: absolute;
}

.tableRow.blind {
  background: linear-gradient(
    45deg,
    #feffff 0%,
    #969696 4%,
    #ffffff 8%,
    #969696 12%,
    #969696 12%,
    #ffffff 16%,
    #969696 19%,
    #969696 19%,
    #ffffff 22%,
    #969696 25%,
    #ffffff 28%,
    #ffffff 28%,
    #969696 30%,
    #ffffff 32%,
    #969696 35%,
    #ffffff 38%,
    #969696 40%,
    #ffffff 42%,
    #969696 44%,
    #ffffff 46%,
    #969696 48%,
    #ffffff 53%,
    #969696 57%,
    #ffffff 60%,
    #969696 62%,
    #ffffff 66%,
    #969696 69%,
    #ffffff 72%,
    #969696 75%,
    #ffffff 78%,
    #969696 80%,
    #ffffff 83%,
    #969696 85%,
    #ffffff 88%,
    #969696 89%,
    #ffffff 91%,
    #969696 93%,
    #ffffff 96%,
    #969696 98%,
    #ffffff 100%
  );

  -webkit-print-color-adjust: exact;
}

.blind .cards {
  border: 4px solid black !important;
  box-sizing: border-box;
  border-radius: 100px;
}

.cards {
  width: 60px;
  margin: auto;
  border: 0px !important;
}

.suitHold {
  width: 40px;
  padding: 1px;
}

.suitHold .suit {
  width: 40px;
  padding: 1px;
  box-sizing: border-box;
  padding-top: 1px;
  font-size: 24px;
}

.suit {
  width: 30px;
  height: 30px;
  background-no-repeat: none;
  -webkit-print-color-adjust: exact;
  margin: auto;
  border: none !important;
  text-align: center;
  vertical-align: middle;
}
.tableHeader .suit {
  background: none;
  margin: auto;
  height: fit-content;
  padding: 2px;
  border: none;
  width: 40px;
}

.spades {
  background-position-x: -91px;
  background-position-y: -40px;
}
.hearts {
  background-position-x: 58px;
  background-position-y: -40px;
}
.clubs {
  background-position-x: 58px;
  background-position-y: -7px;
}
.diamonds {
  background-position-x: 30px;
  background-position-y: -6px;
}
.nt {
  background: none;
  font-weight: bold;
  font-size: 22px;
  padding-top: 3px;
  box-sizing: border-box;
}

.end {
  background: none;
  font-weight: bold;
  font-size: 22px;
  padding-top: 3px;
  box-sizing: border-box;
}

.player {
  display: flex;
  width: 125px;
  text-align: center;
  justify-content: center;
  flex: 1;
  border-left: 1px solid black !important;
  border-right: 1px solid black !important;
}

.player.deal {
  border: 2px solid white;
}

.table .player {
  border: 0px;
  border-left: 1px solid black;
}

.player div {
  border: 0px;
  border-left: 1px solid black;
}

.slot.predict {
  border: 1px solid #fff0;
}

.slot.predict.call {
  border: 1px solid darkGreen;
  border-radius: 100px;
}
.slot.totalScore {
  flex: 1.6;
}

.slot {
  flex: 1;
  border: 1px solid grey;
}

.hover {
  display: none;
}
.tableRow {
  margin-top: 1px;
}

.btn {
  background: white;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  width: fit-content;
  border-radius: 5px;
  margin: 20px auto;
  box-shadow: 0px 2px 5px black;
  user-select: none;
  display: flex;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  text-align: center;
}

@media print {
  .noPrint {
    display: none;
  }
  #theTable {
    margin-top: 40px;
  }
}

.footer {
  display: block;
  position: fixed;
  margin: auto;
  width: 100%;
  bottom: 30px;
  text-align: center;
}
</style>
