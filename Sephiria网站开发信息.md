# Sephiria 网站开发信息

> 保存日期：2026-08-10
> 用途：Sephiria 粉丝攻略站 / Wiki 首页开发、SEO 与多语言规划。
> 说明：仅收录官网或通用社区平台，不收录第三方竞品 Wiki/攻略站。

## 1、主题基础信息

### （1）官方网站、社群与视频

| 类型 | 名称 | 链接 |
|---|---|---|
| 官方网站 | TEAM HORAY — Sephiria | https://teamhoray.com/games/sephiria |
| 官方商店 | Sephiria on Steam | https://store.steampowered.com/app/2436940/Sephiria/ |
| 官方社区 | Steam Community | https://steamcommunity.com/app/2436940/ |
| 官方 Discord 入口 | 开发者置顶 Steam 帖子 | https://steamcommunity.com/app/2436940/discussions/0/4337609830360193739/ |
| Reddit | r/sephiria | https://www.reddit.com/r/sephiria/ |
| 官方 YouTube | TEAM HORAY | https://www.youtube.com/@horay5115 |
| 官方 Trailer | Sephiria Trailer | https://www.youtube.com/watch?v=uK0Yjz3Q3Sc |

> Discord 使用开发者置顶的 Steam 帖子作为稳定入口，避免直接邀请链接过期。

### （2）玩家最关心的四组数据

1. **Full Release：Jul 31, 2026**
2. **Latest Update：Aug 7, 2026**
3. **Recent Reviews：93% Positive**
4. **Online Co-op：Up to 4 Players**

补充内容规模：**6 Chapters、300 Artifacts、70 Tablets、6 Weapon Branches、200+ Weapon Upgrades、60-Level Hard Mode**。

### 网站内容 JSON

```json
{
  "home": {
    "meta": {
      "title": "Sephiria Wiki — Weapons, Builds & Artifacts",
      "description": "Master Sephiria with beginner guides, weapon upgrades, artifact and tablet builds, boss strategies, co-op tips, unlocks, and current Steam updates."
    },
    "hero": {
      "eyebrow": "Fan-Made Community Wiki",
      "title": "Sephiria",
      "description": "Climb a collapsing tower as a rabbit hero in a fast-paced top-down action roguelite. Combine weapons, artifacts, tablets, and animal synergies to create powerful builds, defeat bosses, and survive alone or with up to four players.",
      "stats": [
        "Full Release Jul 31, 2026",
        "Updated Aug 7, 2026",
        "93% Positive Recent Reviews",
        "Up to 4-Player Co-op",
        "300 Artifacts"
      ],
      "primaryCta": "Start Beginner Guide",
      "secondaryCta": "Explore Weapon Builds",
      "tertiaryCta": "Read Patch Notes",
      "videoLabel": "Official media"
    },
    "start": {
      "eyebrow": "Start Here",
      "title": "Your Sephiria Journey",
      "cards": [
        {
          "number": "1",
          "title": "Beginner Guide",
          "description": "Learn the essential controls, room priorities, early upgrades, healing options, and survival habits needed for your first successful tower runs."
        },
        {
          "number": "2",
          "title": "Best Early-Game Builds",
          "description": "Discover reliable weapon, artifact, and tablet combinations that become effective quickly and help new players clear the opening chapters."
        },
        {
          "number": "3",
          "title": "Weapons & Upgrade Paths",
          "description": "Compare six weapon branches and more than 200 upgrades, then plan a route that matches your preferred range, speed, and damage style."
        },
        {
          "number": "4",
          "title": "Bosses, Co-op & Hard Mode",
          "description": "Study boss patterns, coordinate four-player teams, unlock advanced systems, and prepare optimized builds for the 60-level Hard Mode."
        }
      ]
    },
    "aboutGame": {
      "title": "What is Sephiria?",
      "paragraphs": [
        "Sephiria is a top-down action roguelite and action RPG developed by TEAM HORAY for Steam. Players control a rabbit adventurer climbing a dangerous tower, fighting monsters in real time while managing weapons, artifacts, tablets, and inventory space.",
        "Every run is shaped by random discoveries and build synergies. Whether you are learning your first weapon branch, combining hundreds of artifacts, challenging chapter bosses, or coordinating an online co-op team, Sephiria rewards experimentation and increasingly precise combat."
      ],
      "stats": [
        {"label": "Developer", "value": "TEAM HORAY"},
        {"label": "Platform", "value": "Steam, Windows and macOS"},
        {"label": "Genre", "value": "Top-down Action Roguelite"},
        {"label": "Chapters", "value": "6"},
        {"label": "Artifacts", "value": "300"},
        {"label": "Tablets", "value": "70"},
        {"label": "Weapon Upgrades", "value": "200+"},
        {"label": "Online Co-op", "value": "Up to 4 Players"},
        {"label": "Hard Mode", "value": "60 Levels"}
      ],
      "cta": "Explore All Guides"
    },
    "finalCta": {
      "title": "Ready to Master Sephiria?",
      "description": "From your first climb through the tower to optimized artifact synergies, four-player co-op, and the deepest Hard Mode floors, our community wiki helps you plan stronger builds and understand every run.",
      "primary": "Read the Beginner Guide",
      "secondary": "Play on Steam"
    }
  },
  "footer": {
    "aboutTitle": "Sephiria Wiki",
    "about": "Sephiria Wiki is an independent fan-made guide site covering weapons, upgrades, artifacts, tablets, bosses, co-op strategies, unlocks, and patch information. It helps new and experienced players build stronger runs without being affiliated with TEAM HORAY or Valve.",
    "description": "Top-down action roguelite on Steam with 6 chapters, 300 artifacts, 200+ weapon upgrades, and four-player co-op.",
    "playGame": "Play Sephiria on Steam",
    "officialDiscord": "Official Discord",
    "officialYoutube": "Official YouTube",
    "communityTool": "Sephiria Build Planner",
    "privacyPolicy": "Privacy Policy",
    "termsOfService": "Terms of Service"
  },
  "metadata": {
    "title": "Sephiria Wiki — Weapons, Builds & Artifacts",
    "description": "Master Sephiria with beginner guides, weapon upgrades, artifact and tablet builds, boss strategies, co-op tips, unlocks, and current Steam updates.",
    "keywords": "Sephiria, Steam, wiki, weapons, builds, artifacts, tablets, bosses, co-op, beginner guide"
  },
  "sidebarCodes": [
    {
      "code": "暂无",
      "reward": "No official redemption-code system has been announced"
    },
    {
      "code": "暂无",
      "reward": "Check official Steam announcements for future promotions"
    }
  ]
}
```

### JSON 自查

- ✅ `home.meta.title`：43 个字符，≤ 60
- ✅ `metadata.title`：43 个字符，≤ 60
- ✅ `metadata.description`：147 个字符，在 140–160 之间
- ✅ `metadata.keywords`：89 个字符，≤ 100
- ✅ `home.hero.stats` 为纯字符串数组
- ✅ `home.start.cards` 包含 4 个对象
- ✅ `home.aboutGame.stats` 每项均包含 `label` 和 `value`
- ✅ `footer.about` 为 2 句介绍
- ✅ `sidebarCodes` 有 2 条；未发现官方兑换码系统，因此填写“暂无”
- ✅ 未写入值为 0 的指标
- ✅ `value` 后未追加括号说明

## 3、网站主题色与默认主题

### 结论

建议默认使用**深色主题**。Sephiria 的高塔、地下空间、恶魔战斗与像素特效更适合深色背景；青绿色可体现魔法、石板和遗物系统，胡萝卜橙可作为兔子主角相关的 CTA 强调色。

```css
/* 导航页主题色 - 亮色主题 */
--nav-theme: 174 62% 36%;       /* 深青绿色 */
--nav-theme-light: 174 58% 48%; /* 更明亮的青绿色 */

/* 导航页主题色 - 暗色主题 */
--nav-theme: 174 68% 48%;       /* 魔法青绿色 */
--nav-theme-light: 169 78% 66%; /* 暗色界面上的高亮青色 */
```

可选辅助色：

```css
--nav-accent: 30 92% 58%; /* 胡萝卜橙 */
--background: 218 34% 9%; /* 深蓝黑背景 */
--surface: 216 28% 13%;  /* 卡片与导航表面 */
```

## 4、多语言规划

### 结论：按优先级排列

1. **韩语（ko）— 세피리아 공략 위키**
2. **英语（en）— Sephiria Wiki**
3. **日语（ja）— セフィリア 攻略Wiki**
4. **俄语（ru）— Sephiria Wiki и гайды**

| 优先级 | 语言 | 本地化主题名 | 建议路径 | 选择理由 |
|---:|---|---|---|---|
| 1 | 韩语 | 세피리아 공략 위키 | `/ko/` | TEAM HORAY 为韩国开发团队，韩语玩家与评论信号最强 |
| 2 | 英语 | Sephiria Wiki | `/en/` | 全球 Steam 用户与英文 SEO 的基础语言 |
| 3 | 日语 | セフィリア 攻略Wiki | `/ja/` | 有官方日语本地化及明确的攻略搜索需求 |
| 4 | 俄语 | Sephiria Wiki и гайды | `/ru/` | 官方支持俄语，并持续处理俄文字体和本地化 |

### 本地化 SEO 关键词方向

- **韩语：** 세피리아 공략, 무기, 빌드, 유물, 석판, 보스, 협동
- **英语：** Sephiria wiki, weapons, builds, artifacts, tablets, bosses, co-op
- **日语：** セフィリア 攻略, 武器, ビルド, アーティファクト, 石板, ボス, 協力
- **俄语：** Sephiria гайд, оружие, билды, артефакты, таблички, боссы, кооператив

## 数据维护提醒

Steam 好评率、评论数量、最新更新时间属于动态数据，上线前应再次从官方 Steam 页面核验。发布日期和内容规模可作为相对稳定的首页信息；实时在线人数不建议硬编码到静态页面。
