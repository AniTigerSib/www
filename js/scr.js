let forms = document.getElementsByTagName("form");
let elem = document.getElementsByClassName("labeled-form-input");


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

let flagMain = 1;
let flag8 = false;
let message2 = "Пароли должны совпадать!";
regSubmit.addEventListener("click", function(event){
    event.preventDefault();
    flagMain = 1;
    flagMain = check(flagMain);
    console.log(flagMain);
    const formData = new FormData(forms[0]);
    const password = formData.get('password');
    const passwordConf = formData.get('password-confirm');
    if (password != passwordConf & !flag8) {
        requieredField(elem[7], 1, message2);
        flag8 = true;
        flagMain = 0;
    }
    if (password != "" & password == passwordConf & flag8) {
        requieredField(elem[7], 0);
        flag8 = false;
    }
})

function requieredField(elem, k, message) {
    if (k == 1){
        let check1 = document.createElement("div"),
        check2 = document.createElement("a");
        check1.className = "notifReq"
        check2.className = "notifReq__label";
        check2.innerHTML = message;
        check1.appendChild(check2);
        elem.appendChild(check1);
    }
    else{
        console.log("Invalid");
        elem.removeChild(elem.childNodes[3]);
        elem.removeChild(elem.childNodes[2]);
    }
}

let message1 = "Это обязательное поле!";
let messageSelect = "Нельзя быть бесполым)"
let flag1 = false;
let flag2 = false;
let flag3 = false;
let flag4 = false;
let flag5 = false;
let flag6 = false;
let flag7 = false;
function check(flagMain) {
    if (forms[0].lastName.value == "" & !flag1) {
        requieredField(elem[0], 1, message1);
        flag1 = true;
        flagMain = 0;
    }
    if (forms[0].lastName.value != "" & flag1){
        requieredField(elem[0], 0);
        flag1 = false;
    }

    if (forms[0].firstName.value == "" & !flag2) {
        console.log("Debil");
        requieredField(elem[1], 1, message1);
        flag2 = true;
        flagMain = 0;
    }
    if (forms[0].firstName.value != "" & flag2){
        requieredField(elem[1], 0);
        flag2 = false;
    }

    if (forms[0].user_attributes_patronymic.value == "" & !flag3) {
        requieredField(elem[2], 1, message1);
        flag3 = true;
        flagMain = 0;
    }
    if (forms[0].user_attributes_patronymic.value != "" & flag3){
        requieredField(elem[2], 0);
        flag3 = false;
    }

    if(forms[0].gender.value == "" & !flag4) {
        requieredField(elem[3], 1, messageSelect);
        flag4 = true;
        flagMain = 0;
    }
    if(forms[0].gender.value != "" & flag4) {
        requieredField(elem[3], 0);
        flag4 = false;
    }

    if (forms[0].email.value == "" & !flag5) {
        requieredField(elem[4], 1, message1);
        flag5 = true;
        flagMain = 0;
    }
    if (forms[0].email.value != "" & flag5){
        requieredField(elem[4], 0);
        flag5 = false;
    }

    if (forms[0].username.value == "" & !flag6) {
        requieredField(elem[5], 1, message1);
        flag6 = true;
        flagMain = 0;
    }
    if (forms[0].username.value != "" & flag6){
        requieredField(elem[5], 0);
        flag6 = false;
    }

    if (forms[0].password.value == "" & !flag7) {
        requieredField(elem[6], 1, message1);
        flag7 = true;
        flagMain = 0;
    }
    if (forms[0].password.value != "" & flag7){
        requieredField(elem[6], 0);
        flag7 = false;
    }
    return flagMain;
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