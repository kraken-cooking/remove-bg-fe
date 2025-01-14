export const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-16 px-8">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
				<div>
					<div className="flex items-center mb-6">
						<span className="text-purple-400 text-2xl">✨</span>
						<span className="ml-2 font-semibold">RemoveBG Pro</span>
					</div>
					<p className="text-gray-400">
						The easiest way to remove backgrounds from your images
						automatically.
					</p>
				</div>

				<div>
					<h4 className="font-semibold mb-6">Product</h4>
					<ul className="space-y-2 text-gray-400">
						<li>Features</li>
						<li>Pricing</li>
						<li>API</li>
						<li>Integration</li>
					</ul>
				</div>

				<div>
					<h4 className="font-semibold mb-6">Resources</h4>
					<ul className="space-y-2 text-gray-400">
						<li>Blog</li>
						<li>Tutorials</li>
						<li>Documentation</li>
						<li>Support</li>
					</ul>
				</div>

				<div>
					<h4 className="font-semibold mb-6">Company</h4>
					<ul className="space-y-2 text-gray-400">
						<li>About Us</li>
						<li>Careers</li>
						<li>Contact</li>
						<li>Privacy Policy</li>
					</ul>
				</div>
			</div>
			<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
				© 2024 RemoveBG Pro. All rights reserved.
			</div>
		</footer>
	);
};
