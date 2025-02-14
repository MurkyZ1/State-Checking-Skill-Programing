// การโหลดงานที่บันทึกจาก LocalStorage
window.onload = function() {
    loadTasks();
};

// ฟังก์ชันสำหรับเพิ่มงานใหม่
function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskList = document.getElementById('task-list');
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // ปุ่มลบงาน
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.onclick = function() {
            removeTask(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);

        // บันทึกงานใหม่ใน LocalStorage
        saveTasks();

        taskInput.value = ""; // ล้างช่องกรอกข้อความ
    }
}

// ฟังก์ชันสำหรับลบงาน
function removeTask(taskElement) {
    taskElement.remove();
    saveTasks();
}

// ฟังก์ชันสำหรับบันทึกงานใน LocalStorage
function saveTasks() {
    const tasks = [];
    const taskList = document.getElementById('task-list').children;
    for (let task of taskList) {
        tasks.push(task.firstChild.textContent);  // เก็บเฉพาะข้อความในรายการ
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ฟังก์ชันสำหรับโหลดงานจาก LocalStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.onclick = function() {
            removeTask(li);
        };

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
