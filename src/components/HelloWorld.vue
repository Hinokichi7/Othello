<template>
<body>
  <!-- タイトル -->
  <h3>{{msg}}</h3>
  <!-- ボード -->
  <table>
    <!-- 段 -->
    <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
      <!-- 行 -->
      <td v-for="(col, colIndex) in row" :key="colIndex">
        <!-- クリックでセルのidをセット -->
        <button @click="select(rowIndex, colIndex)">{{col}}</button>
      </td>
    </tr>
  </table>
</body>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Cell from '../class/cell';

@Component
export default class HelloWorld extends Vue {
  // Homeクラスで設定
  @Prop() private msg!: string;

  currentStone = '○';

  // table
  x() {
    let rows!: Cell[][];
    for (let i = 0; i < 8; i = +1) {
      let row!: Cell[];
      row.push(new Cell());
      for (let k = 0; k < 8; k = +1) {
        rows.push(row);
      }
    }
    return rows;
  }

  rows: Cell[][] | null = null;

  created() {
    this.rows = this.x();
  }

  // rows: any[][]=
  //   [
  //     ['', '', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', '', ''],
  //     ['', '', '', '●', '○', '', '', ''],
  //     ['', '', '', '○', '●', '', '', ''],
  //     ['', '', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', '', ''],
  //     ['', '', '', '', '', '', '', ''],
  //   ];

  // select(rowIndex: number, colIndex: number) {
  //   // clickしたセルの位置
  //   const x = rowIndex;
  //   const y = colIndex;
  //   // クリックしたセルにコマがない
  //   if (this.rows[x][y] === '') {
  //     this.rows[x][y] = this.getStone();
  //     // 隣接したセル
  //     const cell1 = this.rows[x - 1][y - 1];
  //     const cell2 = this.rows[x - 1][y];
  //     const cell3 = this.rows[x - 1][y + 1];
  //     const cell4 = this.rows[x][y - 1];
  //     const cell5 = this.rows[x][y + 1];
  //     const cell6 = this.rows[x][y + 1];
  //     const cell7 = this.rows[x + 1][y - 1];
  //     const cell8 = this.rows[x + 1][y];
  //     const cell9 = this.rows[x + 1][y + 1];
  //     // 色違いのセル
  //     const cellx = this.rows[x][y] === '○' ? '●' : '○';
  //     // 色違いの隣接したセルがある
  //     if (cell1 !== '' && cell1 === cellx) {
  //       console.log('cell1');
  //     }
  //     if (cell2 !== '' && cell2 === cellx) {
  //       console.log('cell2');
  //     }
  //     if (cell3 !== '' && cell3 === cellx) {
  //       console.log('cell3');
  //     }
  //     if (cell4 !== '' && cell4 === cellx) {
  //       console.log('cell4');
  //     }
  //     if (cell5 !== '' && cell5 === cellx) {
  //       console.log('cell5');
  //     }
  //     if (cell6 !== '' && cell6 === cellx) {
  //       console.log('cell6');
  //     }
  //     if (cell7 !== '' && cell7 === cellx) {
  //       console.log('cell7');
  //     }
  //     if (cell8 !== '' && cell8 === cellx) {
  //       console.log('cell8');
  //     }
  //     if (cell9 !== '' && cell9 === cellx) {
  //       console.log('cell9');
  //     }

  //     // 配列の変更をVueに検知させる
  //     Vue.set(this.rows, x, this.rows[x]);
  //   }
  // }

  // getStone() {
  //   const stone = this.currentStone === '○' ? '●' : '○';
  //   this.currentStone = stone;
  //   return stone;
  // }
}
</script>
<style scoped>
table{
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
  /* border: 1px solid #ccc; */
  background-color: #008000;
}

/* tr{
  padding: 5px;
  border: 1px solid #ccc;
} */

td{
  /* padding: 5px; */
  width: 80px;
  height: 80px;
  /* border: 1px solid #ccc; */

}
button{
  width: 80px;
  height: 80px;
  font-size: 50px;
  background-color: #008000;
}
</style>
