function checkAge() {
    let age = document.getElementById("age").value;
    let result = document.getElementById("ageResult");

    if (age === "" || age <= 0) {
        result.innerHTML = "<span style='color: red;'>❌ กรุณาป้อนอายุที่ถูกต้อง</span>";
        return;
    }

    if (age < 13) {
        result.innerHTML = "👶 คุณเป็น: <b>เด็ก</b>";
    } else if (age >= 13 && age <= 19) {
        result.innerHTML = "🧑 คุณเป็น: <b>วัยรุ่น</b>";
    } else {
        result.innerHTML = "🧑‍🦳 คุณเป็น: <b>ผู้ใหญ่</b>";
    }
}