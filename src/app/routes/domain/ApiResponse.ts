  export class ApiResponse<T>
    {
        result?: T;
        valid?: boolean;
        error?: boolean;
        message?: string;
        exception?: string;
    }
