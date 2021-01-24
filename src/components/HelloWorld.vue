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

  rows: any[]=
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table{
  width: 100%;
  margin: 0 auto;
  max-width: 700px;
  border: 1px solid #ccc;
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
  border: 1px solid #ccc;
  font-size: 50px;
}

</style>
