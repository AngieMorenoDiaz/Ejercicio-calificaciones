function calcular_nota(){
    let p1= parseInt (document.getElementById ("v").value);
    let p2= parseInt (document.getElementById ("w").value);
    let p3= parseInt (document.getElementById ("x").value);
    let ef= parseInt (document.getElementById ("y").value);
    let tf= parseInt (document.getElementById ("z").value);
    
    let promedio=0.55*((p1+p2+p3)/3) +(0.3*ef)+(0.15*tf);
     console.log (promedio);
     return promedio;
  
}