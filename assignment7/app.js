function calcInput(num) {
    if (document.getElementById("result-screen") != null) {
        document.getElementById("result-screen").innerText = "";
    }
    var inputScreen = document.getElementById("input-screen");
    var check = inputScreen.value;
    if (num == '+' || num == '-' || num == '/' || num == '*' || num == '.') {
        if (check[check.length - 1] != '+' && check[check.length - 1] != '-' && check[check.length - 1] != '*' && check[check.length - 1] != '/' && check[check.length - 1] != '.') {
            inputScreen.value += num;

        }

    } else {
        inputScreen.value += num;
    }

}

function answer() {
    var inputScreen = document.getElementById("input-screen");
    var string = inputScreen.value;
    if (string != "") {
        var result = eval(string);
        var resultScreen = document.getElementById("result-screen");
        resultScreen.innerText = "=" + result;
    }
}

function clearLast() {
    if (document.getElementById("result-screen") != null) {
        document.getElementById("result-screen").innerText = "";
    }
    var inputScreen = document.getElementById("input-screen");
    var input = inputScreen.value;
    inputScreen.value = input.slice(0, input.length - 1);
}

function clearScreen() {
    if (document.getElementById("result-screen") != null) {
        document.getElementById("result-screen").innerText = "";
    }
    var inputScreen = document.getElementById("input-screen");
    inputScreen.value = "";

}

document.querySelector("input").addEventListener("keypress", function (evt) {
    if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
    }
    if (evt.which == 43 || evt.which == 45 || evt.which == 47 || evt.which == 42 || evt.which == 46) {
        calcInput(String.fromCharCode(evt.which));

    }
});
document.getElementById("input-screen").focus();
