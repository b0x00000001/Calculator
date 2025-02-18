export type Token = number | TokenType;

export enum TokenType {
    Add = "+",
    Subtract = "-",
    Multiply = "*",
    Divide = "/"
}

//TODO: consider returning Token instead
export function calculate(tokens: Token[]): Token[]{
    let newTokens = tokens;
    newTokens = binaryOperation(newTokens, TokenType.Multiply);
    newTokens = binaryOperation(newTokens, TokenType.Divide);
    newTokens = binaryOperation(newTokens, TokenType.Add);
    newTokens = binaryOperation(newTokens, TokenType.Subtract);
    if(newTokens.length > 1){ console.log("expression does not resolve to a number (missing operands)")}
    return newTokens;
}

function binaryOperation(tokens: Token[], opType: TokenType): Token[]{
    for(let i = 0; i < tokens.length; i++){
        if(tokens[i] === opType){
            let op1 = tokens[i-1];
            let op2 = tokens[i+1];
            if((typeof op1 != "number") || (typeof op2 != "number")){
                reportError("error with operator " + opType);
            }else{
                switch(opType){
                    case TokenType.Add:
                        tokens[i-1] = op1 + op2;
                        break;
                    case TokenType.Subtract:
                        tokens[i-1] = op1 - op2;
                        break;
                    case TokenType.Multiply:
                        tokens[i-1] = op1 * op2;
                        break;
                    case TokenType.Divide:
                        tokens[i-1] = op1 / op2;
                }
                tokens.splice(i, 2);
                i -= 2;
            }
        }
    }
    return tokens;
}

//TODO: actually handle problems, instead of just logging them
function reportError(errorMsg: string){
    console.log(errorMsg)
}