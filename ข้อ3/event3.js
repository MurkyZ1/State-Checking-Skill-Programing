document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // ป้องกันการ reload หน้า

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    // ตรวจสอบอีเมลต้องมี @ และลงท้ายด้วย .com
    if (!email.includes("@") || !email.endsWith(".com")) {
        message.innerHTML = "<span class='error'>❌ กรุณากรอกอีเมลที่ถูกต้อง (ต้องมี '@' และ '.com')</span>";
        return;
    }

    // แสดงผลเมื่อข้อมูลถูกต้อง
    message.innerHTML = `<span style="color:green;">✅ ส่งข้อมูลสำเร็จ!<br>ชื่อ: ${name} <br>อีเมล: ${email}</span>`;
});