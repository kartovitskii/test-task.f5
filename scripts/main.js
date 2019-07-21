var app = new Vue({
    el: '#timerModal',
    data: {
      timername: 'Новый таймер',
      buttonname: 'Старт',
      isActive: false,
      h: 0,
      m: 0,
      s: 0,
      hText: '00',
      mText: '00',
      sText: '00',
      typeTimer: false,
      Timer: 0,
      ActiveTextTimerH: false,
      ActiveTextTimerM: false,
      ActiveTextTimerS: false
    },
    methods: {
        TimerStop() {
            app.buttonname = 'Старт';
            setTimeout(function() {
                clearInterval(app.Timer);
              }, 100);
        },
        InvBoolean(){
          this.isActive =! this.isActive
        },
        InvTextTimerH(){
            this.ActiveTextTimerH =! this.ActiveTextTimerH;
            window.setTimeout(function ()
            {
                document.getElementById('hour').focus();
            }, 0);
            if (app.ActiveTextTimerH) app.TimerStop();
            app.h = Number(app.h);
            app.hText = app.h<10?'0'+app.h:app.h;
          },
          InvTextTimerM(){
            this.ActiveTextTimerM =! this.ActiveTextTimerM
            window.setTimeout(function ()
            {
                document.getElementById('min').focus();
            }, 0);
            if (app.ActiveTextTimerM) app.TimerStop();
            app.m = Number(app.m);
            app.mText = app.m<10?'0'+app.m:app.m;
          },
          InvTextTimerS(){
            this.ActiveTextTimerS =! this.ActiveTextTimerS
            window.setTimeout(function ()
            {
                document.getElementById('sec').focus();
            }, 0);
            if (app.ActiveTextTimerS) app.TimerStop();
            app.s = Number(app.s);
            app.sText = app.s<10?'0'+app.s:app.s;
          },
        InvSave(){
            if (this.timername=='') {
            alert('Нельзя оставлять поле пустым')
            this.timername='Новый таймер'
            }
        },
        timerType() {
            if (app.buttonname == 'Старт') {
                app.buttonname = 'Стоп';
                if (this.typeTimer==false) {
                    app.Timer = setInterval(function() {
                        if (app.s<59) {
                            app.s = app.s + 1;
                            app.sText = app.s<10?'0'+app.s:app.s;
                    } else {
                        app.m = app.m + 1;
                        app.mText = app.m<10?'0'+app.m:app.m;
                        app.s = 0;
                        app.sText = app.s<10?'0'+app.s:app.s;
                    }
                    if (app.m>59) {
                        app.h = app.h + 1;
                        app.hText = app.h<10?'0'+app.h:app.h;
                        app.m = 0;
                        app.mText = app.m<10?'0'+app.m:app.m;
                    }
                      }, 1000); 
                } else {
                    app.Timer = setInterval(function() {
                        if (app.s > 0) {
                            app.s = app.s - 1;
                            app.sText = app.s<10?'0'+app.s:app.s;
                    } else if (app.m > 0) {
                        app.m = app.m - 1;
                        app.mText = app.m<10?'0'+app.m:app.m;
                        app.s = 59;
                        app.sText = app.s<10?'0'+app.s:app.s;
                    }
                    else if (app.h > 0) {
                        app.h = app.h - 1;
                        app.hText = app.h<10?'0'+app.h:app.h;
                        app.m = 59;
                        app.mText = app.m<10?'0'+app.m:app.m;
                        app.s = 59;
                        app.sText = app.s<10?'0'+app.s:app.s;
                    }
                    else {
                        app.TimerStop();
                    }

                      }, 1000); 
                }
            } else {
                app.TimerStop();

            }
            
        }
    },
  })