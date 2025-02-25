function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function calculateFibonacci() {
    let num = parseInt(document.getElementById("fibonacciInput").value);
    let result = document.getElementById("fibonacciResult");

    if (isNaN(num) || num < 0) {
        result.innerHTML = "<span style='color: red;'>❌ กรุณาป้อนค่าที่เป็นจำนวนเต็มบวก</span>";
        return;
    }

    let fibResult = [];
    for (let i = 0; i <= num; i++) {
        fibResult.push(fibonacci(i));
    }

    result.innerHTML = `✅ ลำดับ Fibonacci (${num} ตัวแรก) คือ: <b>${fibResult.join(", ")}</b>`;
}