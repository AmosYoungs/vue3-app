import bemconfig from  '../../assets/style/scss/bemConfig.module.scss';
const scssObj:any = Object.create(null);
console.log(bemconfig)
Object.keys(bemconfig).map((item:string) =>{
    console.log(item)
    scssObj[item] = bemconfig[item].slice(1,-1)
})
console.log(scssObj)
export default scssObj

export function blockClass(blockName:string):string{
    return scssObj.namespace+scssObj.b+blockName
}

export function elementClass(blockName: string, elementName: string): string {
    return blockClass(blockName) + scssObj.e + elementName
}

export function modifierClass(blockName: string, modifierName: string): string {
    return blockClass(blockName) + scssObj.m + modifierName
}
