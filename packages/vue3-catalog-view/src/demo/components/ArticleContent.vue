<template>
  <article>
    <div id="article_content" class="article_content clearfix">
      <div
        id="content_views"
        class="markdown_views prism-atom-one-dark"
        v-if="isZh"
      >
        <h2>一、Typescript简介</h2>
        <h3>1.1 概述</h3>
        <p>
          TypeScript（简称 TS）是微软公司开发的一种基于
          <span
            class="words-blog hl-git-1"
            data-tit="JavaScript"
            data-pretit="javascript"
            >JavaScript</span
          >
          （简称 JS）语言的编程语言。
        </p>
        <p>
          它的目的并不是创造一种全新语言，而是增强 JavaScript
          的功能，使其更适合多人合作的企业级项目。
        </p>
        <p>
          TypeScript 可以看成是 JavaScript
          的超集（superset），即它继承了后者的全部语法，所有 JavaScript
          脚本都可以当作 TypeScript
          脚本（但是可能会报错），此外它再增加了一些自己的语法。
        </p>
        <p>
          TypeScript 对 JavaScript 添加的最主要部分，就是一个独立的类型系统。
        </p>
        <h3><a name="t3"></a><a id="12__11"></a>1.2 动态类型与静态类型</h3>
        <p>
          前面说了，TypeScript 的主要功能是为 JavaScript
          添加类型系统。大家可能知道，JavaScript
          语言本身就有一套自己的类型系统，比如数值123和字符串Hello。
        </p>
        <p>
          但是，JavaScript
          的类型系统非常弱，而且没有使用限制，运算符可以接受各种类型的值。在语法上，JavaScript
          属于动态类型语言。
        </p>
        <p>请看下面的 JavaScript 代码。</p>
        <p>
          // 例一<br />
          let x = 1;<br />
          x = ‘hello’;
        </p>
        <p>
          // 例二<br />
          let y = { foo: 1 };<br />
          delete y.foo;<br />
          y.bar = 2;<br />
          上面的例一，变量x声明时，值的类型是数值，但是后面可以改成字符串。所以，无法提前知道变量的类型是什么，也就是说，变量的类型是动态的。
        </p>
        <p>
          上面的例二，变量y是一个对象，有一个属性foo，但是这个属性是可以删掉的，并且还可以新增其他属性。所以，对象有什么属性，这个属性还在不在，也是动态的，没法提前知道。
        </p>
        <p>
          正是因为存在这些动态变化，所以 JavaScript
          的类型系统是动态的，不具有很强的约束性。这对于提前发现代码错误，非常不利。
        </p>
        <p>TypeScript 引入了一个更强大、更严格的类型系统，属于静态类型语言。</p>
        <p>上面的代码在 TypeScript 里面都会报错。</p>
        <p>
          // 例一<br />
          let x = 1;<br />
          x = ‘hello’; // 报错
        </p>
        <p>
          // 例二<br />
          let y = { foo: 1 };<br />
          delete y.foo; // 报错<br />
          y.bar = 2; // 报错<br />
          上面示例中，例一的报错是因为变量赋值时，TypeScript
          已经推断确定了类型，后面就不允许再赋值为其他类型的值，即变量的类型是静态的。例二的报错是因为对象的属性也是静态的，不允许随意增删。
        </p>
        <p>TypeScript 的作用，就是为 JavaScript 引入这种静态类型特征。</p>
        <h3><a name="t4"></a><a id="13__48"></a>1.3 静态类型的优点</h3>
        <p>静态类型有很多好处，这也是 TypeScript 想要达到的目的。</p>
        <p>（1）有利于代码的静态分析。</p>
        <p>
          有了静态类型，不必运行代码，就可以确定变量的类型，从而推断代码有没有错误。这就叫做代码的静态分析。
        </p>
        <p>
          这对于大型项目非常重要，单单在开发阶段运行静态检查，就可以发现很多问题，避免交付有问题的代码，大大降低了线上风险。
        </p>
        <p>（2）有利于发现错误。</p>
        <p>
          由于每个值、每个变量、每个运算符都有严格的类型约束，TypeScript
          就能轻松发现拼写错误、语义错误和方法调用错误，节省程序员的时间。
        </p>
        <p>
          let obj = { message: ‘’ };<br />
          <span
            class="words-blog hl-git-1"
            data-tit="console"
            data-pretit="console"
            >console</span
          >.log(obj.messege); // 报错<br />
          上面示例中，不小心把message拼错了，写成messege。TypeScript
          就会报错，指出没有定义过这个属性。JavaScript 遇到这种情况是不报错的。
        </p>
        <p>
          const a = 0;<br />
          const b = true;<br />
          const result = a + b; // 报错<br />
          上面示例是合法的 JavaScript
          代码，但是没有意义，不应该将数值a与布尔值b相加。TypeScript
          就会直接报错，提示运算符+不能用于数值和布尔值的相加。
        </p>
        <p>
          function hello() {<br />
          return ‘hello world’;<br />
          }
        </p>
        <p>
          hello().find(‘hello’); // 报错<br />
          上面示例中，hello()返回的是一个字符串，TypeScript
          发现字符串没有find()方法，所以报错了。如果是
          JavaScript，只有到运行阶段才会报错。
        </p>
        <p>（3）更好的 IDE 支持，做到语法提示和自动补全。</p>
        <p>
          IDE（集成开发环境，比如
          <span
            class="words-blog hl-git-1"
            data-tit="VSCode"
            data-pretit="vscode"
            >VSCode</span
          >）一般都会利用类型信息，提供语法提示功能（编辑器自动提示函数用法、参数等）和自动补全功能（只键入一部分的变量名或函数名，编辑器补全后面的部分）。
        </p>
        <p>（4）提供了代码文档。</p>
        <p>
          类型信息可以部分替代代码文档，解释应该如何使用这些代码，熟练的开发者往往只看类型，就能大致推断代码的作用。借助类型信息，很多工具能够直接生成文档。
        </p>
        <p>（5）有助于代码重构。</p>
        <p>
          修改他人的 JavaScript
          代码，往往非常痛苦，项目越大越痛苦，因为不确定修改后是否会影响到其他部分的代码。
        </p>
        <p>
          类型信息大大减轻了重构的成本。一般来说，只要函数或对象的参数和返回值保持类型不变，就能基本确定，重构后的代码也能正常运行。如果还有配套的单元测试，就完全可以放心重构。越是大型的、多人合作的项目，类型信息能够提供的帮助越大。
        </p>
        <p>
          综上所述，TypeScript
          有助于提高代码质量，保证代码安全，更适合用在大型的企业级项目。这就是为什么大量
          JavaScript 项目转成 TypeScript 的原因。
        </p>
        <h3><a name="t5"></a><a id="14__93"></a>1.4 静态类型的缺点</h3>
        <p>静态类型也存在一些缺点。</p>
        <p>（1）丧失了动态类型的代码灵活性。</p>
        <p>
          动态类型有非常高的灵活性，给予程序员很大的自由，静态类型将这些灵活性都剥夺了。
        </p>
        <p>（2）增加了编程工作量。</p>
        <p>
          有了类型之后，程序员不仅需要编写功能，还需要编写类型声明，确保类型正确。这增加了不少工作量，有时会显著拖长项目的开发时间。
        </p>
        <p>（3）更高的学习成本。</p>
        <p>
          类型系统通常比较复杂，要学习的东西更多，要求开发者付出更高的学习成本。
        </p>
        <p>（4）引入了独立的编译步骤。</p>
        <p>
          原生的 JavaScript 代码，可以直接在 JavaScript
          引擎运行。添加类型系统以后，就多出了一个单独的编译步骤，检查类型是否正确，并将
          TypeScript 代码转成 JavaScript 代码，这样才能运行。
        </p>
        <p>（5）兼容性问题。</p>
        <p>
          TypeScript 依赖 JavaScript
          生态，需要用到很多外部模块。但是，过去大部分 JavaScript 项目都没有做
          TypeScript
          适配，虽然可以自己动手做适配，不过使用时难免还是会有一些兼容性问题。
        </p>
        <p>
          总的来说，这些缺点使得 TypeScript
          不一定适合那些小型的、短期的个人项目。
        </p>
        <h2><a name="t6"></a><a id="_118"></a>二、基本用法</h2>
        <h3><a name="t7"></a><a id="21__119"></a>2.1 类型声明</h3>
        <p>
          TypeScript 代码最明显的特征，就是为 JavaScript 变量加上了类型声明。
        </p>
        <p>
          let foo:string;<br />
          上面示例中，变量foo的后面使用冒号，声明了它的类型为string。
        </p>
        <p>
          类型声明的写法，一律为在标识符后面添加“冒号 +
          类型”。函数参数和返回值，也是这样来声明类型。
        </p>
        <p>
          function toString(num:number):string {<br />
          return String(num);<br />
          }<br />
          上面示例中，函数toString()的参数num的类型是number。参数列表的圆括号后面，声明了返回值的类型是string。更详细的介绍，参见《函数》一章。
        </p>
        <p>
          注意，变量的值应该与声明的类型一致，如果不一致，TypeScript 就会报错。
        </p>
        <p>
          // 报错<br />
          let foo:string = 123;<br />
          上面示例中，变量foo的类型是字符串，但是赋值为数值123，TypeScript
          就报错了。
        </p>
        <p>另外，TypeScript 规定，变量只有赋值后才能使用，否则就会报错。</p>
        <p>
          let x:number;<br />
          console.log(x) // 报错<br />
          上面示例中，变量x没有赋值就被读取，导致报错。而 JavaScript
          允许这种行为，不会报错，没有赋值的变量会返回undefined。
        </p>
        <h3><a name="t8"></a><a id="22__144"></a>2.2 类型推断</h3>
        <p>类型声明并不是必需的，如果没有，TypeScript 会自己推断类型。</p>
        <p>
          let foo = 123;<br />
          上面示例中，变量foo并没有类型声明，TypeScript
          就会推断它的类型。由于它被赋值为一个数值，因此 TypeScript
          推断它的类型为number。
        </p>
        <p>
          后面，如果变量foo更改为其他类型的值，跟推断的类型不一致，TypeScript
          就会报错。
        </p>
        <p>
          let foo = 123;<br />
          foo = ‘hello’; // 报错<br />
          上面示例中，变量foo的类型推断为number，后面赋值为字符串，TypeScript
          就报错了。
        </p>
        <p>TypeScript 也可以推断函数的返回值。</p>
        <p>
          function toString(num:number) {<br />
          return String(num);<br />
          }<br />
          上面示例中，函数toString()没有声明返回值的类型，但是 TypeScript
          推断返回的是字符串。正是因为 TypeScript
          的类型推断，所以函数返回值的类型通常是省略不写的。
        </p>
        <p>
          从这里可以看到，TypeScript
          的设计思想是，类型声明是可选的，你可以加，也可以不加。即使不加类型声明，依然是有效的
          TypeScript 代码，只是这时不能保证 TypeScript
          会正确推断出类型。由于这个原因，所有 JavaScript 代码都是合法的
          TypeScript 代码。
        </p>
        <p>
          这样设计还有一个好处，将以前的 JavaScript 项目改为 TypeScript
          项目时，你可以逐步地为老代码添加类型，即使有些代码没有添加，也不会无法运行。
        </p>
        <h3>
          <a name="t9"></a><a id="23_TypeScript__169"></a>2.3 TypeScript 的编译
        </h3>
        <p>
          JavaScript 的运行环境（浏览器和
          <span
            class="words-blog hl-git-1"
            data-tit="Node.js"
            data-pretit="node.js"
            >Node.js</span
          >）不认识 TypeScript 代码。所以，TypeScript 项目要想运行，必须先转为
          JavaScript 代码，这个代码转换的过程就叫做“编译”（compile）。
        </p>
        <p>
          TypeScript
          官方没有做运行环境，只提供编译器。编译时，会将类型声明和类型相关的代码全部删除，只留下能运行的
          JavaScript 代码，并且不会改变 JavaScript 的运行结果。
        </p>
        <p>
          因此，TypeScript
          的类型检查只是编译时的类型检查，而不是运行时的类型检查。一旦代码编译为
          JavaScript，运行时就不再检查类型了。
        </p>
        <h3><a name="t10"></a><a id="24_tsc__178"></a>2.4 tsc 编译器</h3>
        <p>
          TypeScript 官方提供的编译器叫做 tsc，可以将 TypeScript 脚本编译成
          JavaScript 脚本。本机想要编译 TypeScript 代码，必须安装 tsc。
        </p>
        <p>
          根据约定，TypeScript 脚本文件使用.ts后缀名，JavaScript
          脚本文件使用.js后缀名。tsc 的作用就是把.ts脚本转变成.js脚本。
        </p>
        <h3>
          <a name="t11"></a><a id="25_tsconfigjson_185"></a>2.5 tsconfig.json
        </h3>
        <p>
          TypeScript
          允许将tsc的编译参数，写在配置文件tsconfig.json。只要当前目录有这个文件，tsc就会自动读取，所以运行时可以不写参数。
        </p>
        <p>
          如：<br />
          {<br />
          “files”: [“file1.ts”, “file2.ts”],<br />
          “compilerOptions”: {<br />
          “outFile”: “dist/app.js”<br />
          }<br />
          }
        </p>
        <h2><a name="t12"></a><a id="_any_196"></a>三、 any类型</h2>
        <h3><a name="t13"></a><a id="31__197"></a>3.1 基本含义</h3>
        <p>any 类型表示没有任何限制，该类型的变量可以赋予任意类型的值。</p>
        <p>let x:any;</p>
        <p>
          x = 1; // 正确<br />
          x = ‘foo’; // 正确<br />
          x = true; // 正确<br />
          上面示例中，变量x的类型是any，就可以被赋值为任意类型的值。
        </p>
        <p>
          变量类型一旦设为any，TypeScript
          实际上会关闭这个变量的类型检查。即使有明显的类型错误，只要句法正确，都不会报错。
        </p>
        <p>let x:any = ‘hello’;</p>
        <p>
          x(1) // 不报错<br />
          x.foo = 100; // 不报错<br />
          上面示例中，变量x的值是一个字符串，但是把它当作函数调用，或者当作对象读取任意属性，TypeScript
          编译时都不报错。原因就是x的类型是any，TypeScript 不对其进行类型检查。
        </p>
        <p>
          由于这个原因，应该尽量避免使用any类型，否则就失去了使用 TypeScript
          的意义。
        </p>
        <p>实际开发中，any类型主要适用以下两个场合。</p>
        <p>
          （1）出于特殊原因，需要关闭某些变量的类型检查，就可以把该变量的类型设为any。
        </p>
        <p>
          （2）为了适配以前老的 JavaScript 项目，让代码快速迁移到
          TypeScript，可以把变量类型设为any。有些年代很久的大型 JavaScript
          项目，尤其是别人的代码，很难为每一行适配正确的类型，这时你为那些类型复杂的变量加上any，TypeScript
          编译时就不会报错。
        </p>
        <p>
          总之，TypeScript
          认为，只要开发者使用了any类型，就表示开发者想要自己来处理这些代码，所以就不对any类型进行任何限制，怎么使用都可以。
        </p>
        <p>
          从集合论的角度看，any类型可以看成是所有其他类型的全集，包含了一切可能的类型。TypeScript
          将这种类型称为“顶层类型”（top type），意为涵盖了所有下层。
        </p>
        <h3><a name="t14"></a><a id="32__229"></a>3.2 污染问题</h3>
        <p>
          any类型除了关闭类型检查，会导致一个很大的问题，就是它会“污染”其他变量。它可以赋值给其他任何类型的变量（因为没有类型检查），导致其他变量出错。
        </p>
        <p>
          let x:any = ‘hello’;<br />
          let y:number;
        </p>
        <p>y = x; // 不报错</p>
        <p>
          y * 123 // 不报错<br />
          y.toFixed() // 不报错<br />
          上面示例中，变量x的类型是any，实际的值是一个字符串。变量y的类型是number，表示这是一个数值变量，但是它被赋值为x，这时并不会报错。然后，变量y继续进行各种数值运算，TypeScript
          也检查不出错误，问题就这样留到运行时才会暴露。
        </p>
        <p>
          污染其他具有正确类型的变量，把错误留到运行时，这就是不宜使用any类型的另一个主要原因。
        </p>
        <h3><a name="t15"></a><a id="33_unknown__247"></a>3.3 unknown 类型</h3>
        <p>
          为了解决any类型“污染”其他变量的问题，TypeScript 3.0
          引入了unknown类型。它与any含义相同，表示类型不确定，可能是任意类型，但是它的使用有一些限制，不像any那样自由，可以视为严格版的any。
        </p>
        <p>unknown跟any的相似之处，在于所有类型的值都可以分配给unknown类型。</p>
        <p>let x:unknown;</p>
        <p>
          x = true; // 正确<br />
          x = 42; // 正确<br />
          x = ‘Hello World’; // 正确<br />
          上面示例中，变量x的类型是unknown，可以赋值为各种类型的值。这与any的行为一致。
        </p>
        <p>
          unknown类型跟any类型的不同之处在于，它不能直接使用。主要有以下几个限制。
        </p>
        <p>
          首先，unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）。
        </p>
        <p>let v:unknown = 123;</p>
        <p>
          let v1:boolean = v; // 报错<br />
          let v2:number = v; // 报错<br />
          上面示例中，变量v是unknown类型，赋值给any和unknown以外类型的变量都会报错，这就避免了污染问题，从而克服了any类型的一大缺点。
        </p>
        <p>其次，不能直接调用unknown类型变量的方法和属性。</p>
        <p>
          let v1:unknown = { foo: 123 };<br />
          v1.foo // 报错
        </p>
        <p>
          let v2:unknown = ‘hello’;<br />
          v2.trim() // 报错
        </p>
        <p>
          let v3:unknown = (n = 0) =&gt; n + 1;<br />
          v3() // 报错<br />
          上面示例中，直接调用unknown类型变量的属性和方法，或者直接当作函数执行，都会报错。
        </p>
        <p>
          再次，unknown类型变量能够进行的运算是有限的，只能进行比较运算（运算符==、=、!=、!、||、&amp;&amp;、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，其他运算都会报错。
        </p>
        <p>let a:unknown = 1;</p>
        <p>
          a + 1 // 报错<br />
          a === 1 // 正确<br />
          上面示例中，unknown类型的变量a进行加法运算会报错，因为这是不允许的运算。但是，进行比较运算就是可以的。
        </p>
        <p>那么，怎么才能使用unknown类型变量呢？</p>
        <p>
          答案是只有经过“类型缩小”，unknown类型变量才可以使用。所谓“类型缩小”，就是缩小unknown变量的类型范围，确保不会出错。
        </p>
        <p>let a:unknown = 1;</p>
        <p>
          if (typeof a === ‘number’) {<br />
          let r = a + 10; // 正确<br />
          }<br />
          上面示例中，unknown类型的变量a经过typeof运算以后，能够确定实际类型是number，就能用于加法运算了。这就是“类型缩小”，即将一个不确定的类型缩小为更明确的类型。
        </p>
        <p>下面是另一个例子。</p>
        <p>let s:unknown = ‘hello’;</p>
        <p>
          if (typeof s === ‘string’) {<br />
          s.length; // 正确<br />
          }<br />
          上面示例中，确定变量s的类型为字符串以后，才能调用它的length属性。
        </p>
        <p>
          这样设计的目的是，只有明确unknown变量的实际类型，才允许使用它，防止像any那样可以随意乱用，“污染”其他变量。类型缩小以后再使用，就不会报错。
        </p>
        <p>
          总之，unknown可以看作是更安全的any。一般来说，凡是需要设为any类型的地方，通常都应该优先考虑设为unknown类型。
        </p>
        <p>
          在集合论上，unknown也可以视为所有其他类型（除了any）的全集，所以它和any一样，也属于
          TypeScript 的顶层类型。
        </p>
        <h3><a name="t16"></a><a id="34_never__316"></a>3.4 never 类型</h3>
        <p>
          为了保持与集合论的对应关系，以及类型运算的完整性，TypeScript
          还引入了“空类型”的概念，即该类型为空，不包含任何值。
        </p>
        <p>
          由于不存在任何属于“空类型”的值，所以该类型被称为never，即不可能有这样的值。
        </p>
        <p>let x:never;</p>
        <p>
          上面示例中，变量x的类型是never，就不可能赋给它任何值，否则都会报错。
        </p>
        <p>
          never类型的使用场景，主要是在一些类型运算之中，保证类型运算的完整性。另外，不可能返回值的函数，返回值的类型就可以写成never
        </p>
        <p>
          如果一个变量可能有多种类型（即联合类型），通常需要使用分支处理每一种类型。这时，处理所有可能的类型之后，剩余的情况就属于never类型。
        </p>
        <p>
          function fn(x:string|number) {<br />
          if (typeof x === ‘string’) {<br />
          // …<br />
          } else if (typeof x === ‘number’) {<br />
          // …<br />
          } else {<br />
          x; // never 类型<br />
          }<br />
          }
        </p>
        <p>
          上面示例中，参数变量x可能是字符串，也可能是数值，判断了这两种情况后，剩下的最后那个else分支里面，x就是never类型了。
        </p>
        <p>never类型的一个重要特点是，可以赋值给任意其他类型。</p>
        <p>
          function f():never {<br />
          throw new Error(‘Error’);<br />
          }
        </p>
        <p>
          let v1:number = f(); // 不报错<br />
          let v2:string = f(); // 不报错<br />
          let v3:boolean = f(); // 不报错
        </p>
        <p>
          上面示例中，函数f()会抛出错误，所以返回值类型可以写成never，即不可能返回任何值。各种其他类型的变量都可以赋值为f()的运行结果（never类型）。
        </p>
        <p>
          为什么never类型可以赋值给任意其他类型呢？这也跟集合论有关，空集是任何集合的子集。TypeScript
          就相应规定，任何类型都包含了never类型。因此，never类型是任何其他类型所共有的，TypeScript
          把这种情况称为“底层类型”（bottom type）。
        </p>
        <p>
          总之，TypeScript
          有两个“顶层类型”（any和unknown），但是“底层类型”只有never唯一一个
        </p>
      </div>
      <div id="content_views" class="markdown_views prism-atom-one-dark" v-else>
        <h2>1. Introduction to Typescript</h2>
        <h3>1.1 Overview</h3>
        <p>
          TypeScript (TS for short) is a programming language developed by
          Microsoft based on
          <span class="words-blog hl-git-1">JavaScript (JS for short).</span>
        </p>
        <p>
          Its purpose is not to create a new language, but to enhance the
          functionality of JavaScript to make it more suitable for
          enterprise-level projects involving multiple people.
        </p>
        <p>
          TypeScript can be considered a superset of JavaScript, that is, it
          inherits all of the latter's syntax, and all JavaScript scripts can be
          treated as TypeScript scripts (but errors may be reported). In
          addition, it adds some of its own syntax.
        </p>
        <p>
          The main thing TypeScript adds to JavaScript is a separate type
          system.
        </p>
        <h3>1.2 Dynamic typing and static typing</h3>
        <p>
          As mentioned earlier, the main function of TypeScript is to add a type
          system to JavaScript. As you may know, the JavaScript language itself
          has its own type system, such as the number 123 and the string Hello.
        </p>
        <p>
          However, JavaScript's type system is very weak, and without
          restrictions, operators can accept values
          &ZeroWidthSpace;&ZeroWidthSpace;of various types. Syntactically,
          JavaScript is a dynamically typed language.
        </p>
        <p>Please see the JavaScript code below.</p>
        <p>// Example 1 <br />let x = 1; <br />x = 'hello';</p>
        <p>
          // Example 2 <br />let y = { foo: 1 };<br />delete y.foo; <br />y.bar
          = 2; <br />In the example above, when the variable x is declared, the
          value type is a number, but it can be changed to a string later.
          Therefore, it is impossible to know the type of the variable in
          advance, that is, the type of the variable is dynamic.
        </p>
        <p>
          In the second example above, the variable y is an object with an
          attribute foo, but this attribute can be deleted, and other attributes
          can be added. Therefore, what attributes an object has and whether
          this attribute still exists is also dynamic and cannot be known in
          advance.
        </p>
        <p>
          It is precisely because of these dynamic changes that JavaScript's
          type system is dynamic and not very restrictive, which is very
          unfavorable for discovering code errors in advance.
        </p>
        <p>
          TypeScript introduces a stronger and stricter type system and is a
          statically typed language.
        </p>
        <p>The above code will report an error in TypeScript.</p>
        <p>// Example 1 <br />let x = 1; <br />x = 'hello'; // Error</p>
        <p>
          // Example 2 <br />let y = { foo: 1 }; <br />delete y.foo; // Error
          <br />y.bar = 2; // Error <br />In the above examples, the error in
          Example 1 is because when assigning a value to a variable, TypeScript
          has already inferred the type, and it is not allowed to assign values
          &ZeroWidthSpace;&ZeroWidthSpace;of other types later, that is, the
          type of the variable is static. The error in Example 2 is because the
          properties of the object are also static, and arbitrary additions and
          deletions are not allowed.
        </p>
        <p>
          The role of TypeScript is to introduce this static type feature to
          JavaScript.
        </p>
        <h3>
          <a name="t4"></a><a id="13__48"></a>1.3 Advantages of static typing
        </h3>
        <p>
          Static typing has many benefits, and this is what TypeScript aims to
          achieve.
        </p>
        <p>(1) It is conducive to static analysis of code.</p>
        <p>
          With static typing, you can determine the type of a variable without
          running the code, and thus infer whether the code has errors. This is
          called static analysis of the code.
        </p>
        <p>
          This is very important for large projects. Simply running static
          checks during the development phase can reveal many problems, avoid
          delivering problematic code, and greatly reduce online risks.
        </p>
        <p>(2) It helps to find errors.</p>
        <p>
          Since every value, every variable, and every operator has strict type
          constraints, TypeScript can easily detect spelling errors, semantic
          errors, and method call errors, saving programmers time.
        </p>
        <p>
          let obj = { message: '' }; <br /><span
            class="words-blog hl-git-1"
            data-tit="console"
            data-pretit="console"
            >console</span
          >
          .log(obj.messege); // Error <br />In the above example, if message is
          misspelled as messege, TypeScript will report an error, indicating
          that the property has not been defined. JavaScript will not report an
          error in this case.
        </p>
        <p>
          const a = 0; <br />const b = true; <br />const result = a + b; //
          Error <br />The above example is legal JavaScript code, but it does
          not make sense. You should not add the numeric value a to the Boolean
          value b. TypeScript will directly report an error, indicating that the
          operator + cannot be used to add numeric values
          &ZeroWidthSpace;&ZeroWidthSpace;and Boolean values.
        </p>
        <p>
          function hello() {<br />
          return ‘hello world’;<br />
          }
        </p>
        <p>
          hello().find('hello'); // Error <br />In the above example, hello()
          returns a string. TypeScript finds that the string does not have a
          find() method, so it reports an error. If it is JavaScript, an error
          will only be reported at the runtime stage.
        </p>
        <p>
          (3) Better IDE support, including syntax hints and auto-completion.
        </p>
        <p>
          IDE (Integrated Development Environment, such as
          <span
            class="words-blog hl-git-1"
            data-tit="VSCode"
            data-pretit="vscode"
            >VSCode</span
          >
          ) generally uses type information to provide syntax prompts (the
          editor automatically prompts function usage, parameters, etc.) and
          auto-completion functions (type only part of the variable name or
          function name, and the editor completes the rest).
        </p>
        <p>(4) Code documentation is provided.</p>
        <p>
          Type information can partially replace code documentation and explain
          how the code should be used. Skilled developers can often roughly
          infer the purpose of the code by just looking at the type. With the
          help of type information, many tools can generate documentation
          directly.
        </p>
        <p>（5）It helps in code refactoring.</p>
        <p>
          Modifying other people's JavaScript code is often very painful, and
          the larger the project, the more painful it is, because you are not
          sure whether the modification will affect other parts of the code.
        </p>
        <p>
          Type information greatly reduces the cost of refactoring. Generally
          speaking, as long as the parameters and return values
          &ZeroWidthSpace;&ZeroWidthSpace;of a function or object remain
          unchanged, it can be basically determined that the refactored code
          will run normally. If there are also supporting unit tests, you can
          refactor with confidence. The larger the project, the more people work
          together, the more help type information can provide.
        </p>
        <p>
          In summary, TypeScript helps improve code quality, ensure code
          security, and is more suitable for large enterprise projects. This is
          why a large number of JavaScript projects are converted to TypeScript.
        </p>
        <h3>
          <a name="t5"></a><a id="14__93"></a>1.4 Disadvantages of static typing
        </h3>
        <p>Static typing also has some disadvantages.</p>
        <p>(1) Loss of the flexibility of dynamically typed code.</p>
        <p>
          Dynamic typing has very high flexibility and gives programmers a lot
          of freedom, but static typing deprives programmers of this
          flexibility.
        </p>
        <p>(2) Increased programming workload.</p>
        <p>
          With types, programmers not only need to write functions, but also
          need to write type declarations to ensure that the types are correct.
          This increases the workload and sometimes significantly prolongs the
          development time of the project.
        </p>
        <p>(3) Higher learning costs.</p>
        <p>
          Type systems are usually more complex, with more things to learn,
          requiring developers to pay a higher learning cost.
        </p>
        <p>(4) An independent compilation step was introduced.</p>
        <p>
          Native JavaScript code can be run directly in the JavaScript engine.
          After adding the type system, there is an additional separate
          compilation step to check whether the type is correct and convert the
          TypeScript code into JavaScript code so that it can be run.
        </p>
        <p>(5) Compatibility issues.</p>
        <p>
          TypeScript relies on the JavaScript ecosystem and requires the use of
          many external modules. However, in the past, most JavaScript projects
          did not adapt to TypeScript. Although you can do the adaptation
          yourself, there will inevitably be some compatibility issues when
          using it.
        </p>
        <p>
          Overall, these shortcomings make TypeScript not necessarily suitable
          for small, short-term personal projects.
        </p>
        <h2><a name="t6"></a><a id="_118"></a>2. Basic Usage</h2>
        <h3><a name="t7"></a><a id="21__119"></a>2.1 Type Declaration</h3>
        <p>
          The most obvious feature of TypeScript code is that it adds type
          declarations to JavaScript variables.
        </p>
        <p>
          let foo:string; <br />In the above example, a colon is used after the
          variable foo to declare its type as string.
        </p>
        <p>
          The way to write a type declaration is to add a colon + type after the
          identifier. The same is true for function parameters and return
          values.
        </p>
        <p>
          function toString(num:number):string { <br />return String(num);
          <br />} <br />In the above example, the type of the parameter num of
          the toString() function is number. After the parentheses of the
          parameter list, the return value type is declared to be string. For
          more details, see the chapter "Functions".
        </p>
        <p>
          Note that the value of the variable should be consistent with the
          declared type. If it is inconsistent, TypeScript will report an error.
        </p>
        <p>
          // Error <br />let foo:string = 123; <br />In the above example, the
          type of the variable foo is string, but the value 123 is assigned, and
          TypeScript reports an error.
        </p>
        <p>
          In addition, TypeScript stipulates that variables can only be used
          after being assigned, otherwise an error will be reported.
        </p>
        <p>
          let x:number; <br />console.log(x) // Error <br />In the above
          example, the variable x is read without being assigned a value,
          resulting in an error. JavaScript allows this behavior and will not
          report an error. Variables that are not assigned a value will return
          undefined.
        </p>
        <h3><a name="t8"></a><a id="22__144"></a>2.2 Type Inference</h3>
        <p>
          Type declarations are not required, and TypeScript will infer the
          types if they are missing.
        </p>
        <p>
          let foo = 123; <br />In the above example, the variable foo has no
          type declaration, so TypeScript infers its type. Since it is assigned
          a numeric value, TypeScript infers its type as number.
        </p>
        <p>
          Later, if the variable foo is changed to a value of another type that
          is inconsistent with the inferred type, TypeScript will report an
          error.
        </p>
        <p>
          let foo = 123; <br />foo = 'hello'; // error <br />In the above
          example, the type of the variable foo is inferred to be number, and
          then assigned to a string, so TypeScript reports an error.
        </p>
        <p>TypeScript can also infer the return value of a function.</p>
        <p>
          function toString(num:number) { <br />return String(num); <br />}
          <br />In the above example, the function toString() does not declare
          the type of the return value, but TypeScript infers that the return
          value is a string. Because of TypeScript's type inference, the type of
          the function return value is usually omitted.
        </p>
        <p>
          From this, we can see that the design concept of TypeScript is that
          type declarations are optional. You can add them or not. Even without
          type declarations, it is still valid TypeScript code, but there is no
          guarantee that TypeScript will correctly infer the type. For this
          reason, all JavaScript code is legal TypeScript code.
        </p>
        <p>
          This design also has the advantage that when you convert a previous
          JavaScript project to a TypeScript project, you can gradually add
          types to the old code, and even if some code is not added, it will not
          fail to run.
        </p>
        <h3>
          <a name="t9"></a><a id="23_TypeScript__169"></a>2.3 TypeScript
          Compilation
        </h3>
        <p>
          JavaScript runtimes (browsers and
          <span
            class="words-blog hl-git-1"
            data-tit="Node.js"
            data-pretit="node.js"
            >Node.js</span
          >
          ) do not recognize TypeScript code. Therefore, in order to run a
          TypeScript project, it must first be converted to JavaScript code.
          This code conversion process is called "compile".
        </p>
        <p>
          TypeScript does not officially provide a runtime environment, but only
          provides a compiler. During compilation, type declarations and
          type-related codes will be deleted, leaving only executable JavaScript
          code, and the JavaScript runtime results will not be changed.
        </p>
        <p>
          Therefore, TypeScript's type checking is only compile-time type
          checking, not runtime type checking. Once the code is compiled into
          JavaScript, the runtime no longer checks the type.
        </p>
        <h3><a name="t10"></a><a id="24_tsc__178"></a>2.4 tsc compiler</h3>
        <p>
          The official compiler provided by TypeScript is called tsc, which can
          compile TypeScript scripts into JavaScript scripts. If you want to
          compile TypeScript code on your machine, you must install tsc.
        </p>
        <p>
          According to convention, TypeScript script files use the .ts suffix,
          and JavaScript script files use the .js suffix. The function of tsc is
          to convert .ts scripts into .js scripts.
        </p>
        <h3>
          <a name="t11"></a><a id="25_tsconfigjson_185"></a>2.5 tsconfig.json
        </h3>
        <p>
          TypeScript allows you to write tsc compilation parameters in the
          configuration file tsconfig.json. As long as this file exists in the
          current directory, tsc will automatically read it, so you don't need
          to write parameters when running.
        </p>
        <p>
          如：<br />
          {<br />
          “files”: [“file1.ts”, “file2.ts”],<br />
          “compilerOptions”: {<br />
          “outFile”: “dist/app.js”<br />
          }<br />
          }
        </p>
        <h2><a name="t12"></a><a id="_any_196"></a>3. Any type</h2>
        <h3><a name="t13"></a><a id="31__197"></a>3.1 Basic meaning</h3>
        <p>
          The any type indicates that there are no restrictions and a variable
          of this type can be assigned a value of any type.
        </p>
        <p>let x:any;</p>
        <p>
          x = 1; // Correct <br />x = 'foo'; // Correct <br />x = true; //
          Correct <br />In the above example, the type of variable x is any, and
          it can be assigned a value of any type.
        </p>
        <p>
          Once the variable type is set to any, TypeScript will actually turn
          off type checking for this variable. Even if there is an obvious type
          error, as long as the syntax is correct, no error will be reported.
        </p>
        <p>let x:any = ‘hello’;</p>
        <p>
          x(1) // No error <br />x.foo = 100; // No error <br />In the above
          example, the value of the variable x is a string, but when calling it
          as a function or reading any property as an object, TypeScript will
          not report an error when compiling. The reason is that the type of x
          is any, and TypeScript does not perform type checking on it.
        </p>
        <p>
          For this reason, you should try to avoid using the any type, otherwise
          it defeats the purpose of using TypeScript.
        </p>
        <p>
          In actual development, the any type is mainly applicable to the
          following two occasions.
        </p>
        <p>
          (1) If you need to disable type checking for certain variables for
          special reasons, you can set the type of the variable to any.
        </p>
        <p>
          (2) To adapt to old JavaScript projects and quickly migrate the code
          to TypeScript, you can set the variable type to any. Some old large
          JavaScript projects, especially other people's code, are difficult to
          adapt the correct type for each line. In this case, if you add any to
          those variables with complex types, TypeScript will not report errors
          when compiling.
        </p>
        <p>
          In short, TypeScript believes that as long as developers use the any
          type, it means that the developers want to handle the code themselves,
          so there are no restrictions on the any type and it can be used in any
          way.
        </p>
        <p>
          From the perspective of set theory, the any type can be seen as the
          complete set of all other types, including all possible types.
          TypeScript calls this type the "top type", meaning that it covers all
          the lower levels.
        </p>
        <h3><a name="t14"></a><a id="32__229"></a>3.2 Pollution Problem</h3>
        <p>
          In addition to turning off type checking, the any type can cause a big
          problem, which is that it can "pollute" other variables. It can be
          assigned to variables of any other type (because there is no type
          checking), causing errors in other variables.
        </p>
        <p>
          let x:any = ‘hello’;<br />
          let y:number;
        </p>
        <p>y = x; // No error</p>
        <p>
          y * 123 // No error <br />y.toFixed() // No error <br />In the above
          example, the type of variable x is any, and the actual value is a
          string. The type of variable y is number, which means it is a numeric
          variable, but it is assigned to x, and no error is reported. Then,
          variable y continues to perform various numerical operations, and
          TypeScript cannot detect any errors, so the problem is left to be
          exposed at runtime.
        </p>
        <p>
          Polluting other variables of the correct type and leaving errors until
          runtime is another major reason why the any type should not be used.
        </p>
        <h3><a name="t15"></a><a id="33_unknown__247"></a>3.3 unknown type</h3>
        <p>
          In order to solve the problem of any type "polluting" other variables,
          TypeScript 3.0 introduced the unknown type. It has the same meaning as
          any, indicating that the type is uncertain and may be any type, but
          its use has some restrictions and is not as free as any. It can be
          regarded as a strict version of any.
        </p>
        <p>
          Unknown is similar to any in that values
          &ZeroWidthSpace;&ZeroWidthSpace;of all types can be assigned to the
          unknown type.
        </p>
        <p>let x:unknown;</p>
        <p>
          x = true; // Correct <br />x = 42; // Correct <br />x = 'Hello World';
          // Correct <br />In the above example, the type of variable x is
          unknown and can be assigned values &ZeroWidthSpace;&ZeroWidthSpace;of
          various types. This is consistent with the behavior of any.
        </p>
        <p>
          The unknown type is different from the any type in that it cannot be
          used directly. There are several main limitations.
        </p>
        <p>
          First, a variable of unknown type cannot be directly assigned to
          variables of other types (except any type and unknown type).
        </p>
        <p>let v:unknown = 123;</p>
        <p>
          let v1:boolean = v; // report an error <br />let v2:number = v; //
          report an error <br />In the above example, the variable v is of
          unknown type, and an error will be reported if it is assigned to a
          variable of any or unknown type. This avoids the pollution problem and
          overcomes a major disadvantage of the any type.
        </p>
        <p>
          Secondly, you cannot directly call methods and properties of unknown
          type variables.
        </p>
        <p>let v1:unknown = { foo: 123 }; <br />v1.foo // error</p>
        <p>let v2:unknown = 'hello'; <br />v2.trim() // error</p>
        <p>
          let v3:unknown = (n = 0) =&gt; n + 1; <br />v3() // Error <br />In the
          above example, directly calling the properties and methods of unknown
          type variables, or directly executing them as functions, will result
          in an error.
        </p>
        <p>
          Again, the operations that can be performed on unknown type variables
          are limited. They are only comparison operations (operators ==, =, !=,
          !, ||, &amp;&amp;, ?), negation operations (operator !), typeof
          operators, and instanceof operators. Other operations will result in
          errors.
        </p>
        <p>let a:unknown = 1;</p>
        <p>
          a + 1 // Error <br />a === 1 // Correct <br />In the above example,
          adding the unknown type variable a will result in an error, because
          this is not allowed. However, comparison operations are allowed.
        </p>
        <p>So, how can we use unknown type variables?</p>
        <p>
          The answer is that unknown type variables can only be used after "type
          narrowing". The so-called "type narrowing" is to narrow the type range
          of unknown variables to ensure that there will be no errors.
        </p>
        <p>let a:unknown = 1;</p>
        <p>
          if (typeof a === 'number') { <br />let r = a + 10; // Correct <br />}
          <br />In the above example, after the typeof operation, the unknown
          type variable a can be determined to be of type number, and can be
          used for addition operations. This is "type narrowing", which is
          narrowing an uncertain type to a more specific type.
        </p>
        <p>Here is another example.</p>
        <p>let s:unknown = ‘hello’;</p>
        <p>
          if (typeof s === 'string') { <br />s.length; // Correct <br />}
          <br />In the above example, the length property of the variable s can
          be called only after determining that the type of the variable s is a
          string.
        </p>
        <p>
          The purpose of this design is to allow the use of unknown variables
          only when their actual type is clear, to prevent them from being
          abused and "polluting" other variables like any. No error will be
          reported if the type is narrowed down before use.
        </p>
        <p>
          In short, unknown can be considered as a safer any. Generally
          speaking, wherever any type is required, unknown type should be given
          priority.
        </p>
        <p>
          In set theory, unknown can also be regarded as the set of all other
          types (except any), so it, like any, is also a top-level type of
          TypeScript.
        </p>
        <h3><a name="t16"></a><a id="34_never__316"></a>3.4 The never type</h3>
        <p>
          In order to maintain the correspondence with set theory and the
          integrity of type operations, TypeScript also introduces the concept
          of "empty type", that is, the type is empty and does not contain any
          value.
        </p>
        <p>
          Since there is no value that belongs to the "empty type", the type is
          called never, that is, it is impossible to have such a value.
        </p>
        <p>let x:never;</p>
        <p>
          In the above example, the type of variable x is never, so it is
          impossible to assign any value to it, otherwise an error will be
          reported.
        </p>
        <p>
          The usage scenario of never type is mainly in some type operations to
          ensure the integrity of type operations. In addition, for functions
          that cannot return values, the return value type can be written as
          never.
        </p>
        <p>
          If a variable may have multiple types (i.e., union types), it is
          usually necessary to use branches to handle each type. In this case,
          after handling all possible types, the remaining cases belong to the
          never type.
        </p>
        <p>
          function fn(x:string|number) {<br />
          if (typeof x === ‘string’) {<br />
          // …<br />
          } else if (typeof x === ‘number’) {<br />
          // …<br />
          } else {<br />
          x; // never 类型<br />
          }<br />
          }
        </p>
        <p>
          In the above example, the parameter variable x may be a string or a
          number. After judging these two cases, in the last else branch, x is
          of type never.
        </p>
        <p>
          An important feature of the never type is that it can be assigned to
          any other type.
        </p>
        <p>
          function f():never {<br />
          throw new Error(‘Error’);<br />
          }
        </p>
        <p>
          let v1:number = f(); // No error <br />let v2:string = f(); // No
          error <br />let v3:boolean = f(); // No error
        </p>
        <p>
          In the above example, function f() throws an error, so the return
          value type can be written as never, which means it is impossible to
          return any value. Various other types of variables can be assigned the
          result of f() (never type).
        </p>
        <p>
          Why can the never type be assigned to any other type? This is also
          related to set theory. The empty set is a subset of any set.
          TypeScript stipulates that any type contains the never type.
          Therefore, the never type is shared by any other type. TypeScript
          calls this situation the "bottom type".
        </p>
        <p>
          In summary, TypeScript has two "top-level types" (any and unknown),
          but only one "bottom-level type" is never.
        </p>
      </div>
    </div>
  </article>
</template>
<script lang="ts" setup>
const isZh = window.location.href.includes("zh/");
</script>
