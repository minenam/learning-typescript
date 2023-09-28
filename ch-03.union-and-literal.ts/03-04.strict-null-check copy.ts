// 십억 달러의 실수
const firstName: string = null;

let nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;
nameMaybe.toLowerCase();

// 참 검사를 통한 내로잉
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;
if (geneticist) {
  geneticist.toUpperCase();
}
geneticist.toUpperCase();

geneticist && geneticist.toUpperCase();
geneticist?.toUpperCase();

let biologist = Math.random() > 0.5 && "Rachel Carson";
if (biologist) {
  biologist;
} else {
  biologist;
}

// 초깃값 없는 변수
let mathematician: string;
mathematician?.length;
mathematician = "Mark Golderg";
mathematician.length;

let mathemagician: string | undefined;
mathemagician?.length;
mathemagician = "Mark Golderg";
mathemagician.length;
