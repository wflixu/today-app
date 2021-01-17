<template>
  <div>
     <button @click="toggle">toggle</button>
  </div>
</template>

<script>

export default {
    data:function(){
        return {}
    },
    methods:{
        toggle(event){   
           console.log(event)
        }
    }
};
</script>

<style scoped></style>
