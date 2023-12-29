import { Typography } from '@mochi-ui/core'

export default function CTA() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5 lg:px-20">
      <div className="flex-col justify-center items-center gap-6 flex">
        <img className="w-24 h-24" src="images/neko-cup.png" alt="" />
        <div className="flex-col justify-start items-center gap-2 flex">
          <Typography className="text-center">
            From the artist at
            <img
              className="w-5 h-5 inline-block mx-1.5"
              src="images/consolelabs-logo.svg"
              alt=""
            />
            Console Labs, for the love of Neko cats! 🐈‍⬛🐾💖
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
