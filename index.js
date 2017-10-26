(function () {
    // 1 - st function
    function returnAllArgs() {
        return arguments.length
    }

    // 2-nd function
    function returnStrArgs() {
        let sum = 0;
        for (let i=0; i<arguments.length; i++) {
            if (typeof arguments[i] === 'string') {
                sum ++
            }
        }
        return sum
    }

    // 3-rd function
    function returnSumAllArgs() {
        let newArr = [].slice.call(arguments);
        return newArr.reduce(function (sum, el) {
            return sum + el;
        });
    }


    console.log(returnAllArgs(1, '123', 1221, 'asdasd'));
    console.log(returnStrArgs(1, '123', 1221, 'asdasd'));
    console.log(returnSumAllArgs(1, 2, 3, 4));

})();

// 'JavaScript' in input
(function () {

    const input = document.getElementsByTagName('input');

    input[0].addEventListener('keyup', handler);

    function handler(e) {
        if (e.target.value === 'JavaScript') {
            input[1].checked = true;
            return
        }
        input[1].checked = false;

    }

})();

// check types form
(function () {

    const forms = document.forms[0];
    forms[6].addEventListener('click', handler);
    console.dir(forms);

    let str = 'abcd';

    function handler(e) {

        let check = true;

        for (let i=0; i<forms[1].value.length; i++) {
            if (!~str.indexOf(forms[1].value[i])) {
                check = false;
            }
        }

        if (isNaN(+forms[0].value) || !forms[2].checked || !forms[1].value || !forms[0].value || (!forms[3].checked && !forms[4].checked && !forms[5].checked)) {
            check = false;
        }


        if (!check) {
            e.preventDefault();
            alert('No verification pass')
        }


    }

})();

// divide function

(function () {

    function b(b) {
        return b + b;
    }

    function c(c) {
        return c(2) * c(3);
    }

    function a(a) {
        console.log(a)
    }

    a(c(b));

    (function (a) { console.log(a(function (b) { return b + b; })); })(function (c) { return c(2) * c(3); });

})();

