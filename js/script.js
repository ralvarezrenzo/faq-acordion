const d = document;
let $btnBox = d.querySelectorAll(".accordion__text");

for(i = 0; i < $btnBox.length ; i++){
    $btnBox[i].addEventListener('click',(e)=>{
        console.log(e.target)
        let btn = e.target;
        if(btn.className === 'accordion__text active'){
            removerClase();
        }else{
            removerClase();
            btn.classList.add('active');
        }
    })
}
 function removerClase(){
    for(i = 0; i < $btnBox.length ; i++){
        $btnBox[i].classList.remove('active');
    }
 }