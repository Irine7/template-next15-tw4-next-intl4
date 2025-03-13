import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import { useTranslations } from 'next-intl';

function LayoutHeader() {
	const t = useTranslations('HomePage');
	return (
		<>
			<header className="p-4 border-b">
				<div className="container mx-auto flex justify-between items-center">
					<h1 className="inline bg-gradient-to-r from-sky-200  via-sky-300 to-sky-500 bg-clip-text text-3xl font-semibold leading-tight tracking-tight text-transparent lg:text-5xl">
						{t('title')}
					</h1>
					<ThemeSwitcher />
				</div>
			</header>
		</>
	);
}

export default LayoutHeader;
