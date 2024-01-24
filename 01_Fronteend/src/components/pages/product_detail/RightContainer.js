import { Products } from "../../../data/Data";

const RightContainer = () => {

     const productDetails = (index)=>{
          window.open(`/mobiles/${index}`)
     }

     return (
          <div className="col-span-9 bg-white pt-8 h-full">
               <ul>
                    {
                         Products.map(({ image, title }, index) => (
                              <li 
                                   key={index} 
                                   className="p-2"
                              >
                               
                                   <div className="w-full h-auto grid grid-flow-col grid-cols-12 gap-3 border">

                                        {/* Open Product */}
                                        <div 
                                             className="col-span-4 p-4 bg-[#F7F7F7] flex justify-center cursor-pointer"
                                             onClick={()=>productDetails(index)}
                                        >
                                             <img src={image} alt={title} />
                                        </div>

                                        <div 
                                             className=" col-span-8 flex flex-col justify-evenly"
                                        >

                                             {/* Open Product */}
                                             <p 
                                                  className="title text-[20px] font-semibold cursor-pointer hover:text-amber-700"
                                                  onClick={()=>productDetails(index)}     
                                             >
                                                  {title}
                                             </p>

                                             <p>⭐⭐⭐⭐⭐</p>

                                             {/* Open Product */}
                                             <div 
                                                  className="w-fit flex flex-row text-[14px] items-center gap-1 cursor-pointer"
                                                  onClick={()=>productDetails(index)} 
                                             >
                                                  <p className="price flex items-center font-semibold">&#8377;<span className="text-[28px]">8999</span></p>
                                                  <p className="">M.R.P: <s>&#8377;11,999</s>
                                                  </p>
                                                  <p>(25% off)</p>
                                             </div>

                                             <p>FREE delivery for Prime members</p>
                                             <button className="bg-yellow-400 p-1 text-[14px] rounded-md font-semibold w-fit">Add to Cart</button>
                                        </div>
                                   </div>
                              
                              </li>
                         ))
                    }
               </ul>
          </div>
     )
}

export default RightContainer;