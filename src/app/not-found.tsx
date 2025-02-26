export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 - Page Not Found</title>
      </head>
      <body className="bg-primary h-screen text-secondary">
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-accent">404 - Page Not Found</h1>
            <p className="mt-4 text-gray">Oops! The page you're looking for doesn't exist.</p>
          </div>
        </div>
      </body>
    </html>
  );
}
