import { html, render } from 'lit-html';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './teaser-video.scss';

type Data = {
  video?: string;
  logo?: string;
  award?: string;
  headline?: string;
  subheadline?: string;
};

const renderVideo = (videoUrl: string | undefined) => {
  if (!videoUrl) return null;
  return html`
<video autoplay="true" muted="true" loop="true" playsinline="true" class="w-full h-full object-cover absolute left-0 top-0 bottom-0 right-0">
  <source src="${videoUrl}"></source>
</video>
`;
};

const renderHeadline = (headline: string | undefined) => {
  if (!headline) return null;
  return html`<h2 class="relative z-10 text-white font-hyundaihead text-[48px] font-medium m-0 mb-[8px]">
    ${headline}
  </h2>`;
};

const renderSubheadline = (subheadline: string | undefined) => {
  if (!subheadline) return null;
  return html`<h3 class="relative z-10 text-white font-hyundaitext text-[20px] m-0 font-normal mb-[40px]">
    ${subheadline}
  </h2>`;
};

const template = (data: Data) => {
  return html`
    <div id="teaser-video" class="flex flex-col justify-end text-center bg-hyundai-blue overflow-hidden relative">
      ${renderVideo(data.video)}
      <div class="absolute left-6 top-10">${unsafeHTML(data.logo)}</div>
      <div class="absolute right-6 top-10">${unsafeHTML(data.award)}</div>
      <div>${renderHeadline(data.headline)} ${renderSubheadline(data.subheadline)}</div>
    </div>
  `;
};

export default function (block: HTMLElement) {
  const rows = Array.from(block.children);
  const images = block.querySelectorAll('img');

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    if (i === 0) {
      image.setAttribute('width', '88');
      image.setAttribute('height', '37');
    }
    if (i === 1) {
      image.setAttribute('width', '118');
      image.setAttribute('height', '37');
    }
    image.setAttribute('loading', 'eager');
    image.setAttribute('fetchpriority', 'high');
  }

  const data = rows.reduce((acc, row) => {
    const [c1, c2] = row.children;
    acc = {
      ...acc,
      [`${c1.textContent}`]:
        c1.textContent === 'award' || c1.textContent === 'logo'
          ? c2.innerHTML
              .replace(/\n/g, '')
              .replace(/[\t ]+\</g, '<')
              .replace(/\>[\t ]+\</g, '><')
              .replace(/\>[\t ]+$/g, '>')
          : c2.textContent,
    };
    return acc;
  }, {}) as Data;

  block.innerHTML = '';
  render(template(data), block);
}
