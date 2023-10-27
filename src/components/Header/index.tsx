type HeaderProps = {
    title: string,
    subtitle: string
}

const Header = ({title, subtitle}: HeaderProps) => {
    return (
     <div className='text-center font-nunito bg-RamenShop'>
        <h1 className="text-6xl md:text-8xl mb-8 text-white">{title}</h1>
        <p className="text-4xl text-white">{subtitle}</p>
     </div>
    )
}

export default Header; 