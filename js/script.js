document.addEventListener('DOMContentLoaded', function () {
    const btnHamburger=document.getElementById('btnHamburger');
    const btnClose=document.getElementById('btnClose');
    const menuMobile=document.getElementById('menuMobile');
    const menuHamburger=document.getElementById('menuHamburger');
    const inputEmail=document.getElementById('inputEmail');
    const errorEmail=document.getElementById('errorEmail');
    const iconError=document.getElementById('iconError');
    

    function checkEmail(email){
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(email==='' || regex.test(email)===false){
            iconError.classList.remove('hidden');
            inputEmail.classList.add('border-2');
            inputEmail.classList.add('border-red-500');
            errorEmail.classList.remove('hidden');

        }else{
            iconError.classList.add('hidden');
            inputEmail.classList.remove('border-2');
            errorEmail.classList.add('hidden');
            inputEmail.classList.remove('border-red-500');
        }
    }


    btnHamburger.addEventListener('click', ()=>{ // ocultamos menuHamburger y mostramos menuMobile

        menuHamburger.classList.add('hidden');
        menuMobile.classList.remove('hidden');
        
        
    });

    btnClose.addEventListener('click', ()=>{
        menuMobile.classList.add('hidden');
        menuHamburger.classList.remove('hidden');
    
    });

    inputEmail.addEventListener('keyup', (event)=>{
        if(event.key==='Enter'){
            checkEmail(inputEmail.value);
        }
    });
});