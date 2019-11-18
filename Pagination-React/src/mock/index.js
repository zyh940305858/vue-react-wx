import Mock from 'mockjs';

Mock.mock('/list', 'post', function (options) {
    let { page, pageSize } = JSON.parse(options.body);
    console.log(page)
    if (page === undefined) {  //判断如果是进入页面默认的第一次请求没有page就返回第一页的数据  
        return {
            "status": 200,
            "page": 1,
            "total": 20,
            "pageSize": pageSize,
            "list": Mock.mock({
                "list|20": [
                    {
                        "id|+1": 0,
                        "name": "@cname",
                        "age|18-25": 25,
                        "sex|1": ["男", "女"]
                    }
                ]
            }).list.slice(0, pageSize)
        }
    } else {    //如果是点击按钮请求  传入了page  就根据page返回数据
        return {
            "status": 200,
            "page": page,
            "total": 20,
            "pageSize": pageSize,
            "list": Mock.mock({
                "list|20": [
                    {
                        "id|+1": 0,
                        "name": "@cname",
                        "age|18-25": 25,
                        "sex|1": ["男", "女"]
                    }
                ]
            }).list.slice((page - 1) * pageSize, page * pageSize)
        }
    }

})