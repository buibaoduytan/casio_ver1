// Lấy màn hình hiển thị ra để thao tác
const display = document.getElementById("display");

//thêm vào input
function appendToDisplay(input) {
    display.value += input;
}

//xóa trắng
function clearDisplay() {
    display.value = "";
}

//dấu =
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
//del dấu
function delOne() {
    display.value = display.value.slice(0, -1);
}