import{_ as i}from"./chunks/ArticleMetadata.5vOMCf3s.js";import{_ as n,D as l,o as s,c,I as h,w as d,k as r,a as g,R as m,b as _,e as u}from"./chunks/framework.iH3ACABf.js";import"./chunks/md5.1txUmJ3P.js";const b="/page/assets/202103042310166.rxI7UZX-.jpg",R="/page/assets/202103042310266.Svb3sBz0.png",k="/page/assets/202103042310366.sR_oc8cJ.png",f="/page/assets/202103042310566.8FwjgmxN.png",D="/page/assets/202103042310666.8w2WvM0B.png",M="/page/assets/202103042310766.wWlsWBtx.png",q="/page/assets/202103042310866.T24O94JY.png",A="/page/assets/202103042310966.8s0MO1gX.png",x="/page/assets/202103042311166.aWSzZakj.png",P="/page/assets/202103042311266.tm9KqcOI.png",w="/page/assets/202103042311366.dESe6wSr.png",v="/page/assets/202103042311566.RBTA_9tp.png",C="/page/assets/202103042311666._aElRu6q.gif",N="/page/assets/202103042311766.cPXNGwpP.gif",S="/page/assets/202103042311866.sfJa2oDz.gif",T="/page/assets/202103042311966.ebR7R6m_.gif",y="/page/assets/202103042312166.gmgdlxwN.gif",B="/page/assets/202103042312266.HsbpyyCF.gif",X=JSON.parse('{"title":"Another Redis Desktop Manager 快速入门","description":"","frontmatter":{"title":"Another Redis Desktop Manager 快速入门","author":"查尔斯","date":"2021/03/04 23:19","categories":["工具四海谈"],"tags":["Redis","管理工具"]},"headers":[],"relativePath":"categories/tools/2021/03/04/ARDM快速入门.md","filePath":"categories/tools/2021/03/04/ARDM快速入门.md","lastUpdated":1667545308000}'),O={name:"categories/tools/2021/03/04/ARDM快速入门.md"},V=r("h1",{id:"another-redis-desktop-manager-快速入门",tabindex:"-1"},[g("Another Redis Desktop Manager 快速入门 "),r("a",{class:"header-anchor",href:"#another-redis-desktop-manager-快速入门","aria-label":'Permalink to "Another Redis Desktop Manager 快速入门"'},"​")],-1),$=m('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>之前，笔者发布过一篇有关于 Redis 可视化客户端：RDM 的介绍文章，有童鞋看了后留言给笔者说：“RDM 不怎么好用，建议试试 Another Redis Desktop Manager。“</p><p>实际上，虽然笔者发的是 RDM，但近段时间一直在用的就是 ARDM。当然了，这不是笔者藏着掖着，而是因为资源不得一点点发吗？而且，还是有童鞋在用 RDM 的，习惯一个工具之后，随便更换也是需要学习成本不是？</p><p><img src="'+b+'" alt="202103042310166"></p><p>OK，本篇笔者就要给童鞋们分享一下这个所谓的 ARDM。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">简介</p><p>Another Redis Desktop Manager，一个更快，更好，更稳定的 Redis 桌面管理器，兼容 Linux, windows, mac。更重要的是，它不会在加载大量的键时崩溃。[1]</p><p>顾名思义，Another Redis Desktop Manager 就是 另一个 RDM 的意思，它在功能方面和 RDM 大体没什么区别，不过在 UI 和体验上的确更胜一筹。</p><p>这个项目从 2019 年 2 月份就开始了，开源且免费提供打包版本，更新到今天也不短的时间了，所以关于稳定性的问题就暂时不用担心了。[2]</p></div><p><img src="'+R+'" alt="202103042310266"></p><h2 id="下载" tabindex="-1">下载 <a class="header-anchor" href="#下载" aria-label="Permalink to &quot;下载&quot;">​</a></h2><p>打开 GitHub 直接搜索 AnotherRedisDesktopManager 项目，然后点击项目右下方的最新发行版，就可以跳转到对应的版本下载页面了。</p><p><img src="'+k+'" alt="202103042310366"></p><p>当然，也可以直接复制本文最后参考资料 [2] 的下载地址，然后在 PC 浏览器打开，也同样可以跳转到最新版的下载页面。</p><p>然后，根据你的系统情况选择合适的版本下载吧。</p><p><img src="'+f+'" alt="202103042310566"></p><p>下载好了，一个平平无奇的 exe 安装包。</p><p><img src="'+D+'" alt="202103042310666"></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>接下来，我们 “傻瓜式” 安装即可。</p><p><img src="'+M+'" alt="202103042310766"></p><p>改动一下安装位置，这个目录专门放开发工具，是笔者以前逐渐养成的个人习惯。</p><p><img src="'+q+'" alt="202103042310866"></p><p><img src="'+A+'" alt="202103042310966"></p><p><img src="'+x+'" alt="202103042311166"></p><h2 id="连接服务器" tabindex="-1">连接服务器 <a class="header-anchor" href="#连接服务器" aria-label="Permalink to &quot;连接服务器&quot;">​</a></h2><p>安装完成后，直接打开，界面可真是简洁到家了。</p><p><img src="'+P+'" alt="202103042311266"></p><p>连接服务器的步骤也和 RDM 差不多，点击左上角的 [新建连接]。</p><p>进入到新建连接界面之后，依次填写 [Redis 服务器地址，Redis 端口号，Redis 密码，连接名] 后即可点击 [确定] 来新建一个连接。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>如果你要连接的 Redis 就在本机，并且你没改过什么默认设置（端口、密码等），你甚至只需要在这个界面点一下确定就可以新建好一个连接。</p></div><p><img src="'+w+'" alt="202103042311366"></p><p><img src="'+v+'" alt="202103042311566"></p><h2 id="常见使用" tabindex="-1">常见使用 <a class="header-anchor" href="#常见使用" aria-label="Permalink to &quot;常见使用&quot;">​</a></h2><p>虽然，笔者觉得 ARDM 和 RDM 在功能上大体是一样的，但为了照顾小白们的感受，笔者还是按当初介绍 RDM 的步骤再演示一下常见操作。</p><h3 id="查看所有键" tabindex="-1">查看所有键 <a class="header-anchor" href="#查看所有键" aria-label="Permalink to &quot;查看所有键&quot;">​</a></h3><p>单击连接名，就可以打开单个连接，默认是处于 0 号数据库，可以根据需求进行数据库切换。另外，打开连接时默认还会在右侧打开当前 Redis 的服务监控。</p><p><img src="'+C+'" alt="202103042311666"></p><h3 id="存储键" tabindex="-1">存储键 <a class="header-anchor" href="#存储键" aria-label="Permalink to &quot;存储键&quot;">​</a></h3><p>ARDM 中存储键是先新增一个 key，这个 key 默认什么也没存储，你需要再为这个 key 设置下 value，这一步实际就是下面的修改操作。</p><p><img src="'+N+'" alt="202103042311766"></p><h3 id="修改值" tabindex="-1">修改值 <a class="header-anchor" href="#修改值" aria-label="Permalink to &quot;修改值&quot;">​</a></h3><p><img src="'+S+'" alt="202103042311866"></p><h3 id="修改过期时间" tabindex="-1">修改过期时间 <a class="header-anchor" href="#修改过期时间" aria-label="Permalink to &quot;修改过期时间&quot;">​</a></h3><p><img src="'+T+'" alt="202103042311966"></p><h3 id="删除键" tabindex="-1">删除键 <a class="header-anchor" href="#删除键" aria-label="Permalink to &quot;删除键&quot;">​</a></h3><p>刚才我们给 <code>name</code> 这个键设置了 5 秒过期之后，唯一存储的数据也没了，我们再新建一个，然后来测试一下删除功能。</p><p><img src="'+y+'" alt="202103042312166"></p><h3 id="命令行操作" tabindex="-1">命令行操作 <a class="header-anchor" href="#命令行操作" aria-label="Permalink to &quot;命令行操作&quot;">​</a></h3><p>当你想用命令行操作时，ARDM 同样也可以直接打开控制台连接 Redis 服务器。</p><p><img src="'+B+'" alt="202103042312266"></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p>[1]Another Redis Desktop Manager GitHub 地址：<a href="https://github.com/qishibo/AnotherRedisDesktopManager" target="_blank" rel="noreferrer">https://github.com/qishibo/AnotherRedisDesktopManager</a></p><p>[2]Another Redis Desktop Manager 下载地址：<a href="https://github.com/qishibo/AnotherRedisDesktopManager/releases" target="_blank" rel="noreferrer">https://github.com/qishibo/AnotherRedisDesktopManager/releases</a></p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p><strong>C：</strong> 好了，ARDM 的介绍就到这儿结束了，至于其他的功能，自行去发现体验吧，那样才更有乐趣，不是吗？</p><p>当然，本篇介绍完，笔者暂时就不会再推荐其他 Redis 可视化客户端了，也许后面有后起之秀，到那时候再说吧，也欢迎童鞋们再留言告诉我。</p>',55);function I(a,E,J,W,j,z){const o=i,p=l("ClientOnly");return s(),c("div",null,[V,h(p,null,{default:d(()=>{var e,t;return[(((e=a.$frontmatter)==null?void 0:e.aside)??!0)&&(((t=a.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(s(),_(o,{key:0,article:a.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),$])}const F=n(O,[["render",I]]);export{X as __pageData,F as default};
