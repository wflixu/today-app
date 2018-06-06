<template>
  <div class="home_content">
     <div class="content">
        <div class="post_list" v-show="postList.length>0" >
          <div class="post" v-for="(v,k) in postList" :key="k" >
             <div class="post_header">
                <img src="../assets/logo.png" alt="" :attr="{'src':v.author.avatar}">
                 <div>
                     <div>{{v.author.name}}</div>
                    <div> {{v.author.from}}</div>
                 </div>
            </div>
            <div class="post_body">
                  <div class="post_body_imgs" v-for="(photo,idx) in v.photos" :key="idx" v-if="v.photos.length>0">
                      <img  alt="" srcset="" :src="photo">
                  </div>
                  <div class="post_body_text"> {{v.text}}</div>
              </div>
            <div class="post_footer">
                <div class="lf">
                  <span>v.love</span> 热度
                </div>
                <div class="rf">
                  <a href="http://" class="send"></a>
                  <a href="http://" class="relay"></a>
                  <a href="http://" class="love"></a>
                </div>
            </div>
          </div>
        
        </div>
     </div>
  </div>
</template>

<script>
import { Header, Button } from 'mint-ui';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'home-content',
  components: {
    'mt-header': Header,
    'mt-button': Button
  },
  computed: mapGetters(['count', 'postList']),
  methods: mapActions(['increment', 'decrement', 'asyn'])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.home_content 
  background-color #aaa
  height 100%

.post_list
  background-color  #aaa

.post 
  background-color  #fff
  margin-bottom  10px

.post_header {
  text-align: left;
  padding: 5px 10px;
  font-size: 12px;
}
.post_header
  img 
    width: 30px;
    height: 30px;

.post_header > div {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}
.post_body {
  padding-top:10px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.post_body_imgs > img {
  max-width: 100%;
  margin-bottom: 5px;
}
.post_body_text {
  padding: 5px 10px;
  text-align: justify;
}
.post_footer {
  height: 20px;
  font-size: 14px;
  padding: 5px;
}
.post_footer > .lf {
}
.post_footer > .rf {
}
.rf > a {
  display: inline-block;
  width: 30px;
  height: 20px;
  background-image: url(../assets/icon/love.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
a.send {
  background-image: url(../assets/icon/send.png);
}
a.relay {
  background-image: url(../assets/icon/relay.png);
}
</style>
