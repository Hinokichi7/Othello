<template>
<body>
  <table>
    <tr v-for="row in rows" :key="row.id">
      <td v-for="cell in row_cells" :key="cell.id">{{cell.value}}</td>
    </tr>
  </table>
</body>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  rows: any[]= [
    {
      rowCells: [
        [{ id: '1', value: 'aaa' }, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}, {}],
      ],
    },
  ];
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width: 80%;
    border: 10px solid rgba(0, 0, 0, 0.12);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
