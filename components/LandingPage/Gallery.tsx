import { Button } from '@mochi-ui/core'
import { ChevronDownLine } from '@mochi-ui/icons'

const stickers = [
  'Angry-1.png',
  'Cup.png',
  'Happy-1.png',
  'Kiss Rabby.png',
  'Press button-1.png',
  'Shifty.png',
  'Trippy-1.png',
  'Trippy-6.png',
  'Angry.png',
  'Dinosaur-1.png',
  'Happy.png',
  'Look-1.png',
  'Press button.png',
  'Shocked-1.png',
  'Trippy-2.png',
  'Trippy-7.png',
  'Crying-1.png',
  'Dinosaur.png',
  'Heart-1.png',
  'Look.png',
  'Scare-1.png',
  'Shocked.png',
  'Trippy-3.png',
  'Trippy-8.png',
  'Crying.png',
  'Dizzy-1.png',
  'Heart.png',
  'No-1.png',
  'Scare.png',
  'Shy-1.png',
  'Trippy-4.png',
  'Trippy-9.png',
  'Cup-1.png',
  'Dizzy.png',
  'Kiss Rabby-1.png',
  'No.png',
  'Shifty-1.png',
  'Shy.png',
  'Trippy-5.png',
  'Trippy.png',
]

export default function Gallery() {
  return (
    <div id="gallery" className="relative bg-white px-5 py-12">
      <div className="relative z-0 max-w-7xl mx-auto grid grid-cols-5 lg:grid-cols-8 gap-10">
        {stickers.map((imgSrc, idx) => (
          <div key={idx} className="inline-flex items-center justify-center">
            <img
              className="w-14 h-14 lg:w-24 lg:h-24 object-cover"
              src={`images/neko-sticker/${imgSrc}`}
              alt=""
            />
          </div>
        ))}
        <div className="absolute z-10 bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      <div className="relative z-20 flex items-center justify-center bg-white w-full">
        <Button
          variant="neutral"
          color="neutral"
          className="bg-gray-200 rounded-full p-2.5"
        >
          <ChevronDownLine className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
