let dataDummy =[{
    name: "John Doe",
    class: "10",
    score: 85
},{
    name: "Jane Smith",
    class: "10",
    score: 92
},{
    name: "Michael Johnson",
    class: "11",
    score: 78
},{
    name: "Emily Davis",
    class: "11",
    score: 88
},{
    name: "William Brown",
    class: "10",
    score: 95
},{
    name: "Olivia Wilson",
    class: "12",
    score: 81
},{
    name: "Oliver Martinez",
    class: "12",
    score: 94
}, {
    name: "Kylian Mbappe",
    class: "10",
    score: 96
},{
    name: "Lionel Messi",
    class: "12",
    score: 87
},{
    name: "Cristiano Ronaldo",
    class: "12",
    score: 86
},{
    name: "Neymar Jr.",
    class: "11",
    score: 89   
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
    const filtered = dataDummy.filter((item) => {
        return item.name.toLowerCase().includes(name.toLowerCase());
    })
    document.getElementById("table-body").innerHTML = filtered.map((item, index) => {
        return `<tr>
                    <th scope="row">${index + 1}</th>
                    <td>${item.name}</td>
                    <td>${item.class}</td>
                    <td>${item.score}</td>
            </tr>`
}).join("")
    document.getElementById("avg-score").textContent = avgScore(filtered).toFixed(2);
})
avgScore(dataDummy)
document.getElementById("avg-score").textContent = avgScore(dataDummy).toFixed(2);