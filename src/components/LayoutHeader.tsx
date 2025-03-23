'use client';

import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';

function LayoutHeader() {
	const t = useTranslations('HomePage');

	return (
		<header className="p-4 border-b">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="inline bg-gradient-to-r from-green-200 via-green-300 to-green-500 bg-clip-text text-3xl font-semibold leading-tight tracking-tight text-transparent lg:text-5xl">
					{t('title')}
				</h1>
				<div className="flex gap-2 items-center">
					<LanguageSwitcher />
					<h3>{t('caldron')}</h3>
					<ThemeSwitcher />
				</div>
			</div>
		</header>
	);
}

export default LayoutHeader;
