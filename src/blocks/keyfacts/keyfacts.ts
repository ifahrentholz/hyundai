/* eslint-disable no-console */
import { html, render } from 'lit';

import './keyfacts.scss';

const createKeyfactRow = (keyfact: Keyfact) => {
  return html`
    <div
      class="self-stretch flex flex-row items-center justify-between pt-1.5 px-0 pb-0 gap-[20px] border-t-[1px] border-solid border-grey-400"
    >
      <div class="relative leading-[100%]">${keyfact.label}</div>
      <div class="relative text-13xl leading-[100%] font-medium font-hyundaihead inline-block">${keyfact.value}</div>
    </div>
  `;
};

const template = (image: HTMLPictureElement | null, keyfacts: Keyfact[] = []) => {
  return html`
    <div
      class="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start pt-[39.9px] px-6 pb-2 box-border leading-[normal] tracking-[normal]"
    >
      <img
        class="self-stretch relative max-w-full overflow-hidden max-h-full"
        width="302"
        height="185"
        loading="eager"
        fetchpriority="high"
        alt=""
        src="/public/images/logo.svg"
      />

      <section
        class="self-stretch flex flex-col items-start justify-start pt-4 px-0 pb-0 gap-[8px] text-left text-xs text-grey-1000 font-hyundaitext"
      >
        <!-- start -->
        ${keyfacts.map(createKeyfactRow)}
        <!-- stop -->

        <div
          class="self-stretch flex flex-col items-start justify-start pt-3.5 px-0 pb-4 text-base text-active-red border-t-[1px] border-solid border-grey-400"
        >
          <div class="w-32 flex flex-row items-center justify-end gap-[8px]">
            <div class="flex-1 relative leading-[100%]">Show more</div>
            <img class="h-8 w-8 relative" alt="" src="/public/images/chevron.svg" />
          </div>
        </div>
      </section>
      ${image ? image : null}
    </div>
  `;
};

type Keyfact = {
  label: string;
  value: string;
};

export default function decorate(block: HTMLElement) {
  const row1 = block.children[0];
  const picture = row1.querySelector('picture');
  picture?.classList.add(
    'w-[204px]',
    'h-[152px]',
    'absolute',
    '!m-[0]',
    'top-[39.9px]',
    'left-[78px]',
    'object-contain',
    'z-[1]'
  );
  const pictureImage: any = picture?.querySelector('img') as HTMLImageElement;
  pictureImage.width = 204;
  pictureImage.height = 152;
  pictureImage.loading = 'eager';
  pictureImage.fetchpriority = 'high';

  const dataRows = Array.from(block.children);
  // remove first item
  dataRows.shift();

  const data = dataRows.reduce((acc: Keyfact[], row) => {
    acc.push({ label: row.children[0].textContent ?? '', value: row.children[1].textContent ?? '' });
    return acc;
  }, []);

  // cleanUpBlock(block);
  block.innerHTML = '';
  render(template(picture, data), block);
}
