const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const breastCancerPhotos = [
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

const BreastCancerPhotos = breastCancerPhotos.map((photo) => ({
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

export { BreastCancerPhotos };
