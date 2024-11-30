import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './gallery.css'; // Import CSS for styling

// Sample data (image URLs and captions)
const images = [
  { src: require('./imgs/v.png'), caption: 'Image 1' },
  { src: require('./imgs/vampire.png'), caption: 'Image 2' },
  { src: require('./imgs/omniscientreaderposter.png'), caption: 'Image 3' },
  { src: require('./imgs/csm.png'), caption: 'Image 4' },
  { src: require('./imgs/animation.png'), caption: 'Image 5' },
];

const jasStickers = [
  { src: require('./imgs/biyuu.png'), caption: 'Image 6' },
  { src: require('./imgs/cat.png'), caption: 'Image 6' },
  { src: require('./imgs/chillchuck.png'), caption: 'Image 6' },
  { src: require('./imgs/marcille.png'), caption: 'Image 6' },
  { src: require('./imgs/senshi.png'), caption: 'Image 6' },
  { src: require('./imgs/korok.png'), caption: 'Image 6' },
  { src: require('./imgs/mancat.png'), caption: 'Image 6' },
  { src: require('./imgs/noface.png'), caption: 'Image 6' },
]

const sopPosters = [
  { src: require('./imgs/02022023.jpg'), caption: 'Image 6' },
  { src: require('./imgs/firsttry.jpg'), caption: 'Image 6' },
  { src: require('./imgs/nilou dance.png'), caption: 'Image 6' },
  { src: require('./imgs/plein april 2023 day 2.jpg'), caption: 'Image 6' },
  { src: require('./imgs/tighnari 2.png'), caption: 'Image 6' },
  { src: require('./imgs/xiao full.png'), caption: 'Image 6' },
  { src: require('./imgs/xingqiu window clear water.png'), caption: 'Image 6' },
]

const sopStickers = [
  { src: require('./imgs/oikawaaa.png'), caption: 'Image 6' },
  { src: require('./imgs/scara.png'), caption: 'Image 6' },
  { src: require('./imgs/tired.png'), caption: 'Image 6' },
  { src: require('./imgs/coffee.png'), caption: 'Image 6' },
  { src: require('./imgs/hero.png'), caption: 'Image 6' },
  { src: require('./imgs/magikarp.png'), caption: 'Image 6' },
]

const PhotoGallery = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <h1>Klip</h1>
      <h2>Posters</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setOpen(true)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h2>Stickers</h2>
      <div className="gallery">
        {jasStickers.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setOpen(true)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h1>Sora</h1>
      <h2>Posters</h2>
      <div className="gallery">
        {sopPosters.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setOpen(true)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <h2>Stickers</h2>
      <div className="gallery">
        {sopStickers.map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => setOpen(true)}>
            <img src={image.src} alt={image.caption} className="gallery-image" />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            src: "/image1x3840.jpg",
            alt: "image 1",
            width: 3840,
            height: 2560,
            srcSet: images,
          },
          // ...
        ]}
      />
    </>
  );
};

export default PhotoGallery;