<template>
  <nav>
    <router-link to="/record">record</router-link>
  </nav>
  <div>
    <ul>
      <li v-for="item in records" :key="item.objectId">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  inject: ['http'],

  data: function() {
    return {
      records: [],
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    toggle(event) {
      console.log(event);
    },
    getList() {
      const user = this.$root.user;
      this.http
        .request({
          method: 'GET',
          url: 'classes/record',
          headers: {
            'X-LC-Session': user.sessionToken,
          },
        })
        .then((response) => {
          console.log(response);
          this.records = response.data.results;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped></style>
