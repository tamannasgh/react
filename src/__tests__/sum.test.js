import {sum} from "../sum";

test("checking sum function for 2 +ve numbers", function(){
    expect(sum(2,3)).toBe(5);
})