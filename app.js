import {resume} from './resume-data.js';
import {profile as p,categories,images} from './content.js';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow='<span aria-hidden="true">↗</span>';
function Header(home){return `<header><a class="brand" href="/">${esc(p.title)}</a>${home?'':`<nav aria-label="主导航"><a href="/">首页</a>${categories.map(c=>`<a href="/${c.id}" ${location.pathname.replace(/\/$/,'').startsWith('/'+c.id)?'aria-current="page"':''}>${c.title}</a>`).join('')}</nav>`}</header>`;}
function Details(){return `<dl class="details">${[['出生年月',p.birth],['所在城市',p.city],['手机',p.phone],['邮箱',p.email]].map(([k,v])=>`<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>`;}
function ProfileCard(){const photos=p.photos?.length?p.photos:[p.photo];return `<aside class="profile profile-plain"><div class="identity"><div class="profile-carousel" aria-roledescription="轮播图" aria-label="个人照片"><img class="profile-photo" src="${esc(photos[0])}" alt="个人照片 1 / ${photos.length}" draggable="false"><button class="profile-carousel-arrow profile-carousel-prev" type="button" aria-label="查看上一张照片">‹</button><button class="profile-carousel-arrow profile-carousel-next" type="button" aria-label="查看下一张照片">›</button><div class="profile-carousel-dots" aria-label="选择照片">${photos.map((_,index)=>`<button type="button" aria-label="查看第 ${index+1} 张照片" ${index===0?'aria-current="true"':''}></button>`).join('')}</div></div><p>${esc(p.role)}</p></div>${Details()}<button class="resume-trigger resume-link">查看完整简历 <span aria-hidden="true">→</span></button></aside>`;}
function Preview(id){if(id==='video')return `<div class="preview film"><img src="${images.landscape}" alt=""/><span class="film-label">MOTION STUDIES</span><span class="play">▷</span><span class="sample">示意封面</span><div class="film-line"></div></div>`;
if(id==='writing')return '<div class="preview writing-preview"><div class="paper"><span class="paper-kicker">创作随笔 / 示例排版</span><h3>在日常里，<br>寻找新的表达。</h3><div class="text-lines"></div><span class="paper-bottom">观察 &nbsp; / &nbsp; 思考 &nbsp; / &nbsp; 叙事</span></div><div class="paper-behind"></div></div>';
if(id==='projects')return '<div class="preview project-preview"><div class="workflow"><span>01 &nbsp; 创意构思</span><i>→</i><span>02 &nbsp; 脚本分镜</span><i>↓</i><span>04 &nbsp; 后期剪辑</span><i>←</i><span>03 &nbsp; AI 生成</span></div><div class="prompt"><span>PROMPT / 工作流示意</span><p>自然光 · 电影感 · 细腻的叙事</p><div class="mini-lines"></div></div></div>';
return `<div class="preview visual-preview"><img class="visual-one" src="${images.forest}" alt=""/><img class="visual-two" src="${images.architecture}" alt=""/><span class="sample">视觉素材示意</span></div>`;}
function WorkCard(c,i){return `<a class="work-card glass ${c.id}" style="--order:${i}" href="/${c.id}"><h2>${esc(c.title)}</h2><span class="entry-arrow" aria-hidden="true">→</span></a>`;}
function Home(){return `<main class="home">${ProfileCard()}<section class="work-grid" aria-label="作品分类">${categories.map(WorkCard).join('')}</section></main>`;}
function ResumeBullets(items){return `<ul>${items.map(item=>{const colon=item.indexOf('：');return `<li>${colon>0&&colon<15?`<strong>${esc(item.slice(0,colon+1))}</strong>${esc(item.slice(colon+1))}`:esc(item)}</li>`;}).join('')}</ul>`;}
function ResumeBody(){return `<div class="cv-heading"><div class="cv-identity"><h1>${esc(resume.name)}</h1><div class="cv-contact"><span>电话：${esc(resume.phone)}</span><span>邮箱：${esc(resume.email)}</span><span>现居城市：${esc(resume.city)}</span></div><p>生日：${esc(resume.birth)}</p></div><img class="cv-photo" src="${esc(resume.photo)}" alt="刘林栖个人照片"></div>${resume.sections.map((section,i)=>`<section class="cv-section" id="resume-section-${i}"><h2>${esc(section.title)}</h2>${section.title==='个人作品'?section.paragraphs.map(url=>`<a class="cv-portfolio" href="${esc(url)}" target="_blank" rel="noopener noreferrer">个人作品集（飞书文档） ↗</a>`).join(''):section.paragraphs.length?ResumeBullets(section.paragraphs):''}${section.entries.map(entry=>`<article class="cv-entry"><div class="cv-entry-heading"><h3>${esc(entry.title)}</h3><span>${esc(entry.period)}</span></div>${entry.bullets.length?ResumeBullets(entry.bullets):''}</article>`).join('')}</section>`).join('')}`;}
function ResumePage(){return `<main class="cv-page"><div class="cv-toolbar"><a class="back" href="/">← 返回首页</a></div><div class="cv-document">${ResumeBody()}</div><div class="cv-bottom"><a class="button" href="${esc(p.pdf)}" download="刘林栖工作简历.pdf">下载 PDF ↓</a></div></main>`;}
function VideoCard(item){return `<a class="video-item" href="/video/${esc(item.id)}" aria-label="查看${esc(item.title)}详情"><div class="video-frame">${item.src?`<video class="video-preview" preload="metadata" muted playsinline tabindex="-1"${item.poster?` poster="${esc(item.poster)}"`:''}><source src="${esc(item.src)}" type="video/mp4"></video>`:`<img src="${esc(item.poster)}" alt="">`}<span class="video-open">查看作品 →</span></div><div class="video-meta"><h2>${esc(item.title)}</h2></div></a>`;}
function VideoPage(c){const groups=[['AIGC 创作','aigc'],['其他视频创作','other']];return `<main class="video-page"><div class="video-intro"><a class="back" href="/">← 返回首页</a></div>${groups.map(([label,key])=>`<section class="video-group" aria-labelledby="video-group-${key}"><h2 id="video-group-${key}">${label}</h2><div class="video-gallery">${c.items.filter(item=>item.group===key).map(VideoCard).join('')}</div></section>`).join('')}</main>`;}
function ExecutiveIpDetail(item){return `<main class="video-detail case-detail"><div class="detail-toolbar"><a class="back" href="/video">← 返回视频作品</a><span>账号运营案例</span></div><section class="case-hero"><p class="section-label">高管 IP 内容运营</p><h1>${esc(item.title)}</h1><p class="case-lead">负责腾讯网副总编辑、首席主持人陈晓楠的个人 IP 账号「晓楠TALK」微信视频号内容策划、制作与运营。</p><div class="wechat-guide"><div><span>微信视频号</span><strong>搜索「晓楠TALK」</strong></div><p>视频号暂无可用的外部作品链接，请在微信视频号内搜索账号名称，进入主页查看完整视频内容。</p></div></section><section class="case-results"><p class="section-label">核心成果</p><div class="case-metrics">${[['70+','独立产出中视频'],['40+','爆款视频'],['300万+','单条最高播放量'],['10万+','单条最高转评赞'],['30万+','在职期间累计涨粉']].map(([value,label])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join('')}</div></section><section class="case-work"><div><p class="section-label">我的职责</p><h2>从账号搭建到稳定运营</h2></div><div class="case-responsibilities">${[['账号搭建','参与账号从 0 到 1 的定位与内容体系搭建。'],['选题策划','围绕人文、社会与全球故事完成选题筛选和内容策划。'],['拍摄制作','负责布景、拍摄及后期包装等视频制作环节。'],['运营复盘','结合内容表现持续优化选题与表达，形成稳定内容输出。']].map(([title,body])=>`<article><h3>${title}</h3><p>${body}</p></article>`).join('')}</div></section><figure class="case-evidence"><img src="${esc(item.caseImage)}" alt="晓楠TALK微信视频号主页及作品数据截图"><figcaption>晓楠TALK · 微信视频号主页及部分内容表现</figcaption></figure></main>`;}
function VideoNote(note,tools=[],link){if(!note&&!tools.length&&!link)return '';return `<section class="video-note">${note||link?`<div class="video-note-copy"><h2>制作说明</h2>${note?`<p>${esc(note)}</p>`:''}${link?`<a class="video-note-link" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label||link.url)} <span aria-hidden="true">↗</span></a>`:''}</div>`:''}${tools.length?`<div class="video-note-tools">${tools.map(tool=>`<div><span>${esc(tool.label)}</span><strong>${esc(tool.value)}</strong></div>`).join('')}</div>`:''}</section>`;}
function DetailMetrics(metrics=[]){if(!metrics.length)return '';return `<section class="detail-metrics"><p class="section-label">传播数据</p><h2>数据表现</h2><div class="detail-metrics-grid">${metrics.map(metric=>`<div><span>${esc(metric.label)}</span><strong>${esc(metric.value)}</strong></div>`).join('')}</div></section>`;}
function ProductionMediaBlock(label,title,items,layout='media-wide'){if(!items?.length)return '';return `<section class="production-block"><p class="section-label">${esc(label)}</p><h2>${esc(title)}</h2><div class="production-media-list ${layout}">${items.map(item=>`<figure><button class="media-zoom" type="button" data-full="${esc(item.src)}" data-caption="${esc(item.caption)}" aria-label="放大查看${esc(item.caption)}"><img src="${esc(item.src)}" alt="${esc(item.caption)}"></button><figcaption>${esc(item.caption)}</figcaption></figure>`).join('')}</div></section>`;}
function ProductionVideoDetail(item){
  const production=item.production;
  const metrics=production.metrics?.length?`<section class="case-results production-results"><p class="section-label">传播数据</p><h2>社交媒体表现</h2><div class="case-metrics">${production.metrics.map(metric=>`<div><span>${esc(metric.label)}</span><strong>${esc(metric.value)}</strong></div>`).join('')}</div></section>`:'';
  const tools=production.tools?.length?`<div class="model-list">${production.tools.map(tool=>`<div><span>${esc(tool.label)}</span><strong>${esc(tool.value)}</strong></div>`).join('')}</div>`:'';
  const sourceAssets=production.sourceAssets?.length?`<section class="production-block"><p class="section-label">过程素材</p><h2>从素材到镜头的迭代</h2><div class="asset-list">${production.sourceAssets.map(asset=>`<article><h3>${esc(asset.title)}</h3><p>${esc(asset.body)}</p></article>`).join('')}</div></section>`:'';
  const productionSummary=production.finalOutcome||production.processLogic?`<div class="production-summary">${production.finalOutcome?`<div><span>最终形成</span><strong>${esc(production.finalOutcome)}</strong></div>`:''}${production.processLogic?`<div><span>整体制作逻辑</span><strong>${esc(production.processLogic)}</strong></div>`:''}</div>`:'';
  const prompts=production.prompts?.length?`<section class="production-block"><p class="section-label">部分提示词</p><h2>从静帧到动态镜头</h2><div class="prompt-list">${production.prompts.map(prompt=>`<article><h3>${esc(prompt.title)}</h3><div><span>静帧 Prompt</span><p>${esc(prompt.still)}</p></div><div><span>图生视频 Prompt</span><p>${esc(prompt.motion)}</p></div></article>`).join('')}</div></section>`:'';
  const storyboards=ProductionMediaBlock('部分分镜图','镜头结构与视觉节奏',production.storyboards,'media-storyboards');
  const technicalImages=ProductionMediaBlock('自制技术资产','白膜、深度图与预设动画',production.technicalImages,'media-technical');
  const generatedImages=ProductionMediaBlock('部分生成图','关键帧视觉呈现',production.generatedImages,'media-grid');
  const videoProcess=ProductionMediaBlock('视频生成过程','从关键帧到动态成片',production.videoProcess,'media-process');
  const evidence=production.image?`<figure class="process-evidence"><button class="media-zoom" type="button" data-full="${esc(production.image)}" data-caption="「${esc(item.title)}」AI 生成与成片工作流" aria-label="放大查看项目创作工作流"><img src="${esc(production.image)}" alt="${esc(item.title)}项目创作工作流截图"></button><figcaption>「${esc(item.title)}」AI 生成与成片工作流</figcaption></figure>`:'';
  const note=VideoNote(production.note,[],production.link);
  const hasZoomMedia=production.image||production.metricImage||production.storyboards?.length||production.technicalImages?.length||production.generatedImages?.length||production.videoProcess?.length;
  const lightbox=hasZoomMedia?`<dialog class="image-lightbox" aria-label="图片预览"><button class="lightbox-close" type="button" aria-label="关闭图片预览">×</button><button class="lightbox-nav lightbox-prev" type="button" aria-label="查看上一张图片">‹</button><div class="lightbox-stage"><img alt="" draggable="false"></div><button class="lightbox-nav lightbox-next" type="button" aria-label="查看下一张图片">›</button><div class="lightbox-meta"><p class="lightbox-caption"></p><span>滚轮缩放 · 拖动查看 · ← → 翻页</span></div></dialog>`:'';
  return `<main class="video-detail production-detail"><div class="detail-toolbar"><a class="back" href="/video">← 返回视频作品</a></div><section class="detail-hero"><h1>${esc(item.title)}</h1><div class="detail-player"><video controls autoplay playsinline${item.poster?` poster="${esc(item.poster)}"`:''} aria-label="播放${esc(item.title)}"><source src="${esc(item.src)}" type="video/mp4">你的浏览器暂不支持视频播放。</video></div></section>${note}${metrics}<section class="detail-info production-info"><div class="detail-section production-section"><p class="section-label">制作过程</p><h2>从想法到成片</h2><div class="project-process-grid ${production.processLogic?'project-process-flow':''}">${production.sections.map(section=>`<article><h3>${esc(section.title)}</h3><p>${esc(section.body)}</p></article>`).join('')}</div>${productionSummary}${tools}${sourceAssets}${prompts}${storyboards}${technicalImages}${generatedImages}${evidence}${videoProcess}</div></section></main>${lightbox}`;
}
function VideoDetail(item){const custom=VideoNote(item.detail?.note,item.detail?.tools||[],item.detail?.link);const metrics=DetailMetrics(item.detail?.metrics||[]);const defaultInfo=item.hideDefaultInfo||item.detail?'':`<section class="detail-info"><div class="detail-section"><p class="section-label">传播数据</p><h2>社交媒体表现</h2><div class="metric-grid">${['发布平台','播放量','互动量','发布时间'].map(label=>`<div><span>${label}</span><strong>待补充</strong></div>`).join('')}</div></div><div class="detail-section"><p class="section-label">制作过程</p><h2>从想法到成片</h2><div class="process-grid">${['项目背景','我的职责','创作流程','复盘总结'].map(label=>`<div><h3>${label}</h3><p>内容待补充</p></div>`).join('')}</div></div></section>`;return `<main class="video-detail"><div class="detail-toolbar"><a class="back" href="/video">← 返回视频作品</a></div><section class="detail-hero"><h1>${esc(item.title)}</h1><div class="detail-player">${item.src?`<video controls autoplay playsinline${item.poster?` poster="${esc(item.poster)}"`:''} aria-label="播放${esc(item.title)}"><source src="${esc(item.src)}" type="video/mp4">你的浏览器暂不支持视频播放。</video>`:`<img class="detail-cover" src="${esc(item.poster)}" alt="${esc(item.title)}封面">`}</div></section>${custom}${metrics}${defaultInfo}</main>`;}
function WritingPage(c){return `<main class="category-page writing-page"><section class="writing-list" aria-label="文字作品列表">${c.items.map(item=>`<article class="writing-item"><h2>${esc(item.title)}</h2><a href="${esc(item.url)}" target="_blank" rel="noopener noreferrer" aria-label="阅读${esc(item.title)}">阅读全文 <span aria-hidden="true">↗</span></a></article>`).join('')}</section></main>`;}
function ProjectsPage(c){const project=c.items[0];return `<main class="category-page projects-page"><article class="project-case"><header class="project-case-heading"><div><span>${esc(project.year)} · 凤凰网教育</span><h2>${esc(project.title)}</h2></div><div class="project-case-intro"><p>${esc(project.overview)}</p></div></header><div class="project-topics" aria-label="项目内容">${project.topics.map(topic=>`<span>${esc(topic)}</span>`).join('')}</div><section class="project-deliverables" aria-label="项目成果">${project.links.map((link,index)=>`<article class="project-deliverable"><div class="project-deliverable-index">0${index+1}</div><div class="project-deliverable-copy"><span>${esc(link.kind)}</span><h3>${esc(link.title)}</h3><p>${esc(link.description)}</p>${link.note?`<strong>${esc(link.note)}</strong>`:''}</div><a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.action)} <span aria-hidden="true">↗</span></a></article>`).join('')}</section></article></main>`;}
function VisualPage(c){const lightbox=`<dialog class="image-lightbox" aria-label="图片预览"><button class="lightbox-close" type="button" aria-label="关闭图片预览">×</button><button class="lightbox-nav lightbox-prev" type="button" aria-label="查看上一张图片">‹</button><div class="lightbox-stage"><img alt="" draggable="false"></div><button class="lightbox-nav lightbox-next" type="button" aria-label="查看下一张图片">›</button><div class="lightbox-meta"><p class="lightbox-caption"></p><span>滚轮缩放 · 拖动查看 · ← → 翻页</span></div></dialog>`;return `<main class="category-page visual-page"><section class="visual-heading"><h1>${esc(c.title)}</h1><p>${esc(c.description)}</p></section><section class="photography-grid" aria-label="个人摄影作品">${c.items.map((item,index)=>`<figure><button class="media-zoom" type="button" data-full="${esc(item.src)}" data-caption="${esc(item.caption)}" aria-label="放大查看：${esc(item.caption)}"><img src="${esc(item.src)}" alt="${esc(item.caption)}" ${index?'loading="lazy" ':''}decoding="async"></button></figure>`).join('')}</section></main>${lightbox}`;}
function Category(c){if(c.items.length)return `<main class="category-page"><a class="back" href="/">← 返回首页</a><div class="category-title"><span class="eyebrow">${c.en}</span><h1>${c.title}</h1><p>${c.subtitle}</p></div><section class="portfolio-items">${c.items.map(item=>`<article class="portfolio-item glass">${item.cover?`<img src="${esc(item.cover)}" alt="${esc(item.title)}">`:''}<h2>${esc(item.title)}</h2><p>${esc(item.description||'')}</p>${item.url?`<a class="button" href="${esc(item.url)}" target="_blank" rel="noopener noreferrer">查看作品 ↗</a>`:''}</article>`).join('')}</section></main>`;return `<main class="category-page"><a class="back" href="/">← 返回首页</a><div class="category-title"><span class="eyebrow">${c.en}</span><h1>${c.title}</h1><p>${c.subtitle}</p></div><div class="category-layout"><div class="category-art ${c.id}">${Preview(c.id)}</div><section class="empty-state"><span class="eyebrow">${c.description}</span><h2>作品正在整理中</h2><p>真实作品将在这里陆续呈现。</p><a class="button" href="/">浏览其他分类 →</a></section></div></main>`;}
const path=location.pathname.replace(/\/$/,'')||'/';const category=categories.find(c=>path==='/'+c.id);const videoCategory=categories.find(c=>c.id==='video');const videoItem=path.startsWith('/video/')?videoCategory.items.find(item=>path==='/video/'+item.id):null;const isHome=path==='/';
document.title=(videoItem?videoItem.title+'｜':category?category.title+'｜':path==='/resume'?'完整简历｜':'')+p.title;
document.getElementById('app').innerHTML=Header(isHome)+(isHome?Home():videoItem?(videoItem.caseStudy==='executive-ip'?ExecutiveIpDetail(videoItem):videoItem.caseStudy==='production'?ProductionVideoDetail(videoItem):VideoDetail(videoItem)):category?.id==='video'?VideoPage(category):category?.id==='writing'?WritingPage(category):category?.id==='projects'?ProjectsPage(category):category?.id==='visual'?VisualPage(category):category?Category(category):path==='/resume'?ResumePage():'<main class="category-page"><h1>页面未找到</h1><a class="button" href="/">返回首页</a></main>')+'<footer><span>© '+new Date().getFullYear()+' 林栖</span><span>内容 · 影像 · 创作</span></footer>';
document.querySelectorAll('.resume-trigger').forEach(el=>el.addEventListener('click',()=>{location.href='/resume';}));
const profileCarousel=document.querySelector('.profile-carousel');
if(profileCarousel){
  const photos=p.photos?.length?p.photos:[p.photo];
  const photo=profileCarousel.querySelector('.profile-photo');
  const dots=[...profileCarousel.querySelectorAll('.profile-carousel-dots button')];
  let photoIndex=0;
  const showProfilePhoto=index=>{
    photoIndex=(index+photos.length)%photos.length;
    photo.src=photos[photoIndex];
    photo.alt=`个人照片 ${photoIndex+1} / ${photos.length}`;
    dots.forEach((dot,dotIndex)=>dot.toggleAttribute('aria-current',dotIndex===photoIndex));
    photo.classList.remove('is-changing');
    void photo.offsetWidth;
    photo.classList.add('is-changing');
  };
  profileCarousel.querySelector('.profile-carousel-prev').addEventListener('click',()=>showProfilePhoto(photoIndex-1));
  profileCarousel.querySelector('.profile-carousel-next').addEventListener('click',()=>showProfilePhoto(photoIndex+1));
  dots.forEach((dot,index)=>dot.addEventListener('click',()=>showProfilePhoto(index)));
}
document.querySelectorAll('.video-preview:not([poster])').forEach(video=>video.addEventListener('loadedmetadata',()=>{video.currentTime=Math.min(.3,video.duration/10);},{once:true}));
const imageLightbox=document.querySelector('.image-lightbox');
if(imageLightbox){
  const lightboxImage=imageLightbox.querySelector('img');
  const lightboxCaption=imageLightbox.querySelector('.lightbox-caption');
  const mediaButtons=[...document.querySelectorAll('.media-zoom')];
  let currentIndex=0;
  let scale=1;
  let panX=0;
  let panY=0;
  let dragging=false;
  let dragStartX=0;
  let dragStartY=0;
  let dragOriginX=0;
  let dragOriginY=0;
  const lightboxStage=imageLightbox.querySelector('.lightbox-stage');
  const clampPan=()=>{
    const maxX=Math.max(0,(lightboxImage.offsetWidth*scale-lightboxStage.clientWidth)/2);
    const maxY=Math.max(0,(lightboxImage.offsetHeight*scale-lightboxStage.clientHeight)/2);
    panX=Math.max(-maxX,Math.min(maxX,panX));
    panY=Math.max(-maxY,Math.min(maxY,panY));
  };
  const applyZoom=()=>{clampPan();lightboxImage.style.transform=`translate3d(${panX}px,${panY}px,0) scale(${scale})`;lightboxImage.classList.toggle('is-zoomed',scale>1.01);};
  const resetZoom=()=>{scale=1;panX=0;panY=0;dragging=false;lightboxImage.classList.remove('is-dragging','is-zoomed');lightboxImage.style.transformOrigin='50% 50%';lightboxImage.style.transform='translate3d(0,0,0) scale(1)';};
  const showImage=index=>{
    currentIndex=(index+mediaButtons.length)%mediaButtons.length;
    const button=mediaButtons[currentIndex];
    lightboxImage.src=button.dataset.full;
    lightboxImage.alt=button.dataset.caption||'';
    lightboxCaption.textContent=button.dataset.caption||'';
    resetZoom();
    if(!imageLightbox.open)imageLightbox.showModal();
  };
  mediaButtons.forEach((button,index)=>button.addEventListener('click',()=>showImage(index)));
  imageLightbox.querySelector('.lightbox-prev').addEventListener('click',()=>showImage(currentIndex-1));
  imageLightbox.querySelector('.lightbox-next').addEventListener('click',()=>showImage(currentIndex+1));
  lightboxImage.addEventListener('wheel',event=>{
    event.preventDefault();
    const oldScale=scale;
    const stageRect=lightboxStage.getBoundingClientRect();
    scale=Math.max(1,Math.min(6,oldScale*Math.exp(-event.deltaY*.0015)));
    const focusX=event.clientX-stageRect.left-stageRect.width/2;
    const focusY=event.clientY-stageRect.top-stageRect.height/2;
    if(scale===1){panX=0;panY=0;}else{
      const ratio=scale/oldScale;
      panX=focusX-(focusX-panX)*ratio;
      panY=focusY-(focusY-panY)*ratio;
    }
    applyZoom();
  },{passive:false});
  lightboxImage.addEventListener('pointerdown',event=>{
    if(scale<=1.01)return;
    event.preventDefault();
    dragging=true;
    dragStartX=event.clientX;
    dragStartY=event.clientY;
    dragOriginX=panX;
    dragOriginY=panY;
    lightboxImage.classList.add('is-dragging');
    lightboxImage.setPointerCapture(event.pointerId);
  });
  lightboxImage.addEventListener('pointermove',event=>{
    if(!dragging)return;
    panX=dragOriginX+event.clientX-dragStartX;
    panY=dragOriginY+event.clientY-dragStartY;
    applyZoom();
  });
  const stopDragging=event=>{
    if(!dragging)return;
    dragging=false;
    lightboxImage.classList.remove('is-dragging');
    if(lightboxImage.hasPointerCapture(event.pointerId))lightboxImage.releasePointerCapture(event.pointerId);
  };
  lightboxImage.addEventListener('pointerup',stopDragging);
  lightboxImage.addEventListener('pointercancel',stopDragging);
  lightboxImage.addEventListener('dragstart',event=>event.preventDefault());
  imageLightbox.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'){event.preventDefault();showImage(currentIndex-1);}
    if(event.key==='ArrowRight'){event.preventDefault();showImage(currentIndex+1);}
  });
  imageLightbox.querySelector('.lightbox-close').addEventListener('click',()=>{imageLightbox.close();resetZoom();});
  imageLightbox.addEventListener('click',event=>{if(event.target===imageLightbox)imageLightbox.close();});
}
