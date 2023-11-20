const rep = (n) => (
  n.nodeType === Node.TEXT_NODE &&
    (n.nodeValue = n.nodeValue.replace(
      /(nft|web\sthree|web\s3.0|web\s3|web\s3|web3.0|web3|webthree|web3_0|web.3.0|web.3)\b/gi,
      (m) => (m.charAt(0) === m.charAt(0).toUpperCase() ? "Scam3" : "scam3")
    )),
  n.nodeType === Node.ELEMENT_NODE && n.childNodes.forEach(rep)
);

const main = () => document.body && document.body.childNodes.forEach(rep);
main();
setInterval(main, 2000);
