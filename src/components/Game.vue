<template>
  <div>
    <button class="box" v-if="stepWinner < 2">
      ฉันคือกระดาษแสนฉลาด ผู้ไม่เคยแพ้ ฉันจะเป็น X นะ และฉันจะเริ่มก่อน
    </button>
    <button class="box" v-if="stepWinner > 1">
      ฉันมีรูปแบบการเดินที่ทำให้ไม่มีทางแพ้อยู่
      ฉันก็แค่เดินตามกฎที่กำหนดไว้ไปที่ละข้อ
      ถ้าเดินตามกฎนี้ไม่ว่าจะอีกกี่ครั้งก็ไม่มีทางแพ้
    </button>
    <div class="game">
      <div class="game-area">
        <div class="game-title">
          <h1>กระดาษฉลาดจุง</h1>
        </div>
        <board :squares="squares" :winner="winner" @click="click" />

        <div class="game-info">
          <p v-if="stepNumber === 0">
            เริ่มเล่นได้ : &nbsp;<b :class="Player">{{ Player }} </b>
          </p>
          <p v-else-if="!!winner">
            ผู้ชนะได้แก่ : &nbsp;
            <b :class="aiPlayer">{{ aiPlayer }}</b
            >!&nbsp;
            <button @click="restart">เล่นอีกครั้ง</button>
          </p>
          <p v-else-if="stepNumber > 3">
            เสมอ!&nbsp;
            <button @click="restart">เล่นอีกครั้ง</button>
          </p>
          <p v-else>
            ตอนนี้ตาของ : &nbsp;
            <b :class="Player">{{ Player }}</b
            >&nbsp;
          </p>
        </div>
      </div>
      <!-- <button class="tic" v-if="stepWinner < 2">
      ฉันคือกระดาษแสนฉลาด ผู้ไม่เคยแพ้ ฉันจะเป็น X นะ และฉันจะเริ่มก่อน </button> -->
      <!-- <img v-if="stepWinner > 1" id="image" v:bind:src="tic" alt="tic" /> -->
      <p class="img" v-if="stepWinner > 1"> 
        <img v-if="stepNumber == 0" id="image" src="../assets/tic1.png" alt="tic1" />
        <img v-if="stepNumber == 1" id="image" src="../assets/tic2.png" alt="tic2" />
        <img v-if="stepNumber == 2" id="image" src="../assets/tic3.png" alt="tic3" />
        <img v-if="stepNumber == 3" id="image" src="../assets/tic4.png" alt="tic4" />
        <img v-if="stepNumber == 4" id="image" src="../assets/tic5.png" alt="tic5" />
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  components: {
    Board: () => import("./Board"),
  },
  data() {
    return {
      squares: Array(9).fill(null),
      stepNumber: 0,
      Player: "O",
      aiPlayer: "X",
      winner: null,
      stepWinner: 0,
    };
  },
  //เรียกใช้อัติโนมัตเมื่อเปิดหน้าเว็บขึ้นมา
  mounted() {
    this.aiMove();
  },
  methods: {
    hasWinner() {
      if (this.winner) return true;

      const squares = this.squares;
      const matches = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (let i = 0; i < matches.length; i++) {
        const [a, b, c] = matches[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          this.winner = [a, b, c];
          return true;
        }
      }

      return false;
    },

    restart() {
      this.squares = Array(9).fill(null);
      this.stepNumber = 0;
      this.Player = "O";
      this.aiPlayer = "X";
      this.winner = null;
      this.aiMove();
      this.stepWinner = this.stepWinner + 1;
    },

    click(i) {
      if (this.squares[i] || this.winner) return;
      this.$set(this.squares, i, this.Player);
      if (!this.hasWinner()) {
        this.stepNumber = this.stepNumber + 1;
      }
      if (this.stepNumber == 1) {
        if (this.squares[0] == "O") this.$set(this.squares, 2, this.aiPlayer);
        else this.$set(this.squares, 0, this.aiPlayer);
      }

      if (this.stepNumber >= 2) {
        const move = [
          [0, 1, 2],
          [6, 7, 8],
          [3, 4, 5],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        //เช็ค X
        for (let i = 0; i < move.length; i++) {
          let countX = 0;
          for (let j = 0; j < 3; j++) {
            if (this.squares[move[i][j]] == "X") {
              countX++;
            }
          }
          if (countX == 2 ) {
            for (let j = 0; j < 3; j++) {
              if (this.squares[move[i][j]] == null) {
                this.$set(this.squares, move[i][j], this.aiPlayer);
                this.hasWinner();
                return;
              }
            }
          }
        }
        //เช็ค O
        for (let i = 0; i < move.length; i++) {
          let countO = 0;
          for (let j = 0; j < 3; j++) {
            if (this.squares[move[i][j]] == "O") {
              countO++;
            }
          }
          if (countO == 2 ) {
            for (let j = 0; j < 3; j++) {
              if (this.squares[move[i][j]] == null) {
                this.$set(this.squares, move[i][j], this.aiPlayer);
                this.hasWinner();
                return;
              }
            }
          }
        }
        
        // กรณีที่ไม่มีแถวไหนมี X 2ตัว หรือ O 2ตัว
        if (this.squares[5] == "O") this.$set(this.squares, 6, this.aiPlayer);

      }
    },
    aiMove() {
      if (this.stepNumber === 0) {
        this.$set(this.squares, 8, this.aiPlayer);
      }
    },
  },
};
</script>

<style scoped>
.img{
padding: 0%;
margin: 0%;
width: 200px;
height: 500px;
margin-left: 30px;
margin-right: 50vh;
}

.box {
  font-family: "Sriracha", cursive;
  color: black;
  font-size: 20px;
  background-color: #e8505b;
  border: #e8505b;
  padding: 15px;
  margin: 10px;
}

#image {
  width: 500px;
  padding: 10px;
  /* margin-top: 20px;
  margin-left: 40px; */
}

.tic{
  font-family: "Sriracha", cursive;
  color: black;
  font-size: 20px;
  background-color: #f9d56e;
  border: #f9d56e;
  padding: 10px;
  margin-left: 20px;
  margin-top: 0%;
  margin-bottom: 0%;
  width: 500px;
}


.game {
  background-color: rgba(var(--gradient-color-base));
  background-image: repeating-linear-gradient(
      45deg,
      #0000 5px,
      rgba(var(--gradient-color-1), 0.2) 5px,
      rgba(var(--gradient-color-1), 0.2) 10px,
      rgba(var(--gradient-color-2), 0) 10px,
      rgba(var(--gradient-color-2), 0) 35px,
      rgba(var(--gradient-color-2), 0.4) 35px,
      rgba(var(--gradient-color-2), 0.4) 40px,
      rgba(var(--gradient-color-1), 0.2) 40px,
      rgba(var(--gradient-color-1), 0.2) 50px,
      rgba(10, 36, 45, 0) 50px,
      rgba(var(--gradient-color-1), 0) 60px,
      rgba(var(--gradient-color-2), 0.4) 60px,
      rgba(var(--gradient-color-2), 0.4) 70px,
      rgba(var(--gradient-color-3), 0.3) 70px,
      rgba(var(--gradient-color-3), 0.3) 80px,
      rgba(var(--gradient-color-3), 0) 80px,
      rgba(var(--gradient-color-3), 0) 90px,
      rgba(var(--gradient-color-2), 0.4) 90px,
      rgba(var(--gradient-color-2), 0.4) 110px,
      rgba(var(--gradient-color-2), 0) 110px,
      rgba(var(--gradient-color-2), 0) 120px,
      rgba(var(--gradient-color-1), 0.2) 120px,
      rgba(var(--gradient-color-1), 0.2) 140px
    ),
    repeating-linear-gradient(
      135deg,
      #0000 5px,
      rgba(var(--gradient-color-1), 0.2) 5px,
      rgba(var(--gradient-color-1), 0.2) 10px,
      rgba(var(--gradient-color-2), 0) 10px,
      rgba(var(--gradient-color-2), 0) 35px,
      rgba(var(--gradient-color-2), 0.4) 35px,
      rgba(var(--gradient-color-2), 0.4) 40px,
      rgba(var(--gradient-color-1), 0.2) 40px,
      rgba(var(--gradient-color-1), 0.2) 50px,
      rgba(var(--gradient-color-1), 0) 50px,
      rgba(var(--gradient-color-1), 0) 60px,
      rgba(var(--gradient-color-2), 0.4) 60px,
      rgba(var(--gradient-color-2), 0.4) 70px,
      rgba(var(--gradient-color-3), 0.3) 70px,
      rgba(var(--gradient-color-3), 0.3) 80px,
      rgba(var(--gradient-color-3), 0) 80px,
      rgba(var(--gradient-color-3), 0) 90px,
      rgba(var(--gradient-color-2), 0.4) 90px,
      rgba(var(--gradient-color-2), 0.4) 110px,
      rgba(var(--gradient-color-2), 0) 110px,
      rgba(var(--gradient-color-2), 0) 140px,
      rgba(var(--gradient-color-1), 0.2) 140px,
      rgba(var(--gradient-color-1), 0.2) 160px
    );
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-area {
  display: flex;
  flex-flow: column;
}

.game-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 3vmin;
}

.game-title img {
  margin: 0 12px 0 -20px;
  width: 30px;
  filter: drop-shadow(-1px 1px 0 #0007) drop-shadow(1px -1px 0 #0007)
    drop-shadow(1px 1px 0 #0007);
}

.game-title h1 {
  margin: 0;
  font-size: 2.25em;
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 1px #000b, -1px 1px 1px #000b, 1px -1px 1px #000b,
    1px 1px 1px #000b;
}

.game-info {
  margin: 3vmin 0 0;
  padding: 1rem 0.5rem;
  font-size: 1.25em;
  text-align: center;
  box-shadow: 2.5px 5px 25px #0001, 0 1px 6px #0004;
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  border-radius: 0.5rem;
  backdrop-filter: blur(10px);
  background: #fff6;
  background-blend-mode: exclusion;
  background-image: var(--noise-pattern);
  color: #111;
}

.game-info p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game-info .X,
.game-info .O {
  text-shadow: -1px -1px 0 #000b, -1px 1px 0 #000b, 1px -1px 0 #000b,
    1px 1px 0 #000b;
}

.game-info .X {
  color: #f9d56e;
}

.game-info .O {
  color: #14b1ab;
}

.game-info button {
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.75em;
  padding: 0.5rem 1rem;
  margin: -0.5rem 0 -0.5rem 1rem;
  border: 2px solid #fff;
  background: #e8505b;
  text-shadow: 0 0 1px #fff, 0 2px 5px #fff5;
  color: #111;
  cursor: pointer;
  outline: none;
  transition: all 0.25s ease;
}

.game-info button:focus,
.game-info button:hover {
  background: #1115;
  border-color: rgba(var(--theme-color));
  box-shadow: 0 0 10px rgba(var(--theme-color), 0.75);
  color: rgba(var(--theme-color));
  text-shadow: -1px -1px 0 #0007, -1px 1px 0 #0007, 1px -1px 0 #0007,
    1px 1px 0 #0007;
}

.game-info button:active {
  background: #1119;
}
</style>
