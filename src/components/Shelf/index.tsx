import { ProductSummary } from "../ProductSummary"
import useEmblaCarousel from 'embla-carousel-react'
import { PrevButton, NextButton, usePrevNextButtons } from "./shelf-arrow-buttons"

export const Shelf = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const productArray = [
    {
      name: 'Faux Suede Mini Skirt',
      image: '/maeztra-teste/Produto01.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
        {
          name: 'azul',
          color: 'bg-[#DEAC71]'
        },
        {
          name: 'azul',
          color: 'bg-[#D37164]'
        },
        {
          name: 'azul',
          color: 'bg-[#6497D3]'
        },{
          name: 'azul',
          color: 'bg-[#3C3B79]'
        }
       ]
    },
    {
      name: 'Ruched Rose Print Mini Skirt',
      image: '/maeztra-teste/Produto03.jpg',
      price: 'R$ 320,00',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      colors: [
      {
        name: 'azul',
        color: 'bg-[#1c1a19]'
      },
      {
        name: 'azul',
        color: 'bg-[#cfc9b0]'
      },
      {
        name: 'azul',
        color: 'bg-[#d84e4b]'
      },{
        name: 'azul',
        color: 'bg-[#eae9e5]'
      }
     ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      image: '/maeztra-teste/Produto01.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
        {
          name: 'azul',
          color: 'bg-[#DEAC71]'
        },
        {
          name: 'azul',
          color: 'bg-[#D37164]'
        },
        {
          name: 'azul',
          color: 'bg-[#6497D3]'
        },{
          name: 'azul',
          color: 'bg-[#3C3B79]'
        }
       ]
    },
    {
      name: 'Ruched Rose Print Mini Skirt',
      image: '/maeztra-teste/Produto03.jpg',
      price: 'R$ 320,00',
      description: 'A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.',
      colors: [
        {
          name: 'azul',
          color: 'bg-[#1c1a19]'
        },
        {
          name: 'azul',
          color: 'bg-[#cfc9b0]'
        },
        {
          name: 'azul',
          color: 'bg-[#d84e4b]'
        },{
          name: 'azul',
          color: 'bg-[#eae9e5]'
        }
       ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      image: '/maeztra-teste/Produto01.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
        {
          name: 'azul',
          color: 'bg-[#DEAC71]'
        },
        {
          name: 'azul',
          color: 'bg-[#D37164]'
        },
        {
          name: 'azul',
          color: 'bg-[#6497D3]'
        },{
          name: 'azul',
          color: 'bg-[#3C3B79]'
        }
       ]
    }
  ]
  return (
    <div className="embla overflow-hidden pl-4 lg:pl-0 relative" ref={emblaRef}>
      <div className="embla__container flex gap-x-4">
          { productArray.map((product) => <ProductSummary {...product} />)}
      </div>
      <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
      <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
    </div>
  )
}
