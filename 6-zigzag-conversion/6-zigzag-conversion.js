/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const inputStringList = s.split('');
    let lettersList = [...Array(numRows)].fill([]);
    let counter = numRows - 1;
    let result = '';
    while(inputStringList.length > 0) {
        lettersList = lettersList.map((row, index) => {
            if (counter === numRows - 1 || counter === index || counter === 0) row = [...row, inputStringList.shift()]
            else row = [...row, ''];
            return row;
        });
        counter--;
        if (counter === 0) counter = numRows - 1;
    }
    lettersList.map((row) => {
        result += row.join('');
    });
    return result;
};