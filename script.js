function two(n){return parseFloat(n).toFixed(2)}
function rate(c){return c==="EUR"?0.95:c==="INR"?85:1}
function sym(c){return c==="EUR"?"€":c==="INR"?"₹":"$"}

document.addEventListener("DOMContentLoaded",()=>{
  const bill=document.getElementById("billTotal")
  const rng=document.getElementById("tipRange")
  const pct=document.getElementById("tipPercent")
  const tAmt=document.getElementById("tipAmount")
  const tax=document.getElementById("totalWithTax")
  const tot=document.getElementById("totalBillTipTax")
  const cAmt=document.getElementById("convertedTip")
  const cTot=document.getElementById("convertedTotal")
  const cur=document.getElementById("currencySelect")
  const err=document.getElementById("billTotalError")

  function calc(){
    err.textContent=""
    let raw=bill.value.trim()
    if(raw==="")raw="0"
    if(isNaN(raw)||Number(raw)<0){
      err.textContent="Enter a non‑negative number.";return
    }
    const b=Number(raw)
    const p=Number(rng.value)
    pct.value=p
    const taxVal=b*1.11
    const tip=b*(p/100)
    const grand=taxVal+tip
    tAmt.value=two(tip)
    tax.value=two(taxVal)
    tot.value=two(grand)
    const r=rate(cur.value)
    const symbol=sym(cur.value)
    cAmt.value=symbol+two(tip*r)
    cTot.value=symbol+two(grand*r)
  }

  document.getElementById("tipForm").addEventListener("input",calc)
  calc()
})
