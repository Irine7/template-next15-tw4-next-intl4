'use client';

import { type Language, languageNames } from '@/lib/translations';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
	const router = useRouter();
	const pathname = usePathname(); // Текущий URL

	const languages: Language[] = ['en', 'ru', 'uk', 'es'];

	// Определяем текущий язык из URL
	const pathSegments = pathname.split('/').filter(Boolean);
	const currentLocale = languages.includes(pathSegments[0] as Language)
		? (pathSegments.shift() as Language)
		: 'en'; // Если нет языка — используем `en`

	// Функция для смены языка
	const handleLanguageChange = (lang: Language) => {
		if (lang === currentLocale) return; // Если язык уже выбран — ничего не делаем

		// Формируем новый маршрут, используя только новый язык и остальные сегменты пути (без текущего языка)
		const newPath = `/${lang}${pathSegments.length > 0 ? '/' + pathSegments.join('/') : ''}`;

		// Обновляем URL без перезагрузки страницы
		router.replace(newPath);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="sm" className="h-8 gap-1">
					<Globe className="h-4 w-4" />
					<span>{languageNames[currentLocale]}</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{languages.map((lang) => (
					<DropdownMenuItem
						key={lang}
						onClick={() => handleLanguageChange(lang)}
						className={currentLocale === lang ? 'bg-accent' : ''}
					>
						{languageNames[lang]}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
