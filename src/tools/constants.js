

export const SITE_LANG = "language"


    export const API_PATH = `http://api.citynet.uz/${localStorage.getItem(SITE_LANG) === "uz" ? "uz" :
        localStorage.getItem(SITE_LANG) === "en" ? "en" : "ru"}/api/provider/`;
    export const API_PATH_MAIN = `http://api.citynet.uz/${localStorage.getItem(SITE_LANG) === "uz" ? "uz" :
        localStorage.getItem(SITE_LANG) === "en" ? "en" : "ru"}/api/main/`;
    export const API_PATH_SELLOFFICE = `http://api.citynet.uz/${localStorage.getItem(SITE_LANG) === "uz" ? "uz" :
        localStorage.getItem(SITE_LANG) === "en" ? "en" : "ru"}/api/sell-office/`;




