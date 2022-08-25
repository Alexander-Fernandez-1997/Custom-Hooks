 <!-- const [pagination, setPagination] = useState(1); -->
 <!-- const itemXPage = 50;
  const p1 = new usePagination(arrayDeItems, itemXPage); -->

  <!-- {/* Pagination */}
        {arrayDeItems && p1.numOfPages > 1 && (
          <Paginations
            pagination={pagination}
            setPagination={setPagination}
            numberPages={p1.numOfPages}
          ></Paginations>
        )} -->

<!-- ------------------------------------------------------------------------------- -->

<!-- import React from "react";
import { range } from "../helpers/rangeHelper";

export const Paginations = ({ pagination, setPagination, numberPages }) => {
  const nextPag = (e) => {
    if (pagination < numberPages) {
      setPagination(pagination + 1);
    } else {
      setPagination((pagination = 1));
    }
  };

  const prevPag = (e) => {
    if (pagination > 1) {
      setPagination(pagination - 1);
    } else setPagination((pagination = numberPages));
  };

  const customPag = (i) => {
    setPagination(i);
  };

  return (
    <div className="d-flex gap-5 m-5 justify-content-center">
      <button className="btn btn-sm btn-outline-success" onClick={prevPag}>
        Anterior pagina
      </button>
      <div className="pagination">
        {range(numberPages).map((i) => (
          <button
            key={i + 1}
            className={pagination === (i + 1) ? "btn btn-sm btn-outline-success active" : "btn btn-sm btn-outline-success"}
            onClick={() => customPag(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button className="btn btn-sm btn-outline-success" onClick={nextPag}>
        Siguiente pagina
      </button>
    </div>
  );
}; -->
