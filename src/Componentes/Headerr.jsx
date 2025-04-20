import dogs from "../assets/dogs.jpg"
import gg from "../assets/gg.mp3"
function Headerr() {
  return (
    <div class="Container">
    <div class="diva"> 
        <h1>We Care About</h1>
        <h1>Your Healt</h1>
        <h6>Mucho texto afefffqfqfqfqfqftgrgrgr</h6>

    </div>
    <div class="divb">
      
    <form>
    <input type="text" /><button>BUSCAR</button></form>
      
       </div>
    <div class="divc"><button>Escuchar</button></div>
    <div className="divd"><audio controls src={gg}></audio></div>
    <div class="dive"><img className="hh" src={dogs} alt="dadad" /> </div>
    </div>


    






  );
}

export default Headerr;