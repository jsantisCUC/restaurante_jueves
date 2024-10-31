export const MenuListar = () => {
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
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">1</td>
                <td className="text-center">Mojarra frita</td>
                <td className="text-center">Arroz de coco</td>
                <td className="text-center">$25000</td>
                <td className="text-center">Caribe</td>
              </tr>
              <tr>
                <td className="text-center">2</td>
                <td className="text-center">Mojarra frita</td>
                <td className="text-center">Arroz de coco</td>
                <td className="text-center">$25000</td>
                <td className="text-center">Caribe</td>
              </tr>
              <tr>
                <td className="text-center">3</td>
                <td className="text-center">Mojarra frita</td>
                <td className="text-center">Arroz de coco</td>
                <td className="text-center">$25000</td>
                <td className="text-center">Caribe</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
