let n: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
  n++;
  window.localStorage.setItem('_idMax', n.toString());
  return n;
}

export default createId;
