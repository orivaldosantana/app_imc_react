import './Result.css'

function Result(props) {
    const imc = parseFloat( props.imc ); 
    let resultOutput = '';
    let imcClass = "";
    if (imc !== 0) {

        resultOutput = `Valor do IMC é ${imc.toFixed(2)}`; 
        /* Menor que 18,5 - Abaixo do peso; 
        Maior ou igual 18,5 e menor que 25 - Peso normal; 
        Maior ou igual 25,0 e menor que 30 - Sobrepeso; 
        Maior ou Igual à 30 - Obesidade.
        */

        if (imc < 18.5) {
            imcClass = "Abaixo do peso";
        } else {
            if (imc < 25 ){
                imcClass = "Peso normal";
            }
            else {
                if (imc < 30 ) { 
                    imcClass = "Sobrepeso"
                }
                else {
                    imcClass = "Obesidade"
                }
            }
        }
    }

    return(
        <div className="Result"> 
            <h2> {imcClass} </h2>
            <p>{resultOutput}</p>
        </div>
    );    

}

export default Result; 