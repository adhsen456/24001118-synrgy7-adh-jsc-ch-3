function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  // console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];
  
  // Tulis code-mu disini
  const pivot = result[0];
  const leftArr = [];
  const rightArr = [];

  if(result.length <= 1) return result;
  for (let i = 1; i < result.length; i++){
    result[i].year > pivot.year ? leftArr.push(result[i]) : rightArr.push(result[i]);
  };

  // Rubah code ini dengan array hasil sorting secara ascending
  return [...sortCarByYearDescendingly(leftArr), pivot, ...sortCarByYearDescendingly(rightArr)];
}
