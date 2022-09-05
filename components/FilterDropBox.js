import React, { useState } from 'react';

export default function FilterDropBox({ open = +false , title, children }) {

  const [isOpen, setOpen] = useState(open), handleOpen = () => { isOpen? setOpen(+false): setOpen(+true); };
  
  return children? (
    <div className="filter-drop-option-box ">
      <div className="filter-drop-option-header">
        <p>{title}</p>
        <div className="filter-drop-option-arrow" onClick={handleOpen}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.58782 0.745553C0.912214 0.42116 1.43807 0.420873 1.76282 0.744913L4.65262 3.62841C4.84459 3.81997 5.15541 3.81997 5.34738 3.62841L8.23718 0.744914C8.56193 0.420874 9.08779 0.42116 9.41218 0.745553C9.73682 1.0702 9.73682 1.59655 9.41218 1.92119L5.83333 5.50004C5.3731 5.96028 4.6269 5.96028 4.16667 5.50004L0.58782 1.92119C0.263176 1.59655 0.263176 1.0702 0.58782 0.745553Z" fill="#28293D"/>
          </svg>
        </div>
      </div>
      <div className={`filter-drop-option-content ${isOpen? "max-h-[2000px] pt-[18px]": "max-h-[0px] pt-[0]"}`}>
        {children}
      </div>
    </div>
  ) : null;
}
