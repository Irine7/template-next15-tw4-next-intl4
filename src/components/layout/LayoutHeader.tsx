'use client';

import React from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import ThemeSwitcher from '../switchers/theme-switcher';
import LanguageSwitcher from '../switchers/language-switcher';
import LoginButton from '../auth/login-button';
import { Button } from '../ui/button';

function LayoutHeader() {
	const t = useTranslations('HomePage');

	return (
		<header className="p-4 border-b">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="./">
					<h1 className="inline bg-gradient-to-r from-green-200 via-green-300 to-green-500 bg-clip-text text-3xl font-semibold leading-tight tracking-tight text-transparent lg:text-5xl">
						{t('title')}
					</h1>
				</Link>
				<div className="flex gap-2 items-center">
					<LanguageSwitcher />
					<h3>{t('cart')}</h3>
					<ThemeSwitcher />
					<LoginButton>
            <Button
              className="bg-gradient-to-r from-sky-400 to-sky-500 text-primary hover:bg-gradient-to-l hover:from-sky-400 hover:to-sky-500"
              size="lg"
            >
              Sign in
            </Button>
          </LoginButton>
				</div>
			</div>
		</header>
	);
}

export default LayoutHeader;
