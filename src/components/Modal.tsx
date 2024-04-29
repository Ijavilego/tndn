import "./../index.css";
type ModalProps = {
  setIsOpen: any;
};

const Modal = ({ setIsOpen }: ModalProps) => {
  let data = localStorage.getItem("product");
  const localData = data ? JSON.parse(data) : {};

  console.log("localData", localData);

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        {localData ? (
          <div className="modal">
            <div className="modalHeader">
              <h3 className="text-black fs-4 fw-bold text-uppercase text-center">
                {localData.name}
              </h3>
            </div>
            <div className="container-xl ">
              <div className="col-4">
                <img
                  className="img-fluid"
                  src={localData.imageUrl}
                  alt="imagen producto"
                />
              </div>
              <div className="col-8">
                <p className="text-black">{localData.description}</p>
                <p className="fw-black text-primary fs-3">${localData.price}</p>
                <button
                  type="button"
                  className="btn btn-dark w-50"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal">
            <div className="modalHeader">
              <h5 className="heading">Sin datos</h5>
            </div>
            <button className="closeBtn" onClick={() => setIsOpen(false)}>
              <div className="modalHeader">
                <h5 className="heading">ciiiieererrraaaaa</h5>
              </div>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
