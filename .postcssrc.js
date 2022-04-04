// postcss配置文件
module.exports = {
  // 配置要使用的postcss插件
  plugins: {
    //   作用生成浏览器css样式前缀
    // autoprefixer: {
    //   // 配置要兼容到的环境信息
    // //   vuecli内部已经配置了,这里又配置了一次
    //   browsers: ["Android >= 4.0", "iOS >= 8"],
    // },

    // 配置postcss-pxtorem插件
    // 作用吧px转为rem
    'postcss-pxtorem': {
      // lib-flixble的rem适配暗杆:把一行分为10分,每份1/10
      // 所有rootvalue应该设置为你的设计稿的宽度的1/10
      //   设计稿是750 所以是75  但是vent建议设置为37.5  因为vant是基于37.5写的 必须设置为37.5 唯一的缺点使用设计稿的尺寸都必须除以二
      //   有没有更好的办法,如果是vant的样式就按照37.5转换,如果是自己的就按照75转换
      // 通过查阅文档我们发现这个rootvalue可以使用两种类型
      // Number
      // function 函数可以动态处理返回
      //   postcss-pxtore在处理每个css文件的时候都会来调用这个函数
      // 他会把被处理的css文件相关的信息通过参数传递给该函数
      //   rootValue: 37.5,
      rootValue ({ file }) {
        // console.log(obj);
        // console.log("处理了css文件" + file);
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // 配置要转换的css属性
      // *表示所有
      propList: ['*']
    }
  }
}
