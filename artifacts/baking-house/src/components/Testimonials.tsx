import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya M.",
      text: "The cake was beautiful, soft, and absolutely delicious. Loved that it was 100% eggless!",
    },
    {
      name: "Sneha R.",
      text: "The customised hamper was packed so nicely and made the perfect gift.",
    },
    {
      name: "Ananya K.",
      text: "Fresh, homemade, and full of flavour. The brownies were amazing.",
    },
    {
      name: "Divya S.",
      text: "The cupcakes looked so pretty and tasted even better. Highly recommended!",
    }
  ];

  return (
    <section className="py-24 bg-primary/5 relative">
      {/* Decorative quotes */}
      <div className="absolute top-10 left-10 text-9xl font-serif text-primary/10 select-none">"</div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">Sweet Words From Our Customers</h2>
          <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                  <div className="p-2">
                    <Card className="bg-card border-none shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="flex gap-1 mb-6 text-[#F59E0B]">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-5 h-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-lg text-foreground/80 italic mb-8 flex-grow">"{testimonial.text}"</p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-serif font-bold text-primary">
                            {testimonial.name[0]}
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">Verified Customer</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
