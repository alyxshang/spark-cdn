# SPARK CDN by Alyx Shang.
# Licensed under the FSL v1.

buildJS(){
	cd js
	mkdir javascript
	deno bundle navigation.ts >> javascript/navigation.js
 	cd ..
}

buildCDN(){
	mkdir cdn
	mv css cdn
	mv fonts cdn
	mv images cdn
	mv js/javascript cdn
}

main(){
	buildJS
	buildCDN
}

main