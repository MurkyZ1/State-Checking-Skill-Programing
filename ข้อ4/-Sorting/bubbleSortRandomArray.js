 // ฟังก์ชันสร้างอาร์เรย์ขนาด 100 ตัวที่มีค่าตัวเลขสุ่ม 1-999
 function generateRandomArray(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * 1000)); // สุ่มตัวเลข 0-999
    }
    return arr;
}

// Bubble Sort Algorithm
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // สลับค่าถ้าไม่เรียงลำดับ
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

let randomArray = generateRandomArray(100); // สร้างอาร์เรย์ขนาด 100

document.getElementById("beforeSort").innerText = randomArray.join(", "); // แสดงอาร์เรย์ก่อนเรียง

function sortArray() {
    let sortedArray = bubbleSort([...randomArray]); // เรียงลำดับด้วย Bubble Sort
    document.getElementById("afterSort").innerText = sortedArray.join(", "); // แสดงอาร์เรย์หลังเรียง
}