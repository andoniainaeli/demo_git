var firstName = document.getElementById('firstName');
var password = document.getElementById('password');
var confirmation = document.getElementById('confirmation');
var submit = document.getElementById('submit');
var agreement = document.getElementById('agreement');
var bidouillage = document.getElementById('bidouillage');

firstName.addEventListener('keyup', function () {
    if (1<= firstName.value.length && firstName.value.length < 4) {
        document.getElementById('warningName').innerHTML = 'first name is too short';
    } else {
        document.getElementById('warningName').innerHTML = '';
    }
}, false);

password.addEventListener('keyup', function () {
    if (1 <= password.value.length && password.value.length < 8) {
        document.getElementById('warningPassword').innerHTML = 'weak password';
    }  else if (8 <= password.value.length && password.value.length < 16) {
        document.getElementById('warningPassword').innerHTML = 'password must contain more characters';
    } else if (16 <= password.value.length ) {
        document.getElementById('warningPassword').innerHTML = 'strong password';
    } else {
        document.getElementById('warningPassword').innerHTML = '';
    }
}, false);

confirmation.addEventListener('keyup', function () {
    if (confirmation.value !== password.value) {
        document.getElementById('warningConfirmation').innerHTML = 'wrong password';
    } else {
        document.getElementById('warningConfirmation').innerHTML = '';
    }
}, false);

agreement.addEventListener('click', function () {
    if (agreement.checked) {
        document.getElementById('warningAgreement').innerHTML = '';
    }
}, false);

/*submit.addEventListener('click', function () {
    if (!agreement.checked) {
        document.getElementById('warningAgreement').innerHTML = 'You should accept incorporation conditions';
        return false;
    }
});*/

submit.addEventListener('click', function (e) {
    if (!agreement.checked) {
        document.getElementById('warningAgreement').innerHTML = 'You should';
        e.preventDefault();
    }
});

bidouillage.addEventListener('mouseover', function (e) {
    //e.relatedTarget.innerHTML = 'over';
    console.log(e.type + '=> entree');
});
bidouillage.addEventListener('mouseout', function (e) {
    //e.relatedTarget.innerHTML = 'out';
    console.log(e.type + '=> sortie');
});
