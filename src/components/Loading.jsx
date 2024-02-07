import { ring } from "ldrs";
import '../style/Loading.css'

export const Loading = () => {
  ring.register();
  return (
    // Centrar
    <div className="Cargando">
      <l-ring
        size="100"
        stroke="10"
        bg-opacity="0"
        speed="1.8"
        color="#EE5953"
        
      ></l-ring>
    </div>
  );
};
