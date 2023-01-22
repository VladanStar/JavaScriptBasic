
 const values = ["Beograd", "Cairo", "Casablanca","Warshava", "Osaka", "Caracas"]
//match
const match = (values,input) =>{

    const p = Array.from(input).reduce((a,v,i)=>`${a}[^${input.substr(i)}]*?${v}`, '');
    const re= RegExp(p);
    return values.filter(v => v[filterby].toUpperCase().match(re))
   // console.log(p)
}
 console.log(match(values, "CA"));