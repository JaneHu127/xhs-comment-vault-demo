const initialEntries = [
  {
    id: 1,
    author: "匿名用户01",
    text: "统一回复一下：25 元一个，这个价格在上海还算可以。上海很多 25～35 元的冰淇淋都没有它好吃；兴业太古汇、蟠龙天地和香港广场都有门店。",
    html: "统一回复一下：<mark>25 元一个</mark>，这个价格在上海还算可以。上海很多 25～35 元的冰淇淋都没有它好吃；兴业太古汇、蟠龙天地和香港广场都有门店。",
    parent: "这款冰淇淋的价格和门店在哪里？",
    tags: ["上海美食"],
    note: "上海冰淇淋推荐：银座仁志川",
    savedAt: "08-22 13:07"
  },
  {
    id: 2,
    author: "匿名用户02",
    text: "我感觉不算特别辣，只能吃微辣的人也可以尝试。",
    html: "我感觉不算特别辣，只能吃微辣的人也可以尝试。",
    parent: "这个会不会很辣，适合只能吃微辣的人吗？",
    tags: ["上海美食"],
    note: "上海南昌水煮油炸小店体验",
    savedAt: "07-16 18:26"
  },
  {
    id: 3,
    author: "匿名用户03",
    text: "我喜欢龙之梦附近的定西路，吃的选择很多。推荐老友粉、老吴家川菜、欧记、沪西老弄堂；香花桥路附近也有衢州菜和重庆麻辣烫。",
    html: "我喜欢龙之梦附近的定西路，吃的选择很多。推荐<strong>老友粉、老吴家川菜、欧记、沪西老弄堂</strong>；香花桥路附近也有衢州菜和重庆麻辣烫。",
    parent: "龙之梦附近还有哪些值得吃的店？",
    tags: ["上海美食"],
    note: "龙之梦及周边美食推荐",
    savedAt: "08-05 20:14"
  },
  {
    id: 4,
    author: "匿名用户04",
    text: "去过几次，王富贵的食材新鲜、性价比高，锅底偏淡；望庐山的面包不错；町田拉面味道可以；楼上的大龙六方性价比也高。不过有回复提醒，大龙六方后来已经关门。",
    html: "去过几次，王富贵的食材新鲜、性价比高，锅底偏淡；望庐山的面包不错；町田拉面味道可以；楼上的大龙六方性价比也高。不过有回复提醒，<mark>大龙六方后来已经关门</mark>。",
    parent: "龙之梦有哪些值得吃的店？",
    tags: ["上海美食"],
    note: "龙之梦必吃榜评论整理",
    savedAt: "08-11 16:32"
  },
  {
    id: 5,
    author: "匿名用户05",
    text: "楼顶的老滇山寨、旺融顺德菜的鱼生、披头士的玉子大阪烧都不错。后开的醉庐和醉舍，一家本帮菜、一家淮扬菜；塔哈尔的帕芙立、四季民福和小吊梨汤的烤鸭也值得吃。B2 的沈大成双酿团原本很好吃，但近期有回复说已经没有了。",
    html: "楼顶的老滇山寨、旺融顺德菜的鱼生、披头士的玉子大阪烧都不错。后开的醉庐和醉舍，一家本帮菜、一家淮扬菜；塔哈尔的帕芙立、四季民福和小吊梨汤的烤鸭也值得吃。B2 的沈大成双酿团原本很好吃，但近期有回复说<mark>已经没有了</mark>。",
    parent: null,
    tags: ["上海美食"],
    note: "龙之梦餐厅与小吃实测",
    savedAt: "08-07 19:40"
  },
  {
    id: 6,
    author: "匿名用户06",
    text: "去龙之梦经常吃粉家的螺蛳粉，人均大约 50 元。有人觉得一般，但也有评论说这是自己的最爱，口味分歧比较明显。",
    html: "去龙之梦经常吃粉家的螺蛳粉，人均大约 50 元。有人觉得一般，但也有评论说这是自己的最爱，<strong>口味分歧比较明显</strong>。",
    parent: null,
    tags: ["上海美食"],
    note: "龙之梦评论区美食清单",
    savedAt: "08-05 14:18"
  },
  {
    id: 7,
    author: "匿名用户07",
    text: "贝果可以试纽约贝果博物馆；恰巴塔选 MBD 或 Breadfast；吐司可试 ComeCome；碱水推荐安上；法棍推荐嘉佩乐；主食面包可看 28OUT；肉桂卷可试 Tonton；黑芝麻卷可试 Crave。Fournil 的胡萝卜碱水球、豆库的南瓜吐司和 Cutecute 的碱水吐司也可以。建议只买各家的招牌，其他口味不一定稳定。",
    html: "贝果可以试纽约贝果博物馆；恰巴塔选 MBD 或 Breadfast；吐司可试 ComeCome；碱水推荐安上；法棍推荐嘉佩乐；主食面包可看 28OUT；肉桂卷可试 Tonton；黑芝麻卷可试 Crave。Fournil 的胡萝卜碱水球、豆库的南瓜吐司和 Cutecute 的碱水吐司也可以。<mark>建议只买各家的招牌，其他口味不一定稳定。</mark>",
    parent: "上海有哪些值得买的面包？",
    tags: ["上海美食"],
    note: "上海面包店与招牌单品推荐",
    savedAt: "07-20 11:08"
  },
  {
    id: 8,
    author: "匿名用户08",
    text: "如果只想选一家，可以考虑 BSDBAN；最近 SOSO 的盐面包也比较火。",
    html: "如果只想选一家，可以考虑 <strong>BSDBAN</strong>；最近 SOSO 的盐面包也比较火。",
    parent: "只想买一家面包店，怎么选？",
    tags: ["上海美食"],
    note: "上海面包店与招牌单品推荐",
    savedAt: "07-20 10:52"
  },
  {
    id: 9,
    author: "匿名用户09",
    text: "去年参加了意大利夏校，每天大约下午两点下课，周末不上课。一个月可以安排米兰两周、罗马两周；很多学校都能申请。艺术类学校会发学生证，去博物馆和美术馆可以免票，周末还能去南意旅行。",
    html: "去年参加了意大利夏校，每天大约下午两点下课，周末不上课。一个月可以安排<mark>米兰两周、罗马两周</mark>；很多学校都能申请。艺术类学校会发学生证，去博物馆和美术馆可以免票，周末还能去南意旅行。",
    parent: "意大利夏校的课程和旅行时间怎么安排？",
    tags: ["旅游攻略"],
    note: "欧洲夏校与周末旅行经验",
    savedAt: "05-30 17:26"
  },
  {
    id: 10,
    author: "匿名用户10",
    text: "夏天是巴黎很适合旅行和学习的季节。去年参加了索邦大学项目，学习巴黎文明、文化遗产和建筑，体验很好；暑假巴黎气候也比较舒适。",
    html: "夏天是巴黎很适合旅行和学习的季节。去年参加了索邦大学项目，学习巴黎文明、文化遗产和建筑，体验很好；<strong>暑假巴黎气候也比较舒适</strong>。",
    parent: null,
    tags: ["旅游攻略"],
    note: "巴黎夏校及暑期旅行体验",
    savedAt: "06-03 15:44"
  },
  {
    id: 11,
    author: "匿名用户11",
    text: "上学时参加过芬兰赫尔辛基大学的夏校，申请相对容易。夏天的北欧景色很好，温度也比较适宜。",
    html: "上学时参加过芬兰赫尔辛基大学的夏校，申请相对容易。<mark>夏天的北欧景色很好，温度也比较适宜。</mark>",
    parent: "北欧有没有适合短期体验的夏校？",
    tags: ["旅游攻略"],
    note: "适合短期体验的海外夏校",
    savedAt: "06-09 11:20"
  },
  {
    id: 12,
    author: "匿名用户12",
    text: "剑桥的 PACE 项目开放到比较晚、门槛较低，可以选一到四周，适合想短期体验校园生活的在职人士。",
    html: "剑桥的 PACE 项目开放到比较晚、门槛较低，可以选一到四周，适合想短期体验校园生活的在职人士。",
    parent: "在职人士想体验海外校园生活，有什么项目？",
    tags: ["旅游攻略"],
    note: "剑桥短期项目体验建议",
    savedAt: "06-03 09:35"
  },
  {
    id: 13,
    author: "匿名用户13",
    text: "想学做菜或甜品，可以看看巴黎 Ferrandi。三周项目可以选择法餐、甜点或烘焙方向。",
    html: "想学做菜或甜品，可以看看巴黎 <strong>Ferrandi</strong>。三周项目可以选择法餐、甜点或烘焙方向。",
    parent: "有没有可以学做菜、做甜品的短期夏校？",
    tags: ["旅游攻略"],
    note: "海外烹饪与甜点短期课程",
    savedAt: "06-04 12:16"
  }
];

const aiByTag = {
  "全部收藏": {
    overview: "收藏内容集中在上海美食和海外短期旅行/夏校：美食评论更强调招牌单品、价格和门店变化，旅行攻略更关注项目时长、申请门槛和可顺带安排的体验。",
    findings: ["上海美食推荐应优先记录具体门店、招牌和价格，不宜只看“好吃”结论。", "龙之梦与面包店信息存在停业或产品变化，出发前需要再次核实。", "旅游攻略样本偏向欧洲夏校，适合比较项目时长、课程方向与周末路线。"],
    questions: ["整理上海美食清单", "比较几个夏校项目", "哪些信息需要出发前核实？"]
  },
  "上海美食": {
    overview: "评论覆盖冰淇淋、南昌小吃、龙之梦周边和面包店，最有用的信息集中在具体招牌、价格、门店位置和闭店更新。",
    findings: ["冰淇淋约 25 元，多个上海商场有门店。", "龙之梦推荐集中在定西路周边、商场餐厅与特定单品，但部分店已关门或产品下架。", "面包推荐强调只买招牌，其他口味的稳定性可能不同。"],
    questions: ["按区域整理美食清单", "哪些店需要确认是否营业？", "只选三家应该怎么取舍？"]
  },
  "旅游攻略": {
    overview: "旅行内容以欧洲短期夏校为主，涉及意大利、巴黎、赫尔辛基和剑桥；差异主要在课程方向、周期、申请门槛与周末可延伸的旅行安排。",
    findings: ["意大利项目适合米兰与罗马组合，并可利用周末去南意。", "巴黎与赫尔辛基都适合夏季，但课程内容和城市体验不同。", "剑桥 PACE 周期灵活；Ferrandi 更适合烹饪和甜点方向。"],
    questions: ["比较几个项目的适合人群", "帮我规划欧洲夏校路线", "申请前还要确认哪些信息？"]
  }
};

let entries = structuredClone(initialEntries);
let selectedTag = "全部收藏";
let query = "";
let editingId = null;
let lastRemoved = null;
let toastTimer = null;

const $ = (selector) => document.querySelector(selector);
const tagOrder = ["上海美食", "旅游攻略"];

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function getCounts() {
  const counts = new Map(tagOrder.map((tag) => [tag, 0]));
  entries.forEach((entry) => entry.tags.forEach((tag) => counts.set(tag, (counts.get(tag) || 0) + 1)));
  return counts;
}

function renderTags() {
  const counts = getCounts();
  const items = [["全部收藏", entries.length], ...tagOrder.map((tag) => [tag, counts.get(tag) || 0]).filter(([, count]) => count > 0)];
  $("#tag-list").innerHTML = items.map(([tag, count]) => `
    <button class="tag-filter" type="button" data-tag="${escapeHtml(tag)}" aria-pressed="${selectedTag === tag}">
      <span>${escapeHtml(tag)}</span><span class="tag-count">${count}</span>
    </button>`).join("");
}

function visibleEntries() {
  const normalized = query.trim().toLowerCase();
  return entries.filter((entry) => {
    const inTag = selectedTag === "全部收藏" || entry.tags.includes(selectedTag);
    const haystack = [entry.text, entry.author, entry.note, entry.parent || "", ...entry.tags].join(" ").toLowerCase();
    return inTag && (!normalized || haystack.includes(normalized));
  });
}

function renderEntries() {
  const visible = visibleEntries();
  $("#collection-summary").textContent = query || selectedTag !== "全部收藏"
    ? `当前显示 ${visible.length} 条，共 ${entries.length} 条模拟收藏`
    : `共 ${entries.length} 条模拟收藏，数据仅保存在当前页面`;
  $("#entries").innerHTML = visible.map((entry, index) => `
    <article class="entry-card" data-id="${entry.id}" style="animation-delay:${Math.min(index * 35, 140)}ms">
      <div class="entry-top"><p class="entry-author">${escapeHtml(entry.author)}</p><time class="entry-date">${escapeHtml(entry.savedAt)}</time></div>
      <div class="entry-content">${entry.html}</div>
      ${entry.parent ? `<blockquote class="parent-context">回复背景：${escapeHtml(entry.parent)}</blockquote>` : ""}
      <div class="entry-tags">${entry.tags.map((tag) => `<span class="entry-tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <footer class="entry-footer">
        <div class="note-source"><strong>${escapeHtml(entry.note)}</strong><span>原笔记中的收藏评论</span></div>
        <div class="card-actions">
          <button class="button button-primary" type="button" data-action="source">打开原笔记</button>
          <button class="button button-secondary" type="button" data-action="edit">编辑</button>
          <button class="button button-secondary remove" type="button" data-action="remove">取消收藏</button>
        </div>
      </footer>
    </article>`).join("");
  $("#entries").hidden = visible.length === 0;
  $("#empty-state").hidden = visible.length !== 0;
  $("#filter-message").hidden = true;
  renderTags();
}

function resetAiPanel() {
  $("#ai-result").hidden = true;
  $("#ai-loading").hidden = true;
  $("#ai-empty").hidden = false;
  $("#ai-title").textContent = selectedTag === "全部收藏" ? "整理全部收藏的共同信息" : `整理“${selectedTag}”分类的共同信息`;
}

function selectTag(tag) {
  selectedTag = tag;
  query = "";
  $("#search-input").value = "";
  renderEntries();
  resetAiPanel();
}

function showAiSummary() {
  const summary = aiByTag[selectedTag] || aiByTag["全部收藏"];
  $("#ai-empty").hidden = true;
  $("#ai-result").hidden = true;
  $("#ai-loading").hidden = false;
  $("#ai-generate").disabled = true;
  setTimeout(() => {
    $("#ai-loading").hidden = true;
    $("#ai-overview").textContent = summary.overview;
    $("#ai-findings").innerHTML = summary.findings.map((finding) => `<li>${escapeHtml(finding)}</li>`).join("");
    const sample = selectedTag === "全部收藏" ? entries.length : entries.filter((entry) => entry.tags.includes(selectedTag)).length;
    $("#ai-meta").textContent = `基于 ${sample} 条模拟收藏生成 · AI 结论不等于已验证事实`;
    $("#ai-result").hidden = false;
    $("#ai-generate").disabled = false;
    $("#ai-generate").textContent = "重新生成";
  }, 650);
}

function openEditor(id) {
  const entry = entries.find((item) => item.id === id);
  if (!entry) return;
  editingId = id;
  $("#rich-editor").innerHTML = entry.html;
  $("#editor-tags").innerHTML = tagOrder.map((tag) => `
    <label class="editor-tag-option">
      <input type="checkbox" value="${escapeHtml(tag)}" ${entry.tags.includes(tag) ? "checked" : ""}>
      <span>${escapeHtml(tag)}</span>
    </label>`).join("");
  $("#editor-dialog").showModal();
  setTimeout(() => $("#rich-editor").focus(), 0);
}

function closeEditor() {
  editingId = null;
  $("#editor-dialog").close();
}

function normalizeEditorHtml() {
  const editor = $("#rich-editor");
  editor.querySelectorAll("script,style,a,img,iframe,object,embed").forEach((node) => node.remove());
  return editor.innerHTML.trim();
}

function saveEditor() {
  const entry = entries.find((item) => item.id === editingId);
  if (!entry) return;
  const html = normalizeEditorHtml();
  const text = $("#rich-editor").innerText.trim();
  const tags = [...document.querySelectorAll("#editor-tags input:checked")].map((input) => input.value);
  if (!text) return showToast("收藏内容不能为空");
  entry.html = html;
  entry.text = text;
  entry.tags = tags.length ? tags : entry.tags;
  closeEditor();
  renderEntries();
  resetAiPanel();
  showToast("收藏内容已更新");
}

function formatSelection(command, value = null) {
  $("#rich-editor").focus();
  document.execCommand(command, false, value);
}

function removeEntry(id) {
  const index = entries.findIndex((entry) => entry.id === id);
  if (index < 0) return;
  lastRemoved = { entry: entries[index], index };
  entries.splice(index, 1);
  renderEntries();
  resetAiPanel();
  showToast("已从演示收藏中移除", true);
}

function showToast(message, canUndo = false) {
  clearTimeout(toastTimer);
  $("#toast-text").textContent = message;
  $("#toast-undo").hidden = !canUndo;
  $("#toast").hidden = false;
  toastTimer = setTimeout(() => { $("#toast").hidden = true; }, 3600);
}

function undoRemove() {
  if (!lastRemoved) return;
  entries.splice(lastRemoved.index, 0, lastRemoved.entry);
  lastRemoved = null;
  renderEntries();
  $("#toast").hidden = true;
}

function addChatMessage(role, text) {
  const message = document.createElement("div");
  message.className = `chat-message ${role}`;
  message.textContent = text;
  $("#chat-messages").append(message);
  $("#chat-messages").scrollTop = $("#chat-messages").scrollHeight;
}

function answerFor(question) {
  const summary = aiByTag[selectedTag] || aiByTag["全部收藏"];
  if (/行动|清单|怎么做|路线/.test(question)) {
    return `可以先按这三步执行：\n1. 从评论中提取需要确认的具体问题。\n2. 优先处理多条评论重复提到的信息。\n3. 对带有个人偏好的建议，在行动前再次核实。\n\n结合“${selectedTag}”分类，最值得先做的是：${summary.findings[0]}`;
  }
  if (/冲突|争议|不同/.test(question)) {
    return `当前资料里没有完全相反的结论，但侧重点不同。有些评论强调效率，有些更在意体验。更稳妥的做法是先明确自己的优先级，再使用这些建议。`;
  }
  if (/核实|缺|风险/.test(question)) {
    return `还需要核实时间变化、具体场景和样本代表性。评论提供的是个人经验，不应直接当作普遍事实。建议把“${summary.findings[2]}”作为下一步核实重点。`;
  }
  return `根据“${selectedTag}”分类下的收藏，可以先得到这个判断：${summary.overview}\n\n其中最明确的共同信息是：${summary.findings[0]}`;
}

function openChat() {
  const summary = aiByTag[selectedTag] || aiByTag["全部收藏"];
  $("#chat-scope").textContent = `仅根据“${selectedTag}”分类下的模拟收藏回答`;
  $("#chat-messages").innerHTML = "";
  addChatMessage("assistant", `${summary.overview}\n\n你还可以继续追问共同建议、不同观点或下一步行动。`);
  $("#chat-suggestions").innerHTML = summary.questions.map((question) => `<button type="button">${escapeHtml(question)}</button>`).join("");
  $("#chat-backdrop").hidden = false;
  $("#chat-drawer").hidden = false;
  document.body.classList.add("drawer-open");
}

function closeChat() {
  $("#chat-backdrop").hidden = true;
  $("#chat-drawer").hidden = true;
  document.body.classList.remove("drawer-open");
}

function submitQuestion(question) {
  const clean = question.trim();
  if (!clean) return;
  addChatMessage("user", clean);
  $("#chat-input").value = "";
  const pending = document.createElement("div");
  pending.className = "chat-message assistant";
  pending.textContent = "正在整理收藏内容…";
  $("#chat-messages").append(pending);
  setTimeout(() => {
    pending.remove();
    addChatMessage("assistant", answerFor(clean));
  }, 420);
}

$("#tag-list").addEventListener("click", (event) => {
  const button = event.target.closest(".tag-filter");
  if (button) selectTag(button.dataset.tag);
});

$("#entries").addEventListener("click", (event) => {
  const action = event.target.closest("button[data-action]");
  if (!action) return;
  const id = Number(action.closest(".entry-card").dataset.id);
  if (action.dataset.action === "edit") openEditor(id);
  if (action.dataset.action === "remove") removeEntry(id);
  if (action.dataset.action === "source") showToast("演示模式不会打开真实的小红书笔记");
});

$("#search-button").addEventListener("click", () => {
  query = $("#search-input").value;
  renderEntries();
});
$("#search-input").addEventListener("keydown", (event) => {
  if (event.key === "Enter") { event.preventDefault(); $("#search-button").click(); }
});
$("#clear-filters").addEventListener("click", () => selectTag("全部收藏"));
$("#ai-generate").addEventListener("click", showAiSummary);
$("#ai-chat-open").addEventListener("click", openChat);

$("#editor-close").addEventListener("click", closeEditor);
$("#editor-cancel").addEventListener("click", closeEditor);
$("#editor-form").addEventListener("submit", (event) => { event.preventDefault(); saveEditor(); });
$("#editor-dialog").addEventListener("click", (event) => { if (event.target === $("#editor-dialog")) closeEditor(); });
document.querySelectorAll(".editor-toolbar [data-command]").forEach((button) => button.addEventListener("click", () => formatSelection(button.dataset.command)));
document.querySelectorAll(".editor-toolbar [data-color]").forEach((button) => button.addEventListener("click", () => formatSelection("hiliteColor", button.dataset.color)));

$("#chat-close").addEventListener("click", closeChat);
$("#chat-backdrop").addEventListener("click", closeChat);
$("#chat-suggestions").addEventListener("click", (event) => { if (event.target.matches("button")) submitQuestion(event.target.textContent); });
$("#chat-form").addEventListener("submit", (event) => { event.preventDefault(); submitQuestion($("#chat-input").value); });
$("#toast-undo").addEventListener("click", undoRemove);
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !$("#chat-drawer").hidden) closeChat(); });

const demoVideo = $("#real-demo video");
if (demoVideo) {
  demoVideo.defaultMuted = true;
  demoVideo.muted = true;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && "IntersectionObserver" in window) {
    const videoObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && entry.intersectionRatio >= .55) {
        demoVideo.play().catch(() => {});
      } else {
        demoVideo.pause();
      }
    }, { threshold: [0, .55, 1] });
    videoObserver.observe(demoVideo);
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) demoVideo.pause();
  });
}

renderEntries();
resetAiPanel();
