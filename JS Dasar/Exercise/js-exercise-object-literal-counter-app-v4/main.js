function counterApp(arr) {
    let hasil = {}

    if(arr === undefined){
        return `Invalid input`
    } else if(arr.length === 0){
        return `Data not found`
    }

    for(let i=0; i<arr.length; i++){
        if(hasil[arr[i]] === undefined){
            hasil[arr[i]] = 1
        } else{
            hasil[arr[i]]++
        }
    }
    return hasil
}

console.log(counterApp(['Hikman', 'Naufal', 'Kanda', 'Arya', 'Kanda', 'Hikman', 'Naufal', 'Hikman', 'Kanda', 'Kanda']));
console.log(counterApp([5, 6, 7, 5, 5, 7, 6, 7, 7, 7, 5, 6]));
console.log(counterApp([]));
console.log(counterApp());

module.exports = counterApp
