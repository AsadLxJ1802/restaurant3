import Image from "next/image";

import Kommanda1 from "./Kommanda-img.png"
import Kommanda2 from "./Kommanda-img2.png"
import Kommanda3 from "./Kommanda-img3.png"
import Kommanda4 from "./Kommanda-img4.png"
import Kommanda5 from "./Kommanda-img5.png"
import Kommanda6 from "./Kommanda-img6.png"


export default function Loading  () {
 return(
    <div className="flex justify-center">
        <Image  src={"/images/lOADING.png"} alt="loading" width={100} height={100}/>
    </div>
) 
}


export {Kommanda1,Kommanda2,Kommanda3,Kommanda4,Kommanda5,Kommanda6 }
