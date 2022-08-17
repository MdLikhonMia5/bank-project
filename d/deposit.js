document.getElementById('dClick').addEventListener('click', function(){
  const emm = document.getElementById('em_in');
  const emm_val = emm.value;
  const dd = document.getElementById('d_update');
  const ddd = dd.innerText;
  const first_lol = parseFloat(emm_val);
  const sec_lol = parseFloat(ddd);
  const all = sec_lol + first_lol;
  dd.innerText = all;
  const bb = document.getElementById('b_update');
  bb.innerText = all;
  emm.value = '';
})
