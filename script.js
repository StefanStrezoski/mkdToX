'use strict';

const input = document.querySelector('.input-value');
const dropDown = document.querySelector('.drop-down');
const btnConvert = document.querySelector('.btn-convert');
const result = document.querySelector('.result');

const mkdToEur = function (mkd) {
  return mkd * 0.016;
};
const mkdToUsd = function (mkd) {
  return mkd * 0.017;
};
const mkdToGbp = function (mkd) {
  return mkd * 0.014;
};
const mkdToChf = function (mkd) {
  return mkd * 0.016;
};
const mkdToSek = function (mkd) {
  return mkd * 0.18;
};
const mkdToNok = function (mkd) {
  return mkd * 0.17;
};
const mkdToJpy = function (mkd) {
  return mkd * 2.34;
};
const mkdToDkk = function (mkd) {
  return mkd * 0.12;
};
const mkdToCad = function (mkd) {
  return mkd * 0.023;
};
const mkdToAud = function (mkd) {
  return mkd * 0.026;
};
const mkdToBgn = function (mkd) {
  return mkd * 0.032;
};
const mkdToCzk = function (mkd) {
  return mkd * 0.4;
};
const mkdToHuf = function (mkd) {
  return mkd * 6.73;
};
const mkdToPln = function (mkd) {
  return mkd * 0.077;
};
const mkdToRon = function (mkd) {
  return mkd * 0.08;
};
const mkdToTry = function (mkd) {
  return mkd * 0.32;
};
const mkdToRub = function (mkd) {
  return mkd * 1.08;
};
const mkdToBrl = function (mkd) {
  return mkd * 0.09;
};
const mkdToCny = function (mkd) {
  return mkd * 0.12;
};
const mkdToHkd = function (mkd) {
  return mkd * 0.13;
};
const mkdToIdr = function (mkd) {
  return mkd * 266.84;
};
const mkdToIls = function (mkd) {
  return mkd * 0.058;
};
const mkdToInr = function (mkd) {
  return mkd * 1.41;
};
const mkdToKrw = function (mkd) {
  return mkd * 22.55;
};
const mkdToMxn = function (mkd) {
  return mkd * 0.34;
};
const mkdToMyr = function (mkd) {
  return mkd * 0.075;
};
const mkdToNzd = function (mkd) {
  return mkd * 0.027;
};
const mkdToPhp = function (mkd) {
  return mkd * 0.95;
};
const mkdToSgd = function (mkd) {
  return mkd * 0.023;
};
const mkdToThb = function (mkd) {
  return mkd * 0.6;
};
const mkdToZar = function (mkd) {
  return mkd * 0.3;
};
const mkdToRsd = function (mkd) {
  return mkd * 1.91;
};
const mkdToHrk = function (mkd) {
  return mkd * 0.12;
};
btnConvert.addEventListener('click', function () {
  const value = dropDown.value;
  const inputNumber = input.value;
  if (value === 'eur') {
    result.textContent = `€${Number(mkdToEur(inputNumber).toFixed(2))}`;
  } else if (value === 'usd') {
    result.textContent = `$${Number(mkdToUsd(inputNumber).toFixed(2))}`;
  } else if (value === 'gbp') {
    result.textContent = `£${Number(mkdToGbp(inputNumber).toFixed(2))}`;
  } else if (value === 'chf') {
    result.textContent = `₣${Number(mkdToChf(inputNumber).toFixed(2))}`;
  } else if (value === 'sek') {
    result.textContent = `${Number(mkdToSek(inputNumber).toFixed(2))} kr`;
  } else if (value === 'nok') {
    result.textContent = `${Number(mkdToNok(inputNumber).toFixed(2))} kr`;
  } else if (value === 'dkk') {
    result.textContent = `${Number(mkdToDkk(inputNumber).toFixed(2))} Kr.`;
  } else if (value === 'jpy') {
    result.textContent = `¥${Number(mkdToJpy(inputNumber).toFixed(2))}`;
  } else if (value === 'cad') {
    result.textContent = `$${Number(mkdToCad(inputNumber).toFixed(2))}`;
  } else if (value === 'aud') {
    result.textContent = `$${Number(mkdToAud(inputNumber).toFixed(2))}`;
  } else if (value === 'bgn') {
    result.textContent = `${Number(mkdToBgn(inputNumber).toFixed(2))} Лв.`;
  } else if (value === 'czk') {
    result.textContent = `${Number(mkdToCzk(inputNumber).toFixed(2))} Kč`;
  } else if (value === 'huf') {
    result.textContent = `${Number(mkdToHuf(inputNumber).toFixed(2))} Ft`;
  } else if (value === 'pln') {
    result.textContent = `${Number(mkdToPln(inputNumber).toFixed(2))}zł`;
  } else if (value === 'ron') {
    result.textContent = `${Number(mkdToRon(inputNumber).toFixed(2))} lei`;
  } else if (value === 'try') {
    result.textContent = `₺${Number(mkdToTry(inputNumber).toFixed(2))}`;
  } else if (value === 'rub') {
    result.textContent = `₽${Number(mkdToRub(inputNumber).toFixed(2))}`;
  } else if (value === 'brl') {
    result.textContent = `R$${Number(mkdToBrl(inputNumber).toFixed(2))}`;
  } else if (value === 'cny') {
    result.textContent = `CN¥${Number(mkdToCny(inputNumber).toFixed(2))}`;
  } else if (value === 'hkd') {
    result.textContent = `HK$${Number(mkdToHkd(inputNumber).toFixed(2))}`;
  } else if (value === 'idr') {
    result.textContent = `Rp ${Number(mkdToIdr(inputNumber).toFixed(2))}`;
  } else if (value === 'ils') {
    result.textContent = `₪${Number(mkdToIls(inputNumber).toFixed(2))}`;
  } else if (value === 'inr') {
    result.textContent = `₹${Number(mkdToInr(inputNumber).toFixed(2))}`;
  } else if (value === 'krw') {
    result.textContent = `₩${Number(mkdToKrw(inputNumber).toFixed(2))}`;
  } else if (value === 'mxn') {
    result.textContent = `Mex$${Number(mkdToMxn(inputNumber).toFixed(2))}`;
  } else if (value === 'myr') {
    result.textContent = `RM${Number(mkdToMyr(inputNumber).toFixed(2))}`;
  } else if (value === 'nzd') {
    result.textContent = `NZ$${Number(mkdToNzd(inputNumber).toFixed(2))}`;
  } else if (value === 'php') {
    result.textContent = `₱${Number(mkdToPhp(inputNumber).toFixed(2))}`;
  } else if (value === 'sgd') {
    result.textContent = `S$${Number(mkdToSgd(inputNumber).toFixed(2))}`;
  } else if (value === 'thb') {
    result.textContent = `${Number(mkdToThb(inputNumber).toFixed(2))}`;
  } else if (value === 'zar') {
    result.textContent = `R${Number(mkdToZar(inputNumber).toFixed(2))}`;
  } else if (value === 'rsd') {
    result.textContent = `${Number(mkdToRsd(inputNumber).toFixed(2))} дин.`;
  } else if (value === 'hrk') {
    result.textContent = `${Number(mkdToHrk(inputNumber).toFixed(2))} kn`;
  }
});
