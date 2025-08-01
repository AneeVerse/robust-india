'use client';

import { useEffect, useState } from 'react';

export default function FontTestPage() {
  const [currentFontOption, setCurrentFontOption] = useState<string>('');
  const [fontInfo, setFontInfo] = useState({
    heading: '',
    body: '',
    optionName: ''
  });

  useEffect(() => {
    // Get the current font option from body class
    const bodyElement = document.body;
    const fontClasses = ['font-option-1', 'font-option-2', 'font-option-3', 'font-option-4'];
    const currentClass = fontClasses.find(cls => bodyElement.classList.contains(cls)) || 'font-option-3';
    
    setCurrentFontOption(currentClass);

    // Set font information based on the current option
    const fontData = {
      'font-option-1': {
        heading: 'Poppins',
        body: 'Inter',
        optionName: 'Poppins + Inter (Google Fonts)'
      },
      'font-option-2': {
        heading: 'IBM Plex Sans',
        body: 'Source Sans Pro',
        optionName: 'IBM Plex Sans + Source Sans Pro (Google Fonts)'
      },
      'font-option-3': {
        heading: 'NoiGrotesk',
        body: 'NoiGrotesk',
        optionName: 'NoiGrotesk + NoiGrotesk (Your Custom Fonts)'
      },
      'font-option-4': {
        heading: 'Playfair Display',
        body: 'Lora',
        optionName: 'Playfair Display + Lora (Antique/Elegant)'
      }
    };

    setFontInfo(fontData[currentClass as keyof typeof fontData]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Font Testing Page
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Current Font Settings
          </h2>
          <div className="space-y-2 text-sm text-gray-600">
            <p><strong>Active Option:</strong> {fontInfo.optionName}</p>
            <p><strong>Heading Font:</strong> {fontInfo.heading}</p>
            <p><strong>Body Font:</strong> {fontInfo.body}</p>
            <p><strong>CSS Class:</strong> <code className="bg-gray-100 px-1 rounded">{currentFontOption}</code></p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Heading Examples */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Heading Examples ({fontInfo.heading})</h3>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">Heading 1</h1>
              <h2 className="text-2xl font-semibold text-gray-800">Heading 2</h2>
              <h3 className="text-xl font-medium text-gray-700">Heading 3</h3>
              <h4 className="text-lg font-medium text-gray-600">Heading 4</h4>
            </div>
          </div>

          {/* Body Text Examples */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Body Text Examples ({fontInfo.body})</h3>
            <div className="space-y-4">
              <p className="text-base text-gray-700">
                This is a paragraph of body text. The quick brown fox jumps over the lazy dog. 
                This font should be {fontInfo.body} and should look different from the headings.
              </p>
              <p className="text-sm text-gray-600">
                This is smaller body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-lg text-gray-800">
                This is larger body text. Notice how the character shapes and spacing are different 
                from the heading font above.
              </p>
            </div>
          </div>
        </div>

        {/* Font Comparison */}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Font Comparison</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Poppins (Headings)</h4>
              <p className="text-sm text-gray-600 mb-2">Characteristics:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Geometric sans-serif</li>
                <li>• Modern and clean</li>
                <li>• Excellent readability</li>
                <li>• Google Font</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">IBM Plex Sans (Headings)</h4>
              <p className="text-sm text-gray-600 mb-2">Characteristics:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Corporate and professional</li>
                <li>• Clean, structured</li>
                <li>• Technical appearance</li>
                <li>• Google Font</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">NoiGrotesk (Headings)</h4>
              <p className="text-sm text-gray-600 mb-2">Characteristics:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom geometric sans-serif</li>
                <li>• Modern and clean design</li>
                <li>• Professional appearance</li>
                <li>• Custom font family</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Playfair Display (Headings)</h4>
              <p className="text-sm text-gray-600 mb-2">Characteristics:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Elegant serif font</li>
                <li>• Classic, antique feel</li>
                <li>• Sophisticated appearance</li>
                <li>• Google Font</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-4">How to Test All Font Options</h3>
          <div className="text-sm text-blue-700 space-y-4">
            
            <div>
              <p><strong>Option 1: Poppins + Inter (Google Fonts)</strong></p>
              <p>Edit <code className="bg-blue-100 px-1 rounded">src/app/layout.tsx</code> and change body class to:</p>
              <pre className="bg-blue-100 p-2 rounded text-xs overflow-x-auto">
{`<body className="antialiased font-option-1">`}
              </pre>
            </div>

            <div>
              <p><strong>Option 2: IBM Plex Sans + Source Sans Pro (Google Fonts)</strong></p>
              <p>Edit <code className="bg-blue-100 px-1 rounded">src/app/layout.tsx</code> and change body class to:</p>
              <pre className="bg-blue-100 p-2 rounded text-xs overflow-x-auto">
{`<body className="antialiased font-option-2">`}
              </pre>
            </div>

            <div>
              <p><strong>Option 3: NoiGrotesk + NoiGrotesk (Your Custom Fonts)</strong></p>
              <p>Edit <code className="bg-blue-100 px-1 rounded">src/app/layout.tsx</code> and change body class to:</p>
              <pre className="bg-blue-100 p-2 rounded text-xs overflow-x-auto">
{`<body className="antialiased font-option-3">`}
              </pre>
            </div>

            <div>
              <p><strong>Option 4: Playfair Display + Lora (Antique/Elegant)</strong></p>
              <p>Edit <code className="bg-blue-100 px-1 rounded">src/app/layout.tsx</code> and change body class to:</p>
              <pre className="bg-blue-100 p-2 rounded text-xs overflow-x-auto">
{`<body className="antialiased font-option-4">`}
              </pre>
            </div>

            <p className="mt-4"><strong>After changing:</strong> Save the file and refresh this page to see the differences!</p>
          </div>
        </div>
      </div>
    </div>
  );
} 