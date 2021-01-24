<template>
<body>
  <!-- タイトル -->
  <h3>{{msg}}</h3>
  <!-- ボード -->
  <table>
    <!-- 段 -->
    <tr v-for="row in rows" :key="row.id">
      <!-- 行 -->
      <td v-for="cell in row" :key="cell.id">
        <!-- クリックイベント(ボタン) -->
        <button @click="select(cell.id)">{{cell.value}}</button>
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

  // teble
  rows: any[][]=
    [
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '○' }, { value: '●' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '●' }, { value: '○' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' },
      ],
      [
        { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' }, { value: '' },
      ],
    ];

  // Homeクラスで設定
  select() {
    this.$emit('select', this.rows);
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
