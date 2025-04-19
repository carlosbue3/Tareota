import Loguito from "../assets/Loguito.png"

function Menuu() {
  return (
<div class="parent">
<div class="div1"><img className="iman" src={Loguito} alt="adaed" /> </div>
<div class="div2"><h4>Citas gratis </h4> </div>
<div class="div3"> <h4>Centro de ayuda</h4></div>
<div class="div4"> <h4>Quienes somos</h4></div>
<div class="div5"><h4>Horarios</h4> </div>
<div class="div6"> <h4>Sucursales  </h4></div>
<div class="div7">  <button className="b1">Sign in</button> <button className="b2">Sign up</button> </div>
</div> 
  );
}

export default Menuu;