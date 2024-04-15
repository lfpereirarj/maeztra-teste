import * as Dialog from '@radix-ui/react-dialog';
import { Newsletter } from '.';

const ModalNewsletter = () => {
  return (
    <Dialog.Root defaultOpen={true}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed top-0 bottom-0 left-0 right-0 bg-black/60" />
        <Dialog.Content className='fixed top-[106px] lg:top-1/2 left-1/2 bg-white z-10 -translate-x-1/2 lg:-translate-y-1/2 w-full max-w-[85vw] lg:max-w-[851px] lg:flex lg:items-center'>
          
          <Dialog.Close asChild>
            <button className='absolute text-white right-0 -top-4 uppercase text-xs'>Fechar</button>
          </Dialog.Close>
          <img className='hidden lg:block h-full' src="/maeztra-teste/bg-newsletter.jpg" alt="" />
          <div className='mt-5 flex flex-col items-center [&_form]:flex-col [&_.newsletter]:w-full w-full p-5 h-full justify-center lg:max-w-80 lg:p-0  lg:mt-0 lg:mx-auto [&_.newsletter_input]:h-10 [&_.newsletter_input]:border-[#bebebe]'>
          <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.66667 0.943359H22.3333C23.6167 0.943359 24.6667 2.05563 24.6667 3.41506V18.2453C24.6667 19.6047 23.6167 20.717 22.3333 20.717H3.66667C2.38334 20.717 1.33334 19.6047 1.33334 18.2453V3.41506C1.33334 2.05563 2.38334 0.943359 3.66667 0.943359Z" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M24.6667 3.41504L13 12.066L1.33334 3.41504" stroke="#231F20" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <span className='uppercase text-xs text-[#464b54] mt-6'>Bem Vindo à MAEZTRA</span>

            <span className='text-center text-[#787d83] mt-4 mb-8'>Receba em Primeira mão <br/> <strong>desconto e ofertas exclusivas</strong></span>

            <Newsletter>
            <button className="bg-[#faa500] text-white rounded-[10px] text-xs font-bold h-10 px-5 border-2 border-[#faa500] flex items-center justify-center w-full uppercase gap-x-2 mt-3 mb-2">Enviar <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3125 0.664062C12.1094 0.195312 13.1172 0.875 12.9766 1.8125L11.5938 10.8828C11.5234 11.2344 11.3359 11.5156 11.0312 11.7031C10.8438 11.7969 10.6562 11.8438 10.4688 11.8438C10.3281 11.8438 10.1875 11.8203 10.0469 11.75L7.42188 10.6719L6.39062 12.0547C5.75781 12.9219 4.375 12.4766 4.375 11.375V9.40625L1.67969 8.30469C0.8125 7.95312 0.742188 6.75781 1.5625 6.28906L11.3125 0.664062ZM5.5 11.375L6.34375 10.2266L5.5 9.875V11.375ZM10.4688 10.7188L11.875 1.625L2.125 7.25L4.63281 8.30469L9.60156 3.99219C9.92969 3.6875 10.3984 4.10938 10.1641 4.48438L6.85938 9.21875L10.4688 10.7188Z" fill="white"/>
</svg>
</button>
            </Newsletter>

          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default ModalNewsletter
