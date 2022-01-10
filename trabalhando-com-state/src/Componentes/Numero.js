import React from "react";

export default function Numero(props){
    return(
        <p>      
            <p>Valor do state num em App: {props.num}</p>
            <button onClick={()=>props.setNum(props.num+10)}>soma 10</button>
        </p>
    )
}