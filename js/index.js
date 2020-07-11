const menuItems = new Map([
  ['Hello Javascript', './Hello-Javascript.html'],
  ['구구단1', './구구단1.html'],
  ['구구단2', './구구단2.html'],
  ['비밀번호1', './비밀번호1.html'],
  ['비밀번호2', './비밀번호2.html'],
  ['버튼자물쇠1', './자물쇠1.html'],
  ['버튼자물쇠2', './자물쇠2.html'],
  ['지뢰찾기', './지뢰찾기.html'],
]);
const nodeMenu = document.querySelector('.menu');
const contentObject = document.querySelector('.content > object');

menuItems.forEach((_, key) => {
  let div = document.createElement('div');
  div.innerHTML = key;
  div.onclick = handleMenuClick;
  nodeMenu.appendChild(div);
});

function handleMenuClick(e) {
  const menu = e.target.innerHTML;
  contentObject.data = menuItems.get(menu);
}
