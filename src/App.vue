<template>
  <div id="app">
  <div @click="NewTimer" id="newtimerButton"></div>

    <timer 
    v-bind:TimersArray="TimersArray" 
    @OpenClose = "OpenCloseModal"
    />

    <modal 
    v-for="Timer of TimersArray" 
    v-bind:Timer="Timer" 
    v-bind:key="Timer.ids" 
    @StartTimer="StartTimer" 
    @InvSave="InvSave" 
    @InvBoolean = "InvBoolean"
    @InvTextTimerH = "InvTextTimerH"
    @InvTextTimerM = "InvTextTimerM"
    @InvTextTimerS = "InvTextTimerS"
    @TimerStop = "TimerStop"
    @OpenCloseModal = "OpenCloseModal"
    />

    <reg />
  </div>
</template>




<script>
  import reg from '@/components/Reg.vue' 
  import timer from '@/components/TimerOnGrid' 
  import modal from '@/components/TimerModal'

  export default {
    name: 'app',
    data() {
      return {
        TimersArray: [
          {
          ids: 0,  
          ModalBo: true, 
          timername: 'Новый таймер', 
          buttonname: 'Старт', 
          hText: '00', 
          mText: '00', 
          sText: '00', 
          h: 0, 
          m: 0, 
          s: 0, 
          timer: null, 
          isActive: false, 
          typeTimer: false, 
          ActiveTextTimerH: false, 
          ActiveTextTimerM: false, 
          ActiveTextTimerS: false
          }
        ],
      }
    },
    components: {
      timer, modal, reg
    },
    methods: {
      // Надо было изначально разбить методы и писать метод для каждого компонента в файле с компонентом, а не вот это вот все :(
      NewTimer() {
        this.TimersArray.push({
          ids: this.TimersArray.length,
          ModalBo: true,
          timername:  'Новый таймер',
          buttonname: 'Старт',
          hText: '00',
          mText: '00',
          sText: '00',
          h: 0,
          m: 0,
          s: 0,
          timer: null,
          isActive: false,
          typeTimer: false,
          ActiveTextTimerH: false,
          ActiveTextTimerM: false,
          ActiveTextTimerS: false
        })
        this.TimersArray[this.TimersArray.length-1].ModalBo =! this.TimersArray[this.TimersArray.length-1].ModalBo
      },


      OpenCloseModal(ids) {
        this.TimersArray[ids].ModalBo =! this.TimersArray[ids].ModalBo
      },


      TimerStop(ids) {
        this.TimersArray[ids].buttonname = 'Старт';
        clearInterval(this.TimersArray[ids].timer);
      },


      InvTextTimerH(ids) {
        if (this.TimersArray[ids].h != 0) {
          document.getElementById(ids+'liGrid').style.border="none"
        }
        var idFocus = this.TimersArray[ids].ids+'hInp'
        this.TimersArray[ids].ActiveTextTimerH =! this.TimersArray[ids].ActiveTextTimerH; 
        setTimeout(function () {
          document.getElementById(idFocus).focus();
        }, 0);
        if (this.TimersArray[ids].ActiveTextTimerH) this.TimerStop(ids);
        this.TimersArray[ids].h = Number(this.TimersArray[ids].h);
        this.TimersArray[ids].hText = this.TimersArray[ids].h<10?'0'+this.TimersArray[ids].h:this.TimersArray[ids].h;
      },
      
      
      InvTextTimerM(ids) {
        if (this.TimersArray[ids].m != 0) {
          document.getElementById(ids+'liGrid').style.border="none"
        }
        var idFocus = this.TimersArray[ids].ids+'mInp'
        this.TimersArray[ids].ActiveTextTimerM =! this.TimersArray[ids].ActiveTextTimerM
        setTimeout(function () {
          document.getElementById(idFocus).focus();
          }, 0);
        if (this.TimersArray[ids].ActiveTextTimerM) this.TimerStop(ids);
        this.TimersArray[ids].m = Number(this.TimersArray[ids].m);
        this.TimersArray[ids].mText = this.TimersArray[ids].m<10?'0'+this.TimersArray[ids].m:this.TimersArray[ids].m;
        if (this.TimersArray[ids].m > 59) {
          alert("Число не может быть больше 59!")
          this.TimersArray[ids].m = 0
          this.TimersArray[ids].mText = '00'
        }
      },
      
      
      InvTextTimerS(ids) {
        if (this.TimersArray[ids].s != 0) {
          document.getElementById(ids+'liGrid').style.border="none"
        }
        var idFocus = this.TimersArray[ids].ids+'sInp'
        this.TimersArray[ids].ActiveTextTimerS =! this.TimersArray[ids].ActiveTextTimerS
        setTimeout(function () {
          document.getElementById(idFocus).focus();
        }, 0);
        if (this.TimersArray[ids].ActiveTextTimerS) this.TimerStop(ids);
        this.TimersArray[ids].s = Number(this.TimersArray[ids].s);
        this.TimersArray[ids].sText = this.TimersArray[ids].s<10?'0'+this.TimersArray[ids].s:this.TimersArray[ids].s;
        if (this.TimersArray[ids].s > 59) {
          alert("Число не может быть больше 59!")
          this.TimersArray[ids].s = 0
          this.TimersArray[ids].sText = '00'
        }
      },
      
      
      InvBoolean(ids) {
        this.TimersArray[ids].isActive =! this.TimersArray[ids].isActive
        setTimeout(function () {
          document.getElementById('ID'+ids).focus();
        }, 0);
      },
      
      
      InvSave(ids) {
        if (this.TimersArray[ids].timername=='') {
          alert('Нельзя оставлять поле пустым')
          this.TimersArray[ids].timername='Новый таймер'
        }
      },


      StartTimer(ids) {
        document.getElementById(ids+'liGrid').style.border="none"
        if (this.TimersArray[ids].buttonname == 'Старт') {
          this.TimersArray[ids].buttonname = 'Стоп';
          if (this.TimersArray[ids].typeTimer==false) {
            document.getElementById(ids+'TGrid').style.color="#00FFA3"
            document.getElementById(ids+'TGridName').style.color="#00FFA3"
            this.TimersArray[ids].timer = setInterval(() => {
              if (this.TimersArray[ids].s<59) {
                this.TimersArray[ids].s++
                this.TimersArray[ids].sText =this.TimersArray[ids].s<10?'0'+this.TimersArray[ids].s:this.TimersArray[ids].s;
              } else {
                this.TimersArray[ids].m++
                this.TimersArray[ids].mText =this.TimersArray[ids].m<10?'0'+this.TimersArray[ids].m:this.TimersArray[ids].m;
                this.TimersArray[ids].s = 0;
                this.TimersArray[ids].sText =this.TimersArray[ids].s<10?'0'+this.TimersArray[ids].s:this.TimersArray[ids].s;
              }
              if (this.TimersArray[ids].m>59) {
                this.TimersArray[ids].h++
                this.TimersArray[ids].hText =this.TimersArray[ids].h<10?'0'+this.TimersArray[ids].h:this.TimersArray[ids].h;
                this.TimersArray[ids].m = 0;
                this.TimersArray[ids].mText =this.TimersArray[ids].m<10?'0'+this.TimersArray[ids].m:this.TimersArray[ids].m;
              }
            }, 1000) 
          } else {
            document.getElementById(ids+'TGrid').style.color="red"
            document.getElementById(ids+'TGridName').style.color="red"
            this.TimersArray[ids].timer = setInterval(() => {
              if (this.TimersArray[ids].s > 0) {
                this.TimersArray[ids].s--
                this.TimersArray[ids].sText = this.TimersArray[ids].s<10?'0'+this.TimersArray[ids].s:this.TimersArray[ids].s;
              } else if (this.TimersArray[ids].m > 0) {
                this.TimersArray[ids].m--;
                this.TimersArray[ids].mText = this.TimersArray[ids].m<10?'0'+this.TimersArray[ids].m:this.TimersArray[ids].m;
                this.TimersArray[ids].s = 59;
                this.TimersArray[ids].sText = this.TimersArray[ids].s<10?'0'+this.TimersArray[ids].s:this.TimersArray[ids].s;
              } else if (this.TimersArray[ids].h > 0) {
                this.TimersArray[ids].h--;
                this.TimersArray[ids].hText = this.TimersArray[ids].h<10?'0'+this.TimersArray[ids].h:this.TimersArray[ids].h;
                this.TimersArray[ids].m = 59;
                this.TimersArray[ids].mText = this.TimersArray[ids].m<10?'0'+this.TimersArray[ids].m:this.TimersArray[ids].m;
                this.TimersArray[ids].s = 59;
                this.TimersArray[ids].sText = this.TimersArray[ids].s<10?'0'+this.TimersArray[ids].s:this.TimersArray[ids].s;
              } else {
                this.TimerStop(ids);
                document.getElementById(ids+'liGrid').style.border="1px solid red"
              }
            }, 1000); 
          } 
        } else {
          this.TimerStop(ids);
          document.getElementById(ids+'TGrid').style.color="#000"
          document.getElementById(ids+'TGridName').style.color="#000"
        }
      },
      
      
      OpenModal(ids) {
        document.getElementById(ids).style.display = 'block'
      }
    }
  }
</script>




<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap&subset=cyrillic');

* {
	font-family: 'Roboto', sans-serif;
	color: #000;
}
body {
  overflow-x: hidden;
}
#newtimerButton {
	position: absolute;
	width: 130px;
	height: 130px;
	left: -20px;
	top: -30px;
	background: #00FFA3;
	border-radius: 130px;
	cursor: pointer;
	text-align: center;
	line-height: 130px;
}

#newtimerButton:before {
  /*
  position: relative;
  left: 55px;
  top: 45px;
  */
	font-size: 50px;
	content: '+';
	font-weight: 200;
}

#newtimerButton:hover {
	background: rgb(0, 179, 113);
}
</style>