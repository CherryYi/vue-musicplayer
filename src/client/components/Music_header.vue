<template>
    <header class="music-header">
        <h1 class="header">这是一个音乐播放器</h1>
        <dl class="user">
          <!--这里是用户信息展示-->
        </dl>
        <!--登录/注册-->
        
    </header>
</template>

<script>
   
</script>

<style>
    .mm-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;       
        background:rgba(0,0,0,.3);
        }
    .header {
            text-align: center;
            line-height: 60px;
            color: #fff;
            font-size: 18px;   
            padding-left: 20px;
            text-align: left;
            
        }
        .user {
            position: absolute;
            top: 50%;
            right: 20px;
            line-height: 30px;
            text-align: right;
            transform: translateY(-50%);
        }
</style>