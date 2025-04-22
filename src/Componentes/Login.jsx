import Menuu from "./Menuu";
import K from "../assets/K.png"

function Login(){
    return(
    
    
    <div>
        <header>
            <Menuu></Menuu>

        </header>
        <div className="t">
            <img className="medi"src={K} alt="ssss" />
            <div>
                <form>
                    <h1 className="Inn">Ingrese su nombre de Usuario</h1>
                    <input type="text" />
                </form>
            </div>
            <div>
            <form>
                    <h1 className="Inn">Ingresar contraeña</h1>
                    <input type="text" />
                </form>
                <button>Olvidaste tu contraseña</button>
            </div>
        </div>
    </div>
    )
    }
    export default Login;