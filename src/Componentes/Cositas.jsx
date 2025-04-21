import dogs from "../assets/dogs.jpg"
import gg from "../assets/gg.mp3"
function Cositas() {
  return (
    <div class="Container">
    <div class="diva"> 
        <h1>We Care About</h1>
        <h1>Your Healt</h1>
        <h6>Mucho texto afefffqfqfqfqfqftgrgrgr</h6>
        <h6>Mucho texto afefffqfqfqfqfqftgrgrgr</h6>

        <h6>Mucho texto afefffqfqfqfqfqftgrgrgr</h6>


    </div>
    <div class="divb">
     <div className="naves">
     <form>
        <input type="text" />
        
      </form>
      <button>BUSCAR</button>
     </div>
     
        
    <div class="divd">
    <button className="bo1">Escuchar</button>
    <div className="dive"><audio className="hola" controls src={gg}></audio></div>
    </div>
    </div>

   
   
   
       
    

    <div class="divf"><img className="hh" src={dogs} alt="dadad" /> </div>
    </div>


    






  );
}

export default Cositas;