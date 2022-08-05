function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }}
    return "";
    }

function deleteCookie(cookie) {
        document.cookie = `${cookie}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    }
    
function deleteAllCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
}}

function changeAppearance(appearance) {
    const mode_button = document.getElementById("appearancebutton");
    if (appearance == 1) {
    document.documentElement.style.setProperty('--bg', 'var(--whitemode)');
    document.documentElement.style.setProperty('--fg', 'var(--whitemode_text)');
    mode_button.firstChild.data = "Darkmode";
}
    else {
    document.documentElement.style.setProperty('--bg', 'var(--darkmode)');
    document.documentElement.style.setProperty('--fg', 'var(--darkmode_text)');
    mode_button.firstChild.data = "Whitemode";
}}

function appearanceButton(){
    const mode_button = document.getElementById("appearancebutton");
    if (mode_button.firstChild.data == "Darkmode") 
    {
        document.cookie = "mode=0";
        changeAppearance(0)
    }
    else 
    {
        document.cookie = "mode=1";
        changeAppearance(1)
    }}
function start() {
    changeAppearance(getCookie("mode"));
    if (getCookie("visited") !== "true") {
        on()
    }
}

function changeAppearance(appearance) {
    const mode_button = document.getElementById("appearancebutton");
    if (appearance == 1) {
    document.documentElement.style.setProperty('--bg', 'var(--whitemode)');
    document.documentElement.style.setProperty('--fg', 'var(--whitemode_text)');
    mode_button.firstChild.data = "Darkmode";
}
    else {
    document.documentElement.style.setProperty('--bg', 'var(--darkmode)');
    document.documentElement.style.setProperty('--fg', 'var(--darkmode_text)');
    mode_button.firstChild.data = "Whitemode";
}}

function appearanceButton(){
const mode_button = document.getElementById("appearancebutton");
if (mode_button.firstChild.data == "Darkmode") 
{
    document.cookie = "mode=0";
    changeAppearance(0)
}
else 
{
    document.cookie = "mode=1";
    changeAppearance(1)
}}
function start() {
    changeAppearance(getCookie("mode"));
    if (getCookie("visited") !== "true") {
        on()
    }
}

function calculator() {
    var calculation = prompt("Rechnung eingeben")
    try {
        if (calculation.includes(",")) {
            var calculation = calculation.replace(",", ".")
        }
        const result = eval(calculation)
        if (result === undefined || result === null) {
        } else {
        if (!result % 1 != 0) {
            alert(`Genaues Ergebnis: ${result}`)
        } else {
            alert(`Genaues Ergebnis: ${result} \nGerundetes Ergebnis: ${Math.round(result)}`)
        }}
    }
    catch {
        alert(`Ungültige Rechnung: ${calculation}`)
    }
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

    function off() {
    document.getElementById("overlay").style.display = "none";
    document.cookie = "visited=true";
}
