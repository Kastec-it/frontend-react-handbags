import './nav-top.css'
import React from "react";
import Buttons from "../../Modules/Buttons/Buttons";



export default function NavTop() {
    return (
        <>
            <Buttons isDisabled={false} clickHandler={() => console.log("To the collection!")}>
                To the collection
            </Buttons>
            <Buttons isDisabled={false} clickHandler={() => console.log("Shop all bags!")}>
                Shop all bags
            </Buttons>
            <Buttons isDisabled={true} clickHandler={() => console.log("To the pre-orders!")}>
                Pre-orders
            </Buttons>
        </>
    )
}