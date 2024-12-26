import React from 'react';

export default function Shortlink() {
  const hostname = window.location.hostname;
  let displayHostname = hostname;
  if (hostname === "mero.lol") {
    displayHostname = "url.mero.lol";
  } else if (hostname === "mero.gay") {
    displayHostname = "href.mero.gay";
  }
  let message = `It seems you arrived here from ${displayHostname}. This might be because you tried to access a link with no slug, an expired slug, or an invalid slug.`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <main className="max-w-4xl mx-auto p-4 text-center">
        <h1 className="text-5xl font-bold mb-4">404?</h1>
        <p className="text-lg leading-relaxed text-gray-200 mb-4">
          {message}
        </p>
        <a
          href="/"
          className="text-blue-500 hover:underline"
        >
          Go back to Home
        </a>
      </main>
    </div>
  );
}

