export const Header = () => {
	return (
		<nav className="flex items-center justify-between px-8 py-4">
			<div className="flex items-center">
				<span className="text-purple-600 text-2xl">✨</span>
				<span className="ml-2 font-semibold">RemoveBG Pro</span>
			</div>

			<div className="hidden md:flex space-x-6">
				<a href="/" className="text-gray-600">
					Home
				</a>
				<a href="/" className="text-gray-600">
					Features
				</a>
				<a href="/" className="text-gray-600">
					Pricing
				</a>
				<a href="/" className="text-gray-600">
					Contact
				</a>
			</div>

			<a href="/app">
				<button className="bg-purple-100 text-purple-600 px-6 py-2 rounded-full hover:bg-purple-200 transition">
					Try for Free
				</button>
			</a>
		</nav>
	);
};
