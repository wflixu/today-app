<template>
<div class="explore-content">
    <search :searchText="search" class="search"></search>
    <div class="list">
        <div class="list-item">
            <div class="item-header">
                <span class="circle">1</span>
                <span>name</span>
                <a href="#">关注</a>
            </div>
            <div class="item-label">
                <span>#label</span>
            </div>
            <div class="item-body">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
                <img src="../assets/images/photo1.jpg" alt="">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Search from '../components/Search.vue';

export default {
    data() {
        return {
            name: 'explort',
            search: '',
            list: [{
                    name: 'username1',
                    userid: '1234',
                    labels: ["l", '2', 'ajsk'],
                    images: [{
                        url: '',
                        postid: ''
                    }]
                },
                {
                    name: 'username1',
                    userid: '1234',
                    labels: ["l", '2', 'ajsk'],
                    images: [{
                        url: '',
                        postid: ''
                    }]
                }
            ]
        };
    },
    components: {
        search: Search
    }
};
</script>
<style scoped lang="stylus">
.explore-content {
    background-color: #acacac;
    height: 100%;
    display flex;
    flex-direction column;
}

.search {
    width: 90%;
    margin: 0 auto;
    height: 40px;
    background-color: #ffffff;
    line-height: 40px;
}
.list{
    background-color :#fff;
    flex: 1
}
.list-item{

}
.item-header{
    text-align :left;
    display :flex;
    height:30px;
    padding:5px 10px;
    border-top:1px solid #ddd;
    border-bottom:1px solid #ddd;
}
.item-header>span{
  line-height :30px;
}
.item-header>a{
   line-height 30px;
   margin-left:20px;
}
.item-header>span.circle{
    width: 30px;
    height: 30px;
    border-radius 15px
    background-color :#ff9933;
    color:#fff;
    text-align :center;
    margin-right:10px;
}
.item-label{
    margin:5px 10px;
    text-align :left; 
}
.item-body{
    border-top:1px solid #ddd;
    border-bottom :1px solid #ddd;
    display flex;
    flex-direction row;
    height:5em;
    align-items :center
}
.item-body>img{
    margin 0.5em;
    width: 4em;
    height: 4em;
}
</style>



