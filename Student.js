import React from "react"

export function Student(props){

    const {id,name,marks} = props

    return(

        <div>

        <p>{id}</p>

        <p>{name}</p>

        <p>{marks}</p>

        </div>

    )

}

 

