export interface Coin {
    data: [
        {
            id: number,
            rank: number,
            name: string,
            symbol: string,
            slug: string,
            is_active: number,
            first_historical_data: string,
            last_historical_data: string,
            platform: {
            id: number,
            name: string,
            symbol:string,
            slug:string,
            token_address: string,
            }
            },
    ],
   status: {
   timestamp: string,
   error_code: number,
   error_message: null,
   elapsed: number,
   credit_count: number,
    }
    }