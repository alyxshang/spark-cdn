# SPARK CDN by Alyx Shang.
# Licensed under the FSL v1.

buildCDN(){
  mkdir cdn
  mv css cdn
  mv fonts cdn
  mv images cdn
  mv CNAME cdn
}

main(){
  buildCDN
}

main
