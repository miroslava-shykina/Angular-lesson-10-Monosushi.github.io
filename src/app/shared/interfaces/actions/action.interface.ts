

export interface IAction {
    id:number;
    data: Date;
    name:string;
    title:string;
    description: string;
    imagePath:string;  
}

export interface IActionRequest {
    date: Date;
    name:string;
    title:string;
    description: string;
    imagePath:string;  

}

export interface IActionResponse extends IActionRequest {
    id:number;
}