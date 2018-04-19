<template>
  <div id="app">
    <!--主体-->
     <h1>显示信息</h1>
    <!--播放器-->
  </div>
</template>

<script>
  export default{
    name:"app",
    components:{
      Music_header
    },
    created() {
            //设置title
            let OriginTitile = document.title, titleTime;
            document.addEventListener('visibilitychange', function () {
                if (document.hidden) {
                    document.title = '回来听歌啊！';
                    clearTimeout(titleTime);
                } else {
                    document.title = '听我想听的！';
                    titleTime = setTimeout(function () {
                        document.title = OriginTitile;
                    }, 2000);
                }
            });
  }
  }
</script>

<style>
  #app {
        position: relative;
        width: 100%;
        height: 100%;
        color: rgba(255,255,255,.6);
        font-size:14px;
      }
</style>
