import {Customer} from "./customer";
import {Message} from "./message";

export class Complaint {

  complaintId: number;
  complaintMessages: Array<Message>;
  submitDate: string;
  considerDate: string;
  status: string;
  customerResponse: Customer;
  productDescription: string;
  invoiceNumber: string;
  purchaseDate: string;
  price: number;
  iban: string;

}
