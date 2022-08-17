document.getElementById('wClick').addEventListener('click', function(){
  const passss = document.getElementById('pass_in');
  const past_in = passss.value;
  const dd = document.getElementById('acc');
  const ddd = dd.innerText;
  const int_pass_in = parseFloat(past_in);
  const int_dx = parseFloat(ddd);
  const tt = int_pass_in + int_dx;

  const pp = document.getElementById('b_update');
  const ppp = pp.innerText;
  const int_pp = parseFloat(ppp);

  const tota = int_pp - int_pass_in;

  if(int_pp >= int_pass_in) {
    dd.innerText = tt;
    pp.innerText = tota;
  }else if(past_in == ''){
        alert("Input a valid withdraw amount!!");
  }else{
    alert("withdraw valid amount!");
  }
})