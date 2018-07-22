function toggleSidebar(ref) {
  ref.classList.toggle('active');
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('screen-side').classList.toggle('active');
  document.getElementById('logo').classList.toggle('active');
  }

function slider1(ref) {
  document.getElementById('s2').classList.remove('active');
  document.getElementById('mini-slider').classList.remove('active2');
  document.getElementById('s3').classList.remove('active');
  document.getElementById('mini-slider').classList.remove('active3');
  ref.classList.add('active');
  document.getElementById('mini-slider').classList.add('active1');
} 

function slider2(ref) {
  document.getElementById('s1').classList.remove('active');
  document.getElementById('mini-slider').classList.remove('active1');
  document.getElementById('s3').classList.remove('active');
  document.getElementById('mini-slider').classList.remove('active3');
  ref.classList.add('active');
  document.getElementById('mini-slider').classList.add('active2');
} 

function slider3(ref) {
  document.getElementById('s1').classList.remove('active');
  document.getElementById('mini-slider').classList.remove('active1');
  document.getElementById('s2').classList.remove('active');
  document.getElementById('mini-slider').classList.remove('active2');
  ref.classList.add('active');
  document.getElementById('mini-slider').classList.add('active3');
} 

function up() {
  if(document.getElementById('icon1').classList.contains('active')){
    document.getElementById('icon1').classList.remove('active');
    document.getElementById('descrip').classList.remove('active');
  }else{
    document.getElementById('icon1').classList.add('active');
    document.getElementById('descrip').classList.add('active');
  }

  
}
function down() {
  if(document.getElementById('icon1').classList.contains('active')){
    document.getElementById('icon1').classList.remove('active');
    document.getElementById('descrip').classList.remove('active');
  }else{
    document.getElementById('icon1').classList.add('active');
    document.getElementById('descrip').classList.add('active');
  }
}