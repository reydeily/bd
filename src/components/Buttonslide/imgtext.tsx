import { pagesArray } from "../../screams/PagesArray";
import React from "react";

export function ImageText({page} : {page:number}) {
    const CurrentPageComponent = pagesArray[page]; //usei um vetor, caso eu aumente o número de páginas

    return (
        <CurrentPageComponent />
    )
}