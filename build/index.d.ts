declare let first_name: string;
declare let age: number;
declare let isFetching: boolean;
declare let Numbers: number[];
declare let Strings: string[];
declare let tuple: [string, number, boolean];
declare enum Person {
    User = 0,
    SuperUser = 1,
    Admin = 2,
    SuperAdmin = 3
}
declare function Product(x: number, y: number): number;
declare function Divide(x: number, y: number): number;
declare const printPerson: ({ name }: {
    name: any;
}) => void;
