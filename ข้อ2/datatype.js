// // 1.

// // สร้างตัวแปรเก็บค่าข้อมูลต่างๆ
// let myString = "Hello, World!";  // String
// let myInteger = 42;              // Integer
// let myBoolean = true;            // Boolean

// // แสดงผลข้อมูล
// console.log("String:", myString);
// console.log("Integer:", myInteger);
// console.log("Boolean:", myBoolean);

// // การแปลงชนิดข้อมูล
// console.log("int('10') =>", parseInt("10"));   // แปลง String เป็น Integer
// console.log("float('3.14') =>", parseFloat("3.14")); // แปลง String เป็น Float
// console.log("str(100) =>", String(100));      // แปลง Integer เป็น String

// 2.

// // ✅ List (Array) → เพิ่ม, ลบ, แก้ไขข้อมูล
// let students = ["Alice", "Bob", "Charlie"];

// // เพิ่มข้อมูล
// students.push("David");  // เพิ่ม "David" เข้าไปท้ายลิสต์
// console.log("เพิ่ม David:", students);

// // ลบข้อมูล
// students.splice(1, 1);  // ลบ "Bob" ที่ index 1
// console.log("ลบ Bob:", students);

// // แก้ไขข้อมูล
// students[0] = "Alex";  // เปลี่ยน "Alice" เป็น "Alex"
// console.log("แก้ไข Alice → Alex:", students);

// // ✅ Dictionary (Object) → เก็บข้อมูลนักเรียน
// let studentInfo = {
//     name: "Tom",
//     age: 20,
//     grade: "A"
// };

// // แสดงผลข้อมูล
// console.log("ข้อมูลนักเรียน:", studentInfo);

// // แก้ไขข้อมูล
// studentInfo.grade = "B+";
// console.log("แก้ไขเกรดเป็น B+:", studentInfo);

// // เพิ่มข้อมูลใหม่
// studentInfo.address = "Bangkok";
// console.log("เพิ่มที่อยู่:", studentInfo);

// // ลบข้อมูล
// delete studentInfo.age;
// console.log("ลบอายุ:", studentInfo);

// 3.

// const fs = require("fs");

// // ✅ JSON Data (เป็น String)
// const jsonString = '{"name": "Tom", "age": 20, "grade": "A"}';

// // ✅ อ่าน JSON (String → Object)
// const studentData = JSON.parse(jsonString);
// console.log("แปลง JSON เป็น Object:", studentData);

// // แก้ไขข้อมูล
// studentData.age = 21;

// // ✅ เขียน JSON (Object → JSON String)
// const newJsonString = JSON.stringify(studentData, null, 4);
// console.log("แปลงกลับเป็น JSON:", newJsonString);

// // ✅ บันทึกลงไฟล์ JSON
// fs.writeFileSync("student.json", newJsonString);

// // ✅ อ่านไฟล์ JSON
// const loadedData = JSON.parse(fs.readFileSync("student.json", "utf-8"));
// console.log("อ่านข้อมูลจากไฟล์ JSON:", loadedData);

