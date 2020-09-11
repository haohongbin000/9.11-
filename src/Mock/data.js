import Mock from 'mockjs'

Mock.mock("/api/list","get",{
    "list|30":[{
        img:"@image(100x100,@color)"
    }]
})