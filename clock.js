var i=0
var interval;

var tick = function(){
  i++;
  document.getElementById('second').style.transform="rotate("+(i/60*360)+"deg)";
  document.getElementById('minute').style.transform="rotate("+(i/(60*60)*360)+"deg)";
  document.getElementById('hour').style.transform="rotate("+(i/(60*60*12)*360)+"deg)";
  console.log("tick");
  if (i%60 === 0){
    console.log("tock");
  }

  if(i%(60*60) === 0){
  for (var h = 0; h <= 12; h++) {
    bongs = [];
    bongs.push("BONG!");
    }
      console.log(bongs);
  }
};
interval = setInterval(tick,1000);
