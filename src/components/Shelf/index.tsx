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
      image: '/Produto01.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },{
        name: 'azul',
        color: ''
      }
     ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      image: '/Produto03.jpg',
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
      name: 'Faux Suede Mini Skirt',
      image: '/Produto01.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },{
        name: 'azul',
        color: ''
      }
     ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      image: '/Produto03.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },{
        name: 'azul',
        color: ''
      }
     ]
    },
    {
      name: 'Faux Suede Mini Skirt',
      image: '/Produto01.jpg',
      price: 'R$ 500,00',
      description: 'A faux suede mini skirt featuring exposed button-front closures and panel seam construction.',
      colors: [
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },
      {
        name: 'azul',
        color: ''
      },{
        name: 'azul',
        color: ''
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
