import { useState } from 'react';
import { Element, Board } from '../../types/types';



function Main() {

  const [checked, setChecked] = useState(true)

  const [boards, setBoards] = useState([
    {
      name: Board.Left, 
      items: [Element.Display, Element.Operations, Element.Digits, Element.Equal]
    },
    {
      name: Board.Right,
      items: []
    }
  ]);

  const handleChecked = () => {
    setChecked(!checked);
  }

  return (
    <div className="constructor">
      <div className="wrapper">
        <div className="constructor__toggle">
          <fieldset className="toggle">  
            <input className="toggle__first" type="radio" id="toggle-off" name="toggle" value=""  onChange={handleChecked} />
            <label htmlFor="toggle-off">
              <div className="toggle__container">
                <svg className="icon-mode" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.7678 11.7678C12.2366 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.2366 8.70107 11.7678 8.23223C11.2989 7.76339 10.663 7.5 10 7.5C9.33696 7.5 8.70107 7.76339 8.23223 8.23223C7.76339 8.70107 7.5 9.33696 7.5 10C7.5 10.663 7.76339 11.2989 8.23223 11.7678C8.70107 12.2366 9.33696 12.5 10 12.5C10.663 12.5 11.2989 12.2366 11.7678 11.7678Z" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M2.04834 9.99999C3.11001 6.61916 6.26917 4.16666 10 4.16666C13.7317 4.16666 16.89 6.61916 17.9517 9.99999C16.89 13.3808 13.7317 15.8333 10 15.8333C6.26917 15.8333 3.11001 13.3808 2.04834 9.99999Z" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="toggle__text">Runtime</span>
              </div>
            </label>
            
            <input className="toggle__second" type="radio" id="toggle-on" name="toggle" value="" defaultChecked onChange={handleChecked}/>
            <label htmlFor="toggle-on">
              <div className="toggle__container">
                <svg className="icon-mode"  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 13.3333L4.16666 10L7.5 6.66668M12.5 6.66668L15.8333 10L12.5 13.3333" stroke="#4D5562" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="toggle__text">Constructor</span>
              </div>
            </label>
          </fieldset> 
        </div>
        <div className="constructor__wrapper">
          {/* {
            boards.map((board) => {
              if (board.items.length > 0) {
                return (<div className='calculator calculator__wrapper'>
                  {

                  }
                </div>)
              } else {
                return '';
              }              
            })
          } */}


          <div className="calculator calculator__wrapper">
            <div className="calculator__display-container calculator__card" draggable={true}>
              <div className="calculator__display">0</div>
            </div>
            <div className="calculator__operation-list calculator__card">
              <button className="calculator__button">/</button>
              <button className="calculator__button">X</button>
              <button className="calculator__button">-</button>
              <button className="calculator__button">+</button>
            </div>
            <div className="calculator__digits calculator__card">
              <button className="calculator__button">7</button>
              <button className="calculator__button">8</button>
              <button className="calculator__button">9</button>
              <button className="calculator__button">4</button>
              <button className="calculator__button">5</button>
              <button className="calculator__button">6</button>
              <button className="calculator__button">1</button>
              <button className="calculator__button">2</button>
              <button className="calculator__button">3</button>
              <button className="calculator__button">0</button>
              <button className="calculator__button">,</button>
            </div>
            <div className="calculator__card calculator__equal">
              <button className="calculator__button">=</button>
            </div>
          </div>
          <div className="constructor__drag-area">
            <svg className="constructor__drag-here-img" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.7778 1V5.44444" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M21 3.22222L16.5556 3.22222" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M12.3889 3.22222H5C2.79086 3.22222 1 5.01309 1 7.22223V16.2778M18.7778 9.61111V17C18.7778 19.2091 16.9869 21 14.7778 21H5C2.79086 21 1 19.2091 1 17V16.2778M1 16.2778L4.83824 12.4395C6.40034 10.8774 8.93298 10.8774 10.4951 12.4395C11.8961 13.8406 13.5664 15.5108 14.8889 16.8333" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <path d="M18.7778 14.6111L18.2729 14.1062C16.7108 12.5441 14.1781 12.5441 12.616 14.1062L12.3889 14.3333" stroke="black" stroke-width="2" stroke-linecap="round"/>
              <circle cx="12.1111" cy="7.66667" r="0.555556" fill="black"/>
            </svg>
            <div className="constructor__drag-area-title">Перетащите сюда</div>
            <div className="constructor__drag-area-title-sec">любой элемент <br></br> из левой панели</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
