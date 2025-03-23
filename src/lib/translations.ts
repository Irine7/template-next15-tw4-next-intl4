export type Language = 'en' | 'ru' | 'uk' | 'es';

export type TranslationKey = 'title' | 'subtitle' | 'about' | 'caldron';

export const translations: Record<Language, Record<TranslationKey, string>> = {
	en: {
		title: 'Magic Potion Brewer',
		subtitle: 'Hello world!',
		about: 'About Us',
		caldron: 'My Caldron',
	},
	ru: {
		title: 'Магический Зельевар',
		subtitle: 'Привет, мир!',
		about: 'Перейти на страницу → About',
		caldron: 'Мой Котел',
	},
	uk: {
		title: 'Магічний Зіллевар',
		subtitle: 'Привіт, світе!',
		about: 'Перейти на сторінку → About',
		caldron: 'Мій Казан',
	},
	es: {
		title: 'Magico',
		subtitle: 'Hola, mundo!',
		about: 'Sobre Nosotros',
		caldron: 'Mi Caldero',
	},
};

export const languageNames: Record<Language, string> = {
	en: 'English',
	ru: 'Русский',
	uk: 'Українська',
	es: 'Español',
};
