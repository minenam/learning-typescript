type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

// 타입 별칭 결합
type Id = number | string;
type IdMaybe = Id | undefined | null;
