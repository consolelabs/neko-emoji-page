import { Button } from '@mochi-ui/core'
import { ChevronDownLine } from '@mochi-ui/icons'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

const stickers = [
  '+1.mp4',
  'crying.mp4',
  'disappear.mp4',
  'flickering.mp4',
  'lick.mp4',
  'ok_3.mp4',
  'rainbow.mp4',
  'shocked.mp4',
  'sweating.mp4',
  'underwater.mp4',
  'agree.mp4',
  'cup.mp4',
  'disco.mp4',
  'grieve.mp4',
  'look.mp4',
  'panic.mp4',
  'rich.mp4',
  'shy.mp4',
  'think.mp4',
  'wagging_tail.mp4',
  'angry.mp4',
  'dancing.mp4',
  'dizzy.mp4',
  'happy.mp4',
  'lotus.mp4',
  'press_button.mp4',
  'rich_2.mp4',
  'sleeping.mp4',
  'throbbing_heart.mp4',
  'wat.mp4',
  'begging.mp4',
  'despising_look.mp4',
  'drained.mp4',
  'heart.mp4',
  'no.mp4',
  'pressing_phone.mp4',
  'scare.mp4',
  'sparkle.mp4',
  'throwing_money.mp4',
  'yoink.mp4',
  'broke.mp4',
  'dinosaur.mp4',
  'exciting.mp4',
  'kiss_neko.mp4',
  'ok.mp4',
  'rabby_kiss.mp4',
  'scratching_head.mp4',
  'sparkle.mp4',
  'tired.mp4',
  'zoom_in.mp4',
  'clapping.mp4',
  'disagree.mp4',
  'fedora_heart.mp4',
  'laugh.mp4',
  'ok_2.mp4',
  'raged.mp4',
  'shifty.mp4',
  'trippy.mp4',
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
              src={`images/neko-sticker/${imgName}`}
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
