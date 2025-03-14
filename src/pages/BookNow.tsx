
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, CalendarCheck, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookNow = () => {
  const { toast } = useToast();
  const [redirecting, setRedirecting] = useState(false);

  const handleExternalBooking = () => {
    setRedirecting(true);
    toast({
      title: "Redirecting to booking system",
      description: "You'll be redirected to our scheduling system in a moment.",
    });
    
    // Short delay before redirecting to external booking site
    setTimeout(() => {
      window.open('https://thehairmessiahllc.as.me', '_blank');
      setRedirecting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-salon-dark mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-salon-dark/80 max-w-2xl mx-auto">
            Schedule your next hair transformation with The Hair Messiah and experience divine beauty.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-xl font-serif font-semibold text-salon-dark mb-4 flex items-center">
                  <Calendar className="mr-2 text-salon-pink" size={20} />
                  Booking Information
                </h2>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="bg-salon-light text-salon-pink p-1 rounded-full mr-3 mt-0.5">
                      <CalendarCheck size={16} />
                    </span>
                    <span className="text-salon-dark/80">
                      <strong>Online Booking:</strong> Our online scheduling system allows you to book 24/7 at your convenience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-salon-light text-salon-pink p-1 rounded-full mr-3 mt-0.5">
                      <CalendarCheck size={16} />
                    </span>
                    <span className="text-salon-dark/80">
                      <strong>Deposit Required:</strong> A deposit is required to secure your appointment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-salon-light text-salon-pink p-1 rounded-full mr-3 mt-0.5">
                      <CalendarCheck size={16} />
                    </span>
                    <span className="text-salon-dark/80">
                      <strong>Cancellation Policy:</strong> 48-hour notice is required for cancellations to receive a refund on your deposit.
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col justify-center items-center bg-salon-light p-8 rounded-lg">
                <h3 className="text-xl font-serif font-semibold text-salon-dark mb-6 text-center">
                  Ready to Book Your Appointment?
                </h3>
                <Button 
                  onClick={handleExternalBooking}
                  disabled={redirecting}
                  className="bg-salon-pink hover:bg-salon-pink/90 text-white py-6 px-6 rounded-md w-full max-w-xs flex items-center justify-center text-lg"
                >
                  {redirecting ? 'Redirecting...' : 'Book Online Now'}
                  <ExternalLink className="ml-2" size={18} />
                </Button>
                <p className="text-sm text-salon-dark/60 mt-4 text-center">
                  You'll be redirected to our secure scheduling system
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-xl font-serif font-semibold text-salon-dark mb-4">
              Booking FAQ
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-salon-dark">What happens after I book?</h3>
                <p className="text-salon-dark/80 mt-1">
                  After booking, you'll receive a confirmation email with details about your appointment.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-salon-dark">Can I request a specific stylist?</h3>
                <p className="text-salon-dark/80 mt-1">
                  Yes, you can select your preferred stylist during the booking process.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-salon-dark">How do I change or cancel my appointment?</h3>
                <p className="text-salon-dark/80 mt-1">
                  You can manage your appointments through the booking system or contact us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
