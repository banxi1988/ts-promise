declare class Promise {
    static resolved(value?: any): void;
    static rejected(reason?: any): void;
    static defered(): void;
}
export default Promise;
