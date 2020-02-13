import { hello } from "./greet/greet";
function showHello(divName: string, name: string) {
	const elt = document.getElementById(divName);
	elt.innerText = hello(name);
}

showHello("greeting", "TypeScript");

console.log("Hello World");