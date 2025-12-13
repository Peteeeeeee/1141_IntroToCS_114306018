// 獲取元素 
const mathInput = document.getElementById("mathInput");
const englishInput = document.getElementById("englishInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

let count = 0;

// 點擊 Submit 按鈕的事件監聽 
submitBtn.addEventListener("click", function () {
    const math = parseFloat(mathInput.value);
    const eng = parseFloat(englishInput.value);

    // 驗證輸入 
    if (isNaN(math) || isNaN(eng)) {
        alert("請輸入數值！");
        return;
    }

    count++;
    // 計算每一列的平均值 
    const rowAvg = (math + eng) / 2;

    // 動態新增一列到表格中 [cite: 12]
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${count}</td>
        <td class="math-val">${math}</td>
        <td class="eng-val">${eng}</td>
        <td class="row-avg">${rowAvg.toFixed(2)}</td>
    `;
    tableBody.appendChild(newRow);

    // 清空輸入框
    mathInput.value = "";
    englishInput.value = "";

    // 更新整欄的平均值 [cite: 23]
    updateColumnAverages();
});

// 動態計算欄位平均與總平均 [cite: 14, 15]
function updateColumnAverages() {
    const mathVals = document.querySelectorAll(".math-val");
    const engVals = document.querySelectorAll(".eng-val");
    const rowAvgs = document.querySelectorAll(".row-avg");

    let sumMath = 0, sumEng = 0, sumTotal = 0;
    const totalRows = mathVals.length;

    for (let i = 0; i < totalRows; i++) {
        sumMath += parseFloat(mathVals[i].innerText);
        sumEng += parseFloat(engVals[i].innerText);
        sumTotal += parseFloat(rowAvgs[i].innerText);
    }

    if (totalRows > 0) {
        // 更新頁腳顯示，四捨五入至兩位小數 [cite: 16]
        document.getElementById("mathAvg").innerText = (sumMath / totalRows).toFixed(2);
        document.getElementById("engAvg").innerText = (sumEng / totalRows).toFixed(2);
        document.getElementById("totalAvg").innerText = (sumTotal / totalRows).toFixed(2);
    }
}