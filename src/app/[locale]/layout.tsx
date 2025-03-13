import { NextIntlClientProvider, Locale, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { ThemeProvider } from 'next-themes';
import LayoutHeader from '@/components/LayoutHeader';

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider>
					<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
						<div className="flex flex-col min-h-screen">
							<LayoutHeader />
							<main className="flex-grow container mx-auto p-4 flex items-center justify-center">
								{children}
							</main>
						</div>
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
