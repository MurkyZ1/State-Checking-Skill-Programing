function changeBackgroundColor() {
    // สร้างสีสุ่ม
    let colors = ["#FF5733", "#33FF57", "#3357FF", "#F5FF33"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}