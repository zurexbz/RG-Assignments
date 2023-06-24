function shortName(name, options){
    let first = ''
    let last = ''
    let point = false

    for(let i=0; i<name.length; i++){
        if(name[i]=== " "){
            point = true
        }
        if(name[i]!== " " && point === false){
            first += name[i]
        } else if(name[i]!== " " && point === true){
            last += name[i]
        }
    }
    if(last.length === 0){
        return `Invalid Name`
    } else if(options === "first"){
        return `${first[0]}. ${last}`
    } else if(options === "last"){
        return `${first} ${last[0]}.`
    } else if(options === "full"){
        return name
    }
}

module.exports = shortName