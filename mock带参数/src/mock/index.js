import Mock from 'mockjs';

Mock.mock("/goodList",'post',function(options){
    var {page,pageSize} = JSON.parse(options.body);
    
    return data.slice(pageSize * (page - 1), pageSize * page);
})

Mock.mock("/carsouel", 'post', function (options) {
    var { count } = JSON.parse(options.body);

    return {
        "status":200,
        "count":count,
        "list": data1.slice(0, count)
    }
})




let data1 = [
    {
        "img":"XXXX",
        "href":"http//xxxxxxxxxxx",
        "desc":"XXXX",
        "id":1
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 2
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 3
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 4
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 5
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 6
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 7
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 8
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 9
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 10
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 11
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 12
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 13
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 14
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 15
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 16
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 17
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 18
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 19
    },
    {
        "img": "XXXX",
        "href": "http//xxxxxxxxxxx",
        "desc": "XXXX",
        "id": 20
    }
]

let data = [
    {
        'id':0,
        'name':"0",
        'price':20,
        'pic':'img1.jpg'
    },
    {
        'id': 1,
        'name': "1",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 2,
        'name': "2",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 3,
        'name': "3",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 4,
        'name': "4",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 5,
        'name': "5",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 6,
        'name': "6",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 7,
        'name': "7",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 8,
        'name': "8",
        'price': 20,
        'pic': 'img1.jpg'
    },
    {
        'id': 9,
        'name': "9",
        'price': 20,
        'pic': 'img1.jpg'
    }
]