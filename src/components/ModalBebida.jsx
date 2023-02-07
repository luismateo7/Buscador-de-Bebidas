import { Modal, Image } from "react-bootstrap"
import useBebidas from "../hooks/useBebidas"

export default function ModalBebida() {

    const { modal, handleModalClick, receta, setReceta } = useBebidas()

    const mostrarIngredientes = ()=>{
        let ingredientes = []

        for(let i = 1; i < 16; i++) {
            if( receta[`strIngredient${i}`]) {
                ingredientes.push(
                    <li key={`strIngredient${i}`}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        <Modal show={modal} onHide={()=>{
            handleModalClick()
            setReceta({})
        }}>
            <Image
                src={receta.strDrinkThumb}
                alt={`Imagen receta ${receta.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title>{receta.strDrink}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="p-3">
                    <h2>Instrucciones</h2>
                    <p>{receta.strInstructions}</p>
                    <h2>Ingredientes y Cantidades</h2>
                    <p>{mostrarIngredientes()}</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}
