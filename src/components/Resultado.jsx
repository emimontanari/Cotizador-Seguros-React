import useCotizador from "../hooks/useCotizador"
import { MARCAS,PLANES } from "../constants"
import { useCallback,useMemo, useRef } from "react"

const Resultado = () => {
    const {resultado, datos} = useCotizador()
    const {marca, plan, year} = datos

    if(resultado === 0 ) return null
    const yearRef = useRef(year)
    const [nombreMarca] = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado]) 
    const [nombrePlan] =useCallback(PLANES.filter(p => p.id === Number(plan)),[resultado]) 


  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-700 font-black text-2xl">Resumen</h2>
        <p className="my-2">
            <span className="font-bold">Marca: </span>
            {nombreMarca.nombre}
        </p>

        <p className="my-2">
            <span className="font-bold">Plan: </span>
            {nombrePlan.nombre}
        </p>
        
        <p className="my-2">
            <span className="font-bold">Año del auto: </span>
            {yearRef.current}
        </p>

        <p className="my-2 text-2xl">
            <span className="font-bold">TOTAL: </span>
            {resultado}
        </p>

    </div>
  )
}

export default Resultado