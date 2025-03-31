import React, { useState, useEffect, useRef } from "react";

export default function CompanyModal({ person, previous, next, onClose, onNext, onPrevious}) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  
  const modalContentRef = useRef(null);
  const slideWidth = window.innerWidth * 0.9; 
  
  const minSwipeDistance = 50;

  useEffect(() => {
   
    setSlideOffset(0);
    setCurrentX(0);
    setIsDragging(false);
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && previous) onPrevious();
      if (e.key === "ArrowRight" && next) onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [person, onClose, onPrevious, onNext, previous, next]);
  

  const handleButtonFocus = (e) => {
  
    e.stopPropagation();
  };
  
  const onTouchStart = (e) => {
    
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    if (!touchStart) return;
    
    setTouchEnd(e.targetTouches[0].clientX);
    
    const diff = touchStart - e.targetTouches[0].clientX;
    const newOffset = -diff;
    
    
    if ((diff > 0 && !next) || (diff < 0 && !previous)) {
      setSlideOffset(newOffset / 3); 
    } else {
      setSlideOffset(newOffset);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && next) {
      onNext();
    } else if (isRightSwipe && previous) {
      onPrevious();
    }
    
    setSlideOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  
  const onMouseDown = (e) => {
   
    if (e.target.closest('button') || e.target.closest('a')) {
      return;
    }
    
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    
    const diff = startX - e.clientX;
    setCurrentX(diff);
    
    
    if ((diff > 0 && !next) || (diff < 0 && !previous)) {
      setSlideOffset(-diff / 3); 
    } else {
      setSlideOffset(-diff);
    }
  };

  const onMouseUp = () => {
    if (!isDragging) return;
    
    const distance = currentX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && next) {
      onNext();
    } else if (isRightSwipe && previous) {
      onPrevious();
    }
    
    setIsDragging(false);
    setSlideOffset(0);
    setCurrentX(0);
  };

  const onMouseLeave = () => {
    if (isDragging) {
      onMouseUp();
    }
  };

  return (
    <div className="modal-wrapper">
      <div className="modal-header u-container">
        <div className="modal-header-left">
          <button 
            className="ap-btn-left" 
            onClick={(e) => {
              e.stopPropagation(); 
              if (previous) onPrevious();
            }}
            onFocus={handleButtonFocus}
            onMouseDown={(e) => e.stopPropagation()}
            disabled={!previous}
            style={{ 
              opacity: previous ? 1 : 0.5, 
              cursor: previous ? 'pointer' : 'default' 
            }}
          ></button>
          {previous && (
            <div className="modal-header-text">
              <span className="overline-xs-medium">Previous</span>
              <span className="body-sm-reg">{previous.name}</span>
            </div>
          )}
        </div>

        <button 
          className="modal-close-btn" 
          onClick={onClose}
          onMouseDown={(e) => e.stopPropagation()}
        >
          Close
        </button>

        <div className="modal-header-right">
          {next && (
            <div className="modal-header-text">
              <span className="overline-xs-medium">Next</span>
              <span className="body-sm-reg">{next.name}</span>
            </div>
          )}
          <button 
            className="ap-btn-right" 
            onClick={(e) => {
              e.stopPropagation(); 
              if (next) onNext();
            }}
            onFocus={handleButtonFocus}
            onMouseDown={(e) => e.stopPropagation()}
            disabled={!next}
            style={{ 
              opacity: next ? 1 : 0.5, 
              cursor: next ? 'pointer' : 'default' 
            }}
          ></button>
        </div>
      </div>

      <div 
        className="modal-carousel-container"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div 
          className={`modal-carousel-track ${isDragging ? 'dragging' : ''}`} 
          ref={modalContentRef}
          style={{ 
            transform: `translateX(${slideOffset}px)`,
            transition: !isDragging && !touchEnd ? 'transform 0.3s ease' : 'none'
          }}
        >
          
          <div className="modal-slide">
            <div className="modal-content u-container">
              <div className="modal-image-container">
                <img src={person.cardImage} alt={person.name} />
              </div>
              
              <div className="modal-inner-text">
                <div className="modal-inner-top">
                  <h1 className="heading-2xl-book">{person.name}</h1>
                  <a 
                    className="linkedin-link" 
                    href={person.linkedin || "#"} 
                    target="_blank" 
                    rel="noreferrer"
                    aria-label="LinkedIn Profile"
                    onMouseDown={(e) => e.stopPropagation()}
                  >
                    in
                  </a>
                </div>
                <p className="body-lg-reg">{person.title}</p>
                <div className="modal-hr"></div>
                <p className="modal-p body-md-reg">{person.bio1 || "Biographical information not available."}</p>
                {person.bio2 && <p className="modal-p body-md-reg">{person.bio2}</p>}
              </div>
            </div>
          </div>
          
          
          {next && (
            <div className="modal-slide">
              <div className="modal-content u-container">
                <div className="modal-image-container">
                  <img src={next.cardImage} alt={next.name} />
                </div>
                <div className="modal-inner-text">
                  <div className="modal-inner-top">
                    <h1 className="heading-2xl-book">{next.name}</h1>
                    <a 
                      className="linkedin-link" 
                      href={next.linkedin || "#"} 
                      target="_blank" 
                      rel="noreferrer"
                      aria-label="LinkedIn Profile"
                      onMouseDown={(e) => e.stopPropagation()}
                    >
                      in
                    </a>
                  </div>
                  <p className="body-lg-reg">{next.title}</p>
                  <div className="modal-hr"></div>
                  <p className="modal-p body-md-reg">{next.bio1 || "Biographical information not available."}</p>
                  {next.bio2 && <p className="modal-p body-md-reg">{next.bio2}</p>}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}