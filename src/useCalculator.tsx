import { useMemo, useState } from "react";
import {Token, calculate} from "./calculatorUtils";

//TODO: figure out negative numbers
function useCalculator(){
    const [tokenList, setTokenList] = useState<Token[]>([]);
    const displayText = useMemo(() => tokenList.join(" "), [tokenList]); //TODO: consider useMemo

    function addToken(token: Token){
        setTokenList(list => [...list, token]);
    }

    const handleClear = () => setTokenList([]);
    const handleEquals = () => setTokenList(list => [...calculate(list)]);

    return ({
        addToken,
        handleClear,
        handleEquals,
        displayText
    });
}

export default useCalculator;