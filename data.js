var faker = require("faker")
var data = [];
var categories = ['Watersports', 'Soccer', 'Chess', 'Running'];
faker.seed(100);
for (let i = 1; i <= 503; i++) {
    var category = faker.helpers.randomize(categories);
    data.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}:${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    });
}

module.exports = function () {
    return {
        categories,
        products: data,
        orders: []
    }
};


// module.exports = function(){
//     return{
//         categories:["Watersports", "Soccer", "Chess"],
//         products: [
//             {
//                 id: 1,
//                 name: "Kayak",
//                 category: "Watersports",
//                 description: "A boat for one person",
//                 price: 275
//             },
//             {
//                 id: 2,
//                 name: "Lifejacket",
//                 category: "Watersports",
//                 description: "Protective and fashionable",
//                 price: 48.95
//             },
//             {
//                 id: 3,
//                 name: "Soccer Ball",
//                 category: "Soccer",
//                 description: "FIFA-approved size and weight",
//                 price: 19.50
//             },
//             ],
//         orders:[],
//     };
// };

