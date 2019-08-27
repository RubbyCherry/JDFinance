<template>
    <div :class="[btnClass,cname]">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'Btn',
    data () {
        return{
            btnClass: 'btn'
        }
    },
    props: {
        cname:{
            type: String,
            default: "",
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/element.scss";
.btn{
    @include btn;
}
</style>