export class EWallet {
    private walletId?: string;
    
    public EWallet(accountName?: string, walletId?: string) {
        this.walletId = walletId;
    }
    public processPayment(amount: number): boolean {
        return amount > 0;
    }
    public getPaymentFee(amount: number): number {
        return amount * 0.02;
    }
}
