import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from "./slider-arrow-buttons"

export const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla overflow-hidden relative" ref={emblaRef}>
      <div className="embla__container flex">
        { [1,2,3].map(() => (<div className="embla__slide flex-shrink-0 flex-grow-0 basis-full">
          <picture>
            <source 
              srcSet="/Fullbanner.jpg"
              media="(min-width: 1200px)"
            />
            <img src="/Fullbanner-mobile.jpg" alt="" className="infocard-image w-full h-auto" />
          </picture>
        </div>))}
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  )
}