import React from 'react';
import { useTranslations } from 'next-intl';

export default function ServerPage() {
	// const t = useTranslations('ServerPage');

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-3xl font-bold mb-6">Server Page</h1>
			<p className="text-lg mb-4">
				This is the server page. Here you can place content for servers.
			</p>
		</div>
	);
}
