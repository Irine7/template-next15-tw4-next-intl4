import { translations } from '@/lib/translations';

export async function getTranslations(locale: string) {
	// Проверяем, есть ли переводы для запрашиваемой локали
	if (!(locale in translations)) {
		throw new Error(`No translations for locale: ${locale}`);
	}
	return translations[locale];
}
