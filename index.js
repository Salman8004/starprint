function start1(){
    let row='';
let inpt=document.getElementById('size1').value
for (let i= 1; i <=inpt; i++) {
    let line='';
    for (let j = 1; j <=inpt; j++) {
        line+='*';
    
        
    }
row+=line + "<br>"
}
document.getElementById('show2').innerHTML=row;
}
function start(){
    let row='';
let inpt=document.getElementById('size').value
for (let i= 1; i <=inpt; i++) {
    let line='';
    for (let j = 1; j <=i; j++) {
        line+='*';
    
        
    }
row+=line + "<br>"
}
document.getElementById('show').innerHTML=row;
}

