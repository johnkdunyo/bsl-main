const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

interface IPhotos {
  src: string;
  width: number;
  height: number;
}

const getPhotos = (photos: IPhotos[]) => {
  return photos.map((photo) => ({
    src: photo.src,
    width: photo.width,
    height: photo.height,
    srcSet: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        src: photo.src,
        width: breakpoint,
        height,
      };
    }),
  }));
};

const breastCancerPhotos: IPhotos[] = [
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329763/bsl-website/bsl/gallery/breast-cancer/1_lw6xce.png",
    width: 1080,
    height: 800,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329762/bsl-website/bsl/gallery/breast-cancer/2_xgoyii.png",
    width: 565,
    height: 361,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329763/bsl-website/bsl/gallery/breast-cancer/3_urg1oh.png",
    width: 565,
    height: 732,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329762/bsl-website/bsl/gallery/breast-cancer/4_biyqk4.png",
    width: 565,
    height: 361,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329766/bsl-website/bsl/gallery/breast-cancer/5_mxecri.png",
    width: 565,
    height: 732,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329766/bsl-website/bsl/gallery/breast-cancer/6_tds1fi.png",
    width: 565,
    height: 361,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329762/bsl-website/bsl/gallery/breast-cancer/7_stmhuf.png",
    width: 565,
    height: 361,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329762/bsl-website/bsl/gallery/breast-cancer/8_s68rwe.png",
    width: 565,
    height: 361,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698329766/bsl-website/bsl/gallery/breast-cancer/10_wneyqt.png",
    width: 1920,
    height: 732,
  },
];

const csrPhotos: IPhotos[] = [
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410250/bsl-website/bsl/gallery/CSR/BroadSpectrum_Donates_3000_Tshirts_to_NHIA_tlsxat.jpg",
    width: 4225,
    height: 3130,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410244/bsl-website/bsl/gallery/CSR/Broadspectrum_sponsors_Farmers_day_rchzwg.jpg",
    width: 5138,
    height: 3353,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410236/bsl-website/bsl/gallery/CSR/Broadspectrum_Donates_to_Agribusiness_Chamber_vvjbxd.jpg",
    width: 5472,
    height: 3548,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410235/bsl-website/bsl/gallery/CSR/Donation_to_Alhudariya_Masjid_Mosque_rmplc7.png",
    width: 590,
    height: 559,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410233/bsl-website/bsl/gallery/CSR/Donation_To_trust_Hospital_gm1osb.png",
    width: 589,
    height: 468,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410232/bsl-website/bsl/gallery/CSR/Dzorwulu_Specia_School_Donation_astnkg.jpg",
    width: 1284,
    height: 996,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410231/bsl-website/bsl/gallery/CSR/Broadspectrum_Plants_3_000_trees_for_Green_Ghana_Project_zhmawq.png",
    width: 577,
    height: 375,
  },
];

const awardsPhotos: IPhotos[] = [
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410251/bsl-website/bsl/gallery/Awards/IMG_2970_y8cdd4.heic",
    width: 3024,
    height: 4032,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410245/bsl-website/bsl/gallery/Awards/2022_GIITA_Awards_jplhwi.jpg",
    width: 1284,
    height: 1245,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410235/bsl-website/bsl/gallery/Awards/2023_Infrastructure_Company_of_the_Year_at_the_Ghana_Business_Standards_Awards_2023_highlighting_our_ongoing_investments_in_fiber_infrastructure_in_Ghana_and_nearby_regions._gxpgy7.png",
    width: 579,
    height: 535,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410235/bsl-website/bsl/gallery/Awards/2023_Ghana_Business_and_Innovation_Awards_mejdyi.png",
    width: 568,
    height: 585,
  },
  {
    src: "https://res.cloudinary.com/diek2uivi/image/upload/v1698410235/bsl-website/bsl/gallery/Awards/2022_Huawei_Capability_Partner_Of_the_Year_yiy1jk.png",
    width: 571,
    height: 587,
  },
];

const BreastCancerPhotos = getPhotos(breastCancerPhotos);
const CSRPhotos = getPhotos(csrPhotos);
const AwardsPhotos = getPhotos(awardsPhotos);

export { BreastCancerPhotos, CSRPhotos, AwardsPhotos };
