function daforma(){
    const b = document.querySelector("#bo");
    const combo = document.querySelector("#operacion")
    b.onclick = (event) => {
        event.preventDefault();
        // console.log(combo.selectedIndex);
        let n1 = parseInt(document.getElementById("numero1").value);
        switch (combo.selectedIndex) {
            case 0:
                alert("Seleccionar operacion");
                break;
        case 1:
                if((n1%2)===0){
                    document.getElementById("resultado").value = "Es par";
                }else{
                    document.getElementById("resultado").value = "Es impar";
                }
        break;
        case 2:
          let divisible  = false;
            for(let i = 2; i<n1; i++){
                if((n1%i) === 0) {
               divisible = true;
                // document.getElementById("resultado").value = "No es primo";
                break;
                }
            }
                // document.getElementById("resultado").value = "Es primo";

             if (divisible) {
                document.getElementById("resultado").value = "No es primo";
             }else{
                 document.getElementById("resultado").value = "Es primo";
             }
        break;
        case 3:
            let r=1;
            for (let i = 2; i<=n1; i++) {  
                  r=r*i;
            }
            document.getElementById("resultado").value = r;

        break;
        case 4:
            document.getElementById("resultado").value = Math.pow(n1, (1/3));
                break;
            default:
                break;
        }
    }
}