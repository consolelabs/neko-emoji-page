import { Button } from '@mochi-ui/core'
import { ChevronDownLine } from '@mochi-ui/icons'
import clsx from 'clsx'
import { useState } from 'react'

const stickers = [
  '+1.gif',
  'crying.gif',
  'disappear.gif',
  'flickering.gif',
  'lick.gif',
  'ok_3.gif',
  'rainbow.gif',
  'shocked.gif',
  'sweating.gif',
  'underwater.gif',
  'agree.gif',
  'cup.gif',
  'disco.gif',
  'grieve.gif',
  'look.gif',
  'panic.gif',
  'rich.gif',
  'shy.gif',
  'think.gif',
  'wagging_tail.gif',
  'angry.gif',
  'dancing.gif',
  'dizzy.gif',
  'happy.gif',
  'lotus.gif',
  'press_button.gif',
  'rich_2.gif',
  'sleeping.gif',
  'throbbing_heart.gif',
  'wat.gif',
  'begging.gif',
  'despising_look.gif',
  'drained.gif',
  'heart.gif',
  'no.gif',
  'pressing_phone.gif',
  'scare.gif',
  'sparkle.gif',
  'throwing_money.gif',
  'yoink.gif',
  'broke.gif',
  'dinosaur.gif',
  'exciting.gif',
  'kiss_neko.gif',
  'ok.gif',
  'rabby_kiss.gif',
  'scratching_head.gif',
  'sparkling.gif',
  'tired.gif',
  'zoom_in.gif',
  'clapping.gif',
  'disagree.gif',
  'fedora_heart.gif',
  'laugh.gif',
  'ok_2.gif',
  'raged.gif',
  'shifty.gif',
  'sparkling_eyes.gif',
  'trippy.gif',
]

export default function Gallery() {
  const [showAll, setShowAll] = useState(false)

  return (
    <div id="gallery" className="relative bg-white px-5 py-12 overflow-hidden">
      <div
        className={clsx(
          'relative z-0 max-w-7xl mx-auto grid grid-cols-5 lg:grid-cols-8 gap-5 lg:gap-10 transition-all overflow-hidden',
          {
            'h-[400px] lg:h-[500px]': !showAll,
            'max-h-full': showAll,
          },
        )}
      >
        {stickers.map((imgName, idx) => (
          <div key={idx} className="inline-flex items-center justify-center">
            <img
              className="w-14 h-14 lg:w-24 lg:h-24 object-contain"
              src={`images/neko-sticker/${imgName}`}
              alt={imgName.replaceAll(/\.gif|\_/gi, ' ').trimEnd()}
            />
          </div>
        ))}
        <div
          className={clsx(
            'absolute z-10 bottom-0 left-0 w-full h-48 bg-gradient-to-t from-white via-transparent to-transparent',
            {
              '-bottom-14 lg:-bottom-16': showAll,
            },
          )}
        />
      </div>
      <div
        className={clsx(
          'relative z-20 flex items-center justify-center bg-white w-full',
          {
            'mt-10 lg:mt-14': showAll,
          },
        )}
      >
        <Button
          variant="neutral"
          color="neutral"
          className="bg-gray-200 rounded-full p-2.5"
          type="button"
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
