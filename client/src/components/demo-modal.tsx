import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2 } from "lucide-react";

const demoFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  description: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      description: "",
    },
  });

  const demoMutation = useMutation({
    mutationFn: async (data: DemoFormData) => {
      setIsSubmitting(true);
      const response = await apiRequest("POST", "/api/contact", {
        ...data,
        type: "Demo Request"
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Demo request sent successfully!",
        description: "Our team will contact you within 24 hours to schedule your demo.",
      });
      form.reset();
      onClose();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Failed to send demo request",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: DemoFormData) => {
    demoMutation.mutate(data);
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <>
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center">
          <div className="bg-card p-8 rounded-xl shadow-2xl text-center">
            <Loader2 className="animate-spin h-12 w-12 text-secondary mx-auto mb-4" />
            <p className="text-foreground font-semibold">Sending your demo request...</p>
          </div>
        </div>
      )}

      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md" data-testid="demo-modal">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">Book Free Demo</DialogTitle>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field} 
                        data-testid="demo-name-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+91 98765 43210" 
                        {...field} 
                        data-testid="demo-phone-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo Requirements</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What would you like to see in the demo? Any specific features or workflows?"
                        rows={4}
                        className="resize-none"
                        {...field} 
                        data-testid="demo-description-input"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex gap-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handleClose}
                  className="flex-1"
                  data-testid="demo-cancel-button"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  variant="secondary"
                  className="flex-1"
                  disabled={demoMutation.isPending}
                  data-testid="demo-submit-button"
                >
                  {demoMutation.isPending ? "Sending..." : "Book Demo"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
}
