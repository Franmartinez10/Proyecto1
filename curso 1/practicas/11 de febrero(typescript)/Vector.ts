// RETO 8 - Crear clase Vector
export class Vector
{
    private elements:number[];

        constructor(n:number,k:number)
        {   this.elements = new Array(n)
            for(let i=0;i<n;i++)
            this.elements[i] = Math.round(Math.random()*k)
        }
    
    public print()
    {
        console.log(this.elements)
    }
    public add(v1:Vector):Vector
    {   let addSum = new Vector(23,43);
        for(let i=0;i<this.elements.length;i++) 
        {
            addSum[i] = v1.elements[i] + this.elements[i]
        }
        return addSum
    }
    public subs(v1:Vector):Vector
    {   let subsSum = new Vector(23,43)
        for(let i=0;i<this.elements.length;i++) 
        {
            subsSum[i] = v1.elements[i] - this.elements[i]
        }
        return subsSum
    }
    public mult(v1:Vector):Vector
    {   let multSum = new Vector(34,54)
        for(let i=0;i<this.elements.length;i++) 
        {
            multSum[i] = v1.elements[i] * this.elements[i]
        }
        return multSum
    }
    public multN(n:number):Vector
    {   let multN = new Vector(12,54)
        for(let i=0;i<this.elements.length;i++) 
        {
            multN[i] = this.elements[i] * n
        }
        return multN
    }

}


