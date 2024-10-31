export const MenuAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-10 ">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center" style={{ width: "5%" }}>
                  No.
                </th>
                <th className="text-center" style={{ width: "30%" }}>
                  Plato Fuerte
                </th>
                <th className="text-center" style={{ width: "25%" }}>
                  Acompañamiento
                </th>
                <th className="text-center" style={{ width: "20%" }}>
                  Precio
                </th>
                <th className="text-center" style={{ width: "20%" }}>
                  Región
                </th>
                <th className="text-center" style={{ width: "25%" }}>
                  Opciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">Mojarra frita</td>
                <td className="text-center">Arroz de coco</td>
                <td className="text-center">$25000</td>
                <td className="text-center">Caribe</td>
                <td className="text-center">
                  <a href="/menactu/1">
                    <i className="fa-solid fa-pen-to-square" style={{color: "#0f9cdd"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#ff0000"}}></i>
                </td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center">Mojarra frita</td>
                <td className="text-center">Arroz de coco</td>
                <td className="text-center">$25000</td>
                <td className="text-center">Caribe</td>
                <td className="text-center">
                  <a href="/menactu/2">
                   <i className="fa-solid fa-pen-to-square" style={{color: "#0f9cdd"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#ff0000"}}></i>
                </td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td className="text-center">Mojarra frita</td>
                <td className="text-center">Arroz de coco</td>
                <td className="text-center">$25000</td>
                <td className="text-center">Caribe</td>
                <td className="text-center">
                  <a href="/menactu/3">
                   <i className="fa-solid fa-pen-to-square" style={{color: "#0f9cdd"}}></i>
                  </a>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{color: "#ff0000"}}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
