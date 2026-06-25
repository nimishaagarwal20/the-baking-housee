import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getWhatsAppLink } from "@/lib/whatsapp";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  occasion: z.string().min(2, { message: "Occasion is required." }),
  productType: z.string().min(1, { message: "Please select a product type." }),
  dateRequired: z.string().min(1, { message: "Date is required." }),
  quantity: z.string().min(1, { message: "Quantity is required." }),
  flavour: z.string().min(2, { message: "Flavour preference is required." }),
  customisation: z.string().optional(),
  message: z.string().optional(),
});

export default function CustomOrders() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      occasion: "",
      productType: "",
      dateRequired: "",
      quantity: "",
      flavour: "",
      customisation: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const text = `Hello The Baking Housee! I would like to place an enquiry.

Name: ${values.name}
Phone: ${values.phone}
Occasion: ${values.occasion}
Product: ${values.productType}
Date Required: ${values.dateRequired}
Quantity: ${values.quantity}
Flavour Preference: ${values.flavour}
Customisation Details: ${values.customisation || "None"}
Message: ${values.message || "None"}`;

    window.open(getWhatsAppLink(text), "_blank");
  }

  return (
    <section id="custom-orders" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
            Customised Cakes & Dessert Orders
          </h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground">
            Looking for something uniquely yours? Fill out the form below with your requirements, and we'll get back to you with options and pricing to make your vision come alive!
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-xl shadow-primary/5 border border-border"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your full name" {...field} />
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
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="occasion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Occasion</FormLabel>
                      <FormControl>
                        <Input placeholder="Birthday, Anniversary, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="productType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select product type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Cake">Cake</SelectItem>
                          <SelectItem value="Cupcakes">Cupcakes</SelectItem>
                          <SelectItem value="Brownies">Brownies</SelectItem>
                          <SelectItem value="Cookies">Cookies</SelectItem>
                          <SelectItem value="Muffins">Muffins</SelectItem>
                          <SelectItem value="Doughnuts">Doughnuts</SelectItem>
                          <SelectItem value="Hamper">Hamper</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="dateRequired"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date Required</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 1kg, 12 pieces" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="flavour"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Flavour Preference</FormLabel>
                    <FormControl>
                      <Input placeholder="Chocolate, Vanilla, Red Velvet, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="customisation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Theme or Customisation Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your theme, colors, or specific design elements..."
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any other details we should know?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full h-12 text-lg" data-testid="button-submit-custom-order">
                Send Enquiry on WhatsApp
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
