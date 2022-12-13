import { useState } from "react";

function Teclado(){

    const [display, setDisplay] = useState('0');
    const [acumulate, setAcumulate] = useState('');
    const [result, setResult] = useState(0);
    let expR = new RegExp('[+||−||/||X]', "g");
    let expR2 = new RegExp('[+||−||/||X][+||-||/||X]');
    


    function pulsar(valor){

        switch(valor){
            case 0:
                acum(0)
                break;
            case 1:
                acum(1)
                break;
            case 2:
                acum(2)
                break;
            case 3:
                acum(3)
                break;
            case 4:
                acum(4)
                break;
            case 5:
                acum(5)
                break;
            case 6:
                acum(6)
                break;
            case 7:
                acum(7)
                break;
            case 8:
                acum(8)
                break;
            case 9:
                acum(9)
                break;
            case "+":
                acum("+");
                break;
            case "-":
                acum("-");
                break;
            case "/":
                acum("/");
                break;
            case "*":
                acum("*");
                break;
            case "=":
                showResult();
                break;
            case "C":
                setAcumulate('');
                setDisplay('0');
                setResult(0);
                break;
            default:
                console.log("error");
                break;
        }
        
        //console.log(valor);
    }

    function acum(num){
        setDisplay(num);
        setAcumulate(acumulate + num);

    }

    function changeString() {
        let  newString = acumulate;
        if(expR2.test(acumulate) || acumulate.includes("--")){
          let match = acumulate.match(expR)
          //console.log(match)
          for(let i = 0; i < match.length - 1; i++) {
            newString = newString.replace(match[i], "")
            //console.log(i)
          }
        }
        console.log(newString)
        return newString;
      }

      function showResult() {
        const res = eval((changeString()));
        setResult(res);
        setDisplay(res);
        setAcumulate(acumulate + ' = ' + res);
        //console.log()
      }

      

    

    return(
        <div className="flex items-center justify-center">
            <div className=" mx-auto overflow-hidden mt-10 shadow-lg mb-2 bg-gray-900 shadow-lg  rounded-lg lg:w-2/6 md:w-3/6 sm:w-4/6 p-5">
            <div className="w-full p-2 rounded-md bg-zinc-600 mb-2 text-center">
                <span>{acumulate}</span><br/>
                <span>{display}</span>
            </div>
            <br/>
            <div className="  flex items-stretch bg-teal-600 h-24">
                <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar("C")} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">C</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar("/")} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">/</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar("*")} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">X</button>
            </div>
            </div>
            <div className="flex items-stretch bg-teal-600 h-24">
                <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(7)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">7</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(8)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">8</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(9)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">9</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar("-")} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">-</button>
            </div>
            </div>
            <div className="flex items-stretch bg-teal-600 h-24">
                <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(4)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">4</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(5)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">5</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(6)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">6</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar("+")} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">+</button>
            </div>
            </div>
            <div className="flex items-stretch bg-teal-600 h-24">
                <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(1)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">1</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(2)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">2</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar(3)} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">3</button>
            </div>
            <div className="flex-1 px-2 py-2 justify-center flex items-center text-white text-2xl font-semibold">
            <button onClick={() => pulsar("=")} className="rounded-full h-20 w-20 flex items-center bg-teal-800 justify-center shadow-lg border-2 border-teal-700 hover:border-2 hover:border-gray-500 focus:outline-none">=</button>
            </div>
            </div>
            <div className="flex items-stretch bg-teal-600 h-24">
            <button onClick={() => pulsar(0)} className="w-full p-2 rounded-md bg-teal-800 mb-2 text-center 
            border-teal-700 border-2 hover:border-2 hover:border-gray-500 focus:outline-none">0</button>
            </div>                
            
            

            </div>        



        </div>
    )
}

export default Teclado
