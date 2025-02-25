function startLoop() {
    let result = document.getElementById("whileLoopResult");
    result.innerHTML = "";  // เคลียร์ข้อความเก่าก่อนเริ่มใหม่
    let input;

    while (true) {
        input = prompt("ป้อนข้อความ (พิมพ์ 'exit' เพื่อออก):");
        if (input === "exit") {
            result.innerHTML += "<br>🚪 ออกจากโปรแกรมแล้ว";
            break;
        }
        result.innerHTML += `📝 คุณพิมพ์: <b>${input}</b><br>`;
    }
}