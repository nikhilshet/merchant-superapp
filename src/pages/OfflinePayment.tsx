import ServicesDashboard from "@/components/shared/ServicesDashboard"
import { CreditCardIcon, Send, Wallet } from "lucide-react";
import { toast } from '@/hooks/use-toast';

const OfflinePayment = ()=>{
       
  const offlinePayment = [
    { id: 'payout', name: 'Payout', icon: Send, color: 'bg-green-600'},
    { id: 'collect', name: 'Collect', icon: CreditCardIcon, color: 'bg-red-600'},
  ]

  const handleServiceClick = (id: string , name:string) => {
      toast({
        title: "Coming Soon",
        description: `${name} Feature Coming Soon`,
    });
    }
  

const extraDetails = {
  title: "B2B Payments",
  subTitle: "Payouts and Collections",
  merchant1: "VendorX Pvt Ltd",
  amount1: "₹25,000",
  merchant2: "ClientY Enterprises",
  amount2: "₹18,500",
  icon1: Send,
  icon2: Wallet,
  service1: "Payout to Vendor",
  service2: "Payment Collected"
}
    return(
        <>
        <ServicesDashboard services={offlinePayment} handleServiceClick={handleServiceClick} extraDetails={extraDetails} />
        </>
    )
}
export default OfflinePayment