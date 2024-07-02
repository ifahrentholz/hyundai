/* eslint-disable no-console */
import { html, render } from 'lit';

import './subnav.scss';

const createLinks = (links: HTMLAnchorElement[]) => {
  return links.map((link, index) => {
    const active =
      'flex flex-row items-start justify-start pt-4 px-0 pb-[11px] shrink-0 text-active-red border-b-[4px] border-solid border-active-red';
    const inactive = 'shrink-0 flex flex-row items-start justify-start py-4 px-0 box-border cursor-pointer';
    return html`
      <div class="${index === 0 ? active : inactive}">
        <a class="[text-decoration:none] flex-1 relative leading-[28px] font-medium text-[inherit]" href="${link.href}">
          ${link.textContent}
        </a>
      </div>
    `;
  });
};

const createLinks2 = (links: HTMLAnchorElement[]) => {
  return links.map((link, index) => {
    return html`
      <div class="flex flex-row items-start justify-start relative">
        <a
          href="${link.href}"
          class="[text-decoration:none] cursor-pointer relative tracking-[0.01em] leading-[24px] font-medium text-[inherit] inline-block min-w-[69px]"
        >
          <div
            class="rounded ${index === 0
              ? 'bg-active-red'
              : 'bg-hyundai-blue'} flex flex-row items-center justify-center py-2 px-[23px] gap-[8px]"
          >
            <div class="flex flex-row items-start justify-start py-0 pr-0 pl-1">
              <span> ${link.textContent} </span>
            </div>
            <img class="h-6 w-6 relative min-h-[24px]" loading="lazy" alt="" src="/public/images/icon-1.svg" />
          </div>
        </a>
      </div>
    `;
  });
};

const template = (links1: HTMLAnchorElement[], links2: HTMLAnchorElement[]) => {
  return html`
    <div
      class="w-full relative bg-white box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-3.5 gap-[16px] leading-[normal] tracking-[normal] text-left text-base text-grey-700 font-hyundaitext border-b-[1px] border-solid border-grey-400"
    >
      <!-- scrollbar -->
      <div class="relative self-stretch">
        <div
          class="absolute bg-white top-0 bottom-0 right-0 flex items-center justify-center pr-[15px] pl-[4px] z-10 border-b-[1px] border-solid border-grey-400"
        >
          <img class="h-6 w-6 relative z-[1]" loading="lazy" alt="" src="/public/images/icon.svg" />
        </div>
        <div
          class="relative self-stretch overflow-x-auto scrollbar-hide pr-[50px] flex flex-row items-start justify-start py-0 px-6 gap-[23.5px] border-b-[1px] border-solid border-grey-400"
        >
          ${createLinks(links1)}
        </div>
      </div>
      <!-- eod scrollbar -->

      <!-- quicklinks -->
      <div class="flex flex-row items-center justify-start py-0 px-6 gap-[9px] text-white">${createLinks2(links2)}</div>
      <!-- eod quicklinks -->
    </div>
  `;
};

export default function decorate(block: HTMLElement) {
  const firstRow = block.children[0];
  const secondRow = block.children[1];
  const links1 = Array.from(firstRow.querySelectorAll('a'));
  const links2 = Array.from(secondRow.querySelectorAll('a'));

  block.innerHTML = '';
  render(template(links1, links2), block);
}
