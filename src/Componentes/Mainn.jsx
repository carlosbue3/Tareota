import Cositas from "./Cositas";
import Cositas2 from "./Cositas2";
import Cositas3 from "./Cositas3";
import Cositas4 from "./Cositas4";
import Final from  "./Final";
import Menuu from "./Menuu";



function Mainn(){
return(


<div>
    <div>
      <Menuu></Menuu>
    </div>
    <div className="rosa">
    <Cositas></Cositas>
    </div>
    <div class="papa">
    <div class="divun"> <h1>95+</h1></div>
    <div class="divdo"> <h1>1.500+</h1> </div>
    <div class="divtre"> <h1>3.000+</h1></div>
    <div class="divcua"> <h1>100+</h1></div>
    </div> 
    <div>
        <Cositas2></Cositas2>
    </div>
    <div>
        <Cositas3></Cositas3>
    </div>
    <div>
        <Cositas4></Cositas4>
    </div>
    <footer>
        <Final></Final>
    </footer>
</div>
)
}
export default Mainn;