var Timers = new Vue({
    data: {
        TimersArray: [],
        TimersCode: [],
    },
    methods: {
        AddTimerCode() {
                Timers.TimersCode.push("<li class='timerModal' id='timerModal" + Timers.TimersArray.length + "'><span class='timerGridStyle'>{{ hText }}:{{mText}}:{{sText}}</span><span class='timerGridName'>{{ timername }}</span></li>");
            },
            AddTimer() {
                Timers.TimersArray.push(
                    new Vue({
                        el: '#timerModal' + Timers.TimersArray.length,
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
                                    Timers.TimersArray[Timers.TimersArray.length-1].buttonname = 'Старт';
                                    setTimeout(function() {
                                        clearInterval(Timers.TimersArray[Timers.TimersArray.length-1].Timer);
                                    }, 100);
                                },
                                InvBoolean() {
                                    this.isActive = !this.isActive
                                },
                                InvTextTimerH() {
                                    this.ActiveTextTimerH = !this.ActiveTextTimerH;
                                    window.setTimeout(function() {
                                        document.getElementById('hour').focus();
                                    }, 0);
                                    if (Timers.TimersArray[Timers.TimersArray.length-1].ActiveTextTimerH) Timers.TimersArray[Timers.TimersArray.length-1].TimerStop();
                                    Timers.TimersArray[Timers.TimersArray.length-1].h = Number(Timers.TimersArray[Timers.TimersArray.length-1].h);
                                    Timers.TimersArray[Timers.TimersArray.length-1].hText = Timers.TimersArray[Timers.TimersArray.length-1].h < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].h : Timers.TimersArray[Timers.TimersArray.length-1].h;
                                },
                                InvTextTimerM() {
                                    this.ActiveTextTimerM = !this.ActiveTextTimerM
                                    window.setTimeout(function() {
                                        document.getElementById('min').focus();
                                    }, 0);
                                    if (Timers.TimersArray[Timers.TimersArray.length-1].ActiveTextTimerM) Timers.TimersArray[Timers.TimersArray.length-1].TimerStop();
                                    Timers.TimersArray[Timers.TimersArray.length-1].m = Number(Timers.TimersArray[Timers.TimersArray.length-1].m);
                                    Timers.TimersArray[Timers.TimersArray.length-1].mText = Timers.TimersArray[Timers.TimersArray.length-1].m < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].m : Timers.TimersArray[Timers.TimersArray.length-1].m;
                                },
                                InvTextTimerS() {
                                    this.ActiveTextTimerS = !this.ActiveTextTimerS
                                    window.setTimeout(function() {
                                        document.getElementById('sec').focus();
                                    }, 0);
                                    if (Timers.TimersArray[Timers.TimersArray.length-1].ActiveTextTimerS) Timers.TimersArray[Timers.TimersArray.length-1].TimerStop();
                                    Timers.TimersArray[Timers.TimersArray.length-1].s = Number(Timers.TimersArray[Timers.TimersArray.length-1].s);
                                    Timers.TimersArray[Timers.TimersArray.length-1].sText = Timers.TimersArray[Timers.TimersArray.length-1].s < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].s : Timers.TimersArray[Timers.TimersArray.length-1].s;
                                },
                                InvSave() {
                                    if (this.timername == '') {
                                        alert('Нельзя оставлять поле пустым')
                                        this.timername = 'Новый таймер'
                                    }
                                },
                                timerType() {
                                    if (Timers.TimersArray[Timers.TimersArray.length-1].buttonname == 'Старт') {
                                        Timers.TimersArray[Timers.TimersArray.length-1].buttonname = 'Стоп';
                                        if (this.typeTimer == false) {
                                            Timers.TimersArray[Timers.TimersArray.length-1].Timer = setInterval(function() {
                                                if (Timers.TimersArray[Timers.TimersArray.length-1].s < 59) {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].s = Timers.TimersArray[Timers.TimersArray.length-1].s + 1;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].sText = Timers.TimersArray[Timers.TimersArray.length-1].s < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].s : Timers.TimersArray[Timers.TimersArray.length-1].s;
                                                } else {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].m = Timers.TimersArray[Timers.TimersArray.length-1].m + 1;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].mText = Timers.TimersArray[Timers.TimersArray.length-1].m < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].m : Timers.TimersArray[Timers.TimersArray.length-1].m;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].s = 0;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].sText = Timers.TimersArray[Timers.TimersArray.length-1].s < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].s : Timers.TimersArray[Timers.TimersArray.length-1].s;
                                                }
                                                if (Timers.TimersArray[Timers.TimersArray.length-1].m > 59) {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].h = Timers.TimersArray[Timers.TimersArray.length-1].h + 1;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].hText = Timers.TimersArray[Timers.TimersArray.length-1].h < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].h : Timers.TimersArray[Timers.TimersArray.length-1].h;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].m = 0;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].mText = Timers.TimersArray[Timers.TimersArray.length-1].m < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].m : Timers.TimersArray[Timers.TimersArray.length-1].m;
                                                }
                                            }, 1000);
                                        } else {
                                            Timers.TimersArray[Timers.TimersArray.length-1].Timer = setInterval(function() {
                                                if (Timers.TimersArray[Timers.TimersArray.length-1].s > 0) {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].s = Timers.TimersArray[Timers.TimersArray.length-1].s - 1;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].sText = Timers.TimersArray[Timers.TimersArray.length-1].s < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].s : Timers.TimersArray[Timers.TimersArray.length-1].s;
                                                } else if (Timers.TimersArray[Timers.TimersArray.length-1].m > 0) {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].m = Timers.TimersArray[Timers.TimersArray.length-1].m - 1;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].mText = Timers.TimersArray[Timers.TimersArray.length-1].m < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].m : Timers.TimersArray[Timers.TimersArray.length-1].m;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].s = 59;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].sText = Timers.TimersArray[Timers.TimersArray.length-1].s < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].s : Timers.TimersArray[Timers.TimersArray.length-1].s;
                                                } else if (Timers.TimersArray[Timers.TimersArray.length-1].h > 0) {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].h = Timers.TimersArray[Timers.TimersArray.length-1].h - 1;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].hText = Timers.TimersArray[Timers.TimersArray.length-1].h < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].h : Timers.TimersArray[Timers.TimersArray.length-1].h;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].m = 59;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].mText = Timers.TimersArray[Timers.TimersArray.length-1].m < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].m : Timers.TimersArray[Timers.TimersArray.length-1].m;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].s = 59;
                                                    Timers.TimersArray[Timers.TimersArray.length-1].sText = Timers.TimersArray[Timers.TimersArray.length-1].s < 10 ? '0' + Timers.TimersArray[Timers.TimersArray.length-1].s : Timers.TimersArray[Timers.TimersArray.length-1].s;
                                                } else {
                                                    Timers.TimersArray[Timers.TimersArray.length-1].TimerStop();
                                                }

                                            }, 1000);
                                        }
                                    } else {
                                        Timers.TimersArray[Timers.TimersArray.length-1].TimerStop();

                                    }

                                }
                        },
                    })

                );
            },
    }
})
function OpenModalNewTimer() {
    document.getElementById('timerModal').style.display = 'block';
    document.getElementById('timerModal').id = 'timerModal' + Timers.TimersArray.length;
    Timers.AddTimerCode();
    Timers.AddTimer();
}
