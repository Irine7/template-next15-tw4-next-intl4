import React from 'react';
import { useTranslations } from 'next-intl';

export default function AdminPage() {
  // const t = useTranslations('AdminPage');

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin Page</h1>
      <p className="text-lg mb-4">
        This is the admin page. Here you can place content for administrators.
      </p>
			<p className="text-sm font-medium">Admin-only API Route</p>
    </div>
  );
}
