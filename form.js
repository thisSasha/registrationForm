let btn = document.getElementById('button');
let pass1 = document.getElementById('pass');
let pass2 = document.getElementById('repeat_pass');
let login = document.getElementById('login');
let err = document.getElementById('error');
let ifr = document.querySelector('iframe');


btn.disabled = true;
btn.style.cursor = "not-allowed";
btn.style.opacity = 0.5;
btn.classList.remove("buttonAct")


pass2.disabled = true;
pass2.style.cursor = "not-allowed";
pass2.style.opacity = 0.5;
let retur = {
    error: ""
}

function checkFormPas() {
    retur.error = ""
    let patterns = [
        /^\w\w\w\w\w\w\w\w/i,
        /\d+/i,
        /[A-Z]+/

    ]
    if (patterns[0].test(this.value) && patterns[1].test(this.value) && patterns[2].test(this.value)) {
        pass2.disabled = false;
        pass2.style.cursor = "text";
        pass2.style.opacity = 1;
        console.log('s');
        if (pass1.value != pass2.value) {
            retur.error += "× Пароли не совпадают <br>"

            btn.disabled = true;
            btn.style.cursor = "not-allowed";
            btn.style.opacity = 0.5;
btn.classList.remove("buttonAct")
        } else {
            btn.disabled = false;
            btn.style.cursor = "pointer";
            btn.style.opacity = 1;
        btn.classList.add("buttonAct")
            retur.error = ""

            err.innerHTML = retur.error;


        }
    } else {
        err.style.color = '#606025';

        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.style.opacity = 0.5;
btn.classList.remove("buttonAct")

        pass2.disabled = true;
        pass2.style.cursor = "not-allowed";
        pass2.style.opacity = 0.5;

        if (pass1.value != pass2.value) {
            retur.error += "× Пароли не совпадают <br>"
        }
        if (patterns[0].test(pass1.value)) { } else {
            retur.error += "× Вы ввели менее чем 8 символов пароля. <br>";
        };
        if (patterns[1].test(pass1.value)) { } else {
            retur.error += "×  Минимум 1 цифра<br>";
        };
        if (patterns[2].test(pass1.value)) { } else {
            retur.error += "×  Минимум 1 символ верхнего регистра(A,B,C,D...)<br>";
        };
        if (retur.error != "") {
            document.getElementById('pole').style.display = "block"
            err.innerHTML = retur.error;
        } else {
            document.getElementById('pole').style.display = "none"
            checkPass();
        };

    }
}
function checkForm() {
    let pattern = /^[a-z][a-z][a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    if (pattern.test(this.value)) {
        retur.error = ""
        if (pass1 == pass2 && pass1 != "");
        console.log('s');
    } else {
        err.style.color = '#606025';
        retur.error = "";
        let patterns = [
            /^\w\w\w\w/i,
            /^[a-z]/i,

        ]
        if (patterns[0].test(login.value)) { } else {
            retur.error += "× Вы ввели менее чем 4 символа в логине. <br>";
        };
        if (patterns[1].test(login.value)) { } else {
            retur.error += "× Первый символ в логине должен быть буквой. <br>";
        };

        if (pass1.value == "" || pass2.value == "") {
            retur.error += "× Отсуствие паролей в графах для него. <br>"
        }
        if (retur.error != "") {
            document.getElementById('pole').style.display = "block"
            err.innerHTML = retur.error;
        } else {
            document.getElementById('pole').style.display = "none"
            checkPass();
        };

    }
}
function checkPass() {
    document.getElementById('pole').style.display = "block";
    err.style.color = 'white';
    err.innerHTML = '✓ успешно зарегестрированы';

    document.forms.frog.reset()

    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    btn.style.opacity = 0.5;
btn.classList.remove("buttonAct")

}
function checkFormPasTwo() {
    retur.error = ""
    if (pass1.value != pass2.value) {
        retur.error += "× Пароли не совпадают <br>"

        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        btn.style.opacity = 0.5;
btn.classList.remove("buttonAct")
    } else {
        btn.disabled = false;
        btn.style.cursor = "pointer";
        btn.style.opacity = 1;
        btn.classList.add("buttonAct")
        retur.error = ""

        err.innerHTML = retur.error;


    }
    if (retur.error != "") {
        document.getElementById('pole').style.display = "block"
        err.innerHTML = retur.error;
    }
};
document.getElementById('form').onreset = function () {
    btn.disabled = true;
    btn.style.cursor = "not-allowed";
    btn.style.opacity = 0.5;
btn.classList.remove("buttonAct")



    pass2.disabled = true;
    pass2.style.cursor = "not-allowed";
    pass2.style.opacity = 0.5;
}
pass2.oninput = checkFormPasTwo;
btn.onclick = checkForm;
pass1.oninput = checkFormPas;





