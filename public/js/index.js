window.onload = () =>{
    const topmenu = Array.from(document.querySelectorAll('.topmenu-li>a'));
    const  child = Array.from(document.querySelectorAll('.topmenu-li>ul'));
    
    topmenu.forEach((e)=>{
        e.addEventListener('mouseover',show);
        function show(){
            if(e.firstChild.tagName){
                console.log('ok');
            }
         
        }
    })

}


