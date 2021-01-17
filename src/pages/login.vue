<template>
  <div>
    username: <input v-model="username" />
    <br />
    password: <input v-model="password" />
    <br />
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: 'test',
      password: '123',
    };
  },
  inject: ['auth', 'urls', 'http'],
  methods: {
    login() {
      console.log(this.auth, this.urls);
      console.log(this.username, this.password);
      this.http
        .post('login', {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
