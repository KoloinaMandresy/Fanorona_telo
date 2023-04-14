
    const btn1= document.getElementById("btn1");
    const btn2= document.getElementById("btn2");
    const btn3= document.getElementById("btn3");
    const btn4= document.getElementById("btn4");
    const btn5= document.getElementById("btn5");
    const btn6= document.getElementById("btn6");
    const btn7= document.getElementById("btn7");
    const btn8= document.getElementById("btn8");
    const btn9= document.getElementById("btn9");
    const btn= document.querySelector(".btn");
    const comme=document.getElementById("comme")
    const inputs=document.querySelectorAll('input[type="button"]');

function choix(i,bt){
   if(i==1){
       bt.style.backgroundColor="red";
   }
    if(i==2){
        bt.style.backgroundColor="green";
   }
    if(i==3){
    bt.style.backgroundColor="red";
   }
    if(i==4){
    bt.style.backgroundColor="green";
   }
    if(i==5){
    bt.style.backgroundColor="red";
   }
   if(i==6){
    bt.style.backgroundColor="green";
   }

}

    const couleur=(bt)=>{
        bt.classList.add("adv1")
    }
    const couleur1=(bt)=>{
        bt.classList.add("adv2")
    }
    for(let i=1;i<=6;i++){
        inputs.forEach((input)=>{
            input.addEventListener('click',(e)=>{
                    switch(e.target.id){
                        case "btn1":
                            // couleur1(btn1);
                            choix(i,btn1);
                            console.log(i);
                            break;
                        case "btn2":
                            // couleur(btn2);
                            choix(i,btn2);
                            break;
                        case "btn3":
                             couleur(btn3);

                            break;
                        case "btn4":
                             couleur1(btn4);
                            break;
                        case "btn5":
                             couleur1(btn5);
                            break;
                        case "btn6":
                             couleur(btn6);
                            break;
                        case "btn7":
                             couleur(btn7);
                            break;
                        case "btn8":
                             couleur1(btn8);
                            break;
                        case "btn9":
                             couleur1(btn9);
                            break;
                        default:null;
                }
                
            })
        })
    }

//     const deplacement=(bt)=>{
//         bt.addEventListener("click",()=>{
//             bt.classList.add("gros");
//         })
//     }

// inputs.forEach((input)=>{
//     input.addEventListener('input',(e)=>{
//         switch(e.target.id){
//             case "btn1":
//             deplacement(btn1);
//             break;
//         }
//     })
// })

// const kolera=(bt,color)=>{
//     bt.style.background=color;
// }

// const fini = document.getElementById("fini");
// if(kolera(btn1,"red") && kolera(btn5,"red") && kolera(btn9,"red") || kolera(btn1,"green") && kolera(btn5,"green") && kolera(btn9,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn2,"red") && kolera(btn5,"red") && kolera(btn8,"red") || kolera(btn2,"green") && kolera(btn5,"green") && kolera(btn8,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn3,"red") && kolera(btn5,"red") && kolera(btn7,"red") || kolera(btn3,"green") && kolera(btn5,"green") && kolera(btn7,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn4,"red") && kolera(btn5,"red") && kolera(btn6,"red") || kolera(btn4,"green") && kolera(btn5,"green") && kolera(btn6,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn1,"red") && kolera(btn2,"red") && kolera(btn3,"red") || kolera(btn1,"green") && kolera(btn2,"green") && kolera(btn3,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn1,"red") && kolera(btn4,"red") && kolera(btn7,"red") || kolera(btn1,"green") && kolera(btn4,"green") && kolera(btn7,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn7,"red") && kolera(btn8,"red") && kolera(btn9,"red") || kolera(btn7,"green") && kolera(btn8,"green") && kolera(btn9,"green")){
//     fini.textContent="La partie est terminé";
// }
// else if(kolera(btn3,"red") && kolera(btn6,"red") && kolera(btn9,"red") || kolera(btn3,"green") && kolera(btn6,"green") && kolera(btn9,"green")){
//     fini.textContent="La partie est terminé";
// }
// else {
//     fini.textContent="  ";
// }

var mat=[
    [btn1,btn2,btn3],
    [btn4,btn5,btn6],
    [btn7,btn8,btn9]
]
    
const deplacement =(bt,bt1)=>{
    let tmp='  ';
    
        bt.addEventListener("click",(e)=>{
            tmp=bt1.style.backgroundColor;
            bt1.style.backgroundColor=bt.style.backgroundColor;
            bt.style.backgroundColor=tmp;

        })
}

deplacement(btn1,btn2)