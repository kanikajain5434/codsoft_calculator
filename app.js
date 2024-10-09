let s='';
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((item) => {
    item.addEventListener('click' , (a)=>{
        if (a.target.innerHTML=='='){
            s=eval(s);
            document.querySelector('input ').value =s ;
        }
        else if (a.target.innerHTML=='C'){
            s=''
            document.querySelector('input ').value =s ;
        }
        else if (a.target.innerHTML=='+/-'){
            s='-' +s;
            document.querySelector('input ').value =s ;
        }
        else{
            console.log(a.target)
            s = s + a.target.innerHTML;
            document.querySelector('input ').value =s ;
        }
        
    })
})