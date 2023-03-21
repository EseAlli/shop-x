import { FC, ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title: string;
};

const Modal: FC<ModalProps> = ({ isOpen, children, onClose, title }) => {
  const handleOpen = () => {
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    isOpen ? handleOpen() : handleClose();
  }, [isOpen]);

  const handleClose = () => {
    document.body.style.overflow = "";
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">{children}</div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-40 bg-black opacity-50"
            onClick={handleClose}
          ></div>
        </div>
      )}
    </>
  );
};

export default Modal;
