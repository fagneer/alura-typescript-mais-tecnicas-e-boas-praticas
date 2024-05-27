export function logarTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} tempo de logarTempoExecução: ${(t1 - t2) / 1000} s`);
            retorno;
        };
        return descriptor;
    };
}
