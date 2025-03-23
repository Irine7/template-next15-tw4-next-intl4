import Link from 'next/link';

const About: React.FC = () => {
	return (
		<div>
			<h1 className="text-3xl">About Page</h1>
			<Link href="./">← Home Page</Link>
		</div>
	);
};

export default About;
