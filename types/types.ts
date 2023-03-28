type ConstructorMapping<T> = 
    T extends NumberConstructor ? number : 
    T extends StringConstructor ? string : never 

export default ConstructorMapping

export interface ChatMessage {
    role: string,
    content: string
}