var main = document.getElementById("main")
function times(x,y){var z = x*y}

var dateNow = new Date()

main.innerHTML = dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()
main.style.color = "red"
