var pst = document.getElementById("pst")
var dateNow = new Date()

pst.innerHTML = "..."

pst.innerHTML = dateNow.getHours() - 12 + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()
pst.style.color = "red"
pst.innerHTML += "<br>PST ^^"
