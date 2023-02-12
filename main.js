let btn = document.getElementById("btn").addEventListener("click", function () {
  let bf = prompt("Enter Your Name");
  let gf = prompt("Enter Your Crush Name");

  let a = 20;
  let b = 99;
  let c = Math.trunc(a + (b - a) * Math.random());
  let result = document.getElementById("result");

  if (bf == "" || gf == "") {
    alert("Enter Both Name☺");
  } else if (bf === null || gf === null) {
    alert("Better Luck Next Time👍");
  } else {
    result.value = `Love Score Is ${c}%`;
  }
});
