export const funkcja = (fn: FunctionConstructor) => fn &&
    typeof fn == 'function' &&
    console?.log(`${{ code: fn }?.code?.name}: ${fn.toString()}`);
