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

@Component
export default class HelloWorld extends Vue {
  // Homeクラスで設定
  @Prop() private msg!: string;

  currentStone = '○';
  // table

  rows: any[][]=
    [
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '●', '○', '', '', ''],
      ['', '', '', '○', '●', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', ''],
    ];

  select(rowIndex: number, colIndex: number) {
    // clickしたセルの位置
    const x = rowIndex;
    const y = colIndex;
    // クリックしたセルが空文字
    if (this.rows[x][y] === '') {
      this.rows[x][y] = this.getStone();
      // 隣接したセル
      const cell1 = this.rows[x - 1][y - 1];
      const cell2 = this.rows[x - 1][y];
      const cell3 = this.rows[x - 1][y + 1];
      const cell4 = this.rows[x][y - 1];
      const cell5 = this.rows[x][y + 1];
      const cell6 = this.rows[x][y + 1];
      const cell7 = this.rows[x + 1][y - 1];
      const cell8 = this.rows[x + 1][y];
      const cell9 = this.rows[x + 1][y + 1];
      if (
        cell1 !== ''
        || cell2 !== ''
        || cell3 !== ''
        || cell4 !== ''
        || cell5 !== ''
        || cell6 !== ''
        || cell7 !== ''
        || cell8 !== ''
        || cell9 !== ''
      ) {
        console.log('rinsetu');
        if (
          cell1 !== this.rows[x][y]
          || cell2 !== this.rows[x][y]
          || cell3 !== this.rows[x][y]
          || cell4 !== this.rows[x][y]
          || cell5 !== this.rows[x][y]
          || cell6 !== this.rows[x][y]
          || cell7 !== this.rows[x][y]
          || cell8 !== this.rows[x][y]
          || cell9 !== this.rows[x][y]
        ) {
          console.log('atai');
        }
      }
      // 配列の変更をVueに検知させる
      Vue.set(this.rows, x, this.rows[x]);
    }
  }

  getStone() {
    const stone = this.currentStone === '○' ? '●' : '○';
    this.currentStone = stone;
    return stone;
  }
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
