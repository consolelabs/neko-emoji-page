import { Button } from '@mochi-ui/core'
import { ChevronDownLine } from '@mochi-ui/icons'
import clsx from 'clsx'
import { useState } from 'react'

const stickers = [
  '+1.mp4',
  'Agree.mp4',
  'Angry.mp4',
  'Begging.mp4',
  'Broke.mp4',
  'Clapping.mp4',
  'Crying.mp4',
  'Cup.mp4',
  'Dancing.mp4',
  'Despising_look.mp4',
  'Dinosaur.mp4',
  'Disagree.mp4',
  'Disappear.mp4',
  'Disco.mp4',
  'Dizzy.mp4',
  'Drained.mp4',
  'Exciting.mp4',
  'Fedora_Heart.mp4',
  'Flickering.mp4',
  'Grieve.mp4',
  'Happy.mp4',
  'Heart.mp4',
  'Kiss_Neko.mp4',
  'Laugh.mp4',
  'Lick.mp4',
  'Look.mp4',
  'Lotus.mp4',
  'No.mp4',
  'OK_2.mp4',
  'OK_3.mp4',
  'Ok.mp4',
  'Panic.mp4',
  'Press_button.mp4',
  'Pressing_Phone.mp4',
  'Rabby_kiss.mp4',
  'Raged.mp4',
  'Rainbow.mp4',
  'Rich.mp4',
  'Rich_2.mp4',
  'Scare.mp4',
  'Scratching_head.mp4',
  'Shifty.mp4',
  'Shocked.mp4',
  'Shy.mp4',
  'Sleeping.mp4',
  'Sparkle.mp4',
  'Sweating.mp4',
  'Think.mp4',
  'Throbbing_Heart.mp4',
  'Throwing_money.mp4',
  'Tired.mp4',
  'Trippy.mp4',
  'Underwater.mp4',
  'Wagging_Tail.mp4',
  'Wat.mp4',
  'Yoink.mp4',
  'Zoom_in.mp4',
]

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)

  return (
    <div
      id="gallery"
      className="overflow-hidden relative z-0 py-8 bg-white lg:py-28"
    >
      <div
        className={clsx(
          'relative z-0 max-w-7xl px-5 lg:px-20 mx-auto grid grid-cols-5 lg:grid-cols-8 gap-5 lg:gap-10 transition-all overflow-hidden',
          {
            'h-[400px] lg:h-[500px]': !showAll,
            'max-h-full': showAll,
          },
        )}
      >
        {stickers.map((imgName, idx) => (
          <div
            key={idx}
            className="inline-flex relative justify-center items-center w-14 h-14 lg:w-24 lg:h-24"
          >
            <video
              className="object-contain"
              controls={false}
              autoPlay
              loop
              muted
            >
              <source src={`images/neko-sticker/${imgName}`} type="video/mp4" />
            </video>
          </div>
        ))}
        <div
          className={clsx(
            'absolute z-10 bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-transparent to-transparent',
            {
              hidden: showAll,
            },
          )}
        />
      </div>
      <div
        className={clsx(
          'relative z-20 flex items-center justify-center bg-white w-full',
          {
            'mt-10': showAll,
          },
        )}
      >
        <Button
          variant="neutral"
          color="neutral"
          className="p-2.5 bg-gray-200 rounded-full"
          type="button"
          aria-label="Show all"
          onClick={() => setShowAll(!showAll)}
        >
          <ChevronDownLine
            className={clsx('h-6 w-6 transition-all', {
              'transform rotate-180': showAll,
            })}
          />
        </Button>
      </div>
    </div>
  )
}
