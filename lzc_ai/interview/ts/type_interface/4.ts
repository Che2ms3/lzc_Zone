interface Addfn {
    (a: number, b:number): number
}
const add1:Addfn = (x,y) => x + y;
add1(1,2);

type AddType = (a: number,b:number) => number;

