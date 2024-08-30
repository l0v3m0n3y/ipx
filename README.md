# ipx
JavaScript library for ipx.ac
# main
```js
async function main(){
    const {ipx} = require('./ipx');
    const ip= new ipx();
    let req=await ip.my_ip()
    console.log(req)
}
main()
```
