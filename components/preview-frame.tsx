'use client';

interface PreviewFrameProps {
  html: string;
  css: string;
  js: string;
}

export function PreviewFrame({ html, css, js }: PreviewFrameProps) {
  const content = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            ${js}
          </script>
        </body>
      </html>
    `;

  return (
    <iframe
      className="w-full h-full border-0"
      title="Preview"
      sandbox="allow-scripts"
      srcDoc={content}
    />
  );
}
