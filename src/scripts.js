const inputValue = document.querySelector("#valor");
let escritura = document.querySelector("#escritura");
let registro = document.querySelector("#registro");
let itbi = document.querySelector("#itbi");
let certidao = document.querySelector("#certidao");
let total = document.querySelector("#total");

function getEscrituraValue(input) {
  const inputValue = Number(input);

  if (inputValue > 26633774.01) return 49953.14;
  if (inputValue > 23674466.01) return 45269.98;
  if (inputValue > 20715158.01) return 40586.91;
  if (inputValue > 17755849.01) return 35903.8;
  if (inputValue > 14796541.01) return 31220.73;
  if (inputValue > 13316887.01) return 26537.62;
  if (inputValue > 11837233.01) return 24196;
  if (inputValue > 10357579.01) return 21854.45;
  if (inputValue > 8877925.01) return 19512.94;
  if (inputValue > 7398270.01) return 17171.35;
  if (inputValue > 5918616.01) return 14829.82;
  if (inputValue > 4438962.01) return 12488.29;
  if (inputValue > 2959308.01) return 10146.72;
  if (inputValue > 1775585.01) return 7805.19;
  if (inputValue > 1163600.01) return 5619.71;
  if (inputValue > 872700.01) return 5085.84;
  if (inputValue > 581800.01) return 4586.31;
  if (inputValue > 290900.01) return 4130.48;
  if (inputValue > 249973.01) return 3721.51;
  if (inputValue > 232720.01) return 3496.72;
  if (inputValue > 203630.01) return 3178.29;
  if (inputValue > 174540.01) return 2903.52;
  if (inputValue > 145450.01) return 2588.18;
  if (inputValue > 116360.01) return 2313.48;
  if (inputValue > 87270.01) return 2041.8;
  if (inputValue > 58180.01) return 1723.37;
  if (inputValue > 29090.01) return 1451.76;
  if (inputValue > 14545.01) return 1223.82;
  if (inputValue > 7271.01) return 905.39;
  if (inputValue > 4362.01) return 633.77;
  if (inputValue > 1154.01) return 405.89;
  if (inputValue > 0.01) return 271.6;
  if (inputValue <= 0) return 0;
}

function getRegistroValue(input) {
  const inputNumber = Number(input);

  if (inputNumber > 107633000) return 178298.68;
  if (inputNumber > 101815000.01) return 168483.97;
  if (inputNumber > 95997000.01) return 159209.49;
  if (inputNumber > 90179000.01) return 149935.01;
  if (inputNumber > 84361000.01) return 140660.54;
  if (inputNumber > 78543000.01) return 131386.08;
  if (inputNumber > 72725000.01) return 122111.59;
  if (inputNumber > 66907000.01) return 112837.12;
  if (inputNumber > 61089000.01) return 103562.66;
  if (inputNumber > 55271000.01) return 94288.17;
  if (inputNumber > 49453000.01) return 85013.7;
  if (inputNumber > 43635000.01) return 75739.24;
  if (inputNumber > 40726000.01) return 68783.38;
  if (inputNumber > 37817000.01) return 64146.14;
  if (inputNumber > 34908000.01) return 59508.91;
  if (inputNumber > 31999000.01) return 54871.67;
  if (inputNumber > 29090000.01) return 50234.43;
  if (inputNumber > 26181000.01) return 45597.2;
  if (inputNumber > 23272000.01) return 40959.96;
  if (inputNumber > 20363000.01) return 36322.71;
  if (inputNumber > 17454000.01) return 31685.48;
  if (inputNumber > 14545000.01) return 27048.24;
  if (inputNumber > 13090500.01) return 23570.32;
  if (inputNumber > 11636000.01) return 21251.71;
  if (inputNumber > 10181500.01) return 18933.07;
  if (inputNumber > 8727000.01) return 16614.45;
  if (inputNumber > 7272500.01) return 14295.84;
  if (inputNumber > 5818000.01) return 11977.22;
  if (inputNumber > 4363500.01) return 9658.6;
  if (inputNumber > 2909000.01) return 7339.99;
  if (inputNumber > 1745400.01) return 5253.22;
  if (inputNumber > 1454500.01) return 4093.92;
  if (inputNumber > 1163600.01) return 3862.06;
  if (inputNumber > 872700.01) return 3413.57;
  if (inputNumber > 581800.01) return 2965.13;
  if (inputNumber > 290900.01) return 2531.91;
  if (inputNumber > 261810.01) return 2270.76;
  if (inputNumber > 232720.01) return 2213.08;
  if (inputNumber > 203630.01) return 2099.3;
  if (inputNumber > 174540.01) return 1940.35;
  if (inputNumber > 145450.01) return 1782.32;
  if (inputNumber > 87270.01) return 1465.64;
  if (inputNumber > 29090.01) return 1148.3;
  if (inputNumber > 14545.01) return 1029.67;
  if (inputNumber > 7271.01) return 846.93;
  if (inputNumber > 4362.01) return 570.81;
  if (inputNumber > 1746.01) return 318.18;
  if (inputNumber > 0.01) return 198.29;
  if (inputNumber < 0.01) return 0;
}

function getItbiValue(input) {
  const inputNumber = Number(input);

  return Number(inputNumber * 0.025);
}

function getCertidaoValue() {
  return 2 * 58.28;
}

function getTotalValue(input) {
  const inputValue = Number(input);

  const escrituraValue = Number(getEscrituraValue(inputValue));
  const registroValue = Number(getRegistroValue(inputValue));
  const itbiValue = Number(getItbiValue(inputValue));

  return escrituraValue + registroValue + itbiValue + getCertidaoValue();
}

function handleFocusout(input) {
  const inputNumber = Number(input);

  escritura.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(getEscrituraValue(inputNumber));

  registro.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(getRegistroValue(inputNumber));

  itbi.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(getItbiValue(inputNumber));

  certidao.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(getCertidaoValue(inputNumber));

  total.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(getTotalValue(inputNumber));
}

inputValue.addEventListener("focusout", () => handleFocusout(inputValue.value.replace(',', '.')));

function currency(e) {
  let value = e.target.value

  value = value.replace(/\D/g, "")
  value = value.replace(/(\d)(\d{2})$/, "$1,$2")
  value = value.replace(/(?=(\d{3})+(\D))\b/g, "")

  e.target.value = value

  return e
}


inputValue.addEventListener("keyup", (e) => currency(e))