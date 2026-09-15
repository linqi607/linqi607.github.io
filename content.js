export const profile = {
  name: '林栖', title: '林栖｜个人作品集', role: 'AI内容策划 / 视频创作',
  photo: '/assets/profile/portrait-01.jpg',
  photos: [
    '/assets/profile/portrait-01.jpg',
    '/assets/profile/portrait-02.jpg',
    '/assets/profile/portrait-03.jpg',
    '/assets/profile/portrait-04.jpg',
    '/assets/profile/portrait-05.jpg',
    '/assets/profile/portrait-06.jpg'
  ],
  birth: '1997.12.9', city: '北京', phone: '18769660076', email: '1179522496@qq.com',
  summary: '4年以上内容创作与运营经验，具备内容策划、脚本、分镜、拍摄、AI生成与后期剪辑能力，持续探索内容与生成式AI结合的创作方式。',
  skills: ['内容策划', '脚本与分镜', '拍摄与剪辑', 'AI内容创作'],
  experience: [], education: [], pdf: '/resume.pdf'
};
export const categories = [
  {id:'video', title:'视频作品', en:'MOTION & FILM', subtitle:'商业短片 · AI视频 · 创意实验', description:'用镜头组织叙事，让想象成为画面。', items:[
    {
      id:'apple-sausage', title:'如果苹果做烤肠', group:'aigc', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/apple-sausage.mp4?v=20260915',
      poster:'/assets/video-covers/apple-sausage.png', duration:'00:23', format:'横屏', caseStudy:'production',
      production:{
        sections:[
          {title:'项目背景', body:'参考苹果广告的创意，将苹果的产品发布语言迁移到日常食物，延展出「如果苹果做烤肠」。'},
          {title:'我的职责', body:'独立完成创意策划、脚本分镜、视觉设定、AI提示词、生成画面、文案及后期成片。'},
          {title:'创作流程', body:'拆解苹果视觉语言 → 转译烤肠卖点 → 设计分镜与转场 → 生成关键帧 → AI视频生成 → 剪辑包装。'},
          {title:'复盘总结', body:'难点在产品一致性、复杂运动和丝滑转场；通过动作拆解、首尾帧衔接和多轮迭代提升可控性，形成「品牌语言迁移 + AI视觉化」的创作方法。'}
        ],
        tools:[
          {label:'生图模型', value:'GPT image 2、Nano Banana'},
          {label:'视频模型', value:'MiniMax H3'}
        ],
        image:'/assets/case-studies/apple-sausage-workflow.png'
      }
    },
    {
      id:'ai-car', title:'仿 · 小米汽车广告片', group:'aigc', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/ai-car.mp4',
      poster:'/assets/video-covers/ai-car.png', duration:'00:31', format:'横屏', caseStudy:'production',
      production:{
        note:'该视频我一人独立完成；一开始只是随便生成了几张汽车图片，没有提前统一 Logo、内饰、轮毂等资产，很多细节并不准确；但不想浪费积分，便继续完成了整支影片。如果用于专业商业项目，我会严格把控生成镜头中产品的真实性，并保持所有镜头的资产一致。',
        sections:[
          {title:'项目背景', body:'以小米 YU7 为主体完成一支非官方 AI 汽车概念片，将车辆置于新疆冬季自然环境中，尝试用完整广告片结构呈现产品质感与行驶体验。'},
          {title:'我的职责', body:'独立负责创意策划、脚本设计、分镜规划、AI 图像生成、图生视频统筹，以及后期剪辑、节奏调整与成片整合。'},
          {title:'创作流程', body:'收集参考图 → 确定赛里木湖、盘龙古道与冬窝子三组场景 → 制作分镜板验证结构 → 拆分单张关键帧 → 编写静帧与图生视频提示词 → 逐镜生成 → 剪辑输出。'}
        ],
        tools:[
          {label:'生图模型', value:'GPT Image 2'},
          {label:'视频模型', value:'seedance2.0、MiniMax H3'}
        ],
        storyboards:[
          {src:'/assets/case-studies/ai-car/storyboard-overview.png', caption:'整体视觉分镜板'},
          {src:'/assets/case-studies/ai-car/storyboard-route.png', caption:'赛里木湖至盘龙古道分镜板'},
          {src:'/assets/case-studies/ai-car/storyboard-winter-nest.png', caption:'冬窝子模块分镜板'}
        ],
        generatedImages:[
          {src:'/assets/case-studies/ai-car/frame-lake-wide.png', caption:'赛里木湖开场大全景'},
          {src:'/assets/case-studies/ai-car/frame-side-track.png', caption:'湖岸公路侧向跟车'},
          {src:'/assets/case-studies/ai-car/frame-hero-front.png', caption:'前侧 3/4 产品英雄镜头'},
          {src:'/assets/case-studies/ai-car/frame-interior-drive.png', caption:'车内驾驶视角'},
          {src:'/assets/case-studies/ai-car/frame-mountain-drive.png', caption:'盘龙古道行驶镜头'},
          {src:'/assets/case-studies/ai-car/winter-rearview.png', caption:'后视镜公路视角'},
          {src:'/assets/case-studies/ai-car/winter-lake-road.png', caption:'湖岸雪路航拍'},
          {src:'/assets/case-studies/ai-car/winter-forest-road.png', caption:'雪林道路俯拍'},
          {src:'/assets/case-studies/ai-car/winter-snowfield-drive.png', caption:'雪原行驶镜头'},
          {src:'/assets/case-studies/ai-car/winter-mountain-wide.png', caption:'山谷超远景'},
          {src:'/assets/case-studies/ai-car/winter-hero-front.png', caption:'车辆前侧英雄镜头'},
          {src:'/assets/case-studies/ai-car/winter-wheel.png', caption:'雪地轮毂特写'},
          {src:'/assets/case-studies/ai-car/winter-side-profile.png', caption:'雪原侧向跟车'},
          {src:'/assets/case-studies/ai-car/storyboard-winter-rear-drive.png', caption:'雪原道路跟车'},
          {src:'/assets/case-studies/ai-car/storyboard-winter-interior.png', caption:'车内驾驶视角'},
          {src:'/assets/case-studies/ai-car/storyboard-winter-mountain-road.png', caption:'雪山公路远景'}
        ],
        videoProcess:[
          {src:'/assets/case-studies/ai-car/video-generation-workflow.png', caption:'多组关键帧输入与 AI 视频生成工作流'},
          {src:'/assets/case-studies/ai-car/video-generation-prompts.png', caption:'分镜提示词组织与镜头生成过程'}
        ]
      }
    },
    {
      id:'chongqing', title:'重庆这座城市有多硬核', group:'aigc', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing.mp4',
      poster:'/assets/video-covers/chongqing.png', duration:'00:42', format:'竖屏', caseStudy:'production',
      production:{
        note:'团队作品，我负责前期的内容策划，包括资料搜集、转场镜头、创意文案、部分图像生成、部分后期制作。',
        link:{label:'在抖音查看原视频',url:'https://v.douyin.com/kNW2fDGJ8UY/'},
        metrics:[
          {value:'抖音', label:'发布平台'},
          {value:'250W', label:'播放'},
          {value:'8.4W', label:'获赞'},
          {value:'1747', label:'评论'},
          {value:'5300', label:'收藏'},
          {value:'1.6W', label:'转发'}
        ],
        sections:[
          {title:'前期资料', body:'围绕重庆「8D 山城、立体交通、赛博城市」等核心特征，收集城市地标、建筑、交通结构、航拍图片及相关数据信息，从真实城市特征中筛选具有视觉奇观感的内容。'},
          {title:'Previz / K 动画', body:'在正式生成前，提前设计镜头运动和空间关系，通过白膜、动画 K 帧等进行镜头预演，确定俯冲、穿越、跟随、拉升等运镜轨迹，以及主体在画面中的位置和节奏。'},
          {title:'AI 生图', body:'结合真实重庆素材、视觉参考和前期镜头设计，通过 AI 完成关键帧生成，将现实城市进一步强化为具有赛博感、游戏地图感和视觉奇观感的城市空间。'},
          {title:'图生视频', body:'以关键帧为基础进行图生视频，并结合前期设计好的运动逻辑，让静态画面形成高速俯冲、建筑穿越、贴地飞行、镜头拉升等动态效果。这一阶段重点解决的不是单纯「让图片动起来」，而是让镜头运动服务于城市空间的展示。'},
          {title:'AE 特效', body:'针对 AI 难以精准生成的部分进行二次加工，包括建筑扫描、路线高亮、数据标注及镜头之间的特效衔接，进一步强化整支影片的科技感、游戏感和信息密度。'},
          {title:'PR 成片', body:'将 AI 生成、动画 K 帧、实拍与网络素材及 AE 特效统一进行剪辑，根据音乐重新调整镜头长短和视觉节奏，并完成音效、转场和整体包装。'}
        ],
        finalOutcome:'城市奇观 × 高速炫技运镜 × 三维数据可视化 × 游戏化 UI × AI 视觉增强',
        processLogic:'真实城市信息 → 镜头预演 → AI 视觉重构 → 动态生成 → 后期特效增强 → 节奏化成片',
        technicalImages:[
          {src:'/assets/case-studies/chongqing/white-model-street-gray.jpg', caption:'城市街道白膜镜头'},
          {src:'/assets/case-studies/chongqing/white-model-bridge.jpg', caption:'跨江大桥与城市白膜'},
          {src:'/assets/case-studies/chongqing/previz-liziba-split.jpg', caption:'李子坝镜头预演与成图对照'},
          {src:'/assets/case-studies/chongqing/previz-hillside-split.jpg', caption:'山地建筑镜头预演与成图对照'},
          {src:'/assets/case-studies/chongqing/white-model-river-city.jpg', caption:'两江交汇城市白膜'},
          {src:'/assets/case-studies/chongqing/white-model-liziba-wide.jpg', caption:'李子坝建筑与轨道白膜'},
          {src:'/assets/case-studies/chongqing/white-model-road-gray.jpg', caption:'道路镜头灰模预演'},
          {src:'/assets/case-studies/chongqing/white-model-road-lit.jpg', caption:'道路镜头材质与灯光预演'}
        ],
        generatedImages:[
          {src:'/assets/case-studies/chongqing/ai-overpass-close.jpg', caption:'立体高架道路构图'},
          {src:'/assets/case-studies/chongqing/ai-overpass-city.jpg', caption:'高架与城市空间关系'},
          {src:'/assets/case-studies/chongqing/ai-liziba.jpg', caption:'李子坝轨道穿楼场景'},
          {src:'/assets/case-studies/chongqing/ai-overpass-wide.jpg', caption:'山城立交全景'},
          {src:'/assets/case-studies/chongqing/ai-hillside-city.jpg', caption:'山地建筑与道路场景'},
          {src:'/assets/case-studies/chongqing/ai-residential-valley.jpg', caption:'山谷住宅与城市绿地'},
          {src:'/assets/case-studies/chongqing/ai-jiefangbei-street.jpg', caption:'解放碑商圈街景'},
          {src:'/assets/case-studies/chongqing/ai-river-confluence.jpg', caption:'两江交汇城市全景'}
        ],
        demoVideos:[
          {src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing-previz-opening.mp4?v=20260915', title:'开场简模预演'},
          {src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing-final-opening.mp4?v=20260915', title:'开场成片对比'},
          {src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing-liziba-demo.mp4?v=20260915', title:'李子坝镜头测试'},
          {src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing-bridge-demo.mp4?v=20260915', title:'桥梁镜头测试'},
          {src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing-water-vapor.mp4?v=20260915', title:'水汽效果测试'},
          {src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/chongqing-english-version.mp4?v=20260915', title:'英文版成片'}
        ]
      }
    },
    {id:'doll-transformation', title:'电子娃娃换装', group:'aigc', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/doll-transformation.mp4', poster:'/assets/video-covers/doll-transformation.png', duration:'00:16', format:'竖屏', detail:{tools:[{label:'生图',value:'GPT Image 2'},{label:'视频',value:'MiniMax H3'}], note:'积分不够，生成的最低画质，所以远景的人脸有点崩，且每个视频只抽了一两次卡，完成度不算特别高，如果我有更多积分就好了!'}},
    {id:'ai-director-shots', title:'用AI复刻了迈克尔贝镜头+杜琪峰站位', group:'aigc', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/ai-director-shots.mp4', poster:'/assets/video-covers/ai-director-shots.png', duration:'01:57', format:'横屏', hideDefaultInfo:true},
    {id:'codex-color-flow', title:'用codex做的色彩流动工具', group:'aigc', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/codex-color-flow.mp4', poster:'/assets/video-covers/codex-color-flow.png', duration:'00:32', format:'竖屏', detail:{note:'部署到Github了，可直接打开玩耍（得有vpn）：',link:{label:'https://linqi607.github.io/color-awakening/?v=3',url:'https://linqi607.github.io/color-awakening/?v=3'}}},
    {id:'chen-xiaonan-ip', title:'【高管IP】陈晓楠个人IP内容', group:'other', poster:'/assets/video-covers/chen-xiaonan-ip.png', caseStudy:'executive-ip', caseImage:'/assets/case-studies/xiaonan-talk-overview.png'},
    {id:'yangning', title:'【人物访谈】网红教师杨宁', group:'other', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/yangning.mp4', poster:'/assets/video-covers/yangning.png', duration:'09:48', format:'横屏', detail:{note:'团队作品，我负责整体的内容策划与运营，包括资料搜集、采访提纲、现场统筹、监督制作、部分剪辑、后期上线运营和传播。',link:{label:'在 bilibili 查看原视频',url:'https://www.bilibili.com/video/BV1eS4y1U7Za/?spm_id_from=333.337.search-card.all.click&vd_source=870a28d38612ec6856a3501bea7500bd'},metrics:[{label:'发布平台',value:'bilibili'},{label:'播放',value:'10.9W'},{label:'点赞',value:'7129'},{label:'投币',value:'2349'},{label:'收藏',value:'2472'},{label:'分享',value:'881'},{label:'弹幕',value:'696'}]}},
    {id:'workday', title:'【综艺街采】工作日为什么不上班', group:'other', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/workday.mp4', poster:'/assets/video-covers/workday.png', duration:'05:16', format:'横屏', detail:{note:'除拍摄外，该视频由我一人独立完成，包括选题、采访和后期制作；拍摄时我正在进行采访。',link:{label:'在小红书查看原视频',url:'https://www.xiaohongshu.com/explore/658e96cf00000000120073e9?xsec_token=ABWo0WVHRUW7h31FRro7bKSIHi5BCyGJd7gt8ySmf1Wrw=&xsec_source=pc_search'},metrics:[{label:'发布平台',value:'小红书'},{label:'点赞',value:'5936'},{label:'收藏',value:'1157'},{label:'评论',value:'343'}]}},
    {id:'handup-comedy', title:'【影视剪辑】《举起手来》名场面', group:'other', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/handup-comedy.mp4', poster:'/assets/video-covers/handup-comedy.png', duration:'02:52', format:'横屏', detail:{note:'该视频由我一人独立制作完成；目前播放量全站排行榜最高第79名。',link:{label:'在 bilibili 查看原视频',url:'https://www.bilibili.com/video/BV1Z44y1y7qX/?from=search&seid=3464388701534195799&vd_source=870a28d38612ec6856a3501bea7500bd'},metrics:[{label:'发布平台',value:'bilibili'},{label:'播放',value:'583.5W'},{label:'全站排行',value:'最高第79名'},{label:'点赞',value:'33.7W'},{label:'投币',value:'2.2W'},{label:'收藏',value:'3.4W'},{label:'分享',value:'1.5W'},{label:'弹幕',value:'5549'}]}},
    {id:'personal-vlog', title:'【个人Vlog】关于南疆', group:'other', src:'https://github.com/linqi607/linqi607.github.io/releases/download/media-v1/personal-vlog.mp4', poster:'/assets/video-covers/personal-vlog.jpg', duration:'01:18', format:'竖屏', hideDefaultInfo:true}
  ]},
  {id:'writing', title:'文字作品', en:'WORDS & IDEAS', subtitle:'历史叙事 · 影视内容 · 教育资讯', description:'以资料为起点，把复杂信息组织成清晰、有吸引力的内容。', items:[
    {platform:'腾讯文档',type:'历史题材内容',title:'【人物故事】民国四大奇案之 酱园弄杀夫案',description:'围绕“酱园弄”真实案件与历史背景展开的叙事型内容稿。',meta:'1179 字',url:'https://docs.qq.com/doc/DR1hnRUphbkpjTW5r?no_promotion=1'},
    {platform:'腾讯文档',type:'影视史实内容',title:'【历史故事】电影《南京照相馆》原型故事',description:'从史实切入，讲述守护南京大屠杀影像证据的青年故事，并连接电影《南京照相馆》。',meta:'1126 字',url:'https://docs.qq.com/doc/DR2NDcGJiSnFqd21u'},
    {platform:'微信公众号',type:'公众号长文',title:'【影节影展】除了金鸡百花，你还知道哪些国内主流电影节',description:'公众号发布的长文作品，点击进入微信原文查看完整内容。',meta:'微信原文',url:'https://mp.weixin.qq.com/s/Icmcy61qMo5hCyCLM6W7ug'},
    {platform:'微信公众号',type:'公众号长文',title:'【国创推荐】时光代理人：现在的我们 一定能做些什么',description:'公众号发布的长文作品，点击进入微信原文查看完整内容。',meta:'微信原文',url:'https://mp.weixin.qq.com/s?__biz=MzUxNzcwMTAxOA==&mid=2247483953&idx=1&sn=fd0959e94c6d45870a708210d93a4602&chksm=f9956ec4cee2e7d2257b55e45bd0b046462facbb7d2c8c04e1ef7476c29453450e5c598b69d6&token=858740298&lang=zh_CN#rd'},
    {platform:'凤凰网',type:'教育资讯',title:'【新闻报道】教育部印发《普通高等学校宪法学教学重点指南》',description:'围绕高校宪法学教学重点与人才培养要求，对《指南》的主要内容进行信息梳理。',meta:'2021/11/12 · 17.8W 阅读',url:'https://ishare.ifeng.com/c/s/v006t5JuL2SUz856edvFiCBVP0LIeUYkH4fL3i3b8SRPubQZ9NikwSYYROnrgxoO0Tya?spss=np&channelId=JY90&aman=fgL043tr3r9fgMiQ04wYzUC3Nj9kyY7mZl5OGFjiYW1U31q00v&gud=2r9067767r179Y800n000b004'}
  ]},
  {id:'projects', title:'项目作品', en:'PROCESS & PRACTICE', subtitle:'项目策划 · 内容统筹 · 总结呈现', description:'从项目现场到成果沉淀，完整呈现一次教育峰会的内容脉络。', items:[
    {
      title:'“育见美好”2021 凤凰网教育峰会',
      year:'2021',
      overview:'“育见美好”教育峰会是由凤凰网教育频道主办，全球教育50人论坛、联合国教科文组织高等教育创新中心协作承办的互联网大型教育峰会。',
      topics:['焦点新闻','主旨演讲','圆桌论坛','获奖名单','人物专访'],
      links:[
        {kind:'线上专题',title:'“育见美好”2021凤凰网教育峰会',description:'汇集峰会焦点新闻、嘉宾演讲、圆桌讨论、获奖信息与人物专访。',action:'浏览线上专题',url:'https://edu.ifeng.com/c/special/8BQRfSjN3RI'},
        {kind:'腾讯云 PPT · 38 页',title:'育见美好2021凤凰网教育峰会项目总结',description:'对峰会项目内容、传播成果与执行过程进行系统梳理。',note:'PPT 由我一人独立制作完成。',action:'查看云 PPT',url:'https://docs.qq.com/slide/DR2thekNTVFhDcW5j'}
      ]
    }
  ]},
  {id:'visual', title:'图片作品', en:'STILLS & IMAGINATION', subtitle:'个人摄影作品', description:'拍摄设备：索尼A7M3、佳能200DII、尼康D7100', items:[
    {src:'/assets/photography/01-sailboat-snow-lake.png',caption:'湖上帆影与雪山'},
    {src:'/assets/photography/02-snow-mountain-reflection.png',caption:'雪峰与湖面倒影'},
    {src:'/assets/photography/03-sunlit-snow-peaks.png',caption:'云下雪峰'},
    {src:'/assets/photography/04-golden-snow-peak-reflection.png',caption:'日照金山与倒影'},
    {src:'/assets/photography/05-alpine-meadow-riders.png',caption:'雪山花海与骑行者'},
    {src:'/assets/photography/06-snow-valley-river.png',caption:'雪谷河流'},
    {src:'/assets/photography/07-pamir-horses.png',caption:'高原牧场'},
    {src:'/assets/photography/08-sunset-sea-silhouette.png',caption:'夕阳海面剪影'},
    {src:'/assets/photography/09-coastal-city.png',caption:'海岸与城市'},
    {src:'/assets/photography/10-city-aerial.png',caption:'城市天际线'},
    {src:'/assets/photography/11-moon-nikon.png',caption:'月面特写'}
  ]}
];
export const images = { landscape: '/assets/landscape.jpg', forest: '/assets/forest.jpg', architecture: '/assets/architecture.jpg' };
