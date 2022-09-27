import React from "react";
import "./style.css"
import imageTest from "../Images/resgate.png"
import Button from "../components/Button";

const Produto = () =>{
    return(
        <section className="container-produto">
            <div className="container-produto-image flexColum">
                <h1>Camisa </h1>
                <section className="exposicao flexColum">
                    <img src={imageTest} />
                </section>
                <section className="images-prod-icons">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                </section>
            </div>
            <div className="container-compra flexColum">
                <section className="venda flexColum">
                    <section className="valor-produto"> Valor R$ 2,00 </section>
                    <section className="info-representante">Representante: <br/> Jade Oliveira Cordeiro <br/> (75) 98871-8531 </section>
                    <section className="redes-contato">Redes sociais:</section>
                    <Button childen="comprar"/>
                </section> 
            </div>
        </section>
    )
}

export default Produto