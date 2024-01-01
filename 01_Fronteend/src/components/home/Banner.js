import { bannerImages } from "./BannerConstant";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = ()=>{
     return(
          <Carousel
               autoPlay={true}
               infiniteLoop={true}
               showThumbs={false}
               showStatus={false}
               
          >
               {
                    bannerImages.map(({id, src})=>(
                         <div key={id} className="h-64 w-full">
                              <img src={src} alt={`Component at id ${id}`}/>
                         </div>
                         
                    ))
               }
          </Carousel>
     );
}

export default Banner;