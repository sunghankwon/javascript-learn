
/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/

function ipsBetween(s, e){
    //TODO
      const sArr = s.split('.');
    const eArr = e.split('.');
    let rs = 0;
    let re = 0;
    let count = 3;
    
    for (let i = 0; i < sArr.length; i++) {
      if (count !== 0) {
        sArr[i] = 256 ** count * Number(sArr[i]);
        eArr[i] = 256 ** count * Number(eArr[i]);
        count = count - 1;
      }
      if (count == 0) {
        sArr[i] = Number(sArr[i]);
        eArr[i] = Number(eArr[i]);
      }
      rs = rs + sArr[i];
      re = re + eArr[i];
    }
    
    
    return re - rs;
  }