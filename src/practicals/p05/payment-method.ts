export class PaymentMethod {
    accountName?: string;

    public PaymentMethod(accountName?: string) {
        this.accountName = accountName;
    }
    public getAccountName(): string | undefined{
        return this.accountName;
    }
    public processPayment(amount: number): boolean {
        return amount > 0;
    }
    public getPaymentFee(amount: number): number {
        return amount * 0.01;
    }  
}
