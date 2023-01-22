
 const values = ["Bg", "Cr", "RT","WR", "Osaka"]
//match
const match = (values,input) =>{

    const p = Array.from(input).reduce((a,v,i)=>`${a}[^$(input.substring(i)}]*?);
    const re= RegExp(p);
    return values.filter(v => v.match(re))
    console.log(p)
}
console.log(match(values, "C"));