// code your solution here

function superbowlWin(record){
    const winningYear = record.find(record => record.result === "W");
    return winningYear ? winningYear.year : undefined;

}

const record = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
];

const winYear = superbowlWin(record);
console.log(winYear);

