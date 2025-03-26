import Link from 'next/link';
import { useTranslations } from 'next-intl';

const About: React.FC = () => {
	const t = useTranslations('HomePage');

	return (
		<div>
			<h1 className="text-3xl">{t('about_page')}</h1>
			<Link href="./">{t('go_to_home_page')}</Link>
		</div>
	);
};

export default About;
