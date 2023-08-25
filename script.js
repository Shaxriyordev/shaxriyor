// function hafta(a){
//     switch (a){
        
//     case 1:
//     return dushanba;
//     break;
//     case 2:
//     return seshanba;
//     break;
//     case 3:
//     return chorshanba;
//     break;
//     case 4:
//     return payshanba;
//     break;
//     case 5:
//     return juma;
//     break;
//     case 6:
//     return shanba
//     break;
//     case 7:
//     return yakshanba
//     break
//     default:
//     return `unday kun yoq`;
//     break
//     }
// }
// console.log(hafta(11));

// function hafta(a){
//     switch (a){
        
//     case 1:
//     return `yomon`;
//     break;
//     case 2:
//     return `qoniqarsiz`;
//     break;
//     case 3:
//     return `qoniqarli`;
//     break;
//     case 4:
//     return `yaxshi`;
//     break;
//     case 5:
//     return `Alo`;
//     break;
//     default:
//     return `Error`;
//     break;
    
    
    
// }

// }
// console.log(hafta(5));


// function oy(A){

//     switch (A){
        
//             case 1,2,12:
//             return `qish`;
//             break;
//             case 3,4,5:
//             return `bahor`;
//             break;
//             case 6,7,8:
//             return `yoz`;
//             break;
//             default:
//             return ` kuz`;
//             break
//     }
// }
// console.log(oy(12));


// function kun(A){

//     switch (A){
        
//             case 1,3,5,7,9,11:
//             return `31kun bor`;
//             break;
//             case 4,6,8,10,12:
//             return `31 kun bor`;
//             case 2:
//             return `28 4yilda bir 29`;
//             break;
//             default :
//             return `unday kun yoq`;
//             break;
//     }
// }
// console.log(kun(20));





// function sonlar(a){
// for (let i=1;i<=a;i++){
//     console.log(i);
// }
// }
// console.log(sonlar(20));




// Kun boshidan boshlab N sekund o'tdi.
//  Kun boshidan boshlab qancha soat va sekund o'tganini hisoblovchi 
//  dastur tuzing. Masalan, kun boshidan N=12321 sekund o'tdi. Bu kun 
//  boshidan boshlab 3 soat 1521 sekund degani.
// function sekund(s){
//     let soat=s/3600;
//     soat=parseInt(soat);
//     if (soat>60){
//         return `bu kun`;
//     }
//     else{
//         return `soat`;
//     }
// }
// console.log(sekund(3661));





//scope turlari 3 ga bolinadi 
//1chisi function
// 2 chisi block 
// 3 chisi global
// 1chisiga faqat function  ichidagi  hollarda ishlaydi tashqarida ishlamaydi;
//2chisi faqat block yani p yoki h1  va divlar larning ichida ishlaydi
// 3chisi esa hamma joyda ishlaydi