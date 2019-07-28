<template>
<div :id="Timer.ids" :class="[Timer.ModalBo ? 'inputModalDisabled' : 'inputModalActive']">
    <div class="timerModal">
        <p @click="$emit('InvBoolean', Timer.ids)" :class="[Timer.isActive ? 'inputModalDisabled' : 'inputModalActive']" id="timerModalName">{{ Timer.timername }}</p> 
           <input id="inputName" v-on:keyup.enter="$emit('InvSave', Timer.ids); $emit('InvBoolean', Timer.ids)" v-model="Timer.timername" :class="[Timer.isActive ? 'inputModalActive' : 'inputModalDisabled', 'inputModal']">
           <label :class="[Timer.isActive ? 'inputModalActive' : 'inputModalDisabled', 'lblInputModal']" for="inputName">Нажмите «Enter» для сохранения</label>
        <div class="timerTypeBlock">
                <div class="timerTypeSection right">Таймер</div>
               <div class="timerTypeSection">
           <label class="switch">
                <input type="checkbox" @click="$emit('TimerStop', Timer.ids) "v-model="Timer.typeTimer">
                <span class="slider round"></span>
              </label>
              </div>
              <div class="timerTypeSection left">Countdown</div>
        </div>
        <div class="timerText">
            <span @click="$emit('InvTextTimerH', Timer.ids)" :class="[Timer.ActiveTextTimerH ? 'inputModalDisabled' : 'inputModalActive']">{{Timer.hText}}</span><input @blur="$emit('InvTextTimerH', Timer.ids)" :id="Timer.ids+'hInp'" type="number" v-model="Timer.h" :class="[Timer.ActiveTextTimerH ? 'inputModalActive' : 'inputModalDisabled']" class="timerTextInput">:<span @click="$emit('InvTextTimerM', Timer.ids)" :class="[Timer.ActiveTextTimerM ? 'inputModalDisabled' : 'inputModalActive']">{{Timer.mText}}</span><input maxlength="2" @blur="$emit('InvTextTimerM', Timer.ids)" :id="Timer.ids+'mInp'" v-model="Timer.m" :class="[Timer.ActiveTextTimerM ? 'inputModalActive' : 'inputModalDisabled']" class="timerTextInput">:<span @click="$emit('InvTextTimerS', Timer.ids)" :class="[Timer.ActiveTextTimerS ? 'inputModalDisabled' : 'inputModalActive']">{{Timer.sText}}</span><input maxlength="2" @blur="$emit('InvTextTimerS', Timer.ids)" :id="Timer.ids+'sInp'" v-model="Timer.s" :class="[Timer.ActiveTextTimerS ? 'inputModalActive' : 'inputModalDisabled']" class="timerTextInput">
        </div>
       <div class="btnModalSection">
         <button class="buttonModal" @click="$emit('StartTimer', Timer.ids)">{{Timer.buttonname}}</button>
    </div>
   
    </div>
     <div class="substrate" @click="$emit('OpenCloseModal', Timer.ids)"></div>
     </div>
</template>

<script>
    export default {
        props: ['Timer'],
        methods: {
    }
}
</script>

<style>
.timerModal {
    display: block;
position: absolute;
width: 470px;
right: calc(50vw - 275px);
top: 10%;
background: #FEFEFE;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
border-radius: 10px;
padding: 50px 50px;
z-index: 2000;
}
.substrate {
    height: 100vh;
    width: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0.2;
}
#timerModalName {
    font-size: 50px; 
    cursor: pointer;
}
#timerModalName:hover {
    text-decoration: underline;
    color: #303030;
}
.inputModal {
    background: #F7F7F7;
border: 1px solid #F5F5F5;
border-radius: 5px;
height: 50px;
font-size: 24px;
padding: 0px 30px;
width: calc(100% - 60px);
max-width: 400px;
}
.inputModalActive {
display: inline;
}
.inputModalDisabled {
    display: none;
}
.lblInputModal {
    margin-left: 32px;
    line-height: 40px;
    color: #6d6d6d;
}
.switch {
    position: relative;
    display: inline-block;
    width: 156px;
    height: 50px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #F7F7F7;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 42px;
    width: 42px;
    left: 4px;
    bottom: 4px;
    background-color: #00FFA3;
    transition: .4s;
  }
  
  input:checked + .slider:before  {
    background-color: #FF0000;
  }
  
  
  input:checked + .slider:before {
    transform: translateX(106px);
  }
  
  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }

.timerTypeBlock {
    width: 100%;
    margin-top: 20px;
}
  .timerTypeSection {
      display: inline;
      vertical-align: middle;
      font-size: 30px;
  }
  .right, .left {
      position: relative;
      top: 5px;
  }
  .right {
      text-align: right;
      padding-right: 20px;
  }
  .left {
      text-align: left;
      padding-left: 20px;
  }
   .timerText, .timerGridStyle {
      font-size: 50px;
      margin-top: 40px;
  }
  .timerText {
    text-align: center;
  }
  .timerTextInput {
    width: 56px;
    height: 54px;
  }
/* Убираем стрелки для тайп намбер и наводим красоту */
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: none;
  }
  input[type="number"]:hover,
  input[type="number"]:focus {
    -moz-appearance: none;
  }
  input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.btnModalSection {
    text-align: center;
    margin-top: 20px; 
}
.buttonModal {
background: #0075FF;
border: 1px solid #F5F5F5;
box-sizing: border-box;
border-radius: 5px;
padding: 0px 30px;
font-size: 24px;
color: #fff;
cursor: pointer;
height: 50px;
display: inline-block;
}
.buttonModal:hover {
    background: rgb(0, 78, 167);
}
/* Убираем стрелки для тайп намбер и наводим красоту */
</style>