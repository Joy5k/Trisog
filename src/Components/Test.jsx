import React, { useRef, useState } from 'react';

const VideoModal = () => {
  const videoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    videoRef.current.pause(); // Pause the video when closing the modal
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>

      {showModal && (
        <div className="video-modal-container">
          <div className="video-modal">
            <iframe
              ref={videoRef}
              src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
              width="460"
              height="345"
              title="Destination Video"
              allowFullScreen
            />
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
