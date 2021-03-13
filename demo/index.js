const { start } = require("../out");

start({
    port: 5217,
    componentStation: "http://127.0.0.1:6737",
    imageHost: "192.168.2.94:2880/image",
    db: {
        type: "mysql", username: "root", password: "81263", name: "taro-builder",
        database: "taro-builder", entities: ["../out/entities.js"],
        synchronize: true,
        host: "192.168.2.94", port: 43306
    },
    menuItems: [
        {
            id: "AE3789A2-0CF0-4D81-A7C0-E2C9324A1DDD", name: "页面列表", path: "#page-list",
            children: [
                { id: "3CE34AB9-7814-4FE5-85E2-ABA6AAF9C1FD", name: "页面编辑", path: "#page-edit", hidden: true }
            ]
        },
        {
            id: "7B13EC50-A398-4379-AED5-6AB3263EDB75", name: "主题", path: "#theme-list",
        }
        // { id: "811A30E2-A04D-44F7-BA18-959698DBCA47", name: "PC 页面", path: "#pc-page-edit" },
        // { id: "5F4A69CA-6D36-40C7-9175-EC9D9B5E0EB2", name: "首页", path: "#pc-page-edit?name=home" },
        // { id: "B3A45E5B-43A8-4A50-8196-5305A820CAA8", name: "商品列表", path: "#pc-page-edit?name=product-list" },
        // { id: "B3A45E5B-43A8-4A50-8196-5305A820CAA9", name: "商品详情", path: "#pc-page-edit?name=product" },
        // { id: "494B35BB-FA79-459E-8F27-45B2DAB8F53D", name: "购物车", path: "#pc-page-edit?name=shopping-cart" },
        // { id: "B57D6BE3-56C3-42BF-A784-0CE88B1DD22C", name: "模板页", path: "#pc-page-edit?name=template" },
        // { id: "07FC8953-9D4F-417D-B3C9-3861C4327CD5", name: "订单支付", path: "#pc-page-edit?name=checkouts" },
        // { id: "53813E5B-A7C4-497A-B010-5455E847FB12", name: "订单列表", path: "#pc-page-edit?name=order-list" },
        // { id: "72CBEFAC-5AFB-4E80-9ECD-26DCBC6B9F4B", name: "订单详情", path: "#pc-page-edit?name=order-detail" },
        // { id: "B9EB2282-EC49-402C-BFAB-DD4E7F4B8879", name: "登录", path: "#pc-page-edit?name=login" },
        // { id: "921B36A9-D464-4657-9F57-16B8214FA7F8", name: "注册", path: "#pc-page-edit?name=register" },
        // { id: "E0D3BC32-989E-4C22-9C75-523820C4ED76", name: "忘记密码", path: "#pc-page-edit?name=forget-password" },
        // { id: "99CEE6E1-7B84-4012-8828-A550CAD99411", name: "地址列表", path: "#pc-page-edit?name=receipt-list" },
        // { id: "52996F0A-C263-41BF-8891-6ED5421DB44F", name: "地址编辑", path: "#pc-page-edit?name=receipt-edit" },
        // { id: "8B2305F4-12CE-4F94-9F5B-3A6B87174377", name: "会员首页", path: "#pc-page-edit?name=account" },
        // { id: "15A092E7-841F-4CFA-9890-3CADE610B09B", name: "搜索", path: "#pc-page-edit?name=search" }

    ],
})