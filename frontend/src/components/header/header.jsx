import './header.css'

function Header() {
    return(
        <header className='main'>
            <nav>
                <a href='/'>Home</a>
                <a href='/services'>Services</a>
                <a href='/about'>About</a>
                <a href='/contact'>Contact-us</a>
            </nav>
        </header>
    )
}

export default Header