import React, { useEffect, useState } from "react";
import { getRiflles } from "../Services/api";
import Contato from "../Contato";
import "./style.css"

const Rifas = () => {

    const [riflles, setRiflles] = useState([])
    const [rifa, setRifa] = useState([])

    useEffect(() => {
        (async () => {
            const response = await getRiflles()
            setRiflles(response.data.numbers)
        })()
    }, [])

    const handleCheck = (event) => {
        var updatedList = [...rifa];
        if (event.target.checked) {
            updatedList = [...rifa, Number(event.target.value)];
        } else {
            updatedList.splice(rifa.indexOf(Number(event.target.value)), 1);
        }
        setRifa(updatedList);
    };

    return (
        <>
            <Contato rifa={rifa} />
            <section className="container-rifas">
                {
                    riflles.map((rifas) => {
                        return (
                            <>
                                {customer(rifas, handleCheck, rifa)}
                            </>
                        )
                    })
                }
            </section>
            <button onClick={() => chamar()} >comprar</button>
        </>
    )
}
function chamar() {
    document.getElementsByClassName("container-contato")[0].style.display = "flex"
}

function customer(rifas, handleCheck, rifa) {

    if (rifas.customer) {

        /*if(rifas.number === 22 || rifas.number === 29 ){
            rifas.paid = 1;
        }*/

        if(rifas.paid){
            return (
                <label className="celula" onClick={() => celula(rifas.number, rifas)} key={rifas.id} style={{ background: "gray", color: "#000", cursor:" initial"}}>
                    <input
                        type="checkbox"
                        className="select"
                        name="select"
                        value={rifas.number || ""}
                    />
                    {rifas.number}
                </label>
            )
        }else{
            return (
                <label className="celula" onClick={() => celula(rifas.number, rifas)} key={rifas.id} style={{ background: "yellow", color: "#000", cursor:" initial"}}>
                    <input
                        type="checkbox"
                        className="select"
                        name="select"
                        value={rifas.number || ""}
                    />
                    {rifas.number}
                </label>
            )
        }
    } else {
        return (
            <label 
                className="celula" 
                onClick={() => celula(rifas.number, rifas)} 
                key={rifas.id} 
                onMouseOver={() => document.getElementsByClassName("select")[rifas.number-1].style.scale = "110%"} >
                <input
                    type="checkbox"
                    className="select"
                    onChange={handleCheck}
                    name="select"
                    value={rifas.number || ""}
                />
                {rifas.number}
            </label>
        )
    }
}
function celula(props, rifa) {

    props -= 1;
    
    if(!rifa.customer){
        if (document.getElementsByClassName("select")[props].checked) {
            document.getElementsByClassName("celula")[props].style.background = "#970b32"
            document.getElementsByClassName("celula")[props].style.color = "#fff"
        } else {
            document.getElementsByClassName("celula")[props].style.color = "#000"
            document.getElementsByClassName("celula")[props].style.background = "#fff"
        }
    }

}

export default Rifas