// 유니언 타입
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

// 유니언 타입 선언
let thinkr: string | null = null;

if (Math.random() > 0.5) {
  thinkr = "Susanne Langer";
}

// 유니언 속성
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;

physicist.toString();
physicist.toUpperCase();
physicist.toFixed();
