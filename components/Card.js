import Image from "next/image";
import ProdactPage from "./ProdactPage";


export default function  Card  ({prodact ,setIsActive}) {

    const diplaypage = (e)=>{ 
      setIsActive(<ProdactPage prodact={prodact} setIsActive={setIsActive}/>)
  
    }
    return( 
      <div tabIndex={1}  key={prodact.data.name} className="card" onClick={diplaypage}>
         <div className="card-header">
            <Image loading="lazy" src={prodact.data.mainImg} width={200} height={200} alt=""/>
         </div>
         <div className="card-body">
            <h6>{new Date(prodact.data.publicOn).toISOString()}</h6>
            <p>{prodact.data.introduction}</p>   
         </div>      
      </div>
              )
  
  }