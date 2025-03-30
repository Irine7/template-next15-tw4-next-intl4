import React from 'react';
import { useTranslations } from 'next-intl';

export default function ClientPage() {
	// const t = useTranslations('ClientPage');

	return (
		<div className="container mx-auto py-10">
			<h1 className="text-3xl font-bold mb-6">Client Page</h1>
			<p className="text-lg mb-4">
				This is the client page. Here you can place content for clients.
			</p>
		</div>
	);
}
