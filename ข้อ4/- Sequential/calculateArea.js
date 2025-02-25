function calculateArea() {
    let radius = document.getElementById("radius").value;
    let result = document.getElementById("result");

    if (radius === "" || radius <= 0) {
        result.innerHTML = "<span style='color: red;'>❌ กรุณาป้อนค่ารัศมีที่ถูกต้อง</span>";
        return;
    }

    let area = Math.PI * Math.pow(radius, 2);
    result.innerHTML = `✅ พื้นที่ของวงกลมคือ: <b>${area.toFixed(2)}</b> ตารางหน่วย`;
}