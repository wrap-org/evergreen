import { useOf } from '@storybook/blocks';
import React from 'react';

/**
 * Figma link, element name, status
 */
export default function Meta({ of }: { of?: any }) {
  const resolvedOf = useOf(of || 'story', ['story']);

  const figma = resolvedOf.story.parameters.docs.figma;

  const fileName = resolvedOf.story.parameters.fileName.replace('./', '');
  const path = fileName.split('/').slice(0, -1).join('/');

  const github = `https://github.com/wrap-org/evergreen/tree/main/${path}`;

  return (
    <div className="sb-unstyled">
      <evg-grid align-items="center" gap="sm">
        <evg-grid-item>
          <evg-button width="square">
            <a href={github} target="_blank" rel="noopener noreferrer">
              <svg aria-label="Github" width="21" height="21" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
              </svg>
            </a>
          </evg-button>
        </evg-grid-item>
        {figma && (
          <evg-grid-item>
            <evg-button width="square">
              <a href={figma} target="_blank" rel="noopener noreferrer">
                <svg aria-label="Figma prototype" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                  <g clipPath="url(#clip0_5089_2593)">
                  <path d="M3.8012 19.6C5.5676 19.6 7.0012 18.1664 7.0012 16.4V13.2H3.8012C2.0348 13.2 0.601196 14.6336 0.601196 16.4C0.601196 18.1664 2.0348 19.6 3.8012 19.6Z" fill="#0ACF83"/>
                  <path d="M0.601196 9.99999C0.601196 8.23359 2.0348 6.79999 3.8012 6.79999H7.0012V13.2H3.8012C2.0348 13.2 0.601196 11.7664 0.601196 9.99999Z" fill="#A259FF"/>
                  <path d="M0.601318 3.59999C0.601318 1.83359 2.03492 0.399994 3.80132 0.399994H7.00132V6.79999H3.80132C2.03492 6.79999 0.601318 5.36639 0.601318 3.59999Z" fill="#F24E1E"/>
                  <path d="M7.00122 0.399994H10.2012C11.9676 0.399994 13.4012 1.83359 13.4012 3.59999C13.4012 5.36639 11.9676 6.79999 10.2012 6.79999H7.00122V0.399994Z" fill="#FF7262"/>
                  <path d="M13.4012 9.99999C13.4012 11.7664 11.9676 13.2 10.2012 13.2C8.43482 13.2 7.00122 11.7664 7.00122 9.99999C7.00122 8.23359 8.43482 6.79999 10.2012 6.79999C11.9676 6.79999 13.4012 8.23359 13.4012 9.99999Z" fill="#1ABCFE"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_5089_2593">
                  <rect width="12.8026" height="19.2" fill="white" transform="translate(0.599976 0.399994)"/>
                  </clipPath>
                  </defs>
                </svg>
              </a>
            </evg-button>
          </evg-grid-item>
        )}
      </evg-grid>
    </div>
  );
}
