<template>
    <li class="dragdrop" :id="Timer.ids+'liGrid'" @click="$emit('OpenCloseModal', Timer.ids)">
        <span :id="Timer.ids+'TGrid'" class="timerGridStyle">{{Timer.hText}}:{{Timer.mText}}:{{Timer.sText}}</span><span :id="Timer.ids+'TGridName'" class="timerGridName">{{Timer.timername}}</span>
    </li>
</template>




<script>
    export default {
        props: ['Timer'],
    }
</script>