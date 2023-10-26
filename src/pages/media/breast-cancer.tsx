import SiteLayout from "@/components/Layout/SiteLayout";
import React, { useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import { BreastCancerPhotos } from "../../utils/photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import NextJsImage from "@/utils/NextJsImage";

const BreatCancerGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <SiteLayout pageName={"Media"}>
      <section className="bg-white text-[#1D365A]  py-36 ">
        <div className="custom-container">
          <h1 className="font-medium text-xl text-primary text-center mb-10">
            Breast Cancer Awareness Month
          </h1>
          <PhotoAlbum
            photos={BreastCancerPhotos}
            layout="masonry"
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
            defaultContainerWidth={1200}
            sizes={{
              size: "calc(100vw - 40px)",
              sizes: [
                { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
                { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
                { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
              ],
            }}
            renderPhoto={NextJsImage}
          />

          <Lightbox
            slides={BreastCancerPhotos}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </section>
    </SiteLayout>
  );
};

export default BreatCancerGallery;
