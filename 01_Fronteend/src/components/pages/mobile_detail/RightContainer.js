import { Products } from "../../../data/Data";

const RightContainer = () => {
     return (
          <div className="col-span-9 bg-gray-300">
               <ul>
                    {
                         Products.map(({ image, title }, index) => (
                              <li key={index} >
                                   <div className="grid grid-flow-col grid-cols-12">
                                        <div className="col-span-4">
                                             <img src={image} alt={title} />
                                        </div>

                                        <div className="col-span-8">
                                             <p className="text-[18px] font-semibold cursor-pointer hover:text-amber-700">{title}</p>
                                             <p>⭐⭐⭐⭐⭐</p>

                                             <div>
                                                  <p>&#8377;<span>8999</span></p>
                                                  <p>M.R.P: <s>&#8377;11,999</s></p>
                                                  <p>(25% off)</p>
                                             </div>

                                             <p>FREE delivery for Prime members</p>
                                             <button className="bg-yellow-400 p-1 text-[14px] rounded-md font-semibold">Add to Cart</button>
                                        </div>
                                   </div>
                              </li>
                         ))
                    }
               </ul>
          </div>
     )
}

// {
//      title: "Apple iPhone 11, 64GB, Black - Unlocked (Renewed)",
//      image: "https://m.media-amazon.com/images/I/612kg3rGyYL._AC_UY218_.jpg",
//      url: "https://www.amazon.com/dp/B07ZPKN6YR",
//      asin: "B07ZPKN6YR",
//      star_rating: "4.3",
//      global_ratings: "43,853",
//      bought_in_past_month: "6K+",
//      price_symbol: "$",
//      price: "274.95",
//      is_prime: false,
//      is_climate_pledge_friendly: true,
//      is_best_seller: true,
//      is_sponsored: false,
//      is_limited_time_deal: false,
//    },

export default RightContainer;