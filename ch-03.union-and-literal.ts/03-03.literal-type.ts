// 리터럴 타입
const philosopher = "Hypatia";
let lifespan: number | "ongoing" | "uncertain";
lifespan = 89;
lifespan = "ongoing";

lifespan = true;

// 리터럴 할당 가능성
let specificallyAda: "Ada";
specificallyAda = "Ada";
specificallyAda = "Byron";

let someString = "";
specificallyAda = someString;

someString = ":)";
