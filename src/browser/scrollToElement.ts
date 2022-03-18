/**
 * 滚动到指定元素区域
 * @param element
 */
function scrollToElement(element: string) {
  const ele = document.querySelector(element);
  ele?.scrollIntoView({
    behavior: 'smooth',
  });
}

export default scrollToElement;
