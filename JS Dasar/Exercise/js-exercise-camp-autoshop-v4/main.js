function convertItems(items) {
    let hasil = []

    items.forEach((item) => {
        hasil.push(item.split("|"))
    });
    return hasil
}

function filterItems(items) {
    let hasil = []

    items.forEach((item) => {
        if(item.length > 1){
            item[1] = parseInt(item[1])
            hasil.push(item)
        }
    });
    return hasil
}

function generateSpareParts(items) {
    let spareParts = items.map((item) => {
        let obj = {}
        obj.name = item[0]
        obj.price = item[1]
        obj.category = item[2]
        return obj
    })
    return spareParts
}

function itemsStatistics(items) {
    let hasil = {}

    items.forEach((item) => {
        if(hasil[item[2]] === undefined){
            hasil[item[2]] = 0
        }
        hasil[item[2]]++
    })
    return hasil
}

function generateItemsData(items) {
    let hasil = {}
    let convertedItems = convertItems(items)
    let filteredItems = filterItems(convertedItems)
    let spareParts = generateSpareParts(filteredItems)
    let statistics = itemsStatistics(filteredItems)

    hasil = {
        spare_parts: spareParts,
        statistics
    }
    return hasil
}

const items = [
    "Spakbor Gordon|150000|variation",
    "Head Lamp",
    "USD KX150|8500000|bodyParts",
    "Handle Expedition|275000|variation",
    "Karet Body",
    "Body set KTM|1899950|bodyParts",
    "Jok Gordon|250000|variation",
    "Behel Bodyset Gordon",
    "CDI BRT KLX|625000|electricity",
    "Cover jok KLX|185000|variation",
]

console.log(generateItemsData(items));

module.exports = {
    convertItems,
    filterItems,
    generateSpareParts,
    itemsStatistics,
    generateItemsData
}