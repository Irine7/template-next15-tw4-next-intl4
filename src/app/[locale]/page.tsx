'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomePage() {
	const t = useTranslations('HomePage');
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<h1 className="text-3xl">{t('subtitle')}</h1>
			<Link href="/about">{t('about')}</Link>
		</div>
	);
}