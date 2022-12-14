import { cartInit } from './cart.js';
import { catalogList, modalProduct } from './elements.js';
import { navigationListController } from './navigationListController.js';
import { openModal } from './openModal.js';
import { renderListProduct } from './renderListProduct.js';


catalogList.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.product__detail') || target.closest('.product__image')) {
    const id = target.closest('.product').dataset.idProduct;
    openModal(id);
  }
});

modalProduct.addEventListener('click', (e) => {
  const target = e.target;
  if (target.closest('.modal__close') || target === modalProduct) {
    modalProduct.classList.remove('modal_open');
  }
});

const init = () => {
  renderListProduct();
  navigationListController(renderListProduct);
  cartInit();
};

init();
