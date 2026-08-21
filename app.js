const initialEntries = [
  {
    id: 1,
    author: "纸鸢",
    text: "准备面试时不要只背逐字稿。先把岗位负责的业务、目标和常见问题弄明白，面试官换一种问法时才不会卡住。",
    html: "准备面试时不要只背逐字稿。先把岗位负责的业务、目标和常见问题弄明白，面试官换一种问法时才不会卡住。",
    parent: "请问产品经理面试应该怎么准备？",
    tags: ["面试", "求职"],
    note: "从运营转产品，我做了哪些准备",
    savedAt: "08-18 21:46"
  },
  {
    id: 2,
    author: "谁家稀饭不放糖",
    text: "如果简历写了很多技术细节，但岗位需要项目管理能力，可以把经历改成范围、进度、成本、风险和问题管理，用熟悉的项目说明你怎么推动事情落地。",
    html: "如果简历写了很多技术细节，但岗位需要项目管理能力，可以把经历改成<strong>范围、进度、成本、风险和问题管理</strong>，用熟悉的项目说明你怎么推动事情落地。",
    parent: "技术背景转项目经理，简历应该怎么改？",
    tags: ["面试", "求职"],
    note: "项目经理转型经验与简历建议",
    savedAt: "08-18 19:27"
  },
  {
    id: 3,
    author: "略略略",
    text: "回答缺点时不要只说一个性格标签，可以说明它在什么场景下会影响工作、你采取了什么办法，以及现在改善到了什么程度。",
    html: "回答缺点时不要只说一个性格标签，可以说明它在什么场景下会影响工作、你采取了什么办法，以及现在改善到了什么程度。",
    parent: "面试被问到‘你的缺点’应该怎么答？",
    tags: ["面试"],
    note: "应届生面试高频问题复盘",
    savedAt: "08-17 22:13"
  },
  {
    id: 4,
    author: "momo",
    text: "小公司给的岗位名称很好看，但实际工作可能很杂。面试时要问清楚直属汇报对象、团队人数、前三个月目标和绩效怎么评。",
    html: "小公司给的岗位名称很好看，但实际工作可能很杂。面试时要问清楚直属汇报对象、团队人数、前三个月目标和绩效怎么评。",
    parent: null,
    tags: ["求职", "公司评价"],
    note: "应届生选大公司还是小公司",
    savedAt: "08-16 18:35"
  },
  {
    id: 5,
    author: "职场显微镜",
    text: "别只看网上说‘氛围好不好’，同一家公司的不同团队差异可能很大。更值得问的是业务是否稳定、加班原因、人员流动和领导风格。",
    html: "别只看网上说‘氛围好不好’，同一家公司的不同团队差异可能很大。更值得问的是业务是否稳定、加班原因、人员流动和领导风格。",
    parent: "这家公司值得去吗？",
    tags: ["求职", "公司评价"],
    note: "如何判断一家公司是否靠谱",
    savedAt: "08-15 20:08"
  },
  {
    id: 6,
    author: "椰子不加冰",
    text: "七宝排队时间比较长，如果更在意互动体验，可以先去托托或奇奇蒂蒂；下午四点后部分项目排队会短一些。",
    html: "七宝排队时间比较长，如果更在意互动体验，可以先去托托或奇奇蒂蒂；<mark>下午四点后部分项目排队会短一些</mark>。",
    parent: "第一次去迪士尼，几个热门项目怎么选？",
    tags: ["旅行", "迪士尼"],
    note: "上海迪士尼一天怎么玩更顺",
    savedAt: "08-14 16:42"
  },
  {
    id: 7,
    author: "早起去旅行",
    text: "想少排队就不要把路线完全按区域排，可以优先处理自己最在意的两三个项目，再看 App 的实时等待时间调整。",
    html: "想少排队就不要把路线完全按区域排，可以优先处理自己最在意的两三个项目，再看 App 的实时等待时间调整。",
    parent: null,
    tags: ["旅行", "迪士尼"],
    note: "迪士尼错峰与路线实测",
    savedAt: "08-14 10:19"
  },
  {
    id: 8,
    author: "小岛食记",
    text: "这家店招牌菜味道不错，但周末等位经常超过一小时。附近还有一家本地小馆，菜更家常，预算也低一些。",
    html: "这家店招牌菜味道不错，但周末等位经常超过一小时。附近还有一家本地小馆，菜更家常，预算也低一些。",
    parent: "这家网红店值得专程去吗？",
    tags: ["旅行", "美食"],
    note: "厦门三天两夜美食路线",
    savedAt: "08-13 13:06"
  },
  {
    id: 9,
    author: "本地胃上线",
    text: "菜单里真正稳定的是海蛎煎和花生汤，套餐里的小吃比较普通。两个人点两样招牌再加一份汤就够了。",
    html: "菜单里真正稳定的是海蛎煎和花生汤，套餐里的小吃比较普通。两个人点两样招牌再加一份汤就够了。",
    parent: null,
    tags: ["美食"],
    note: "游客容易踩雷的厦门小吃",
    savedAt: "08-12 20:31"
  }
];

const aiByTag = {
  "全部收藏": {
    overview: "收藏内容主要围绕求职准备与旅行决策：前者强调用业务理解替代死记硬背，后者更关注排队、预算和真实体验。",
    findings: ["求职信息的共同点是先核实岗位和团队，而不是只看职位名称。", "旅行建议更适合按个人优先级动态调整，不宜照搬固定路线。", "部分评价来自个人经历，行动前仍需结合时间和具体场景核实。"],
    questions: ["把这些内容整理成行动清单", "哪些观点需要进一步核实？", "求职和旅行内容分别有哪些共识？"]
  },
  "面试": {
    overview: "几条评论共同强调：面试准备的重点不是背标准答案，而是理解岗位业务，并把个人经历转译成岗位需要的能力。",
    findings: ["准备回答时应先理解问题背后的考察目的。", "简历和项目表达需要对齐目标岗位的核心能力。", "谈缺点时要交代具体场景、影响和改善行动。"],
    questions: ["帮我整理面试准备清单", "这些建议有哪些共同点？", "如何把项目经历改成岗位语言？"]
  },
  "求职": {
    overview: "评论建议把求职判断从职位名称和笼统口碑，转向岗位目标、团队情况、业务稳定性和评价方式。",
    findings: ["面试时应主动确认前三个月目标和绩效标准。", "同一家公司的团队差异可能大于公司整体口碑。", "简历应突出与目标岗位直接相关的推动和管理能力。"],
    questions: ["生成公司评估问题清单", "哪些信息最值得在面试中确认？", "如何判断岗位是否名不副实？"]
  },
  "公司评价": {
    overview: "现有评论不建议用单一的‘公司好不好’下结论，而是拆分为团队、业务、领导、加班原因和人员流动等具体维度。",
    findings: ["公司整体评价不能直接代表具体团队体验。", "岗位目标与绩效方式比职位名称更能反映真实工作。", "当前样本较少，适合用作提问框架，不适合做确定结论。"],
    questions: ["整理一份公司调研框架", "当前资料还缺哪些信息？", "有哪些潜在风险信号？"]
  },
  "旅行": {
    overview: "旅行评论的共识是先明确个人最在意的体验，再根据排队、预算和实时情况调整路线，而不是机械照搬攻略。",
    findings: ["热门项目适合按优先级处理，并关注实时等待时间。", "网红店的排队成本可能超过体验收益。", "推荐带有明显个人偏好，需要结合同行人和时间判断。"],
    questions: ["帮我生成一天的行动路线", "哪些推荐存在争议？", "还有什么信息需要出发前核实？"]
  },
  "迪士尼": {
    overview: "几条评论都在解决排队与体验取舍：先确定最想玩的项目，再利用下午时段和实时等待数据动态调整。",
    findings: ["七宝排队较长，互动型项目可作为替代选择。", "固定按区域游玩不一定最高效。", "具体等待时间会随日期变化，出发当天仍需查看 App。"],
    questions: ["七宝和托托该怎么取舍？", "哪个时段更适合错峰？", "帮我整理迪士尼行动清单"]
  },
  "美食": {
    overview: "美食评论更关注‘是否值得排队’和‘具体点什么’，对网红店的整体评价较谨慎，但给出了可执行的菜品选择。",
    findings: ["周末排队成本较高，可准备附近替代店。", "招牌单品比套餐整体更稳定。", "口味评价主观，价格、等位和份量信息更值得优先参考。"],
    questions: ["整理值得点和可以不点的菜", "哪些建议更像本地人观点？", "生成一份避雷与替代清单"]
  }
};

let entries = structuredClone(initialEntries);
let selectedTag = "全部收藏";
let query = "";
let editingId = null;
let lastRemoved = null;
let toastTimer = null;

const $ = (selector) => document.querySelector(selector);
const tagOrder = ["面试", "求职", "公司评价", "旅行", "迪士尼", "美食"];

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

renderEntries();
resetAiPanel();
