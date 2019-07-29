<template>
<div>
    <div class="hrefModal">
        <div class="regBg">
            Регистрация
        </div>
        <div class="contentreg">
            <label for="email">E-mail</label>
            <input id="email" />
            <label for="phone">Phone number</label>
            <input id="phone" />
            <label for="pass">Password</label>
            <input id="pass" />
            <label for="confpass">Confirm Password</label>
            <input id="confpass" />

            <input type="checkbox" id="accept" hidden />
            <label for="accept">I accept privacy policy and it so cool</label>

           <div class="btnModalSection">
         <button @click="$emit('test')" class="buttonModal">Subscribe</button>
    </div>
        </div>
    </div>
    <div class="substrate"></div>
    <div class="hrefreg">
        Открыть форму регистрации
    </div>

</div>
</template>

<script>
export default {
methods: {

}
}
</script>

<style scoped>
.dsbl {
    background: #ededed!important;
    color: #000!important;;
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
.contentreg input[type="checkbox"] + label::before {
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
input[type="checkbox"]:checked + label::before {
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
    height: 100vh;
    width: 100%;
    background: #000;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0.2;
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
    display: block;
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