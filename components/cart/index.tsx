import { useState } from "react";

export function CartWrapper({items}:{items:any[]|{}}){}

function DefualtCart() {

    const [ isOpen , setIsOpen ] = useState<Boolean>(false)
    const [totalPrice , setTotalPrice] = useState("")


    const CalcPrice = ()=>{}

    return (
        isOpen? <div>

               </div>
     : <button>Cart</button>

      );
}

export default DefualtCart;


export function CloseCart (){}