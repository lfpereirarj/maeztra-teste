import { MenuList } from "../MenuList"
import { Newsletter } from "../Newsletter"

export const Footer = () => {
  return (
    <footer className="bg-[#fafafa]">
      <div className="footer-section pt-8 pb-6 border-y-2 border-[#efefef] bg-[#fafafa] lg:py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:max-w-[952px] lg:mx-auto lg:[&_.newsletter_form]:gap-x-0 lg:[&_.newsletter_input]:w-[500px] lg:[&_.newsletter_input]:h-[38px] lg:[&_.newsletter_input]:rounded-r-none lg:[&_.newsletter_input]:border-r-0">
            <span className="text-2xl font-bold block mb-3 lg:mb-0">Receba Nossa Newsletter</span>
            <Newsletter>
              <button className="bg-[#faa500] text-white rounded text-sm font-bold h-[26px] px-5 border-2 border-[#faa500] flex items-center justify-center lg:h-10 lg:px-10">Enviar</button>
            </Newsletter>
          </div>
          
        </div>
      </div>
      <div className="footer-section py-10">
        <div className="container mx-auto px-4">
          <MenuList />
        </div>
      </div>
      <div className="footer-section bg-[#353535] py-7">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-y-8">
            <ul className="flex items-center gap-x-[22px]">
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-x-[22px]">
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="https://via.placeholder.com/32" alt="" />
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-x-[22px]">              
              <li>
                <a className="text-[10px] font-open-sans text-white flex flex-col gap-y-2" href="">
                  Powered by
                  <img src="/vtex-logo.svg" alt="" />
                </a>
              </li>
              <li>
                <a className="text-[10px] font-open-sans text-white flex flex-col gap-y-2" href="">
                  Developed by
                  <img src="/logo-white.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>          
        </div>
        
      </div>
      
    </footer>
  )
}
