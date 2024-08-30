class ipx{
    constructor(){
        this.api = "https://ipx.ac"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","host":"tempimail.org"}
        this.token=null
    }
    async my_ip(){
        let req=await fetch(`${this.api}/geo/`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {ipx};