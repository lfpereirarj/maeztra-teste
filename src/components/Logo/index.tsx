export const Logo = () => {
  return (
    <div className="logo ml-4 mr-auto lg:ml-0 lg:mr-[93px]">
      <a className="logo-link" href="">
        <picture>
          <source 
            srcSet="/logo.svg"
            media="(min-width: 1200px)"
          />
          <img src="/logo-mobile.svg" alt="" className="infocard-image w-full h-auto" width="147" />
        </picture>
      </a>
    </div>
  )
}
