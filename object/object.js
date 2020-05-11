const fitBitData={
    totalsteps:35678,
    totalmiles:217,
    workoutthisweek:'5 of 7',
    16:"sixteen"
};

console.log(fitBitData);
console.log(fitBitData.totalmiles);
console.log(fitBitData.workoutthisweek);
console.log(fitBitData[16]);
console.log(fitBitData['16']);

const palette={
    red:'#gh57d8s',
    blue:'#kdn76a',
    yellow:'#wecl87'
};

console.log(palette);
console.log(palette.red);
//console.log(palette[red]);  //it treat as a variable
console.log(palette['red']); 
