export interface BenefitsItem {
  image: string
  title: string
  subtitle: string
}



const BenefitsItem = ({image, title, subtitle}:BenefitsItem) => {
  return (
    <div className="benefits-item p-4 flex items-center gap-x-[22px] bg-[#efefef] rounded w-[298px] flex-grow-0 flex-shrink-0">
        <div className="benefits-media">
          <img src={`/maeztra-teste/${image}`} alt="" className="benefits-image" />
        </div>
        <div className="benefits-info flex flex-col">
          <span className="benefits-title text-sm font-bold">{title}</span>
          <span className="benefits-subtile text-xs">{subtitle}</span>
        </div>
      </div>
  )
}


export const Benefits = () => {

  const benefitsArray = [
    {
      image: 'world.svg',
      title: 'Produtos Importados',
      subtitle: 'Produto de Alta Qualidade'
    },
    {
      image: 'stock.svg',
      title: 'Estoque no Brazil',
      subtitle: 'Produtos mais perto de você!'
    },
    {
      image: 'change.svg',
      title: 'Trocas Garantidas',
      subtitle: 'Trocas em até 48 horas, vejas as regras'
    },
    {
      image: 'discount.svg',
      title: 'Ganhe 5%',
      subtitle: 'Pagando à vista no Cartão'
    },
    {
      image: 'truck.svg',
      title: 'Frete Grátis',
      subtitle: 'Em compras acima de R$ 499,00'
    }
  ]


  return (
    <div className="benefits flex items-center gap-x-[15px] overflow-x-scroll lg:overflow-visible pl-7 lg:pl-0 no-scrollbar">
      {benefitsArray.map((benefits) => (<BenefitsItem {...benefits} />))}
    </div>
  )
}