export interface Product {
  name: string
  image: string
  price: string
  description: string
  colors: Color[]
}

export interface Color {
  name: string
  color: string
}



export const ProductSummary = (props: Product) => {
  const { name, image, price, description, colors } = props

  console.log(name, image, price, description, colors)
  return (
    <div className="product-summary w-full max-w-[308px] flex-shrink-0 flex-grow-0 space-y-2 lg:w-1/5 lg:basis-1/5">
      
      <div className="prodcut-summary-media mb-2">
        <img src={image} alt="" className="product-summary-image" />
      </div>
      <div className="product-summary-info space-y-2 flex flex-col">
        <div className="product-summary-colors flex items-center gap-x-2">
          {colors.map(({name, color}: Color) => (
            <button className={`${color} text-[0px] w-[26px] h-[26px] rounded border hover:border-black`}>{name}</button>
          ))}
        </div>
        <span className="product-summary-price text-xl font-bold">{price}</span>
        <h3 className="product-summary-name">{name}</h3>
        <p className="product-summary-price text-xs w-3/4 text-[#9a9a9a]">{description}</p>
        <button className="w-full bg-[#faa500] text-white h-[35px] flex items-center justify-center rounded lg:max-w-[254px]">Adicionar</button>
      </div>
    </div>
  )
}


