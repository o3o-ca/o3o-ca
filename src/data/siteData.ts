export const siteBaseUrl = 'https://home.o3o.ca';

export function absoluteSiteUrl(path: string): string {
  return new URL(path, `${siteBaseUrl}/`).toString();
}

export const siteDescription =
  'O3O是位于加拿大的非盈利团体，主要为全球的中文用户提供注重隐私的服务和工具。';

export const hero = {
  eyebrow: '自由的中文互联网社区',
  lead:
    'O3O是位于加拿大的非盈利服务，我们主要为全球的中文用户服务。我们相信由社会组织运营基本通讯软件和设施是必要的，它们不应被控制在大型企业和政府手中。',
  englishLead:
    'O3O is a non-profit online service based in Canada. We serve primarily Chinese language users worldwide by providing privacy-conscious services and tools. We believe that it is necessary for social organizations to operate communication platforms and infrastructure, and that they should not be controlled by large corporations and governments.',
};

export const missionValues = [
  {
    title: '自由开源',
    body:
      '我们希望通过托管自由软件的形式让更多人知道，自由与开源的软件可以帮助人们摆脱专有软件和公司提出和推广的围墙花园，并在数字世界夺回自由和隐私的权利。',
  },
  {
    title: '去中心化',
    body:
      '我们不希望O3O成为一个中心化的提供者，而是成为互相连接的社区中的一个节点。我们希望其他人能受到启发，加入甚至创建更多去中心化的项目。',
  },
  {
    title: '隐私为先',
    body:
      '许多提供商利用你的数据来赚钱，通过分析你的行为，用这些信息向你做广告。除了让你连接和使用服务之外，O3O不会将你的数据用于任何其他未经许可的目的。',
  },
] as const;

export const communities = [
  {
    title: 'O3O.ca 长毛象社区',
    href: 'https://o3o.ca/',
    body:
      'O3O.ca 长毛象社区基于开源软件长毛象（Mastodon）建立。不同于微博或 Twitter，这是一个开源的去中心化社交网络。整个长毛象网络由上千个实例组成，这些实例相互连接，最终形成了一个庞大的网络，就像是一个巨大宇宙。每一个服务器都是宇宙中的一个星系，用户就是每个星系里的行星。',
  },
  {
    title: '写意 Writee 写作社区',
    href: 'https://writee.org/',
    body:
      '写意（Writee）是一个去中心化的写作平台，您可以在这里进行写作和发布。写意基于开源程序 WriteFreely 建立，使用 ActivityPub 协议，因此可以与联邦宇宙中其他支持 ActivityPub 的站点（如 Mastodon 等）进行互通。在这里，我们欢迎任何热情、友好、乐于分享的朋友们加入。',
  },
  {
    title: 'Mastodon.im – Glitch-soc 长毛象社区',
    href: 'https://mastodon.im/',
    body:
      'Mastodon.im 基于 Mastodon Glitch 分支搭建，支持仅本站可见（local-only）模式发嘟、字数上限 2000 字、支持 Markdown 和 HTML 格式嘟文、涂鸦画板、Glitch风味主题、线程模式等原版Mastodon不具备的附加功能。',
  },
  {
    title: '嘟嘟咖啡馆 – Matrix 去中心化聊天',
    href: 'https://element.o3o.cafe/',
    body:
      'Matrix 是一个开放的去中心化即时通讯协议，默认点对点加密，支持私聊、群聊、视频通话、自定义表情包等功能，并可以通过 Federation 实现与其他服务器用户的通信。开通后，你会获得一个用户名为 @ example:o3o.cafe 的 Matrix 账户。',
  },
  {
    title: '联邦宇宙Fediverse中文论坛',
    href: 'https://fediverse.eu.org/',
    body:
      '一个供用户和站长们分享学习 Fediverse 使用指南、站点建设运维技巧及其他任何 Fediverse 相关话题的中文论坛，包括 Mastodon、Pleroma、Misskey 等。我们希望借助论坛检索信息的便捷性，使这些长期存在需求的信息更容易地被获取。',
  },
] as const;

export const tools = [
  {
    title: 'O3O Paste – PrivateBin 临时粘贴板',
    href: 'https://paste.o3o.studio/',
    body:
      'PrivateBin 是一个极简、开源的在线粘贴板，数据在浏览器内进行AES-256加密，服务器对粘贴内容毫不知情。',
  },
  {
    title: 'O3O Search – Searx 搜索引擎',
    href: 'https://search.o3o.ca/',
    body:
      'Searx 是一个开源、免费的互联网元搜索引擎，可聚合70多个搜索服务的结果，用户搜索时保持匿名。右上角偏好设置中可配置搜索语言和搜索引擎等。',
  },
] as const;

export const donation = {
  intro:
    '欢迎向O3O社区捐款，帮助我们维持服务器运营，继续打造开放、自由、有趣的Fediverse社区。捐助目标包括我们首页中列出的所有服务项目。',
  donationPortalLabel: '捐助入口',
  donationPortalHref: 'https://ko-fi.com/o3omastodon',
  recurringIntro:
    '请填写下方表格通过Stripe支付网关进行一次性/周期性捐助。使用此方式并不需要注册Stripe账户，并可以对本站的运营者保持匿名。',
  oneTimeHref: 'https://ko-fi.com/o3omastodon',
  recurringHref: 'https://ko-fi.com/o3omastodon',
  privacyNote:
    '支付渠道由 Stripe 提供。除捐助者在本站点主动提供的信息外，本站不会记录其他的个人支付信息，也看不到捐款者的真实姓名或银行卡信息，但是支付网关机构（Stripe、银行、支付宝）显然会记录这些支付信息。',
  stripePrivacyHref: 'https://stripe.com/en-ca/privacy',
  emailNote:
    '在结账页面，您不需要填写真实姓名，但需要提供一个邮件地址来接收下方所列出的礼品。我们不会将您的邮件地址提供给任何第三方。如有隐私顾虑，邮件地址可以使用Protonmail等匿名邮箱或临时邮箱。',
  financialInfoHref: 'https://ko-fi.com/o3omastodon/gallery',
} as const;

export const policies = {
  href: 'https://codeberg.org/o3o/o3o-admin/src/branch/master/terms.md',
} as const;

export const contact = {
  moderationEmail: 'mod (at) mail.o3o.ca',
} as const;
