let dataDummy =[{
    name: "John Doe",
    class: "10th Grade",
    score: 85
},{
    name: "Jane Smith",
    class: "10th Grade",
    score: 92
}]

function avgScore(data){
    let totalScore = data.reduce((acc, item) => acc + item.score, 0);
    return totalScore / data.length;
}
document.getElementById("table-body").innerHTML = dataDummy.map((item, index) => {
    return `<tr>
                <th scope="row">${index + 1}</th>
                <td>${item.name}</td>
                <td>${item.class}</td>
                <td>${item.score}</td>
            </tr>`
}).join("")

document.getElementById("search-input").addEventListener("input", function(event) {
    event.preventDefault();
    const name = document.getElementById("search-input").value;
    document.getElementById("table-body").innerHTML = dataDummy.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    }).map((item, index) => {
        return `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.class}</td>
                    <td>${item.score}</td>
            </tr>`
}).join("")
})
avgScore(dataDummy)
document.getElementById("avg-score").textContent = avgScore(dataDummy).toFixed(2);