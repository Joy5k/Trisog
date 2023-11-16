import React from 'react';

const Footer = () => {
    return (
        <div className='bg-red-500'>
            <footer className="footer p-10 bg-black text-white">
  <aside>
   <p className='font-bold text-2xl text-yellow-400'>Advancer</p>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <p className='text-xl font-bold'>Call Us: <span className='text-yellow-500'>(+880 016000000)</span></p>
                    <address>
                        <p>Love street,Muscan,</p>
                        <p>California</p>
                        <p>USA</p>
 </address>
                </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
    <header className="footer-title">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="email" placeholder="username@site.com" className="input input-bordered join-item text-black" /> 
        <button className="btn bg-[#F8D448] join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;