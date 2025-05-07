<template>
  <SidebarInset>
    <Header
      :bread-list="[
        { name: '使用', url: 'javascript:;' },
        { name: '基础用法', url: '#/usage-normal' },
      ]"
    />
    <div
      class="h-[calc(100vh_-_64px)] flex flex-1 flex-col gap-4 p-4 overflow-auto"
    >
      <div class="flex">
        <div class="w-[70%] bg-muted/80 aspect-video rounded-xl">
          <article
            ref="articleRef"
            class="markdown-body entry-content container-lg"
            itemprop="text"
          >
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                !DOCTYPE文档声明的作用
              </h2>
            </div>
            <p dir="auto">H5不再是SGML的子集，所以H5不需要对DTD进行引用</p>
            <p dir="auto">H5的文档声明，声明当前网页是按照HTML5标准编写的</p>
            <p dir="auto">编写网页时一定要将H5的文档声明写在网页最上边</p>
            <p dir="auto">
              如果不写文档声明，有些浏览器会进入兼容模式（怪异模式）
            </p>
            <p dir="auto">
              标准模式下网页的编排和JS运作模式都是以该浏览器支持的最高标准运行
            </p>
            <p dir="auto">H5不再是SGML的子集，所以H5不需要对DTD进行引用</p>
            <p dir="auto">H5的文档声明，声明当前网页是按照HTML5标准编写的</p>
            <p dir="auto">编写网页时一定要将H5的文档声明写在网页最上边</p>
            <p dir="auto">
              如果不写文档声明，有些浏览器会进入兼容模式（怪异模式）
            </p>
            <p dir="auto">
              标准模式下网页的编排和JS运作模式都是以该浏览器支持的最高标准运行
            </p>
            <p dir="auto">H5不再是SGML的子集，所以H5不需要对DTD进行引用</p>
            <p dir="auto">H5的文档声明，声明当前网页是按照HTML5标准编写的</p>
            <p dir="auto">编写网页时一定要将H5的文档声明写在网页最上边</p>
            <p dir="auto">
              如果不写文档声明，有些浏览器会进入兼容模式（怪异模式）
            </p>
            <p dir="auto">
              标准模式下网页的编排和JS运作模式都是以该浏览器支持的最高标准运行
            </p>
            <p dir="auto">H5不再是SGML的子集，所以H5不需要对DTD进行引用</p>
            <p dir="auto">H5的文档声明，声明当前网页是按照HTML5标准编写的</p>
            <p dir="auto">编写网页时一定要将H5的文档声明写在网页最上边</p>
            <p dir="auto">
              如果不写文档声明，有些浏览器会进入兼容模式（怪异模式）
            </p>
            <p dir="auto">
              标准模式下网页的编排和JS运作模式都是以该浏览器支持的最高标准运行
            </p>
            <p dir="auto">H5不再是SGML的子集，所以H5不需要对DTD进行引用</p>
            <p dir="auto">H5的文档声明，声明当前网页是按照HTML5标准编写的</p>
            <p dir="auto">编写网页时一定要将H5的文档声明写在网页最上边</p>
            <p dir="auto">
              如果不写文档声明，有些浏览器会进入兼容模式（怪异模式）
            </p>
            <p dir="auto">
              标准模式下网页的编排和JS运作模式都是以该浏览器支持的最高标准运行
            </p>
            <p dir="auto">
              而在兼容模式下，页面则以宽松向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作
            </p>
            <p dir="auto">
              比如：若不声明DOCTYPE类型，IE6浏览器会将盒子模型解释为IE盒子模型，FireFox等会将其解释为W3C盒子模型
            </p>
            <p dir="auto">所以，为了页面的正常显示，一定要写文档声明</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">行内元素</h2>
            </div>
            <p dir="auto">
              a img input span textarea em strong i small cite q sup sub...
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">块元素</h2>
            </div>
            <p dir="auto">div p h1 ul ol li form table...</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">空元素</h2>
            </div>
            <p dir="auto">br hr link script</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                attribute与property
              </h2>
            </div>
            <p dir="auto">
              attribute：HTML标签的预定义和自定义属性，设置的属性值只能为字符串
            </p>
            <p dir="auto">property：JS对象的直接属性</p>
            <p dir="auto">二者的同步关系：</p>
            <p dir="auto">1.property为非布尔值属性时，二者是实时同步的</p>
            <p dir="auto">
              2.property为布尔值属性时，attribute只会在第一次设置时影响property，之后二者不再同步
            </p>
            <p dir="auto">
              所以操作布尔值属性最好用property，非布尔值属性用attribute
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML自定义属性
              </h2>
            </div>
            <p dir="auto">date-xxx</p>
            <p dir="auto">
              <code
                >&lt;div id='test' data-name-a-b-ccc='北梦夏栀'&gt;
                &lt;/div&gt;</code
              >
            </p>
            <p dir="auto">JS可通过元素的dataset属性对象以 驼峰命名 来访问</p>
            <p dir="auto"><code>console.log(test.dataset.nameABCcc)</code></p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">meta标签</h2>
            </div>
            <p dir="auto">
              meta常用于定义页面的说明，字符集，关键字、简介和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。
            </p>
            <p dir="auto">
              设置网页字符集 <code>&lt;meta charset="UTF-8" /&gt;</code>
            </p>
            <p dir="auto">
              设置网页关键字
              <code>&lt;meta name="keywords" content="网页的关键字" /&gt;</code>
            </p>
            <p dir="auto">
              设置网页的描述
              <code
                >&lt;meta name="description" content="网页的描述" /&gt;</code
              >
            </p>
            <p dir="auto">
              设置viewport移动端视口
              <code
                >&lt;meta name="viewport" content="width=device-width,
                initial-scale=1"&gt;</code
              >
            </p>
            <p dir="auto">搜索引擎在检索页面时会检索页面中的关键字和描述</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                img的title和alt有什么区别
              </h2>
            </div>
            <p dir="auto">title：当鼠标移动到元素上显示</p>
            <p dir="auto">
              alt：img的特有属性，当图片无法成功加载时，页面会显示alt属性值，并且搜索引擎会对有alt属性的图片进行收录
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML5新特性
              </h2>
            </div>
            <p dir="auto">1.绘画 canvas</p>
            <p dir="auto">2.用于媒介回放的 video 和 audio 元素</p>
            <p dir="auto">3.本地存储localstorage,sessionstorage</p>
            <p dir="auto">
              4.语义化标签，比如article、footer、header、nav、section
            </p>
            <p dir="auto">
              5.新增表单属性type placeholder autofocus required pattern
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML5语义化标签
              </h2>
            </div>
            <p dir="auto">
              常用的语义化标签hgroup header nav section footer article aside
              main
            </p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">hgroup</h3>
            </div>
            <p dir="auto">
              可以将多个h1~h6元素放在其中，比如文章的主标题和副标题结合
            </p>
            <p dir="auto">注意：连续多个h标签才用hgroup</p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">header</h3>
            </div>
            <p dir="auto">代表网页或者section的页眉，通常包含h标签或者hgroup</p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">nav</h3>
            </div>
            <p dir="auto">用于定义页面主要导航部分</p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">section</h3>
            </div>
            <p dir="auto">
              section元素代表文档中的节或段，段可以是一篇文章里按照主题的分段，节可以是指一个页面里的分组
            </p>
            <p dir="auto">
              注意：section不是一般意义上的容器元素，如果想作为样式展示和脚本的便利，可以用div
            </p>
            <p dir="auto">
              article，nav，aside可以理解为特殊的section，可以用article，nav，aside就不要用section
            </p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">article</h3>
            </div>
            <p dir="auto">
              article元素最容易跟section和div混淆，其实article代表一个在文档，页面或者网站中自成一体的独立内容
            </p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">aside</h3>
            </div>
            <p dir="auto">
              aside元素包含在article元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料，标签，名词解释等
            </p>
            <p dir="auto">
              在article元素之外使用作为页面或站点全局的附属信息部分，最典型的是侧边栏，其中的内容可以是日志串连，其他组的导航
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML5删除的标签
              </h2>
            </div>
            <p dir="auto">big，center，font, s...</p>
            <p dir="auto">frame，frameset，noframes</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                shadow dom是什么
              </h2>
            </div>
            <p dir="auto">
              shadow
              dom是浏览器渲染dom树时，插入的一个并不在主dom树上的dom元素子树
            </p>
            <p dir="auto">
              在开发者工具的设置中开启 show user agent shadow
              DOM就可以看到shadow dom的结构
            </p>
            <p dir="auto">
              影子树是对一些技术实现的封装，比如以video为寄生宿主的影子树构建了播放器
            </p>
            <p dir="auto">
              这也就是为什么我们只加一个video标签就能够看到整个播放器的原因
            </p>
            <p dir="auto">我们可以对影子树进行操作，修改其样式等</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                SVG和Canvas的区别
              </h2>
            </div>
            <p dir="auto">SVG和Canvas都是2D作图</p>
            <p dir="auto">SVG是矢量图，不受分辨率影响，缩小放大不失真</p>
            <p dir="auto">Canvas是位图，逐像素渲染，受分辨率影响，放大会失真</p>
            <div class="markdown-heading" dir="auto">
              <h1 tabindex="-1" class="heading-element" dir="auto">CSS相关</h1>
            </div>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                两种盒模型
              </h2>
            </div>
            <p dir="auto">IE盒模型和W3C标准盒模型</p>
            <p dir="auto">IE盒模型的width和height是border-box</p>
            <p dir="auto">W3C标准盒模型的width和height是content-box</p>
            <p dir="auto">box-sizing: border-box; 将W3C盒模型转为IE盒模型</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                列举几个css中可继承和不可继承的属性
              </h2>
            </div>
            <p dir="auto">
              可继承：font, font-size, font-family, font-weight, font-style,
              text-indent, text-align, line-hight, word-spacing, color,
              visibility
            </p>
            <p dir="auto">
              不可继承：display, width, height, margin, padding, border,
              background, position, float, top, left, bottom, right
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                伪类和伪元素的区别
              </h2>
            </div>
            <p dir="auto">伪类主要是为了选中元素的某种特殊状态，伪类用单冒号</p>
            <p dir="auto">
              伪元素主要是为了创建DOM树以外的元素，伪元素用双冒号
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                CSS filter
              </h2>
            </div>
            <p dir="auto">
              元素的滤镜或者说是元素的可视效果，如模糊程度，饱和度，透明度等等
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                CSS选择器
              </h2>
            </div>
            <p dir="auto">ID选择器</p>
            <p dir="auto">类选择器 伪类选择器 属性选择器</p>
            <p dir="auto">元素选择器 伪元素选择器</p>
            <p dir="auto">通配选择器</p>
            <p dir="auto">子元素选择器 兄弟选择器 后代选择器</p>
            <p dir="auto">交集选择器 并集选择器</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                CSS选择器优先级
              </h2>
            </div>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">
                1.首先按来源排序
              </h3>
            </div>

            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                !DOCTYPE文档声明的作用
              </h2>
            </div>
            <p dir="auto">H5不再是SGML的子集，所以H5不需要对DTD进行引用</p>
            <p dir="auto">H5的文档声明，声明当前网页是按照HTML5标准编写的</p>
            <p dir="auto">编写网页时一定要将H5的文档声明写在网页最上边</p>
            <p dir="auto">
              如果不写文档声明，有些浏览器会进入兼容模式（怪异模式）
            </p>
            <p dir="auto">
              标准模式下网页的编排和JS运作模式都是以该浏览器支持的最高标准运行
            </p>
            <p dir="auto">
              而在兼容模式下，页面则以宽松向后兼容的方式显示，模拟老式浏览器的行为以防止站点无法工作
            </p>
            <p dir="auto">
              比如：若不声明DOCTYPE类型，IE6浏览器会将盒子模型解释为IE盒子模型，FireFox等会将其解释为W3C盒子模型
            </p>
            <p dir="auto">所以，为了页面的正常显示，一定要写文档声明</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">行内元素</h2>
            </div>
            <p dir="auto">
              a img input span textarea em strong i small cite q sup sub...
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">块元素</h2>
            </div>
            <p dir="auto">div p h1 ul ol li form table...</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">空元素</h2>
            </div>
            <p dir="auto">br hr link script</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                attribute与property
              </h2>
            </div>
            <p dir="auto">
              attribute：HTML标签的预定义和自定义属性，设置的属性值只能为字符串
            </p>
            <p dir="auto">property：JS对象的直接属性</p>
            <p dir="auto">二者的同步关系：</p>
            <p dir="auto">1.property为非布尔值属性时，二者是实时同步的</p>
            <p dir="auto">
              2.property为布尔值属性时，attribute只会在第一次设置时影响property，之后二者不再同步
            </p>
            <p dir="auto">
              所以操作布尔值属性最好用property，非布尔值属性用attribute
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML自定义属性
              </h2>
            </div>
            <p dir="auto">date-xxx</p>
            <p dir="auto">
              <code
                >&lt;div id='test' data-name-a-b-ccc='北梦夏栀'&gt;
                &lt;/div&gt;</code
              >
            </p>
            <p dir="auto">JS可通过元素的dataset属性对象以 驼峰命名 来访问</p>
            <p dir="auto"><code>console.log(test.dataset.nameABCcc)</code></p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">meta标签</h2>
            </div>
            <p dir="auto">
              meta常用于定义页面的说明，字符集，关键字、简介和其它的元数据。这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。
            </p>
            <p dir="auto">
              设置网页字符集 <code>&lt;meta charset="UTF-8" /&gt;</code>
            </p>
            <p dir="auto">
              设置网页关键字
              <code>&lt;meta name="keywords" content="网页的关键字" /&gt;</code>
            </p>
            <p dir="auto">
              设置网页的描述
              <code
                >&lt;meta name="description" content="网页的描述" /&gt;</code
              >
            </p>
            <p dir="auto">
              设置viewport移动端视口
              <code
                >&lt;meta name="viewport" content="width=device-width,
                initial-scale=1"&gt;</code
              >
            </p>
            <p dir="auto">搜索引擎在检索页面时会检索页面中的关键字和描述</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                img的title和alt有什么区别
              </h2>
            </div>
            <p dir="auto">title：当鼠标移动到元素上显示</p>
            <p dir="auto">
              alt：img的特有属性，当图片无法成功加载时，页面会显示alt属性值，并且搜索引擎会对有alt属性的图片进行收录
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML5新特性
              </h2>
            </div>
            <p dir="auto">1.绘画 canvas</p>
            <p dir="auto">2.用于媒介回放的 video 和 audio 元素</p>
            <p dir="auto">3.本地存储localstorage,sessionstorage</p>
            <p dir="auto">
              4.语义化标签，比如article、footer、header、nav、section
            </p>
            <p dir="auto">
              5.新增表单属性type placeholder autofocus required pattern
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML5语义化标签
              </h2>
            </div>
            <p dir="auto">
              常用的语义化标签hgroup header nav section footer article aside
              main
            </p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">hgroup</h3>
            </div>
            <p dir="auto">
              可以将多个h1~h6元素放在其中，比如文章的主标题和副标题结合
            </p>
            <p dir="auto">注意：连续多个h标签才用hgroup</p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">header</h3>
            </div>
            <p dir="auto">代表网页或者section的页眉，通常包含h标签或者hgroup</p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">nav</h3>
            </div>
            <p dir="auto">用于定义页面主要导航部分</p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">section</h3>
            </div>
            <p dir="auto">
              section元素代表文档中的节或段，段可以是一篇文章里按照主题的分段，节可以是指一个页面里的分组
            </p>
            <p dir="auto">
              注意：section不是一般意义上的容器元素，如果想作为样式展示和脚本的便利，可以用div
            </p>
            <p dir="auto">
              article，nav，aside可以理解为特殊的section，可以用article，nav，aside就不要用section
            </p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">article</h3>
            </div>
            <p dir="auto">
              article元素最容易跟section和div混淆，其实article代表一个在文档，页面或者网站中自成一体的独立内容
            </p>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">aside</h3>
            </div>
            <p dir="auto">
              aside元素包含在article元素中作为主要内容的附属信息部分，其中的内容可以是与当前文章有关的相关资料，标签，名词解释等
            </p>
            <p dir="auto">
              在article元素之外使用作为页面或站点全局的附属信息部分，最典型的是侧边栏，其中的内容可以是日志串连，其他组的导航
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                HTML5删除的标签
              </h2>
            </div>
            <p dir="auto">big，center，font, s...</p>
            <p dir="auto">frame，frameset，noframes</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                shadow dom是什么
              </h2>
            </div>
            <p dir="auto">
              shadow
              dom是浏览器渲染dom树时，插入的一个并不在主dom树上的dom元素子树
            </p>
            <p dir="auto">
              在开发者工具的设置中开启 show user agent shadow
              DOM就可以看到shadow dom的结构
            </p>
            <p dir="auto">
              影子树是对一些技术实现的封装，比如以video为寄生宿主的影子树构建了播放器
            </p>
            <p dir="auto">
              这也就是为什么我们只加一个video标签就能够看到整个播放器的原因
            </p>
            <p dir="auto">我们可以对影子树进行操作，修改其样式等</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                SVG和Canvas的区别
              </h2>
            </div>
            <p dir="auto">SVG和Canvas都是2D作图</p>
            <p dir="auto">SVG是矢量图，不受分辨率影响，缩小放大不失真</p>
            <p dir="auto">Canvas是位图，逐像素渲染，受分辨率影响，放大会失真</p>
            <div class="markdown-heading" dir="auto">
              <h1 tabindex="-1" class="heading-element" dir="auto">CSS相关</h1>
            </div>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                两种盒模型
              </h2>
            </div>
            <p dir="auto">IE盒模型和W3C标准盒模型</p>
            <p dir="auto">IE盒模型的width和height是border-box</p>
            <p dir="auto">W3C标准盒模型的width和height是content-box</p>
            <p dir="auto">box-sizing: border-box; 将W3C盒模型转为IE盒模型</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                列举几个css中可继承和不可继承的属性
              </h2>
            </div>
            <p dir="auto">
              可继承：font, font-size, font-family, font-weight, font-style,
              text-indent, text-align, line-hight, word-spacing, color,
              visibility
            </p>
            <p dir="auto">
              不可继承：display, width, height, margin, padding, border,
              background, position, float, top, left, bottom, right
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                伪类和伪元素的区别
              </h2>
            </div>
            <p dir="auto">伪类主要是为了选中元素的某种特殊状态，伪类用单冒号</p>
            <p dir="auto">
              伪元素主要是为了创建DOM树以外的元素，伪元素用双冒号
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                CSS filter
              </h2>
            </div>
            <p dir="auto">
              元素的滤镜或者说是元素的可视效果，如模糊程度，饱和度，透明度等等
            </p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                CSS选择器
              </h2>
            </div>
            <p dir="auto">ID选择器</p>
            <p dir="auto">类选择器 伪类选择器 属性选择器</p>
            <p dir="auto">元素选择器 伪元素选择器</p>
            <p dir="auto">通配选择器</p>
            <p dir="auto">子元素选择器 兄弟选择器 后代选择器</p>
            <p dir="auto">交集选择器 并集选择器</p>
            <div class="markdown-heading" dir="auto">
              <h2 tabindex="-1" class="heading-element" dir="auto">
                CSS选择器优先级
              </h2>
            </div>
            <div class="markdown-heading" dir="auto">
              <h3 tabindex="-1" class="heading-element" dir="auto">
                1.首先按来源排序
              </h3>
            </div>
            <div class="test 233223" dir="auto">
              <div>344</div>
              2323
            </div>
            <div class="test 23" dir="auto">232323</div>
          </article>
        </div>
        <div class="bg-muted/20 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
      <point-catalog
        class="catalog"
        :content-container="articleRef"
        :selector="['h1', 'h2', 'h3', 'h4', '.test']"
        :use-anchor="false"
        :top-distance="20"
      >
        <!-- <template v-slot="{ anchor }">
      <div :id="anchor.catalogId">{{ anchor.title }}</div>
    </template> -->
      </point-catalog>
    </div>
  </SidebarInset>
</template>
<script lang="ts" setup name="label-content">
import Header from "@/components/Header.vue";
import { SidebarInset } from "@/components/ui/sidebar";
import { PointCatalog } from "@shilim-developer/vue-catalog";

const articleRef = ref<HTMLElement | null>(null);
</script>
<style lang="scss" scoped></style>
