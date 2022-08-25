export function usePagination(pageEleArr, numOfEleToDisplayPerPage) {
  this.pageEleArr = pageEleArr;
  this.numOfEleToDisplayPerPage = numOfEleToDisplayPerPage;
  this.elementCount = this.pageEleArr.length;
  this.numOfPages = Math.ceil(
    this.elementCount / this.numOfEleToDisplayPerPage
  );
  const pageElementsArr = function (arr, eleDispCount) {
    const arrLen = arr.length;
    const noOfPages = Math.ceil(arrLen / eleDispCount);
    let pageArr = [];
    let perPageArr = [];
    let index = 0;
    let condition = 0;
    let remainingEleInArr = 0;

    for (let i = 0; i < noOfPages; i++) {
      if (i === 0) {
        index = 0;
        condition = eleDispCount;
      }
      for (let j = index; j < condition; j++) {
        perPageArr.push(arr[j]);
      }
      pageArr.push(perPageArr);
      if (i === 0) {
        remainingEleInArr = arrLen - perPageArr.length;
      } else {
        remainingEleInArr = remainingEleInArr - perPageArr.length;
      }

      if (remainingEleInArr > 0) {
        if (remainingEleInArr > eleDispCount) {
          index = index + eleDispCount;
          condition = condition + eleDispCount;
        } else {
          index = index + perPageArr.length;
          condition = condition + remainingEleInArr;
        }
      }
      perPageArr = [];
    }
    return pageArr;
  };
  this.display = function (pageNo) {
    if (pageNo > this.numOfPages || pageNo <= 0) {
      return -1;
    } else {
      // console.log("Inside else loop in display method");
      // console.log(
      //   pageElementsArr(this.pageEleArr, this.numOfEleToDisplayPerPage)
      // );
      // console.log(
      //   pageElementsArr(this.pageEleArr, this.numOfEleToDisplayPerPage)[
      //     pageNo - 1
      //   ]
      // );
      return pageElementsArr(this.pageEleArr, this.numOfEleToDisplayPerPage)[
        pageNo - 1
      ];
    }
  };
}

// Ejemplo de como llamar a la funcion:
// const p1 = new Pagination(filteredDespachar, 50);
// console.log("y", p1.elementCount);
// console.log("array", p1.pageEleArr);
// console.log("x", p1.numOfPages);
// console.log("w", p1.numOfEleToDisplayPerPage);
// console.log("total12", p1.display(12));

// console.log("primer array", p1.display(1));
// console.log("segundo array", p1.display(2));
