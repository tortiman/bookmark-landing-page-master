document.addEventListener('DOMContentLoaded', function () {
    const btnHamburger=document.getElementById('btnHamburger');
    const btnClose=document.getElementById('btnClose');
    const menuMobile=document.getElementById('menuMobile');
    const menuHamburger=document.getElementById('menuHamburger');
    const inputEmail=document.getElementById('inputEmail');
    const errorEmail=document.getElementById('errorEmail');
    const iconError=document.getElementById('iconError');

    // features
    const tabSimpleBookmarking=document.getElementById('tabSimpleBookmarking');
    const tabSpeedySearching=document.getElementById('tabSpeedySearching');
    const tabEasySharing=document.getElementById('tabEasySharing');
    
    const imgFeature=document.getElementById('imgFeature');
    const titleFeature=document.getElementById('titleFeature');
    const textFeature=document.getElementById('textFeature');

    function updateTabs(activeTab){
        const tabs = [tabSimpleBookmarking, tabSpeedySearching, tabEasySharing];
        tabs.forEach(tab => {
            if(tab === activeTab){
                tab.classList.remove('border-b-gray-400', 'md:border-0', 'border-b-2');
                tab.classList.add('border-Red400', 'border-b-4', 'md:border-b-4');
            } else {
                tab.classList.add('border-b-gray-400', 'md:border-0', 'border-b-2');
                tab.classList.remove('border-Red400', 'border-b-4', 'md:border-b-4');
            }
        });
    }

    updateTabs(tabSimpleBookmarking);

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

    tabSimpleBookmarking.addEventListener('click', ()=>{
        updateTabs(tabSimpleBookmarking);
        imgFeature.src='images/illustration-features-tab-1.svg';
        titleFeature.textContent='Simple Bookmarking';
        textFeature.textContent='Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.';
        
    });

    tabSpeedySearching.addEventListener('click', ()=>{
        updateTabs(tabSpeedySearching);
        imgFeature.src='images/illustration-features-tab-2.svg';
        titleFeature.textContent='Intelligent search';
        textFeature.textContent='Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.';
    });

    tabEasySharing.addEventListener('click', ()=>{
        updateTabs(tabEasySharing);
        imgFeature.src='images/illustration-features-tab-3.svg';
        titleFeature.textContent='Share your bookmarks';
        textFeature.textContent='Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.';
    });


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