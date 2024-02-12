import React, {forwardRef} from 'react';

const Footer = () => {
  return (
    <footer className= "footer border z-10 border-t-[#33353f] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-center sm:justify-between flex-wrap text-center sm:text-left">
        <span>PORTFOLIO</span>
        <p className="text-slate-600">
          
          © 2023 Putra Panca Prasetya. All Rights Reserved.
          
        </p>
      </div>
    </footer>
  )
}

export default forwardRef(Footer)
