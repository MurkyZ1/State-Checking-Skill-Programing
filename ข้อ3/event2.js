 // ใช้ onclick เพื่อแสดงข้อความ
 document.getElementById("clickBtn").onclick = function () {
    document.getElementById("message").innerText = "คุณคลิกปุ่มแล้ว!";
};

// ใช้ onmouseover เพื่อเปลี่ยนสีข้อความ
document.getElementById("hoverText").onmouseover = function () {
    this.style.color = "red";
};
document.getElementById("hoverText").onmouseout = function () {
    this.style.color = "black";
};

// ใช้ onkeyup เพื่อแสดงข้อความที่พิมพ์แบบ real-time
document.getElementById("textInput").onkeyup = function () {
    document.getElementById("outputText").innerText = "คุณพิมพ์ว่า: " + this.value;
};

// ใช้ addEventListener() เพื่อเพิ่ม event เมื่อคลิกปุ่ม
document.getElementById("clickBtn").addEventListener("click", function () {
    alert("Event Listener: คุณกดปุ่มแล้ว!");
});