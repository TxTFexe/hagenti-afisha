import React from "react";

function Slider({ content }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slider = React.useRef();

  React.useEffect(() => {
    slider.current.style.transform = `translateX(${currentSlide}px)`;
  }, [currentSlide]);

  const handleClickRightArrow = () => {
    setCurrentSlide(() => {
      const newOffset = currentSlide - 1060;

      return newOffset == -3180 ? 0 : newOffset;
    });
  };

  const handleClickLeftArrow = () => {
    setCurrentSlide(() => {
      const newOffset = currentSlide + 1060;

      return newOffset == 1060 ? -2120 : newOffset;
    });
  };

  return (
    <>
      <div className="slider">
        <div className="slides_show">
          <div className="slides" ref={slider}>
            {
              content.map((obj) => (
                <img key={obj.id} src={obj.image}/>
              ))
            }
          </div>
        </div>
        <div className="slider_buttons">
          <button
            className="slider_button-left"
            onClick={() => handleClickLeftArrow()}
          >
            {"<"}
          </button>
          <button
            className="slider_button-right"
            onClick={() => handleClickRightArrow()}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Slider;
