function two(n){return parseFloat(n).toFixed(2)}
const sym={USD:"$",EUR:"€",INR:"₹"}
function rate(c){return c==="EUR"?0.95:c==="INR"?85:1}

document.addEventListener("DOMContentLoaded",()=>{
  const bill=document.getElementById("billTotal")
  const rng=document.getElementById("tipRange")
  const pct=document.getElementById("tipPercent")
  const tipOut=document.getElementById("tipAmount")
  const taxOut=document.getElementById("totalWithTax")
  const totalOut=document.getElementById("totalBillTipTax")
  const cTip=document.getElementById("convertedTip")
  const cTotal=document.getElementById("convertedTotal")
  const cur=document.getElementById("currencySelect")
  const err=document.getElementById("billTotalError")

  function fmt(v,s){return s+two(v)}

  function calc(){
    err.textContent=""
    let raw=bill.value.trim()
    if(raw==="")raw="0"
    if(isNaN(raw)||Number(raw)<0){err.textContent="Enter a non‑negative number.";return}

    const b=Number(raw)
    const p=Number(rng.value)
    pct.value=p

    const usdSym=sym.USD
    const tax=b*1.11
    const tip=b*(p/100)
    const grand=tax+tip

    tipOut.value=fmt(tip,usdSym)
    taxOut.value=fmt(tax,usdSym)
    totalOut.value=fmt(grand,usdSym)

    const curSym=sym[cur.value]
    const r=rate(cur.value)
    cTip.value=fmt(tip*r,curSym)
    cTotal.value=fmt(grand*r,curSym)
  }

  document.getElementById("tipForm").addEventListener("input",calc)
  calc()
})
