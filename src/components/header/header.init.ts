import HLX from '../../app/index';
import './header';

const addHeader = () => {
  const header = document.createElement('hy-header');
  header.setAttribute('id', 'hy-header');
  const main = document.getElementById('main');
  main?.before(header);
};

HLX.addLoadEagerTask(() => {
  addHeader();
  return Promise.resolve();
});
