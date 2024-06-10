import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
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
  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleContactForm = (data) => {
    console.log(data);
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
            />
            <Input
              className="rounded-none border-[#d8d8d8] bg-transparent px-6 py-8 text-[15px] transition-colors duration-200 focus:border-blue "
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <Input
            className="rounded-none border-[#d8d8d8] bg-transparent px-6 py-8 text-[15px] transition-colors duration-200 focus:border-blue "
            name="subject"
            type="text"
            placeholder="Subject"
          />
          <Textarea
            className="h-40 rounded-none border-[#d8d8d8] bg-transparent px-6 py-5 text-[15px] transition-colors duration-200 focus:border-blue"
            name="message"
            placeholder="Message*"
            required
          />

          <div className="text-center md:text-left">
            <Button
              type="submit"
              className="inline-flex items-center gap-2 rounded-none border-2 border-blue bg-blue py-6 text-[15px] uppercase hover:bg-transparent hover:text-blue lg:px-7 lg:py-8 xl:px-8 xl:py-8"
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
