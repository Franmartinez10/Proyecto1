import {Vector} from "./Vector"

export class Matrix

{
    private elements:Vector[]

 
    constructor(n:number,m:number,k:number)
    {
        this.elements = [];
        for(let i=0;i<n;i++)
        {
            this.elements.push(new Vector(m,k))
        }
           
    }
    
    public print()
    {
        console.log(this.elements)
    }
    public addM(m1:Matrix):Matrix
    {
        let addMatrix:Matrix;
        for(let i=0; i<m1.elements.length;i++)
        {
            addMatrix= m1.elements.add()
           
        } return addMatrix;

    }


}
let matrixita = new Matrix(2,32,43)
matrixita.print();
matrixita.addM(matrixita).print();