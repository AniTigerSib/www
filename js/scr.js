let forms = document.getElementsByTagName("form");
let elem = document.getElementsByClassName("labeled-form-input");
let inputs = forms[0].getElementsByTagName("input");
let mask1 = /^[А-ЯЁ]{1}[а-яё]+$/;
let mask2 = /^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/;
let mask3 = /^[A-Za-z]{4,}$/;
let mask4 = /^[A-Za-z0-9_.-@]{8,}$/;


function openlogin() {
    document.getElementById('regpage').style.display = 'none';
    document.getElementById('loginpage').style.display = 'flex';
}

function openregister() {
    document.getElementById('loginpage').style.display = 'none';
    document.getElementById('regpage').style.display = 'flex';
}

clickauth.addEventListener("click", openlogin);
clickreg.addEventListener("click", openregister);

let flagMain = true;
let flag8 = false;
let message2 = "Пароли должны совпадать!";
regSubmit.addEventListener("click", function(event){
    event.preventDefault();
    flagMain = true;
    flagMain = check();
    checkValid();
    const formData = new FormData(forms[0]);
    const password = formData.get('password');
    const passwordConf = formData.get('password-confirm');
    if (password != passwordConf & !flag8) {
        requieredField(elem[7], 1, "reqGate8", message2);
        flag8 = true;
        flagMain = false;
    }
    if (password != "" & password == passwordConf & flag8) {
        requieredField(elem[7], 0, "reqGate8");
        flag8 = false;
    }

    console.log(flagMain);
})

function requieredField(elem, k, type, message) {
    if (k == 1){
        let check1 = document.createElement("div"),
        check2 = document.createElement("a");
        check1.className = "notifReq";
        check1.id = type;
        check2.className = "notifReq__label";
        check2.innerHTML = message;
        check1.appendChild(check2);
        elem.appendChild(check1);
    }
    else{
        console.log(2);
        document.getElementById(type).removeChild(document.getElementById(type).childNodes[0]);
        document.getElementById(type).remove();
    }
}

let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let flag6 = false;
let flag7 = false;
let message1 = "Это обязательное поле!";
let messageSelect = "Нельзя быть бесполым)";
function check() {
    let flagMain = false;
    for(let i = 0; i < 7; i++){
        console.log(inputs[i].value);
    }
    if (inputs[0].value == "" & !flag1){
        requieredField(elem[0], 1, "reqGate1", message1); //Фамилия
        flag1 = 1;
    }
    if (inputs[0].value != "" & flag1){
        requieredField(elem[0], 0, "reqGate1");
        flag1 = 0;
    }

    if (inputs[1].value == "" & !flag2){
        requieredField(elem[1], 1, "reqGate2", message1); //Имя
        flag2 = 1;
    }
    if (inputs[1].value != "" & flag2){
        requieredField(elem[1], 0, "reqGate2");
        flag2 = 0;
    }

    if (inputs[2].value == "" & !flag3){
        requieredField(elem[2], 1, "reqGate3", message1); //Отчество
        flag3 = 1;
    }
    if (inputs[2].value != "" & flag3){
        requieredField(elem[2], 0, "reqGate3");
        flag3 = 0;
    }

    if(forms[0].gender.value == "" & !flag4){
        requieredField(elem[3], 1, "reqGate4", messageSelect); //Пол
        flag4 = 1;
    }
    if(forms[0].gender.value != "" & flag4){
        requieredField(elem[3], 0, "reqGate4");
        flag4 = 0;
    }
    
    if (inputs[3].value == "" & !flag5) {
        requieredField(elem[4], 1, "reqGate5", message1); //Почта
        flag5 = 1;
    }
    if (inputs[3].value != "" & flag5){
        requieredField(elem[4], 0, "reqGate5");
        flag5 = 0;
    }

    if (inputs[4].value == "" & !flag6) {
        requieredField(elem[5], 1, "reqGate6", message1); //Логин 
        flag6 = 1;
    }
    if (inputs[4].value != "" & flag6){
        requieredField(elem[5], 0, "reqGate6");
        flag6 = 0;
    }

    if (inputs[5].value == "" & !flag7) {
        requieredField(elem[6], 1, "reqGate7", message1); //Пароль
        flag7 = 1;
    }
    if (inputs[5].value != "" & flag7){
        requieredField(elem[6], 0, "reqGate7");
        flag7 = 0;
    }
    if (forms[0].lastName.value != "" & forms[0].firstName.value != "" & forms[0].user_attributes_patronymic.value != "" & forms[0].gender.value != "" & forms[0].email.value != "" & forms[0].username.value != "" & forms[0].password.value != "") {
        flagMain = true;
    }
    console.log(flagMain);
    return flagMain;
}

let equiv1 = false;
let equiv2 = false;
let equiv3 = false;
let equiv4 = false;
let equiv5 = false;
let equiv6 = false;
let equiv7 = false;
let message3 = "Необходимо соблюдать формат (латиница, без пробелов, с заглавной буквы)!";
let message4 = "Неверный формат адреса электронной почты!";
let message5 = "Разрешённые символы: латиница (не менее 4 символов)!";
let message6 = "Разрешённые символы: латиница, цифры, _.-@ (не менее 4 символов)!";
function checkValid() {
    if (!mask1.test(document.getElementById("lastName").value) & !equiv1 & !flag1) {
        requieredField(elem[0], 1, "patternGate1", message3);
        equiv1 = true;
    }
    if(mask1.test(document.getElementById("lastName").value) & equiv1) {
        requieredField(elem[0], 0, "patternGate1");
        equiv1 = false;
    }

    if (!mask1.test(document.getElementById("firstName").value) & !equiv2 & !flag2) {
        requieredField(elem[1], 1, "patternGate2", message3);
        equiv2 = true;
    }
    if(mask1.test(document.getElementById("firstName").value) & equiv2) {
        requieredField(elem[1], 0, "patternGate2");
        equiv2 = false;
    }

    if (!mask1.test(document.getElementById("user_attributes_patronymic").value) & !equiv3 & !flag3) {
        requieredField(elem[2], 1, "patternGate3", message3);
        equiv3 = true;
    }
    if(mask1.test(document.getElementById("user_attributes_patronymic").value) & equiv3) {
        requieredField(elem[2], 0, "patternGate3");
        equiv3 = false;
    }

    if (!mask2.test(document.getElementById("email").value) & !equiv4 & !flag5) {
        requieredField(elem[4], 1, "patternGate4", message4);
        equiv4 = true;
    }
    if(mask2.test(document.getElementById("email").value) & equiv4) {
        requieredField(elem[4], 0, "patternGate4");
        equiv4 = false;
    }

    if (!mask3.test(document.getElementById("username").value) & !equiv5 & !flag6) {
        requieredField(elem[5], 1, "patternGate5", message5);
        equiv5 = true;
    }
    if(mask3.test(document.getElementById("username").value) & equiv5) {
        requieredField(elem[5], 0, "patternGate5");
        equiv5 = false;
    }

    if (!mask4.test(document.getElementById("password").value) & !equiv6 & !flag7) {
        requieredField(elem[6], 1, "patternGate6", message6);
        equiv6 = true;
    }
    if(mask4.test(document.getElementById("password").value) & equiv6) {
        requieredField(elem[6], 0, "patternGate6");
        equiv6 = false;
    }
}




/*function createField(){
    var members = new Array('required', 'regexp');
    for(var i = 0; i < arguments.length; i++){
        this[members[i]] = arguments[i];
    }
}
// absolute regexp
createField.prototype.regexp = /^[A-z0-9-_+. ,@]{1,}$/ig;
createField.prototype.valid = false;
createField.prototype.required = true;
createField.prototype.nullify = function() {
    this.valid = false;
};

var single = new Array();
single['lastName'] = new createField(true, /[А-ЯЁ].*[а-яё]$/);
single['firstName'] = new createField(true, /[А-ЯЁ].*[а-яё]$/);
single['user.attributes.patronymic'] = new createField(true, /[А-ЯЁ].*[а-яё]$/);
single['email'] = new createField(true, /^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/);
single['username'] = new createField(true, /[A-Za-z]{4,}$/);
single['password'] = new createField(true, /[A-Za-z0-9._-]{8,}$/);
single['password-confirm'] = new createField();
//single['gender'] = new createField(true, /male$/ig);

var Singleton = {
        fields : single,
        regForm : false,
        nullify_values : function() {
            for(i in this.fields) {
                this.fields[i].nullify();
            }
        },
        
        
};*/

/*submit : function sub() {
    if(this.regForm) {
                // set property valid to false for every form field
                this.nullify_values();
                var i = null;
                // walks through the form fields, pick and if required check their values
                for(i = 0; i < this.regForm.elements.length; i++) {
                    // current field
                    var oField = this.regForm.elements[i];
                    switch (oField.type) {
                        case "button":
                        case "submit":
                        case "reset":
                            break;
                        case "checkbox":
                        case "radio":
                            if(!oField.checked) {
                                break;
                            }
                        default :
                            // javascript trim function analogue*/
                            //oField.value = oField.value.replace(/^\s*/, '').replace(/\s*$/, '');
                            /*if(!oField.value) {
                                oField.value = '';
                            }

                            // if this field is out of interest
                            if(!this.fields[oField.name].required) {
                                this.fields[oField.name].valid = true;
                                this.regForm[i].style.border="";
                            }
                            // if this field is required
                            else {
                                var match = this.fields[oField.name].regexp.test(oField.value);
                                // ...  and fits regular expression
                                if(match) {
                                    this.fields[oField.name].valid = true;
                                    this.regForm[i].style.border="";
                                }
                                this.fields[oField.name].regexp.test(oField.value);
                            }
                    }
                }
                // now all we need is to check if the whole form is valid
                // we perform it by comparing number of form fields and number of valid fields
                // they should be equal
                var validForm = 0;
                var fieldsLength = 0;
                for(i in this.fields) {
                    fieldsLength++;
                    if(this.fields[i].valid) {
                        validForm++;
                    }
                    else {
                        this.regForm[i].style.border="1px solid #FF0000";
                        break;
                    }                    
                }
                if(validForm == fieldsLength) {
                    this.regForm.submit();
                }
                else {
                    this.nullify_values();
                    return false;
                }
                
            }
        }

single = null;

window.onload = function() {
    var regForm = document.forms[0];
    Singleton.regForm = regForm;
    Singleton.regForm.onsubmit = function() {
        return Singleton.submit();
    };
};
*/