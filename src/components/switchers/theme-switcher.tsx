'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { SunIcon, MoonIcon } from 'lucide-react';

const ThemeSwitcher: React.FC = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
			variant="ghost"
			size="icon"
		>
			{theme === 'light' ? <SunIcon /> : <MoonIcon />}
		</Button>
	);
};

export default ThemeSwitcher;
