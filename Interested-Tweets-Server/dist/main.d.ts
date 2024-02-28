declare global {
    namespace Express {
        interface Response {
            redirect(url: string): void;
        }
    }
}
export {};
