<template>
    <ul class="timerGrid">
    <draggable
        :TimersArray="TimersArray"
        class="list-group"
        ghost-class="ghost"
        @start="dragging = true"
        @end="dragging = false"
      >
        <TimerItem v-for="Timer of TimersArray" v-bind:Timer="Timer" v-bind:key="Timer.ids" @OpenCloseModal = "OpenCloseModal" />
    </draggable>
    </ul>
</template>

<script>
import draggable from 'vuedraggable'
    import TimerItem from '@/components/TimerItem'
    export default {
        props: ['TimersArray'],
        data() {
            return {
                dragging: false
            }
        },
        components: {
            TimerItem, draggable
        },
        methods: {
            OpenCloseModal(ids) {
                this.$emit('OpenClose', ids)
            }
        }
    }
</script>

<style>
.ghost {
    transform: scale(0.8);
    opacity: 0.97;
}
    .timerGrid li {
  display: inline-block;
  list-style-type: none;
}
.timerGrid {
  margin: auto;
  margin-top: 200px;
  width: 750px;
  padding: 0 0 0 30px;
}
.timerGrid li:nth-child(even) {
  float: right;
}
.timerGridName {
  margin: 0 15px;
  width: 140px;
  display: inline-block;
  text-align: left;
  word-wrap: break-word;
}
.timerGridStyle {
  width: 195px;
  padding-left: 5px;
}
@media (max-width: 768px) {
  .timerGrid li:nth-child(even) {
    float: none;
  }
  .timerGrid {
    width: 370px;
  }
}
@media (min-width: 960px) {
  .timerGrid {
    width: 100vw;
    text-align: center;
    padding: 0;
  }
  .timerGrid li:nth-child(even) {
    float: none;
  }
  .timerGrid li {margin: 0 20px;}
}
</style>