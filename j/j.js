document.getElementById("btn-click").addEventListener('click',function(){
  const emaii = document.getElementById('emai');
  const first_value = emaii.value;
  const passs = document.getElementById('pass');
  const second_value = passs.value;
  if(first_value === 'a@gmail.com' && second_value === '12') {
     window.location.href = 'bank.html';
  }else{
    alert('not valid wrong');
  }
})