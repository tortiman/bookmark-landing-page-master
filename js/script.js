document.addEventListener('DOMContentLoaded', function () {
    const btnHamburger=document.getElementById('btnHamburger');
    const btnClose=document.getElementById('btnClose');
    const menuMobile=document.getElementById('menuMobile');
    const menuHamburger=document.getElementById('menuHamburger');
    

    btnHamburger.addEventListener('click', ()=>{ // ocultamos menuHamburger y mostramos menuMobile

        menuHamburger.classList.add('hidden');
        menuMobile.classList.remove('hidden');
        
        
    });

    btnClose.addEventListener('click', ()=>{
        menuMobile.classList.add('hidden');
        menuHamburger.classList.remove('hidden');
    
    });
});