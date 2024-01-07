import React from "react";

export type SideBarStatT {
    status:boolean,
}
export type SerchBarLocT {
    status:Number
}
export type PageWidthT { 
    width:String
}
//const FavoritesContext = React.createContext(null)
const IsRevSideBColl = React.createContext<SerchBarLocT|undefined>(undefined)
const SerchBarLocC = React.createContext<PageWidthT|undefined>(undefined)
const PageWidthC = React.createContext<PageWidthT|undefined>(undefined)

export{
   // FavoritesContext,
   IsRevSideBColl,
   SerchBarLocC,
   PageWidthC,
}