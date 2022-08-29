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
