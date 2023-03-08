import { Element } from '../../types/types';

type CalculatorProps = {
  elements: Element[]
}

function Calculator({ elements }: CalculatorProps): JSX.Element {

  return (
    <div className="calculator calculator__wrapper">
      {
        // eslint-disable-next-line array-callback-return
        elements.map((elem) => {
          switch (elem) {
            case Element.Display:
              return (
                <div className="calculator__display-container calculator__card" draggable={true}>
                  <div className="calculator__display">0</div>
                </div>
              );
            case Element.Operations:
              return (
                <div className="calculator__operation-list calculator__card">
                  <button className="calculator__button">/</button>
                  <button className="calculator__button">X</button>
                  <button className="calculator__button">-</button>
                  <button className="calculator__button">+</button>
                </div>
              );
            case Element.Digits:
              return (
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
              );
            case Element.Equal:
              return (
                <div className="calculator__card calculator__equal">
                  <button className="calculator__button">=</button>
                </div>
              );
          }
        })
      }
    </div>
  )
}

export default Calculator;