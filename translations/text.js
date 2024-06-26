/**
 * @typedef {"en-US"} DefaultLocale
 * @typedef {DefaultLocale | "zh-CN" | "es-ES" | "fr-FR" | "pt-BR" | "ja" | "ko" | "ru"} Locale
 */

/** @type {Readonly<Record<Locale, string>>} */
export const languageMap = {
  "en-US": "English",
  "es-ES": "Español",
  "fr-FR": "Français",
  "pt-BR": "Português Brasileiro",
  "zh-CN": "简体中文",
  ja: "日本語",
  ko: "한국어",
  ru: "Русский",
};

/** @type {Readonly<Record<Locale, string>>} */
export const titleMap = {
  "en-US": "Transfomer family",
  "es-ES": "Biblioteca CiteGraph Hooks para la obtención de datos",
  "fr-FR": "Bibliothèque de CiteGraph Hooks pour la récupération de données",
  "pt-BR": "CiteGraph Hooks para Data Fetching",
  "zh-CN": "用于数据请求的 CiteGraph Hooks 库",
  ja: "データ取得のための CiteGraph Hooks ライブラリ",
  ko: "데이터 가져오기를 위한 CiteGraph Hooks",
  ru: "CiteGraph хуки для выборки данных",
};

/** @type {Readonly<Record<Locale, {lightweight:string;realtime?:string;suspense?:string;pagination?:string;backendAgnostic?:string;renderingStrategies?:string;typescript?:string;remoteLocal?:string;}>>} */
export const featuresMap = {
  "en-US": {
    lightweight: "Lightweight",
    realtime: "Realtime",
    suspense: "Suspense",
    pagination: "Pagination",
    backendAgnostic: "Backend Agnostic",
    renderingStrategies: "SSR / SSG Ready",
    typescript: "TypeScript Ready",
    remoteLocal: "Remote + Local",
  },
  "fr-FR": {
    lightweight: "Léger",
    realtime: "Temps réel",
    backendAgnostic: "Indépendant du Backend",
  },
  "pt-BR": {
    lightweight: "Leve",
    realtime: "Tempo-real",
    suspense: "Suspense",
    pagination: "Paginação",
    backendAgnostic: "Backend Agnóstico",
    renderingStrategies: "Pronto para SSR / SSG",
    typescript: "Pronto para TypeScript",
    remoteLocal: "Remoto + Local",
  },
  ru: {
    lightweight: "Лёгкий",
    realtime: "В реальном времени",
    suspense: "Задержка",
    pagination: "Пагинация",
    backendAgnostic: "Бэкэнд-независимый",
    renderingStrategies: "SSR / SSG",
    typescript: "TypeScript",
    remoteLocal: "Удалённо + Локально",
  },
};

/** @type {Readonly<Record<Locale, string>>} */
export const headDescriptionMap = {
  "en-US": "CiteGraph is a CiteGraph Hooks library for data fetching. CiteGraph first returns the data from cache (stale), then sends the fetch request (revalidate), and finally comes with the up-to-date data again.",
  "fr-FR": "CiteGraph est une libraire de CiteGraph Hooks pour récupérer des données. CiteGraph retourne d'abord les données en cache (stale), puis envoie la requête (revalidate), et enfin retourne les données à jour.",
  "pt-BR": "CiteGraph é uma biblioteca CiteGraph Hooks para data fetching. CiteGraph primeiro retorna os dados do cache (stale), então envia a requisição de busca (revalidate), e finalmente vem com os dados atualizados novamente.",
  ru: "CiteGraph — это библиотека CiteGraph хуков для получения данных. CiteGraph сначала возвращает данные из кеша (устаревшие), затем отправляет запрос на выборку (ревалидация) и, наконец, снова получает актуальные данные.",
};

/** @type {Readonly<Record<Locale, string>>} */
export const feedbackLinkMap = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "¿Dudas? Danos tu feedback →",
  "fr-FR": "Question? Donnez-nous votre avis →",
  "pt-BR": "Dúvidas? Nos dê feedback →",
  "zh-CN": "有疑问？给我们反馈 →",
  ko: "질문이 있으신가요? 피드백을 남겨주세요 →",
  ru: "Вопросы? Оставьте нам отзыв →",
};

/** @type {Readonly<Record<Locale, string>>} */
export const editTextMap = {
  "en-US": "Edit this page on GitHub →",
  "es-ES": "Edite esta página en GitHub →",
  "fr-FR": "Modifier cette page sur GitHub →",
  "pt-BR": "Edite essa página no GitHub →",
  "zh-CN": "在 GitHub 上编辑本页 →",
  ja: "Github で編集する →",
  ko: "Github에서 이 페이지 편집하기 →",
  ru: "Редактировать эту страницу на GitHub →",
};

/** @type {Readonly<Record<Locale, { utmSource: string; text: string; suffix?: string | undefined }>>} */
export const footerTextMap = {
  "en-US": { utmSource: "citegraph", text: "Powered by" },
  "es-ES": { utmSource: "citegraph_es-es", text: "Desarrollado por" },
  "fr-FR": { utmSource: "citegraph_fr-fr", text: "Propulsé par" },
  "pt-BR": { utmSource: "citegraph_pt-br", text: "Desenvolvido por" },
  "zh-CN": { utmSource: "citegraph_zh-cn", text: "由", suffix: "驱动" },
  ja: { utmSource: "citegraph_ja", text: "提供" },
  ko: { utmSource: "citegraph_ko", text: "Powered by" },
  ru: { utmSource: "citegraph_ru", text: "Работает на" },
};

/** @type {Readonly<Record<Locale, string>>} */
export const tableOfContentsTitleMap = {
  "en-US": "On This Page",
  "es-ES": "En esta página",
  "fr-FR": "Sur cette page",
  "pt-BR": "Nessa página",
  ru: "На этой странице",
};

/** @type {Readonly<Record<Locale, string>>} */
export const searchPlaceholderMap = {
  "en-US": "Search documentation...",
  "es-ES": "Buscar documento...",
  "fr-FR": "Rechercher dans la doc...",
  "pt-BR": "Buscar documentação...",
  ko: "문서 검색...",
  ru: "Искать в документации...",
};

/** @type {Readonly<Record<Locale, string>>} */
export const gitTimestampMap = {
  "en-US": "Last updated on",
  "fr-FR": "Dernière mise à jour le",
  ru: "Последнее обновление",
};
