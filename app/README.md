1）组件
1.1 Footer组件的显示与隐藏
Home、Search中显示
Login、Register时隐藏
1.2 路由元信息的使用 meta，路由需要配置对象

2）路由
2.1.非路由组件
componets(共用全局组件):Header Footer
2.2路由组件
    Home Search Login Register

3）路由传参
3.1：路由的跳转有几种方式：
声明式导航：router-link (to)
编程式导航：利用组件实例中的$router.push|replace方法
3.2：路由传参，参数有几种写法？
query(k):不属于路径中的一部分，类似于Ajax中的queryString /home?k=v&kv=
params(keyword):属于路径中的一部分，需要占位

4)路由传参的相关面试题
4.1：路由传递参数（对象写法）path是否可以结合params参数一起使用？
    不可以，只能使用name关键字进行配置
4.2：如何指定params参数可传可不传？
    a.配置路由时，占位了（:keyword）params参数，但是路由跳转时不传递会出现路径（URL）的问题
    b.解决方案：在占位后添加问号（:keyword?），正则表达式中的问号代表可有可无
4.3：params参数可传也可不传，但如果传递的是空串该如何解决？
    a.路径会出现问题
    b.解决方案：params:{keyword:''||undefined}
4.4：路由组件能否传递props数据？
    a.props:用于父子间通信
    b.三种形式
        i.布尔值：只能传递params参数
        ii.对象写法：props:{a:1,b:2}
        iii.函数写法（常用）：
            props:(route)=>{return{keyword:$route.params.keyword,k:$route.query.k}}
            可传递parmas、query参数

5）跨域问题 ---出现在三级联动菜单和后台交互中
5.1




