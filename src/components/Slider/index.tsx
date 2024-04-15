import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from "./slider-arrow-buttons"
import { DotButton, useDotButton } from './slider-dots-button'

export const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
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
              srcSet="/maeztra-teste/Fullbanner.jpg"
              media="(min-width: 1200px)"
            />
            <img src="/maeztra-teste/Fullbanner-mobile.jpg" alt="" className="infocard-image w-full h-auto" />
          </picture>
        </div>))}
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      <div className="embla__dots absolute bottom-0 z-10 left-1/2 -translate-x-1/2 gap-x-4 flex items-center mb-6">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot size-4 rounded-full border-2 border-[#faa500]'.concat(
                index === selectedIndex ? ' bg-[#faa500] embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
    </div>
  )
}