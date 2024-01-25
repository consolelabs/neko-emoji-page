import { Typography } from '@mochi-ui/core'

export default function CTA() {
  return (
    <div className="py-20 landing-container">
      <div className="flex flex-col gap-6 justify-center items-center">
        <video
          className="object-contain w-24 h-24"
          controls={false}
          autoPlay
          loop
          muted
        >
          <source src="images/neko-sticker/Cup.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-2 justify-start items-center">
          <Typography className="text-center">
            From the artist at
            <img
              className="inline-block mx-1.5 w-5 h-5"
              src="images/consolelabs-logo.svg"
              alt=""
            />
            Console Labs, for the love of Neko 🐈‍⬛🐾💖
          </Typography>
          <div className="text-center">
            <Typography
              level="p5"
              color="textSecondary"
              className="leading-tight"
            >
              If you love Cyber Neko and like this project, contact via{' '}
              <a href="mailto:gm@console.so" className="underline">
                gm@console.so
              </a>{' '}
              to share your ideas with us!{' '}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}
