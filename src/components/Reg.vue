<template>
<div>
    <div id="hrefMod" class="hrefModal">
        <div class="regBg">
            Регистрация
        </div>
        <div class="contentreg">
            <label for="email">E-mail</label>
            <input @blur="test(email)" v-model="email" id="email" />
            <label for="phone">Phone number {{ '('+this.country_name+')' }}</label>
            <input @blur="numberTest(phone)" v-model="phone" id="phone" />
            <label for="pass">Password</label>
            <input type="password" @blur="passTest(pass)" id="pass" v-model="pass"/>
            <label for="confpass">Confirm Password</label>
            <input type="password" @blur="confPassTest(confpass)" id="confpass" v-model="confpass"/>

            <input type="checkbox" id="accept" hidden />
            <label for="accept">I accept privacy policy and it so cool</label>

           <div class="btnModalSection">
         <button @click="send()" id="butSubscr" class="buttonModal dsbl">Subscribe
         <div id="descr" class="descr">
         <ul>
            <li>Заполните пустые поля и исправьте ошибки, если таковые появятся в процессе заполнения</li>
            <li id="emailValidAlert" style="display: none;">Вы ввели невалидный email или оставили поле пустым</li>
            <li id="emailDisposableAlert" style="display: none;">Введенный вами email недоступен</li>
            <li id="emailScoreAlert" style="display: none;">Рейтинг вашего email не подходит для данного сайта</li>
            <li id="phoneValidAlert" style="display: none;">Вы ввели невалидный телефон или оставили поле пустым</li>
            <li id="passAcceptAlert" style="display: none;">Пароль введенный в поле подтверждения пароля не совпадает с ранее введенным паролем.</li>
            <li id="passTypeAlert" style="display: none;">В пароле должно быть минимум 6 символов, 1 спецсимвол (!@#$%^&*(),.), 1 заглавная буква, 2 цифры, недопустимо использование букв подряд, недоспустимо использование цифр подряд</li>
         </ul>
         </div>
         </button>
    </div>
        </div>
    </div>
    <div @click="CloseRegModal" id="subst" class="substrate"></div>
    <div @click="OpenRegModal" class="hrefreg">
        Открыть форму регистрации
    </div>

</div>
</template>

<script>
export default {

    data() {
        return {
            country_name: 'Location',
            email: '',
            phone: '',
            e164phone: '',
            pass: '',
            confpass: '',
            booEmail: false,
            booPhone: false,
            booPass: false,
            booConfpass: false
        }
    },
methods: {
    send() {
        alert(
            'Email: '+this.email+
            ' Phone: '+this.e164phone+
            ' Password: '+this.pass
        )
    },
    acceptFunc() { // проверяем все ли условия выполнены
        if (this.booEmail == true && this.booPhone == true && this.booPass == true && this.booConfpass == true) {
            document.getElementById('butSubscr').classList.remove('dsbl');
             document.getElementById('descr').style.display="none";
        } else {
            document.getElementById('butSubscr').classList.add('dsbl');
            document.getElementById('descr').style.display="";
        }
    },
    confPassTest() { // проверка поля подтверждения пароля 
        if(this.pass == this.confpass) {
            document.getElementById('confpass').style.border="none";
            document.getElementById('passAcceptAlert').style.display='none';
            this.booConfpass = true
            this.acceptFunc()
        } else {
            document.getElementById('confpass').style.border="1px solid red";
            document.getElementById('passAcceptAlert').style.display='list-item';
            this.booConfpass = false
            this.acceptFunc()
        }
    },
    passTest(pass) { // проверка пароля на сложность  -  a2B5%s6
         if (pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.+[0-9])(?=.*[!@#$%^&*(),.])(?!.*[a-zA-Z][a-zA-Z])(?!.*[0-9][0-9])[0-9a-zA-Z!@#$%^&*(),.]{6,}$/)) { 
            document.getElementById('pass').style.border="none";
            document.getElementById('passTypeAlert').style.display='none';
            this.booPass = true
            this.confPassTest()
            this.acceptFunc()
            } else {
            document.getElementById('pass').style.border="1px solid red";
            document.getElementById('passTypeAlert').style.display='list-item';
            this.booPass = false
            this.confPassTest()
            this.acceptFunc()
        }
    },
    numberTest(phone) { // проверка телефона
     var access_key = 'c5fe43316724252caa8b0513d8869aa4' // numverify.com
        var phone_number = phone
        
        fetch('http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number)
        .then(response => response.json())
        .then(json => {
            var valid = json.valid
            var e164 = json.international_format
            this.country_name = json.country_name
            if (valid == true) {
                // валидный номер
                 document.getElementById('phone').style.border="none";
                 document.getElementById('phoneValidAlert').style.display='none';
                  this.booPhone = true
                  this.e164phone = e164
                  this.acceptFunc()
            } else {
                // невалидный номер
                 document.getElementById('phone').style.border="1px solid red";
                document.getElementById('phoneValidAlert').style.display='list-item';
                 this.booPhone = false
                 this.e164phone = ''
                 this.acceptFunc()
            }
        })
    },
    test(email) { // проверка электропочты
        var access_key = 'bee8ff4ffed58aa5c8c13eac7af73852'
        var email_address = email
        
        fetch('http://apilayer.net/api/check?access_key=' + access_key + '&email=' + email_address)
        .then(response => response.json())
        .then(json => {
            var score = json.score
		    var disposable = json.disposable
            var format_valid = json.format_valid
            if (format_valid == true) {
                // валидный email
                document.getElementById('emailValidAlert').style.display='none';
                document.getElementById('email').style.border="none";
                 this.booEmail = true
                 this.acceptFunc()
            if (disposable == true) {
                // email недоступен
                document.getElementById('email').style.border="1px solid red";
                document.getElementById('emailDisposableAlert').style.display='list-item';
                 this.booEmail = false
                 this.acceptFunc()
            } else {
                // email доступен
                document.getElementById('email').style.border="none";
                 document.getElementById('emailDisposableAlert').style.display='none';
                  this.booEmail = true
                  this.acceptFunc()
                if (score <= 0.5) {
                    // нельзя (score <= 0.5)
                    document.getElementById('emailScoreAlert').style.display='list-item';
                    document.getElementById('email').style.border="1px solid red";
                     this.booEmail = false
                     this.acceptFunc()
                } else {
                    // можно score норм
                     document.getElementById('emailScoreAlert').style.display='none';
                     document.getElementById('email').style.border="none";
                      this.booEmail = true
                      this.acceptFunc()
                }
            }
            } else {
                // невалидный email
                document.getElementById('email').style.border="1px solid red";
                document.getElementById('emailValidAlert').style.display='list-item';
                 this.booEmail = false
                 this.acceptFunc()
            }
        })
    },
    OpenRegModal() {
        document.getElementById('subst').style.display="block";
        document.getElementById('hrefMod').style.display="block";
    },
    CloseRegModal() {
        document.getElementById('subst').style.display="none";
        document.getElementById('hrefMod').style.display="none";
    }
}
}
</script>

<style scoped>
#butSubscr:hover .descr {
 display:block;
 position:absolute;
    bottom:110px;
    z-index:9999;
    width:360px;
}
.descr{
    display: none;
    margin-left:-235px;
    border-radius: 5px;
    padding:20px;
    margin-top:16px;
    background: #FAC7C7;
    font-size: 18px;
    text-align: left;
}
.dsbl {
	background: #ededed !important;
	color: #999 !important;
	;
}

*:focus {
	outline: none;
}

.btnModalSection {
	text-align: right;
	margin-top: 30px;
}

.buttonModal {
	background: #0075FF;
	font-weight: 200;
	border: 1px solid #F5F5F5;
	box-sizing: border-box;
	border-radius: 5px;
	padding: 0px 60px;
	font-size: 24px;
	color: #fff;
	cursor: pointer;
	height: 50px;
	display: inline-block;
}

.buttonModal:hover {
	background: rgb(0, 78, 167);
}

.contentreg input[type="checkbox"]+label::before {
	content: "";
	display: inline-block;
	height: 17px;
	width: 17px;
	box-shadow: 0 0 0 1px #000;
	border-radius: 1px;
	border: 2px solid #fff;
	margin: 0 5px 0 0;
	background-repeat: no-repeat;
	background-origin: content-box;
	margin-right: 20px;
	font-size: 18px;
}

input[type="checkbox"]:checked+label::before {
	background: #00FF38;
}

.contentreg label {
	font-size: 24px;
	color: #B7B7B7;
	font-weight: 200;
}

.contentreg input {
	font-weight: 200;
	background: #F7F7F7;
	border: 1px solid #F5F5F5;
	border-radius: 5px;
	height: 50px;
	font-size: 24px;
	padding: 0px 30px;
	width: calc(100% - 60px);
	margin-top: 10px;
	margin-bottom: 25px;
	color: #B7B7B7;
	font-size: 18px;
}

.substrate {
    display: none;
	height: 100vh;
	width: 100%;
	background: #000;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
	opacity: 0.2;
    cursor: pointer;
}

.contentreg {
	padding: 50px 50px;
}

.regBg {
	background: #373737;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
	border-radius: 10px 10px 0px 0px;
	height: 110px;
	color: #fff;
	text-align: center;
	font-size: 36px;
	line-height: 110px;
}

.hrefModal {
	display: none;
	position: absolute;
	width: 620px;
	right: calc(50vw - 310px);
	top: 10%;
	background: #FEFEFE;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
	border-radius: 10px;
	z-index: 2000;
	margin-bottom: 10%;
}

.hrefreg {
	position: fixed;
	bottom: 0px;
	text-align: center;
	width: 100%;
	padding-bottom: 50px;
	font-size: 30px;
	cursor: pointer;
	opacity: 0.5;
	font-weight: 200;
}

.hrefreg:hover {
	text-decoration: underline;
}
</style>