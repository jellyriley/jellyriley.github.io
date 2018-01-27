var main = document.getElementById("main")
var dateNow = new Date()

main.innerHTML = dateNow.getHours() - 12 + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds()
main.style.color = "red"
setInterval(function() {
  main.style.color = "blue"
  setTimeout(function(){main.style.color = "red"},500)
},1000)
