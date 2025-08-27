import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send } from "lucide-react";

// Type definitions
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ToastData {
  title: string;
  description?: string;
  variant?: "default" | "destructive";
}

interface ContactFormProps {
  title?: string;
  className?: string;
  onSubmitSuccess?: (data: any, formData: FormData) => void;
  onSubmitError?: (error: Error) => void;
  fromName?: string;
}

interface UseToastReturn {
  toast: (data: ToastData) => void;
  toastElement: JSX.Element | null;
}

// Simple toast hook replacement for the artifact environment
const useToast = (): UseToastReturn => {
  const [toast, setToast] = useState<ToastData | null>(null);

  const showToast = ({ title, description, variant = "default" }: ToastData): void => {
    setToast({ title, description, variant });
    setTimeout(() => setToast(null), 5000);
  };

  return { 
    toast: showToast,
    toastElement: toast && (
      <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
        toast.variant === 'destructive' 
          ? 'bg-red-500 text-white' 
          : 'bg-green-500 text-white'
      }`}>
        <div className="font-semibold">{toast.title}</div>
        {toast.description && <div className="text-sm mt-1">{toast.description}</div>}
      </div>
    )
  };
};

const ContactForm: React.FC<ContactFormProps> = ({ 
  title = "Send us a Message",
  className = "",
  onSubmitSuccess,
  onSubmitError,
  fromName = "valueconcretesolutions@gmail.com"
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast, toastElement } = useToast();

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    // Remove all non-digit characters except +
    const cleanPhone = phone.replace(/[^\d\+]/g, '');
    return phoneRegex.test(cleanPhone) && cleanPhone.length >= 10;
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid phone number (minimum 10 digits)";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the highlighted fields and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "621749ad-2f61-40fb-a0a6-2706f4f2a0aa");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("from_name", fromName);
      formDataToSend.append("subject", `New Contact Form Submission from ${formData.name}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you soon.",
        });
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Call success callback if provided
        if (onSubmitSuccess) {
          onSubmitSuccess(data, formData);
        }
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive"
      });
      
      // Call error callback if provided
      if (onSubmitError) {
        onSubmitError(error as Error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear validation error for this field when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: ""
      });
    }

    // Real-time validation for email and phone
    if (name === 'email' && value.trim()) {
      if (!validateEmail(value)) {
        setValidationErrors({
          ...validationErrors,
          email: "Please enter a valid email address"
        });
      }
    }

    if (name === 'phone' && value.trim()) {
      if (!validatePhone(value)) {
        setValidationErrors({
          ...validationErrors,
          phone: "Please enter a valid phone number (minimum 10 digits)"
        });
      }
    }
  };

  return (
    <>
      {toastElement}
      <Card className={`shadow-xl border-0 bg-card/80 backdrop-blur-sm ${className}`}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground flex items-center">
            <Send className="w-6 h-6 text-primary mr-3" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`h-12 ${validationErrors.name ? 'border-red-500' : ''}`}
                  placeholder="Enter your full name"
                  disabled={isLoading}
                />
                {validationErrors.name && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={`h-12 ${validationErrors.phone ? 'border-red-500' : ''}`}
                  placeholder="Enter your phone number"
                  disabled={isLoading}
                />
                {validationErrors.phone && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.phone}</p>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`h-12 ${validationErrors.email ? 'border-red-500' : ''}`}
                placeholder="Enter your email address"
                disabled={isLoading}
              />
              {validationErrors.email && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Project Details *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className={`min-h-32 ${validationErrors.message ? 'border-red-500' : ''}`}
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                disabled={isLoading}
              />
              {validationErrors.message && (
                <p className="text-red-500 text-sm mt-1">{validationErrors.message}</p>
              )}
            </div>

            <Button 
              onClick={handleSubmit}
              variant="default" 
              size="lg" 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            <p>From: <strong>{fromName}</strong></p>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default ContactForm;