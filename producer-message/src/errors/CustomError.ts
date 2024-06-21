class CustomError {
    public readonly statusCode: number;
    public readonly message: string

    constructor(message: string, statusCode: number) {
        this.message = message
        this.statusCode = statusCode
    }
}

export { CustomError }
