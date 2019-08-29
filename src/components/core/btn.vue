<template>
    <div :class="[btnClass,cname]">
      <slot></slot>
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

<style lang="scss">
@import "../../assets/element.scss";
.btn{
    @include btn;
}
</style>