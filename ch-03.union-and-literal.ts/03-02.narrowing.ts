// 값 할당을 통한 내로잉
let admiral: number | string;
admiral = "Grrace Hopper";
admiral.toUpperCase();
admiral.toFixed();

let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase();
inventor.toFixed();

// 조건 검사를 통한 내로잉
let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (scientist === "Rosalind Franklin") {
  scientist.toUpperCase();
}
scientist.toUppercase();

// typeof 검사를 통한 내로잉
let reseacrher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof reseacrher === "string") {
  reseacrher.toUpperCase();
}
if (!(typeof reseacrher === "string")) {
  reseacrher.toFixed();
} else {
  reseacrher.toUpperCase();
}

typeof reseacrher === "string"
  ? reseacrher.toUpperCase()
  : reseacrher.toFixed();
