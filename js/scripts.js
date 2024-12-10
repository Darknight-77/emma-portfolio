

function openMenu(){
    const menus = document.querySelector('.menus')
    menus.style.display = 'block'
    openmenu.style.display = 'none'
    closemenu.style.display = 'block'
}

function closeMenu(){
    const menus = document.querySelector('.menus')
    menus.style.display = 'none'
    closemenu.style.display = 'none'
    openmenu.style.display = 'block'
}