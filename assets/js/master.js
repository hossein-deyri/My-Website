let menu_icon = document.getElementsByClassName('menu_icon')[0]
menu_icon.addEventListener('click', (e) => {
    let data_status = e.target.getAttribute('data-status')
    // if (data_status == "off") {

    //     setting.children[1].style.display = 'flex'
    //     setting.setAttribute('data-setting', 'on')
    // } else {
    //     setting.children[1].style.display = 'none'
    //     setting.setAttribute('data-setting', 'off')
    // }
    menu_icon.children[0].classList.toggle('dn')
    menu_icon.children[1].classList.toggle('df')
    menu_icon.nextElementSibling.classList.toggle('menu')
    console.log(data_status);

})



