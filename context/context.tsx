import React, { useEffect } from "react";

//const FavoritesContext = React.createContext(null)
const IsReviewSideBarCollapsedContext = React.createContext(false)
const SerchBarlocatonContaxt = React.createContext<string>("")
const PageWidthContext = React.createContext(null)

export{
   // FavoritesContext,
    IsReviewSideBarCollapsedContext,
    SerchBarlocatonContaxt,
    PageWidthContext,
}