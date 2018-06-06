<template>
    <div class="search">
        <span class="icon-search "></span>
        <input type="text" placeholder="请输入搜素内容">
    </div>
</template>

<script>
export default {
    name: 'search',
    props: ['searchText'],
    data() {
        return {
            search: '',
        }
    },
    created: function() {
        this.search=this.searchText;
    }
}
</script>
<style lang="stylus">
    .search
       width  90%
       border 1px solid  #dddddd
    input 
      height 24px
      line-height  24px;
      border none
      outline  none 
      width 80%
      vertical-align middle

     .icon-search 
      margin-top 5px;
      display inline-block
      width 30px;
      height  30px;
      vertical-align top
      background-image url('../assets/icon/search.png')
      background-position center
      background-size cover
    
</style>


