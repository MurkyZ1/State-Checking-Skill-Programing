function causeError() {
    try {
        // โค้ดที่อาจเกิดข้อผิดพลาด
        let num = 5;
        let result = num / 0; // การหารด้วย 0 ซึ่งเป็นข้อผิดพลาด
        if (result === Infinity) {
            throw new Error("ไม่สามารถหารด้วย 0 ได้");
        }
        document.getElementById("result").innerText = "ผลลัพธ์: " + result;
    } catch (error) {
        // จัดการข้อผิดพลาด
        document.getElementById("result").innerText = `เกิดข้อผิดพลาด: ${error.message}`;
    }
}