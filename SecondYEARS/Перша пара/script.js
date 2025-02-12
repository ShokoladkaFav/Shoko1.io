function fillSurvey() {
    let name = prompt("Введіть ваше ім'я:");
    let age = prompt("Введіть ваш вік:");
    age = Number(age);
    let isStudent = prompt("Ви студент? (true/false):");
    isStudent = isStudent.toLowerCase() === 'true';
    let hobby = prompt("Ваше хобі:");
    let height = prompt("Ваш зріст у метрах (наприклад, 1.75):");
    height = parseFloat(height);
    
    addSurvey(name, age, isStudent, hobby, height);
    
    alert(`Тип змінної name: ${typeof name}\nТип змінної age: ${typeof age}\nТип змінної isStudent: ${typeof isStudent}\nТип змінної hobby: ${typeof hobby}\nТип змінної height: ${typeof height}`);
    console.log("Анкета користувача:", { name, age, isStudent, hobby, height });
}

function addSurvey(name, age, isStudent, hobby, height) {
    const container = document.createElement("div");
    container.classList.add("survey-container");
    container.style.marginTop = "20px"; // Додаємо відступ між анкетами
    
    container.innerHTML = `
        <h2>Анкета</h2>
        <img src="https://i.gifer.com/6oa.gif" alt="User Image">
        <p><strong>Ім'я:</strong> <input type="text" value="${name}" class="editable"></p>
        <p><strong>Вік:</strong> <input type="number" value="${age}" class="editable"></p>
        <p><strong>Студент:</strong> <select class="editable">
            <option value="true" ${isStudent ? "selected" : ""}>Так</option>
            <option value="false" ${!isStudent ? "selected" : ""}>Ні</option>
        </select></p>
        <p><strong>Хобі:</strong> <input type="text" value="${hobby}" class="editable"></p>
        <p><strong>Зріст:</strong> <input type="number" step="0.01" value="${height}" class="editable"></p>
    `;
    
    document.body.appendChild(container);
}