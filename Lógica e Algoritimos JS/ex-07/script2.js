function calc() {
    var jan = Number.parseInt(document.getElementById('janeiro'))
    var fev = Number.parseInt(document.getElementById('fevereiro'))
    var mar = Number.parseInt(document.getElementById('marco'))
    var abr = Number.parseInt(document.getElementById('abril'))
    var mai = Number.parseInt(document.getElementById('maio'))
    var jun = Number.parseInt(document.getElementById('junho'))
    var jul = Number.parseInt(document.getElementById('julho'))
    var ago = Number.parseInt(document.getElementById('agosto'))
    var set = Number.parseInt(document.getElementById('setembro'))
    var out = Number.parseInt(document.getElementById('outubro'))
    var nov = Number.parseInt(document.getElementById('novembro'))
    var dez = Number.parseInt(document.getElementById('dezembro'))

    var media = (jan + fev + mar + abr + mai + jun + jul + ago + set + out + nov + dez)/12
    var res = media*(60/100)
}