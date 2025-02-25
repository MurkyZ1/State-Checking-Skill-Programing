function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function calculateFactorial() {
    let num = parseInt(document.getElementById("factorialInput").value);
    let result = document.getElementById("factorialResult");

    if (isNaN(num) || num < 0) {
        result.innerHTML = "<span style='color: red;'>❌ กรุณาป้อนค่าที่เป็นจำนวนเต็มบวก</span>";
        return;
    }

    result.innerHTML = `✅ ${num}! = <b>${factorial(num)}</b>`;
}