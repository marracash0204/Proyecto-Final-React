import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/config";
import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { idItem } = useParams();

  useEffect(() => {
    const nuevoDoc = doc(db, "productos", idItem);

    getDoc(nuevoDoc)
      .then(res => {
        const data = res.data();
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto);
      })
      .catch(error => console.log(error))
  }, [idItem])

  
    const descripciones = {
      1: `Labial Mágico Flor: es un producto altamente recomendado para los niños.`,
      2: `Labial Mac: es un producto economico y de la mejor calidad actualmente en el mercado.`,
      3: `Polvo Aloe Vera: es un producto diseñado para hidratar tu piel y mantenerte bella`,
      4: `Polvo BB: es el producto con mas ventas actualmente en el mercado y con una gran efectividad`,
      5: `Sombra Beauty: es uno de nuestros productos mas economicos que garantizan siempre una piel perfecta.`,
      6: `Sombra Canlen: es un producto que jamas querrás dejar de usar, te garantiza verte siempre hermosa.`
    };
  

    const descripcionUsuario = descripciones[idItem] || 'Descripción no encontrada';
  
  

  return (
    <div>
      <p className="descripciones"> {descripcionUsuario} </p>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer