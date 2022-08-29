let home = `Halaman ini dibuat karena ilmu dari channel bang dea afrizal.
Terimakasih bang atas semua ilmunya. We ❤️ u`

document.getElementById('content').innerHTML = home

function content(url) {
    let link = document.getElementById('content').innerHTML = url
    return link
}

function beranda(params) {
    let beranda = ``
    let tugas = ``

    let about = ``
    let kontak = ``
    if (params == 'beranda') {
        content(beranda)
        document.getElementById('navLink').classList = 'active'
    } else if (params == 'tugas') {
        content(tugas)
        document.getElementById('navLink').classList = 'active'
    } else if (params == 'tentang') {
        content(about)
        document.getElementById('navLink').classList = 'active'
    } else if (params == 'kontak') {
        content(kontak)
        document.getElementById('navLink').classList = 'active'
    }
}

function navMenu() {
    let checkBox = document.getElementById("checkBoxMenu")

    if (checkBox.checked)
        document.getElementById('menu').style.display = "flex"
    else
        document.getElementById('menu').style.display = "none"
}


const toggle = document.querySelector("#darkIcon")
let theme = localStorage.getItem('theme')

if (!theme)
    localStorage.setItem('theme', 'light')

const darkMode = () => {
    localStorage.setItem('theme', 'dark')
    document.body.classList.add('darkModeOn')
    toggle.src = 'img/sun.png'
}

const ligthMode = () => {
    localStorage.setItem('theme', 'light')
    document.body.classList.remove('darkModeOn')
    toggle.src = 'img/moon.png'
}

if (theme === 'dark')
    darkMode()

toggle.addEventListener("click", function () {
    let theme = localStorage.getItem('theme')
    if (theme === 'light')
        darkMode()
    else
        ligthMode()
})