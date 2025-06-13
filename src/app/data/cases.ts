import phone from "../assets/phone.png";
import phone2 from "../assets/phone2.png";
import webphone1 from "../assets/web-case1.png"
import webphone2 from "../assets/web-case2.png"
import webphone3 from "../assets/web-case3.png"
import webphone4 from "../assets/web-case4.png"
import webphone5 from "../assets/web-case5.png"
import webphone6 from "../assets/web-case6.png"
import webphone7 from "../assets/web-case7.png"
import webphone8 from "../assets/web-case8.png"

import botsphone1 from "../assets/bots-case1.png"
import botsphone2 from "../assets/bots-case2.png"
import botsphone3 from "../assets/bots-case3.png"
import botsphone4 from "../assets/bots-case4.png"

import web3phone1 from "../assets/web3-case1.png"
import web3phone2 from "../assets/web3-case2.png"
import web3phone3 from "../assets/web3-case3.png"
import web3phone4 from "../assets/web3-case4.png"
import web3phone5 from "../assets/web3-case5.png"
import web3phone6 from "../assets/web3-case6.png"

import uiuxphone1 from "../assets/uiux-case1.png"
import uiuxphone2 from "../assets/uiux-case2.png"
import uiuxphone3 from "../assets/uiux-case3.png"
import uiuxphone4 from "../assets/uiux-case4.png"

import mobilephone1 from "../assets/mobile-case1.png"
import mobilephone2 from "../assets/mobile-case2.png"
import mobilephone3 from "../assets/mobile-case3.png"
import mobilephone4 from "../assets/mobile-case4.png"
import { lv } from "./lang/lv";



export const cases = {  
    RUS: [
        {
            category: "Web",
            title: "Разработка Web платформы Yoso",
            text: "Проект Yoso — это пример веб-разработки с личным кабинетом, аналитикой и упором на UX/UI-дизайн.",
            techstack: ["Разработка", "UX/UI дизайн", "Веб-аналитика"],
            imgUrl: webphone1,
            link: "/case/web-yoso-digital",
        },
        {
            category: "Web",
            title: "Разработка eCommerce сайта Dandimos",
            text: "Проект Dandimos — это интернет-магазин одежды с  удобным каталогом и современным визуалом.",
            techstack: ["Разработка", "Shopify", "eCommerce"],
            imgUrl: webphone2,
            link: "/case/web-dandimos",
        },
        {
            category: "Web",
            title: "Разработка сайта ресторана Foodio",
            text: "Foodio — сайт для ресторана с меню, онлайн-бронированием и ярким дизайном.",
            techstack: ["Разработка", "UX/UI дизайн", "Адаптивность"],
            imgUrl: webphone3,
            link: "/case/web-foodio-restaurant",
        },
        {
            category: "Web",
            title: "Разработка сайта студии Archavia",
            text: "Archavia — сайт для архитектурной студии с 3D-визуализациями и планировками.",
            techstack: ["Разработка", "Под ключ", "SEO-оптимизация"],
            imgUrl: webphone4,
            link: "/case/web-archavia-design",
        },
        {
            category: "Web",
            title: "Разработка сайта Kings Barber Club",
            text: "Kings — сайт для барбершопа с акцентом на стиль и простоту записи",
            techstack: ["Разработка", "Backend", "Адаптивность"],
            imgUrl: webphone5,
            link: "/case/web-kingsbarber",
        },
        {
            category: "Web",
            title: "Разработка сайта Lavisha Cleaning",
            text: "Lavisha — сайт клининговой компании с акцентом на премиум-сервис, простую навигацию и онлайн-запись.",
            techstack: ["Разработка", "UX/UI дизайн", "SEO-оптимизация"],
            imgUrl: webphone6,
            link: "/case/web-lavisha-cleaning",
        },
        {
            category: "Web",
            title: "Разработка сайта Physivex",
            text: "Physivex — сайт клиники реабилитации с онлайн-записью, структурированной подачей услуг и чистым медицинским дизайном.",
            techstack: ["Разработка", "UX/UI дизайн", "Адаптивность"],
            imgUrl: webphone7,
            link: "/case/web-physivex-healthy",
        },
        {
            category: "Web",
            title: "Разработка eCommerce сайта Junova",
            text: "Junova — интернет-магазин премиальной ногтевой продукции с элегантным дизайном и акцентом бренда.",
            techstack: ["Разработка", "Backend", "Интеграции"],
            imgUrl: webphone8,
            link: "/case/web-junova-nails",
        },
        {
            category: "Bots",
            title: "Разработка мини-приложения Lucky Gifts",
            text: "Lucky Gifts — Telegram-мини-апп с механикой рандомных призов, демо-режимом и системой звёзд.",
            techstack: ["Разработка", "Telegram Mini App", "Логика выпадения"],
            imgUrl: botsphone1,
            link: "/case/bots-casino-webapp",
        },
        {
            category: "Bots",
            title: "Разработка Telegram Mini App dAdex",
            text: "dAdex — мини-приложение на Telegram с Web3-интеграцией, логикой дропа и системой токенов.",
            techstack: ["Разработка", "Telegram webApp", " Web3-интеграция"],
            imgUrl: botsphone2,
            link: "/case/bots-messenger-telegram",
        },
        {
            category: "Bots",
            title: "Telegram Mini App с играми и AI",
            text: "Мультифункциональный mini app: игры на Unity, AI-интерфейсы, геймифицированная логика.",
            techstack: ["Разработка", "Backend", "Unity-реализация"],
            imgUrl: botsphone3,
            link: "/case/bots-games-telegram",
        },
        {
            category: "Bots",
            title: "Telegram Mini Apps для бизнеса",
            text: "Серия Mini Apps в Telegram: eCom, доставка, услуги. Разработка логики заказов, каталога и оплаты.",
            techstack: ["Разработка", "Backend", "Интеграции"],
            imgUrl: botsphone4,
            link: "/case/bots-webapps-telegram",
        },
        {
            category: "Web3",
            title: "Разработка инвестиционной платформы IKO",
            text: "IKO — это калькулятор доходности с токеномикой, аналитикой и личным кабинетом.",
            techstack: ["Разработка", "Блокчейн-интеграция", "Backend"],
            imgUrl: web3phone1,
            link: "/case/web3-iko-investment",
        },
        {
            category: "Web3",
            title: "Разработка площадки XECO",
            text: "XECO — блокчейн-маркетплейс с ICO-чартом, таймером и интеграцией смарт-контрактов. ",
            techstack: ["Разработка", "Блокчейн", "Смарт-контракты"],
            imgUrl: web3phone2,
            link: "/case/web3-xeco-ico",
        },
        {
            category: "Web3",
            title: "Разработка проекта Ironix",
            text: "Ironix — сайт блокчейн-проекта с акцентом на инвестиции, анимацию и плавную архитектуру разделов",
            techstack: ["Разработка", "Web3-интергация", "Блокчейн"],
            imgUrl: web3phone3, 
            link: "/case/web3-ironik-investment",
        },
        {
            category: "Web3",
            title: "Разработка Web3-кейса SHAKEY",
            text: "SHAKEY — NFT-мем-проект на Ethereum. Разработан с анимацией, подключением токенов и мультиязычностью",
            techstack: ["Разработка", "Web3-интеграция", "i18n"],
            imgUrl: web3phone4,
            link: "/case/web3-shakey-token",
        },
        {
            category: "Web3",
            title: "Разработка Web3 платформы Fungypack",
            text: "Проект Fungypack – это пример Web3-разработки, которая сочетает в себе блокчейн, NFT, механики",
            techstack: ["Разработка", "NFTs", "Блокчейн-интеграция"],
            imgUrl: web3phone5,
            link: "/case/web3-fungypack-nft",
        },
        {
            category: "Web3",
            title: "Разработка платформы Bebra Labs",
            text: "Проект с модульной архитектурой, кастомной иконографикой и адаптивной версткой под Web3-услуги.",
            techstack: ["Разработка", "Web3-интеграция", "Frontend"],
            imgUrl: web3phone6,
            link: "/case/web3-bebralabs-web3",
        },
        {
            category: "UI/UX",
            title: "UI/UX-дизайн eCommerce-приложения",
            text: "Разработан дизайн мобильного магазина с корзиной, фильтрами, профилем и системой скидок.",
            techstack: ["UI/UX дизайн", "Мобильный интерфейс", "Прототипирование"],
            imgUrl: uiuxphone1,
            link: "/case/uiux-electronic-shop",
        },
        {
            category: "UI/UX",
            title: "UI/UX-дизайн трекера привычек",
            text: "Создан минималистичный интерфейс для трекера задач: дашборд, анкеты, аналитика. Цветовая гамма — мягкая.",
            techstack: ["UI/UX дизайн", "Мобильный UI", "Дизайн-система"],
            imgUrl: uiuxphone2,
            link: "/case/uiux-healthy-world",
        },
        {
            category: "UI/UX",
            title: "UI/UX-дизайн фитнес-приложения с ИИ",
            text: "Интерфейс для приложения с ИИ-консультантом, трекером показателей и рекомендациями по питанию и активности.",
            techstack: ["UI/UX дизайн", "Мобильный UI", "Дизайн аналитики"],
            imgUrl: uiuxphone3,
            link: "/case/uiux-fitness-ai",
        },
        {
            category: "UI/UX",
            title: "UI/UX-дизайн wellness-приложения",
            text: "Прототип приложения для отслеживания прогресса отказа от вредных привычек.",
            techstack: ["UI/UX дизайн", "Прототипирование", "Мобильный UI"],
            imgUrl: uiuxphone4,
            link: "/case/uiux-top-health",
        },
        {
            category: "Mobile",
            title: "Разработка eCommerce-приложения",
            text: "Создано мобильное приложение с каталогом, карточками товара и корзиной. Упор на удобство покупок и адаптивность.",
            techstack: ["Разработка", "Flutter", "Firebase"],
            imgUrl: mobilephone1,
            link: "/case/mobile-internet-shop",
        },
        {
            category: "Mobile",
            title: "Разработка музыкального приложения",
            text: "Приложение для прослушивания треков с плейлистами, альбомами и экраном «сейчас играет». Современный и лёгкий UI.",
            techstack: ["Разработка", "Kotlin", "Аудио API"],
            imgUrl: mobilephone2,
            link: "/case/mobile-soundtrack-app",
        },
        {
            category: "Mobile",
            title: "Разработка приложения для Smart Home",
            text: "Интерфейс для управления светом, колонками и устройствами в доме. Реализовано тёмное оформление.",
            techstack: ["Разработка", "Swift", "IoT-интеграция"],
            imgUrl: mobilephone3,
            link: "/case/mobile-home-app",
        },
        {
            category: "Mobile",
            title: "Разработка обучающего приложения Elemento",
            text: "Мобильное приложение для изучения физики. Реализованы глоссарий, поиск, навигация и яркий визуальный стиль.",
            techstack: ["Разработка", "Навигация", "React Native"],
            imgUrl: mobilephone4,
            link: "/case/mobile-elemento-physics",
        },
    ],

    EN: [
        {
            "category": "Web",
            "title": "Development of Yoso Web Platform",
            "text": "Yoso project is an example of web development with a user dashboard, analytics, and strong UX/UI design focus.",
            "techstack": ["Development", "UX/UI Design", "Web Analytics"],
            "imgUrl": webphone1,
            "link": "/case/web-yoso-digital"
        },
        {
            "category": "Web",
            "title": "Development of Dandimos eCommerce Website",
            "text": "Dandimos is a clothing e-commerce store with a convenient catalog and modern visuals.",
            "techstack": ["Development", "Shopify", "eCommerce"],
            "imgUrl": webphone2,
            "link": "/case/web-dandimos"
        },
        {
            "category": "Web",
            "title": "Development of Foodio Restaurant Website",
            "text": "Foodio is a restaurant site with a menu, online reservation, and vibrant design.",
            "techstack": ["Development", "UX/UI Design", "Responsive Design"],
            "imgUrl": webphone3,
            "link": "/case/web-foodio-restaurant"
        },
        {
            "category": "Web",
            "title": "Development of Archavia Architecture Studio Website",
            "text": "Archavia is a website with 3D visualizations and layouts for an architecture firm.",
            "techstack": ["Development", "Full-Cycle", "SEO Optimization"],
            "imgUrl": webphone4,
            "link": "/case/web-archavia-design"
        },
        {
            "category": "Web",
            "title": "Development of Kings Barber Club Website",
            "text": "Kings is a barbershop site with a focus on style and easy appointment booking.",
            "techstack": ["Development", "Backend", "Responsive Design"],
            "imgUrl": webphone5,
            "link": "/case/web-kingsbarber"
        },
        {
            "category": "Web",
            "title": "Development of Lavisha Cleaning Website",
            "text": "Lavisha is a cleaning company site focused on premium service, simple navigation, and online booking.",
            "techstack": ["Development", "UX/UI Design", "SEO Optimization"],
            "imgUrl": webphone6,
            "link": "/case/web-lavisha-cleaning"
        },
        {
            "category": "Web",
            "title": "Development of Physivex Website",
            "text": "Physivex is a rehabilitation clinic website with online booking and clean medical design.",
            "techstack": ["Development", "UX/UI Design", "Responsive Design"],
            "imgUrl": webphone7,
            "link": "/case/web-physivex-healthy"
        },
        {
            "category": "Web",
            "title": "Development of Junova eCommerce Website",
            "text": "Junova is a premium nail products online store with elegant design and brand emphasis.",
            "techstack": ["Development", "Backend", "Integrations"],
            "imgUrl": webphone8,
            "link": "/case/web-junova-nails"
        },
        {
            "category": "Bots",
            "title": "Development of Lucky Gifts Mini App",
            "text": "Lucky Gifts is a Telegram mini app with random prize mechanics, demo mode, and a star system.",
            "techstack": ["Development", "Telegram Mini App", "Drop Logic"],
            "imgUrl": botsphone1,
            "link": "/case/bots-casino-webapp"
        },
        {
            "category": "Bots",
            "title": "Development of dAdex Telegram Mini App",
            "text": "dAdex is a Telegram mini app with Web3 integration, drop mechanics, and token system.",
            "techstack": ["Development", "Telegram WebApp", "Web3 Integration"],
            "imgUrl": botsphone2,
            "link": "/case/bots-messenger-telegram"
        },
        {
            "category": "Bots",
            "title": "Telegram Mini App with Games and AI",
            "text": "A multifunctional mini app featuring Unity games, AI interfaces, and gamified logic.",
            "techstack": ["Development", "Backend", "Unity Implementation"],
            "imgUrl": botsphone3,
            "link": "/case/bots-games-telegram"
        },
        {
            "category": "Bots",
            "title": "Telegram Mini Apps for Business",
            "text": "A series of Telegram mini apps: eCom, delivery, services. Order logic, catalog, and payment implemented.",
            "techstack": ["Development", "Backend", "Integrations"],
            "imgUrl": botsphone4,
            "link": "/case/bots-webapps-telegram"
        },
        {
            "category": "Web3",
            "title": "Development of IKO Investment Platform",
            "text": "IKO is a profitability calculator with tokenomics, analytics, and a user dashboard.",
            "techstack": ["Development", "Blockchain Integration", "Backend"],
            "imgUrl": web3phone1,
            "link": "/case/web3-iko-investment"
        },
        {
            "category": "Web3",
            "title": "Development of XECO Platform",
            "text": "XECO is a blockchain marketplace with an ICO chart, countdown timer, and smart contract integration.",
            "techstack": ["Development", "Blockchain", "Smart Contracts"],
            "imgUrl": web3phone2,
            "link": "/case/web3-xeco-ico"
        },
        {
            "category": "Web3",
            "title": "Development of Ironix Project",
            "text": "Ironix is a blockchain project site focused on investment, animation, and smooth section architecture.",
            "techstack": ["Development", "Web3 Integration", "Blockchain"],
            "imgUrl": web3phone3,
            "link": "/case/web3-ironik-investment"
        },
        {
            "category": "Web3",
            "title": "Development of SHAKEY Web3 Case",
            "text": "SHAKEY is an Ethereum-based NFT meme project with animations, token connection, and multilingual support.",
            "techstack": ["Development", "Web3 Integration", "i18n"],
            "imgUrl": web3phone4,
            "link": "/case/web3-shakey-token"
        },
        {
            "category": "Web3",
            "title": "Development of Fungypack Web3 Platform",
            "text": "Fungypack combines blockchain, NFTs, and interactive mechanics into a Web3 experience.",
            "techstack": ["Development", "NFTs", "Blockchain Integration"],
            "imgUrl": web3phone5,
            "link": "/case/web3-fungypack-nft"
        },
        {
            "category": "Web3",
            "title": "Development of Bebra Labs Platform",
            "text": "A modular Web3 service platform with custom iconography and responsive layout.",
            "techstack": ["Development", "Web3 Integration", "Frontend"],
            "imgUrl": web3phone6,
            "link": "/case/web3-bebralabs-web3"
        },
        {
            "category": "UI/UX",
            "title": "UI/UX Design for eCommerce App",
            "text": "Designed a mobile store interface with cart, filters, user profile, and discount system.",
            "techstack": ["UI/UX Design", "Mobile Interface", "Prototyping"],
            "imgUrl": uiuxphone1,
            "link": "/case/uiux-electronic-shop"
        },
        {
            "category": "UI/UX",
            "title": "UI/UX Design for Habit Tracker",
            "text": "Created a minimalist UI for a task tracker: dashboard, surveys, and analytics with a soft color palette.",
            "techstack": ["UI/UX Design", "Mobile UI", "Design System"],
            "imgUrl": uiuxphone2,
            "link": "/case/uiux-healthy-world"
        },
        {
            "category": "UI/UX",
            "title": "UI/UX Design for Fitness App with AI",
            "text": "Interface for a fitness app featuring an AI coach, progress tracking, and nutrition/activity advice.",
            "techstack": ["UI/UX Design", "Mobile UI", "Analytics Design"],
            "imgUrl": uiuxphone3,
            "link": "/case/uiux-fitness-ai"
        },
        {
            "category": "UI/UX",
            "title": "UI/UX Design for Wellness App",
            "text": "Prototyped an app to track progress in breaking bad habits with a clean, encouraging UI.",
            "techstack": ["UI/UX Design", "Prototyping", "Mobile UI"],
            "imgUrl": uiuxphone4,
            "link": "/case/uiux-top-health"
        },
        {
            "category": "Mobile",
            "title": "Development of eCommerce Mobile App",
            "text": "Built a mobile application with catalog, product pages, and a cart. Focused on usability and responsiveness.",
            "techstack": ["Development", "Flutter", "Firebase"],
            "imgUrl": mobilephone1,
            "link": "/case/mobile-internet-shop"
        },
        {
            "category": "Mobile",
            "title": "Development of Music Streaming App",
            "text": "A music player app with playlists, albums, and a ‘now playing’ screen. Modern and lightweight UI.",
            "techstack": ["Development", "Kotlin", "Audio API"],
            "imgUrl": mobilephone2,
            "link": "/case/mobile-soundtrack-app"
        },
        {
            "category": "Mobile",
            "title": "Development of Smart Home App",
            "text": "App interface for managing lighting, speakers, and smart home devices. Includes dark mode design.",
            "techstack": ["Development", "Swift", "IoT Integration"],
            "imgUrl": mobilephone3,
            "link": "/case/mobile-home-app"
        },
        {
            "category": "Mobile",
            "title": "Development of Educational App 'Elemento'",
            "text": "Physics learning app with glossary, search, navigation, and a vibrant visual style.",
            "techstack": ["Development", "Navigation", "React Native"],
            "imgUrl": mobilephone4,
            "link": "/case/mobile-elemento-physics"
        }

    ],
    LV: [
        {
            "category": "Web",
            "title": "Web platformas Yoso izstrāde",
            "text": "Yoso projekts – piemērs web izstrādei ar lietotāja kabinetu, analītiku un akcentu uz UX/UI dizainu.",
            "techstack": ["Izstrāde", "UX/UI dizains", "Web analītika"],
            "imgUrl": webphone1,
            "link": "/case/web-yoso-digital"
        },
        {
            "category": "Web",
            "title": "eCommerce vietnes Dandimos izstrāde",
            "text": "Dandimos – apģērbu interneta veikals ar ērtu katalogu un mūsdienīgu vizuālo tēlu.",
            "techstack": ["Izstrāde", "Shopify", "eCommerce"],
            "imgUrl": webphone2,
            "link": "/case/web-dandimos"
        },
        {
            "category": "Web",
            "title": "Restorāna vietnes Foodio izstrāde",
            "text": "Foodio – restorāna vietne ar ēdienkarti, tiešsaistes rezervāciju un spilgtu dizainu.",
            "techstack": ["Izstrāde", "UX/UI dizains", "Adaptīvs dizains"],
            "imgUrl": webphone3,
            "link": "/case/web-foodio-restaurant"
        },
        {
            "category": "Web",
            "title": "Arhitektu studijas Archavia vietnes izstrāde",
            "text": "Archavia – vietne ar 3D vizualizācijām un plānojumiem arhitektūras uzņēmumam.",
            "techstack": ["Izstrāde", "Pilns cikls", "SEO optimizācija"],
            "imgUrl": webphone4,
            "link": "/case/web-archavia-design"
        },
        {
            "category": "Web",
            "title": "Kings Barber Club vietnes izstrāde",
            "text": "Kings – barbershop vietne ar akcentu uz stilu un vienkāršu pierakstu.",
            "techstack": ["Izstrāde", "Backend", "Adaptīvs dizains"],
            "imgUrl": webphone5,
            "link": "/case/web-kingsbarber"
        },
        {
            "category": "Web",
            "title": "Lavisha Cleaning vietnes izstrāde",
            "text": "Lavisha – tīrīšanas uzņēmuma vietne ar uzsvaru uz premium servisu, vienkāršu navigāciju un tiešsaistes rezervāciju.",
            "techstack": ["Izstrāde", "UX/UI dizains", "SEO optimizācija"],
            "imgUrl": webphone6,
            "link": "/case/web-lavisha-cleaning"
        },
        {
            "category": "Web",
            "title": "Physivex vietnes izstrāde",
            "text": "Physivex – rehabilitācijas klīnikas vietne ar tiešsaistes pierakstu un tīru medicīnisku dizainu.",
            "techstack": ["Izstrāde", "UX/UI dizains", "Adaptīvs dizains"],
            "imgUrl": webphone7,
            "link": "/case/web-physivex-healthy"
        },
        {
            "category": "Web",
            "title": "Junova eCommerce vietnes izstrāde",
            "text": "Junova – premium nagu produktu interneta veikals ar elegantu dizainu un zīmola akcentiem.",
            "techstack": ["Izstrāde", "Backend", "Integrācijas"],
            "imgUrl": webphone8,
            "link": "/case/web-junova-nails"
        },
    
       {
        "category": "Bots",
        "title": "Mini lietotnes Lucky Gifts izstrāde",
        "text": "Lucky Gifts – Telegram mini-app ar nejaušo balvu mehāniku, demo režīmu un zvaigžņu sistēmu.",
        "techstack": ["Izstrāde", "Telegram Mini App", "Izlozes loģika"],
        "imgUrl": botsphone1,
        "link": "/case/bots-casino-webapp"
    },
    {
        "category": "Bots",
        "title": "Telegram Mini App dAdex izstrāde",
        "text": "dAdex – Telegram mini lietotne ar Web3 integrāciju, tokenu sistēmu un loģiku priekš airdrop.",
        "techstack": ["Izstrāde", "Telegram WebApp", "Web3 integrācija"],
        "imgUrl": botsphone2,
        "link": "/case/bots-messenger-telegram"
    },
    {
        "category": "Bots",
        "title": "Telegram Mini App ar spēlēm un mākslīgo intelektu",
        "text": "Multifunkcionāla lietotne: Unity spēles, AI interfeisi, spēļošanas mehānika.",
        "techstack": ["Izstrāde", "Backend", "Unity integrācija"],
        "imgUrl": botsphone3,
        "link": "/case/bots-games-telegram"
    },
    {
        "category": "Bots",
        "title": "Telegram Mini Apps uzņēmējdarbībai",
        "text": "Telegram Mini Apps sērija: e-komercija, piegāde, pakalpojumi. Iepirkšanās, katalogs un maksājumu loģika.",
        "techstack": ["Izstrāde", "Backend", "Integrācijas"],
        "imgUrl": botsphone4,
        "link": "/case/bots-webapps-telegram"
    },
    {
        "category": "Bots",
        "title": "Mini lietotnes Lucky Gifts izstrāde",
        "text": "Lucky Gifts – Telegram mini-app ar nejaušo balvu mehāniku, demo režīmu un zvaigžņu sistēmu.",
        "techstack": ["Izstrāde", "Telegram Mini App", "Izlozes loģika"],
        "imgUrl": botsphone1,
        "link": "/case/bots-casino-webapp"
    },
    {
        "category": "Bots",
        "title": "Telegram Mini App dAdex izstrāde",
        "text": "dAdex – Telegram mini lietotne ar Web3 integrāciju, tokenu sistēmu un loģiku priekš airdrop.",
        "techstack": ["Izstrāde", "Telegram WebApp", "Web3 integrācija"],
        "imgUrl": botsphone2,
        "link": "/case/bots-messenger-telegram"
    },
    {
        "category": "Bots",
        "title": "Telegram Mini App ar spēlēm un mākslīgo intelektu",
        "text": "Multifunkcionāla lietotne: Unity spēles, AI interfeisi, spēļošanas mehānika.",
        "techstack": ["Izstrāde", "Backend", "Unity integrācija"],
        "imgUrl": botsphone3,
        "link": "/case/bots-games-telegram"
    },
    {
        "category": "Bots",
        "title": "Telegram Mini Apps uzņēmējdarbībai",
        "text": "Telegram Mini Apps sērija: e-komercija, piegāde, pakalpojumi. Iepirkšanās, katalogs un maksājumu loģika.",
        "techstack": ["Izstrāde", "Backend", "Integrācijas"],
        "imgUrl": botsphone4,
        "link": "/case/bots-webapps-telegram"
    },
    {
        "category": "Web3",
        "title": "Investīciju platformas IKO izstrāde",
        "text": "IKO – ienesīguma kalkulators ar tokenomiku, analītiku un lietotāja kontu.",
        "techstack": ["Izstrāde", "Blockchain integrācija", "Backend"],
        "imgUrl": web3phone1,
        "link": "/case/web3-iko-investment"
    },
    {
        "category": "Web3",
        "title": "XECO platformas izstrāde",
        "text": "XECO – blockchain tirdzniecības platforma ar ICO čartu, taimeri un smart kontraktu integrāciju.",
        "techstack": ["Izstrāde", "Blockchain", "Smart kontrakti"],
        "imgUrl": web3phone2,
        "link": "/case/web3-xeco-ico"
    },
    {
        "category": "Web3",
        "title": "Ironix projekta izstrāde",
        "text": "Ironix – blockchain projekta mājaslapa ar uzsvaru uz investīcijām, animācijām un sekciju arhitektūru.",
        "techstack": ["Izstrāde", "Web3 integrācija", "Blockchain"],
        "imgUrl": web3phone3,
        "link": "/case/web3-ironik-investment"
    },
    {
        "category": "Web3",
        "title": "SHAKEY Web3 projekta izstrāde",
        "text": "SHAKEY – NFT memo projekts uz Ethereum. Izveidots ar animāciju, tokenu piesaisti un daudzvalodu atbalstu.",
        "techstack": ["Izstrāde", "Web3 integrācija", "i18n"],
        "imgUrl": web3phone4,
        "link": "/case/web3-shakey-token"
    },
    {
        "category": "Web3",
        "title": "Fungypack Web3 platformas izstrāde",
        "text": "Fungypack – Web3 risinājuma piemērs, kas apvieno blockchain, NFT un mehānikas.",
        "techstack": ["Izstrāde", "NFTs", "Blockchain integrācija"],
        "imgUrl": web3phone5,
        "link": "/case/web3-fungypack-nft"
    },
    {
        "category": "Web3",
        "title": "Bebra Labs platformas izstrāde",
        "text": "Projekts ar modulāru arhitektūru, pielāgotu ikonogrāfiju un adaptīvu dizainu Web3 pakalpojumiem.",
        "techstack": ["Izstrāde", "Web3 integrācija", "Frontend"],
        "imgUrl": web3phone6,
        "link": "/case/web3-bebralabs-web3"
    }, 
    {
        "category": "UI/UX",
        "title": "UI/UX dizains e-komercijas lietotnei",
        "text": "Izstrādāts mobilā veikala dizains ar grozu, filtriem, profilu un atlaižu sistēmu.",
        "techstack": ["UI/UX dizains", "Mobilā saskarne", "Prototipēšana"],
        "imgUrl": uiuxphone1,
        "link": "/case/uiux-electronic-shop"
    },
    {
        "category": "UI/UX",
        "title": "UI/UX dizains ieradumu izsekotājam",
        "text": "Minimālistisks interfeiss uzdevumu izsekošanai: panelis, aptaujas, analītika. Maiga krāsu gamma.",
        "techstack": ["UI/UX dizains", "Mobilā saskarne", "Dizaina sistēma"],
        "imgUrl": uiuxphone2, 
        "link": "/case/uiux-healthy-world"
    },
    {
        "category": "UI/UX",
        "title": "UI/UX dizains fitnesa lietotnei ar AI",
        "text": "Lietotnes interfeiss ar AI konsultantu, rādītāju izsekotāju un uztura/aktivitāšu ieteikumiem.",
        "techstack": ["UI/UX dizains", "Mobilā saskarne", "Analītikas dizains"],
        "imgUrl": uiuxphone3,
        "link": "/case/uiux-fitness-ai"
    },
    {
        "category": "UI/UX",
        "title": "UI/UX dizains veselības lietotnei",
        "text": "Prototips lietotnei, kas seko līdzi progresam, atsakoties no kaitīgiem ieradumiem.",
        "techstack": ["UI/UX dizains", "Prototipēšana", "Mobilā saskarne"],
        "imgUrl": uiuxphone4,
        "link": "/case/uiux-top-health"
    },
    {
        "category": "Mobile",
        "title": "e-komercijas lietotnes izstrāde",
        "text": "Izveidota mobilā lietotne ar katalogu, preču kartītēm un iepirkumu grozu. Uzsvars uz ērtumu un adaptāciju.",
        "techstack": ["Izstrāde", "Flutter", "Firebase"],
        "imgUrl": mobilephone1,
        "link": "/case/mobile-internet-shop"
    },
    {
        "category": "Mobile",
        "title": "Mūzikas lietotnes izstrāde",
        "text": "Lietotne dziesmu atskaņošanai ar playlistēm, albumiem un ekrānu 'tagad atskaņo'. Mūsdienīgs un viegls interfeiss.",
        "techstack": ["Izstrāde", "Kotlin", "Audio API"],
        "imgUrl": mobilephone2,
        "link": "/case/mobile-soundtrack-app"
    },
    {
        "category": "Mobile",
        "title": "Smart Home lietotnes izstrāde",
        "text": "Interfeiss viedās mājas vadībai – gaismas, skaļruņi, ierīces. Tumšais režīms kā dizaina risinājums.",
        "techstack": ["Izstrāde", "Swift", "IoT integrācija"],
        "imgUrl": mobilephone3,
        "link": "/case/mobile-home-app"
    },
    {
        "category": "Mobile",
        "title": "Izglītojošās lietotnes Elemento izstrāde",
        "text": "Mobilā lietotne fizikas apguvei. Glosārijs, meklēšana, navigācija un košs vizuālais stils.",
        "techstack": ["Izstrāde", "Navigācija", "React Native"],
        "imgUrl": mobilephone4,
        "link": "/case/mobile-elemento-physics"
    }
  

  ],

    
};
//