export interface BrandItem {
  image: string
}



const BrandItem = ({image}:BrandItem) => {
  return (
    <div className="brans-item flex items-center gap-x-[22px] bg-white rounded w-[298px] flex-grow-0 flex-shrink-0">
        <a className="brans-media">
          <img src={image} alt="" className="brans-image" />
        </a>
      </div>
  )
}


export const Brands = () => {

  const brandsArray = [
    {
      image: '/maeztra-teste/comma.svg'
    },
    {
      image: '/maeztra-teste/melissa.svg'
    },
    {
      image: '/maeztra-teste/forever.svg'
    },
    {
      image: '/maeztra-teste/zara.svg'
    },
    {
      image: '/maeztra-teste/ann-taylor.svg'
    }
  ]


  return (
    <div className="brands flex items-center gap-x-[15px] overflow-x-scroll lg:overflow-visible pl-7 lg:pl-0 no-scrollbar">
      {brandsArray.map((brands) => (<BrandItem {...brands} />))}
    </div>
  )
}