import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

// import image
import gp10 from "../../../assets/images/gallery/gp-10.jpg";
import gp13 from "../../../assets/images/gallery/gp-13.png";
import gp1 from "../../../assets/images/gallery/gp1.jpg";
import gp11 from "../../../assets/images/gallery/gp11.jpg";
import gp12 from "../../../assets/images/gallery/gp12.png";
import gp14 from "../../../assets/images/gallery/gp14.jpg";
import gp2 from "../../../assets/images/gallery/gp2.jpg";
import gp3 from "../../../assets/images/gallery/gp3.jpg";
import gp4 from "../../../assets/images/gallery/gp4.jpg";
import gp5 from "../../../assets/images/gallery/gp5.jpg";
import gp6 from "../../../assets/images/gallery/gp6.jpg";
import gp7 from "../../../assets/images/gallery/gp7.jpg";
import gp8 from "../../../assets/images/gallery/gp8.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const PhotoGallery = () => {
  return (
    <div>
      <SectionHeader />
      <PhotoProvider>
        <div className="grid grid-cols-12 place-items-stretch">
          <PhotoView src={gp3}>
            <img alt="img1" src={gp3} className="col-span-2 row-span-2" />
          </PhotoView>
          <PhotoView src={gp4}>
            <img alt="img1" src={gp4} className="col-span-3 " />
          </PhotoView>
          <PhotoView src={gp1}>
            <img alt="img1" src={gp1} className="col-span-2" />
          </PhotoView>
          <PhotoView src={gp2}>
            <img alt="img1" src={gp2} className="col-span-2" />
          </PhotoView>
          <PhotoView src={gp5}>
            <img alt="img1" src={gp5} className="col-span-3" />
          </PhotoView>
          <PhotoView src={gp14}>
            <img alt="img1" src={gp14} className="col-span-3" />
          </PhotoView>
          <PhotoView src={gp10}>
            <img alt="img1" src={gp10} className="col-span-4" />
          </PhotoView>
          <div className="col-span-3">
            <PhotoView src={gp13}>
              <img alt="img1" src={gp13} />
            </PhotoView>
            <PhotoView src={gp12}>
              <img alt="img1" src={gp12} />
            </PhotoView>
          </div>
          <PhotoView src={gp6}>
            <img alt="img1" src={gp6} className="col-span-3" />
          </PhotoView>
          <PhotoView src={gp7}>
            <img alt="img1" src={gp7} className="col-span-4" />
          </PhotoView>

          <PhotoView src={gp8}>
            <img alt="img1" src={gp8} className="col-span-1" />
          </PhotoView>
          <PhotoView src={gp11}>
            <img alt="img1" src={gp11} className="col-span-4" />
          </PhotoView>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default PhotoGallery;
