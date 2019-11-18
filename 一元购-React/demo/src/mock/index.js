import Mock from 'mockjs';

let userArr = [
    {
        user: "940305858@qq.com",
        pwd: "zyh200405",
        token: "zhaoyuhang"
    }
]

Mock.mock('/login', 'post', function (options) {
    let { user, pwd } = JSON.parse(options.body)
    let index = userArr.findIndex(item => item.user === user);
    if (index !== -1) {
        if (userArr[index].pwd === pwd) {
            return {
                code: 0,
                token: userArr[index].token
            }
        } else {
            return {
                code: 1,
                message: "密码错误,请重新输入"
            }
        }
    } else {
        return {
            code: 1,
            message: "该用户名不存在,请注册后再试"
        }
    }
})

let banner = [
    {
        url: "./images/banner1.jpg"
    },
    {
        url: "./images/banner2.jpg"
    },
    {
        url: "./images/banner3.jpg"
    }
]

Mock.mock('/home', 'get', {
    banner
})

let list = [
    {
        btns: [
            {
                title: "全部"
            },
            {
                title: "十元专区"
            },
            {
                title: "潮流数码"
            },
            {
                title: "家用电器"
            }
        ],
        data: [
            {
                id: 1,
                style: "十元专区",
                imgUrl: "./images/07.jpg",
                title: "标题商品1",
                price: 28,
                collectflag: false
            },
            {
                id: 2,
                style: "潮流数码",
                imgUrl: "./images/06.jpg",
                title: "标题商品2",
                price: 288,
                collectflag: false
            },
            {
                id: 3,
                style: "潮流数码",
                imgUrl: "./images/05.jpg",
                title: "标题商品3",
                price: 128,
                collectflag: false
            },
            {
                id: 4,
                style: "家用电器",
                imgUrl: "./images/04.jpg",
                title: "标题商品4",
                price: 58,
                collectflag: false
            },
            {
                id: 5,
                style: "家用电器",
                imgUrl: "./images/03.jpg",
                title: "标题商品5",
                price: 98,
                collectflag: false
            },
            {
                id: 6,
                style: "十元专区",
                imgUrl: "./images/02.jpg",
                title: "标题商品6",
                price: 66,
                collectflag: false
            },
            {
                id: 7,
                style: "十元专区",
                imgUrl: "./images/01.jpg",
                title: "标题商品7",
                price: 199,
                collectflag: false
            }
        ]
    }
];

Mock.mock('/list', "post",function(options){
    let {title} = JSON.parse(options.body)

    if (title === "全部"){
        return list;
    } else if (title === "十元专区"){
        return list[0].data.filter(item=>item.style===title)
    } else if (title === "潮流数码") {
        return list[0].data.filter(item => item.style === title)
    } else if (title === "家用电器") {
        return list[0].data.filter(item => item.style === title)
    }
})