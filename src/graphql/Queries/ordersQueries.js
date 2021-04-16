module.exports = `
    allOrders: [Orders]
    getOrder(id: String): Orders
    getOrdersByCatalogue(storeId: String): [Orders]
`