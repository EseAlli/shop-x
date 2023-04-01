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
    onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none z-50">
              <div className="flex items-center justify-between p-5  rounded-t  w-[60%] ml-auto">
                <h3 className="text-lg font-semibold text-center">{title}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="border-b border-solid border-blueGray-200"></div>
              <div className="relative p-6 pt-1 flex-auto">{children}</div>
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
