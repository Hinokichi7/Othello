<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HelloWorld msg="OTHELLO"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },

  // クリックされたセルのidと同じセルのコマをかえる
  // select(id, rows) {
  //   rows.forEach((row) => {
  //     row.forEach((cell) => {
  //       const x = cell;
  //       if (id === x.id) {
  //         x.value = '●';
  //       }
  //     });
  //   });
  // },
  select(id, rows) {
    rows.forEach((row) => {
      const selectCell = row.find((cell) => cell.id === id);
      selectCell.value = '●';
    });
  },
};
</script>
