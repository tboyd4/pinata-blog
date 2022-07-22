import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pinnie For Your Thoughts</title>
				<link rel="icon" href="/pinnie.svg" />
			</Head>
			<div className="cursor-pointer absolute top-6 right-6 transition-all ease-in-out duration-300 hover:bg-slate-200 hover:bg-opacity-50 rounded-sm px-4 py-2">
				<Link href="login">Login</Link>
			</div>
			<div className="flex flex-col items-center justify-items-center mx-auto my-48">
				<Image width="80px" height="80px" src="/pinnie.svg" alt="Pinnie the pinata" />
				<h1>Pinnie For Your Thoughts</h1>
				<p>Where Web3 meets Web2.</p>
				<div>
					<form onSubmit={() => console.log('subscribing')}>
						<input type="email" placeholder="Type your email" />
						<button type="submit">Subscribe</button>
					</form>
				</div>
				<div>
					<Link href="sample">Read a Sample First</Link>
				</div>
			</div>
		</div>
	);
}
