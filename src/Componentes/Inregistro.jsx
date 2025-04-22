import Menuu from "./Menuu";
import K from "../assets/K.png"

function Inregistro(){
    return(
    
    
    <div>
        <header>
            <Menuu></Menuu>

        </header>
        <div className="t">
            <img className="medi"src={K} alt="ssss" />
            <div>
                <form>
                    <h1 className="P">Ingrese su nombre completo:  </h1>
                    <input type="text" />
                    <h1 className="P">Cedula: </h1>
                    <input type="text" />
                    <h1 className="P">Correo Electronico: </h1>
                    <input type="text" />
                    <h1 className="P">Telefono: </h1>
                    <input type="text" />
                    
                </form>
            </div>
            <div>
            <form>
                    
                </form>
                <button>REGISTRASE</button>
            </div>
        </div>
    </div>
    )
    }
    export default Inregistro;