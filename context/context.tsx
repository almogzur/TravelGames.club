import React, { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

const FavoritesContext = React.createContext(null)
const IsReviewSideBarCollapsedContext = React.createContext<boolean>(false)
const SerchBarlocatonContaxt = React.createContext<string>("")
const PageWidthContext = React.createContext(null)

export{
    FavoritesContext,
    IsReviewSideBarCollapsedContext,
    SerchBarlocatonContaxt,
    PageWidthContext,
}