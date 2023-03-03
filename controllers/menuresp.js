var menu = document.getElementById('mostrar'),
    nav = document.getElementById('menu__mostrar'),
    cont = 0;

    function mostrar(){
        if(cont == 0){
            nav.classList.remove('header__nav-remove');
            nav.classList.add('header__nav-m');
            cont = 1;
        }else{
            nav.classList.remove('header__nav-m');
            nav.classList.add('header__nav-remove')
            cont = 0;
        }
    }
    menu.addEventListener('click', mostrar, true)