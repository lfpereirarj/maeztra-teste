import * as Accordion from '@radix-ui/react-accordion';

const menuListJson = [
  {
    title: 'Informações',
    children: [
      {
        text: 'Quem Somos'
      },
      {
        text: 'Prazo de Envio'
      },
      {
        text: 'Trocas e Devoluções'
      },
      {
        text: 'Promoções e Cupons'
      }
    ]
  },
  {
    title: 'Minha Conta',
    children: [
      {
        text: 'Minha Conta'
      },
      {
        text: 'Meus Pedidos'
      },
      {
        text: 'Cadastre-se'
      }
    ]
  },
  {
    title: 'Onde nos Encontrar',
    children: [
      {
        text: 'Lojas'
      },
      {
        text: 'Endereço'
      }
    ]
  }
]

export const MenuList = () => {
  return (
    <>
      <Accordion.Root className='lg:hidden space-y-4' type="single" defaultValue="item-0" collapsible>
        {menuListJson.map((item, index) => (
          <Accordion.Item value={`item-${index}`}>
            <Accordion.Header>
              <Accordion.Trigger className='w-full font-bold px-5 flex justify-between items-center'>{item.title} <span>+</span></Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className='px-5 mt-3'>
              <ul className='flex flex-col gap-y-3'>
                {item.children.map((child) => (
                  <li><a className="text-xs" href="">{child.text}</a></li>
                ))}
              </ul>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      <div className='hidden lg:flex justify-between max-w-[952px] mx-auto'>
        {menuListJson.map((item) => (
          <div>
            <h3 className='font-bold mb-5'>{item.title}</h3>
            <ul className='flex flex-col gap-y-3'>
              {item.children.map((child) => (
                <li><a className="text-xs" href="">{child.text}</a></li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>

    </>
    
  )
}