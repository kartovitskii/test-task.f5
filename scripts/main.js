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
      ActiveTextTimer: false
    },
    methods: {
        InvBoolean(){
          this.isActive =! this.isActive
        },
        InvTextTimer(){
            this.ActiveTextTimer =! this.ActiveTextTimer
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
                    }
                    if (app.m>59) {
                        app.h = app.h + 1;
                        app.hText = app.h<10?'0'+app.h:app.h;
                        app.m = 0;
                    }
                      }, 1000); 
                } else {
                    alert(2);
                }
            } else {
                app.buttonname = 'Старт';
                setTimeout(function() {
                    clearInterval(app.Timer);
                  }, 100);

            }
            
        }
    },
  })