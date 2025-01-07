import React from 'react';

export default function MainContent() {
    return (
        <main className="p-4">
            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Welcome to the App</h2>
                <p className="text-md">
                    This application showcases a comprehensive design system integrated with Tailwind CSS, ensuring a consistent and elegant user experience across all devices.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-lg font-semibold mb-2">Features</h2>
                <ul className="list-disc list-inside">
                    <li className="mb-1">Responsive Design</li>
                    <li className="mb-1">User Authentication</li>
                    <li className="mb-1">Progressive Web App Support</li>
                    <li className="mb-1">Error Logging with Sentry</li>
                    <li className="mb-1">API Integration</li>
                </ul>
            </section>
            <section>
                <h2 className="text-lg font-semibold mb-2">Get Started</h2>
                <button className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded transition duration-300">
                    Learn More
                </button>
            </section>
        </main>
    );
}