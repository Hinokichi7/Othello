<template>
<body>
  <h3>{{msg}}</h3>
  <table>
    <tr v-for="row in rows" :key="row.id">
      <td v-for="cell in row" :key="cell.id">{{cell.value}}</td>
    </tr>
  </table>
</body>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  // row: any[] = [{}, {}, {}, {}, {}, {}, {}, {}];

  rows: any[]=
    [
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
      [
        { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' }, { value: '○' },
      ],
    ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width: 100%;
    border: 1px solid #ccc;
}

tr{
  padding: 5px;
  border: 1px solid #ccc;
}

td{
  padding: 5px;
  border: 1px solid #ccc;
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
