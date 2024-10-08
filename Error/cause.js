
var err = new Error("msg", {
    cause: {
        business: "订单",
        reason: "缺少订单号",
        item: {
            orderId: "",
            orderItems: [1001, 1002]
        }
    }
})
console.log("err.message:", err.message)
console.log("err.name:", err.name)
console.log("err.cause:", err.cause)



