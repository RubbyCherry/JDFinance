<template>
    <div :class="$style.header">
        <span :class="$style.left">
            <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
        </span>
        <img src="//storage.360buyimg.com/base/images/jdjr-logo/logo-jr-r.png"/>
        <Btn :class="$style.btnDownload">APP下载</Btn>
    </div>
</template>

<script>
import Btn from './core/btn'
export default {
    name:'Headers',
    components: {
        Btn
    }
}
</script>

<style lang="scss" module>
.header{
    color: #666;
    height: 100px;
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    font-size: 32px;
    z-index: 100;
    .left{
        font-size: 28px;
        height: 30px;
        line-height: 30px;
        margin: 17px 0 0 18px;
    }
    .btnDownload{
        float: right;
        font-size: 24px;
        border-width: 0;
        height: 56px;
        line-height: 56px;
        min-width: 120px;
        padding: 0;
        border-radius: 4px;
        margin: 28px 24px 0 0;
    }
}
</style>