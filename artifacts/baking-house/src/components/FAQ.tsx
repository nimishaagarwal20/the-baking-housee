import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Do you make 100% eggless products?",
      answer: "Yes, all products at The Baking Housee are 100% eggless. We take pride in creating delicious vegetarian treats without compromising on taste or texture."
    },
    {
      question: "Do you take customised cake orders?",
      answer: "Yes, customised cakes are available based on theme, flavour, size, and occasion. Let us know what you have in mind and we'll bring it to life!"
    },
    {
      question: "How can I place an order?",
      answer: "You can place an enquiry through the website form on our Custom Orders page, or directly contact us by clicking any of the 'Order on WhatsApp' buttons."
    },
    {
      question: "Do you make customised hampers?",
      answer: "Yes, customised dessert hampers are available for birthdays, festivals, gifting, and special occasions. We can tailor the contents to your preferences."
    },
    {
      question: "How early should I place an order?",
      answer: "Custom orders should ideally be placed in advance to allow enough time for preparation and customisation. We recommend reaching out at least 3-5 days prior for custom cakes and hampers."
    },
    {
      question: "Do you offer delivery?",
      answer: "Delivery details can be discussed while placing the order on WhatsApp. Depending on the location, we can arrange for safe delivery of your bakes."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full"></div>
          </div>

          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-primary/10">
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
