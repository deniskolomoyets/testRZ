const m = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
  ];
  const perfect = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function checkMatrix(matrix) {
    const start = matrix[0].length - 3;
    let result = [];
    for (let i = 0; i <= start; i++) {
      const section = matrix.flatMap((row) => row.slice(i, i + 3));
      if (perfect.every((element) => section.includes(element))) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return result;
  }
  
checkMatrix(m);