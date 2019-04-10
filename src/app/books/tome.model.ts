export class Tome{
	public title:string;
	public author:string;
	public price:number;
	public likes:number;

	constructor(title:string, writer:string, price:number){
		this.title = title;
		this.author = writer;
		this.price = price;
		this.likes = 0;
	}

	liked(){
		this.likes++;
	  }
}