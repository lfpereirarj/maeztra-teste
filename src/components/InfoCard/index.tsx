export const InforCard = () => {
  return (
    <div className="infocard lg:flex lg:items-center lg:gap-x-16">
      <div className="infocard-content mb-6 pr-20">
        <h2 className="infocard-title text-xl font-bold mb-4">Lorem Ipsum</h2>
        <p className="infocard-text text-sm">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
        </p>
      </div>
      <div className="infocard-media flex-shrink-0">
        <picture>
          <source 
            srcSet="/banner.jpg"
            media="(min-width: 1200px)"
          />
          <img src="/banner-mobile.jpg" alt="" className="infocard-image w-full h-auto" />
        </picture>
        
      </div>
    </div>
  )
}
