<template>
    <li>
        <span style="cursor: pointer;">{{Timer.hText}}:{{Timer.mText}}:{{Timer.sText}} | {{Timer.timername}}</span>
        <button @click="$emit('OpenCloseModal', Timer.ids)">Открыть</button>
    </li>
</template>

<script>
    export default {
        props: ['Timer'],
    }
</script>