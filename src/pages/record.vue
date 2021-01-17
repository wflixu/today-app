<template>
  <h2>record you exericse</h2>
  <div>
    <div>
      <label for="name">name:</label>
      <input name="name" type="text" v-model="name" />
    </div>
    <div>
      <label for="type">type:</label>
      <input name="type" type="text" v-model="type" />
    </div>
    <div>
      <label for="count">count:</label>
      <input name="count" type="number" v-model="count" />
    </div>
    <div>
      <button @click="save">save</button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['http'],
  data() {
    return {
      name: 'fwc',
      type: 'count',
      count: 0,
    };
  },
  methods: {
    save() {

      const user =this.$root.user;
      const data = {
        name: this.name,
        type: this.type,
        count: this.count,
      };
      this.http.request({
           method:'POST',
           url:'classes/record',
           headers: {
            'X-LC-Session': user.sessionToken,
          },
          data: data
      })
        .then((response) => {
          console.log(response);
          this.$router.push('./')
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
