<template>
    <ul>
        <TimerItem v-for="Timer of TimersArray" v-bind:Timer="Timer" v-bind:key="Timer.ids" @OpenCloseModal = "OpenCloseModal" />
    </ul>
</template>

<script>
    import TimerItem from '@/components/TimerItem'
    export default {
        props: ['TimersArray'],
        components: {
            TimerItem
        },
        methods: {
            OpenCloseModal(ids) {
                alert(ids)
                this.$emit('OpenClose', ids)
            }
        }
    }
</script>