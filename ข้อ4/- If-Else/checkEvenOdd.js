function checkEvenOdd() {
    let number = document.getElementById("number").value;
    let result = document.getElementById("numberResult");

    if (number === "") {
        result.innerHTML = "<span style='color: red;'>❌ กรุณาป้อนตัวเลข</span>";
        return;
    }

    if (number % 2 === 0) {
        result.innerHTML = `✅ <b>${number}</b> เป็น <b>เลขคู่</b>`;
    } else {
        result.innerHTML = `✅ <b>${number}</b> เป็น <b>เลขคี่</b>`;
    }
}