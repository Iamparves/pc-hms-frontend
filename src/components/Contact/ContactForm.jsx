import { sendMessage } from "@/db/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const contactSchema = z.object({
  name: z.string().nonempty({
    message: "Name is required",
  }),
  email: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().nonempty({
    message: "Message is required",
  }),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleContactForm = async (data) => {
    setIsLoading(true);
    const toastId = toast.loading("Sending message...");
    const result = await sendMessage(data);
    setIsLoading(false);

    if (result.status === "success") {
      form.reset();
      return toast.success("Message sent successfully", {
        id: toastId,
      });
    } else {
      return toast.error("Failed to send message", {
        id: toastId,
      });
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          className="max-w-3xl space-y-3 sm:space-y-5"
          onSubmit={form.handleSubmit(handleContactForm)}
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-5 md:grid-cols-1 lg:grid-cols-2">
            <Input
              className="rounded-none border-[#d8d8d8] bg-transparent px-6 py-8 text-[15px] transition-colors duration-200 focus:border-blue "
              name="name"
              type="text"
              placeholder="Your Name*"
              required
              value={form.watch("name")}
              onChange={(e) => form.setValue("name", e.target.value)}
              disabled={isLoading}
            />
            <Input
              className="rounded-none border-[#d8d8d8] bg-transparent px-6 py-8 text-[15px] transition-colors duration-200 focus:border-blue "
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.watch("email")}
              onChange={(e) => form.setValue("email", e.target.value)}
              disabled={isLoading}
            />
          </div>
          <Input
            className="rounded-none border-[#d8d8d8] bg-transparent px-6 py-8 text-[15px] transition-colors duration-200 focus:border-blue "
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.watch("subject")}
            onChange={(e) => form.setValue("subject", e.target.value)}
            disabled={isLoading}
          />
          <Textarea
            className="h-40 rounded-none border-[#d8d8d8] bg-transparent px-6 py-5 text-[15px] transition-colors duration-200 focus:border-blue"
            name="message"
            placeholder="Message*"
            required
            value={form.watch("message")}
            onChange={(e) => form.setValue("message", e.target.value)}
            disabled={isLoading}
          />

          <div className="text-center md:text-left">
            <Button
              type="submit"
              className="inline-flex items-center gap-2 rounded-none border-2 border-blue bg-blue py-6 text-[15px] uppercase hover:bg-transparent hover:text-blue lg:px-7 lg:py-8 xl:px-8 xl:py-8"
              disabled={isLoading}
            >
              <span className="text-xl">
                <MdAlternateEmail />
              </span>
              Contact us
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
