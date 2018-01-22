import {Customer} from "./customer";
export class Complaint {

  complaintId: number;
  complaintMessages: Array<any>;
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


/*
 private List<ComplaintMessageResponse> complaintMessages;
 */
