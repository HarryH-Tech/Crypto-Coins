import { useState } from "react";
import "../styles/Pagination.scss";

function Pagination({ data, RenderComponent, pageLimit, dataLimit }: any) {
  const [currentPage, setCurrentPage] = useState(1);

  // 2 variables below used to map through and render data at the correct rate
  const startIndex = currentPage * dataLimit - dataLimit;
  const endIndex = startIndex + dataLimit;

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event: any) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
  };

  return (
    <>
      <div>
        <table
          summary="Information about the top 20 most valuable cryptos"
          id="all-coins-table"
        >
          <caption>
            All prices below are in British Pounds with the coins listed by
            market cap in descending order.
          </caption>

          <div className="dataContainer">
            <thead>
              <tr>
                <th>Name</th>
                <th>All Time High</th>
                <th>Current Price</th>
                <th>
                  Max Supply <br />
                  (if applicable)
                </th>
                <th>Market Cap</th>
                <th>Fully Diluted Valuation</th>
              </tr>
            </thead>
            {/* show the cryptos and their corresponding
             info, 10 at a time */}
            {data &&
              data
                .slice(startIndex, endIndex)
                .map((d: any, idx: any) => (
                  <RenderComponent key={idx} data={d} />
                ))}
          </div>
        </table>
        <br />

        <div className="pagination-number-button-container">
          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`${
                currentPage === item ? "active" : ""
              } number pagination-number-button`}
            ></button>
          ))}
        </div>

        <div className="pagination-container">
          <button
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className="pagination-direction-button"
          >
            &#8592;
          </button>

          <button
            onClick={goToNextPage}
            disabled={currentPage === 5}
            className="pagination-direction-button"
          >
            &#8594;
          </button>
        </div>
      </div>
    </>
  );
}

export default Pagination;
