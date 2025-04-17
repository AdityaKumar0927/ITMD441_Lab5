function toTwoDecimals(num) {
    return parseFloat(num).toFixed(2);
  }
  
  function getConversionRate(currency) {
    if (currency === "EUR") {
      return 0.95;
    } else if (currency === "INR") {
      return 85;
    }
    return 1;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const billTotalInput = document.getElementById("billTotal");
    const tipRange = document.getElementById("tipRange");
    const tipPercentOutput = document.getElementById("tipPercent");
    const tipAmountInput = document.getElementById("tipAmount");
    const totalWithTaxInput = document.getElementById("totalWithTax");
    const totalBillTipTaxInput = document.getElementById("totalBillTipTax");
    const convertedTipInput = document.getElementById("convertedTip");
    const convertedTotalInput = document.getElementById("convertedTotal");
    const currencySelect = document.getElementById("currencySelect");
    const billTotalError = document.getElementById("billTotalError");
  
    function calculate() {
      billTotalError.textContent = "";
      let billValue = billTotalInput.value.trim();
  
      if (billValue === "") {
        billValue = "0";
      }
  
      if (isNaN(billValue) || Number(billValue) < 0) {
        billTotalError.textContent = "Please enter a valid, non-negative number for Bill Total.";
        return;
      }
  
      const bill = Number(billValue);
      const tipPercent = Number(tipRange.value);
      tipPercentOutput.value = tipRange.value;
  
      let totalWithTax = 0;
      if (bill > 0) {
        totalWithTax = bill + bill * 0.11;
      }
      const tipAmount = bill * (tipPercent / 100);
      const totalBillTipTax = totalWithTax + tipAmount;
  
      tipAmountInput.value = toTwoDecimals(tipAmount);
      totalWithTaxInput.value = toTwoDecimals(totalWithTax);
      totalBillTipTaxInput.value = toTwoDecimals(totalBillTipTax);
  
      const rate = getConversionRate(currencySelect.value);
      const convertedTip = tipAmount * rate;
      const convertedTotal = totalBillTipTax * rate;
      convertedTipInput.value = toTwoDecimals(convertedTip);
      convertedTotalInput.value = toTwoDecimals(convertedTotal);
  
      if (bill === 0) {
        tipAmountInput.value = "";
        totalWithTaxInput.value = "";
        totalBillTipTaxInput.value = "";
        convertedTipInput.value = "";
        convertedTotalInput.value = "";
      }
    }
  
    document.getElementById("tipForm").addEventListener("input", calculate);
    calculate();
  });
  