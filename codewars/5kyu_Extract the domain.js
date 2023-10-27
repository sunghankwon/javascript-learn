/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

*/


function domainName(url){
    let domain = "";
    
    if (url.indexOf("https") >= 0) {
      url = url.substring(8);
    }
    if (url.indexOf("http") >= 0) {
      url = url.substring(7);
    }
    
    if (url.indexOf("www") >= 0) {
      url = url.substring(4);
    }
    
    for (let i = 0; i < url.length; i++) {
      if (url[i] !== ".") {
        domain += url[i];
      } else {
        break;
      }
    }
    
    return domain;
  }