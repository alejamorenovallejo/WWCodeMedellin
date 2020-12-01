/**
 * 
 * @param {*} array 
 * @param {*} number 
 */
y=7;
x=[1,9,2,8,3,7,4,6,7];

const linealSearch = (array, number) => {
    let resp = -1
    for(i=0;i<array.length;i++) {
        if(array[i] == number) {
            resp=i;
        }
    }

    return resp
}


console.log(linealSearch(x,y))