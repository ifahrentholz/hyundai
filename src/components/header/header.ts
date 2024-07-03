import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

const template = () => {
  return html`
    <div
      class="w-full relative bg-white box-border flex flex-row items-center justify-center leading-[normal] tracking-[normal] border-b-[1px] border-solid border-grey-200"
    >
      <div
        class="flex-1 flex flex-row items-start justify-between py-0 pr-[15px] pl-[30px] box-border max-w-[1387px] gap-[20px]"
      >
        <div class="w-[168.1px] flex flex-col items-start justify-center py-0 pr-[15px] pl-0 box-border">
          <div class="self-stretch flex flex-row items-center justify-start pt-[15.4px] pb-[15.5px] pr-[15px] pl-0">
            <div class="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-[2.1px]">
              <div class="self-stretch flex flex-row items-start justify-start pt-0.5 px-0 pb-px">
                <div class="flex-1 flex flex-row items-center justify-start pt-[2.8px] px-0 pb-[1.2px]">
                  <div class="flex flex-row items-start justify-start">
                    <img
                      class="h-[19px] w-[138.1px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/public/images/icon1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center justify-end py-[17.5px] pr-0 pl-5">
          <div class="overflow-hidden flex flex-col items-center justify-start py-[3px] px-px">
            <div class="flex flex-row items-center justify-center pt-[2.8px] px-0 pb-[1.2px]">
              <div class="flex flex-row items-start justify-start">
                <img
                  class="h-[15px] w-[23px] relative overflow-hidden shrink-0"
                  loading="eager"
                  fetchpriority="high"
                  alt=""
                  src="/public/images/icon-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

@customElement('hy-header')
export class Header extends LitElement {
  protected createRenderRoot(): HTMLElement | DocumentFragment {
    return this;
  }
  render() {
    return template();
  }
}
// export default function decorate(block: HTMLElement) {
//   cleanUpBlock(block);
//   render(template(), block);
// }
