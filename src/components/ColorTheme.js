import React from 'react';

const ColorTheme = ( { setColorTheme, colorTheme }) => {


  const handleClick = (theme) => {
    setColorTheme(theme);
    localStorage.setItem('theme-color', theme);
  }

  return(
    <div className="theme-options">
        <div
          onClick={() => {handleClick('theme-white')}}
          id="theme-white"
          className={`${colorTheme === 'theme-white' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-blue')}}
          id="theme-blue"
          className={`${colorTheme === 'theme-blue' ? 'active' : ''}`}

        />
        <div
          onClick={() => {handleClick('theme-orange')}}
          id="theme-orange"
          className={`${colorTheme === 'theme-orange' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-red')}}
          id="theme-red"
          className={`${colorTheme === 'theme-red' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-green')}}
          id="theme-green"
          className={`${colorTheme === 'theme-green' ? 'active' : ''}`}
        />
        <div
          onClick={() => {handleClick('theme-black')}}
          id="theme-black"
          className={`${colorTheme === 'theme-black' ? 'active' : ''}`}
        />
      </div>
  );
};

export default ColorTheme;
