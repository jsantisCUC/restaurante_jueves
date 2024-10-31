export const MenuCrear = () => {
  return (
    <>
    <div className="pt-5 d-flex justify-content-center" >
      <div className="col-md-8 " >
      <form className="row g-3 needs-validation">

        <div className="col-md-6">
          <label htmlFor="nomb" className="form-label">
            Plato fuerte
          </label>
          <input
            type="text"
            className="form-control border-info"
            id="nomb"
            name="nomb"
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="acomp" className="form-label">
            Acompañamiento
          </label>
          <input
            type="text"
            className="form-control border-info"
            id="acomp"
            name="acomp"
            required
          />
          
        </div>

        

        <div className="col-md-6">
          <label htmlFor="prec" className="form-label">
            Precio
          </label>
          <input
            type="text"
            className="form-control border-info"
            id="prec"
            name="prec"
            required
          />
          
        </div>

        <div className="col-md-6">
          <label htmlFor="reg" className="form-label">
            Región
          </label>
          <select className="form-select  border-info" id="reg" name="reg" required>
            <option selected disabled value="">
              Seleccione una región
            </option>
            <option>Andina</option>
            <option>Caribe</option>
            <option>Paisa</option>
            <option>Santander</option>
            <option>Sabana</option>
          </select>
          <div className="invalid-feedback">Please select a valid state.</div>
        </div>

        

        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Registrar plato
          </button>
        </div>

      </form>
      </div>
    </div>
    </>
  );
};
