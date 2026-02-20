export class CreditCard {
    private cardNumber?: string;

    public CreditCard(accpountName?: string, cardNumber?: string) {
        this.cardNumber = cardNumber;
    }
    public processPayment(amount: number): boolean {
        return amount > 0;
    }
    public getPaymentFee(amount: number): number {
        return amount * 0.03;
    }
}
