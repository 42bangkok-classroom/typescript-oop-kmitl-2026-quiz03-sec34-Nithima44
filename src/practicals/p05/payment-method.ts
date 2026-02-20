import { EWallet } from "./ewallet";
import { CreditCard } from "./credit-card";

export class PaymentMethod {
    accountName?: string;
    private creditCard?: CreditCard;
    private eWallet?: EWallet;

    public PaymentMethod(accountName?: string, creditCard?: CreditCard, eWallet?: EWallet) {
        this.accountName = accountName;
        this.creditCard = creditCard;
        this.eWallet = eWallet;
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
