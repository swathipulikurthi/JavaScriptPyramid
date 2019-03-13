

function designPyramid() {
  console.clear();
  var n = parseInt(document.getElementById("count").value);
  for (var i = 1; i <= n; i++) {
    line = '';
    for (var k = n - i; k > 0; k--) {
      line = line + ' ';
    }
    for (var j = 1; j <= ((2 * i) - 1); j++) {
      line = line + '*';
      //document.write("*"+" ");

    }
   console.log(line);
  }

}