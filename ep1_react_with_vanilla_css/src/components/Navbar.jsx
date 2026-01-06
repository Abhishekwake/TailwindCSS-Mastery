import React from 'react'

const Navbar = () => {
    const links = [
      {
        title: "Gudie",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
      {
        title: "Login",
        href: "#",
      },
    ];
  return (
    <div className='navbar-root'>
      <div className='logo'>FINTECH</div>
      <div className='links'>
          {links.map((link, idx)=>(
              <a className='link-items' kye={idx} href={link.href}>{link.title}</a>
          ))}
          <button className='btn'>Start Free Trial</button>
      </div>
    </div>
  )
}

export default Navbar
