function two(n){return parseFloat(n).toFixed(2)}
function rate(c){return c==="EUR"?0.95:c==="INR"?85:1}
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
    if(isNaN(raw)||Number(raw)<0){err.textContent="Enter a non‑negative number.";return}
    const b=Number(raw)
    const p=Number(rng.value)
    pct.value=p
    const taxVal=b>0?b*1.11:0
    const tip=b*(p/100)
    const grand=taxVal+tip
    if(b===0){
      tAmt.value="";tax.value="";tot.value="";cAmt.value="";cTot.value=""
      return
    }
    tAmt.value=two(tip)
    tax.value=two(taxVal)
    tot.value=two(grand)
    const r=rate(cur.value)
    cAmt.value=two(tip*r)
    cTot.value=two(grand*r)
  }
  document.getElementById("tipForm").addEventListener("input",calc)
  calc()
})
