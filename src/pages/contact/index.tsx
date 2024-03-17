import { Button } from '@components/shared/Button';
import { Input } from '@components/shared/Input';
import { PageSection } from '@components/shared/PageSection';
import { TextArea } from '@components/shared/Textarea';
import { Typography } from '@components/shared/Typography';
import { supabase } from '@lib/supabase/client';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type TInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    setLoading(true);
    supabase
      .from('form')
      .insert(data)
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      });
  };

  return (
    <PageSection className="border-t-0">
      <div className="max-w-[80%] mx-auto flex flex-col xl:flex-row gap-10">
        <div className="xl:w-[45%]">
          <Typography as="h1" variant="h5" className="mb-5">
            Contact Me
          </Typography>

          <Typography variant="body-large">
            I’m currently looking for opportunities for{' '}
            <b>part-time freelance</b> or <b>contract work</b>, hit me up!
          </Typography>
          <br />
        </div>
        {!submitted && (
          <form
            className="xl:w-[55%] flex flex-col bg-primary p-8 rounded-xl"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              label="Name"
              id="name"
              name="name"
              required
              register={register}
              registerOptions={{ required: 'This field is required' }}
              error={errors?.name?.message}
            />
            <Input
              label="Email Address"
              id="email"
              name="email"
              required
              register={register}
              registerOptions={{ required: 'This field is required' }}
              error={errors?.email?.message}
            />
            <Input label="Phone" id="phone" name="phone" register={register} />
            <TextArea
              label="Message"
              id="message"
              name="message"
              required
              register={register}
              registerOptions={{ required: 'This field is required' }}
              error={errors?.message?.message}
            />

            <Typography className="py-5">
              I'll delete your email from the DB after I send one back to you !
            </Typography>

            <Button variant="quaternary" type="submit" className="mt-4">
              Send
              {loading && 'ing'}
            </Button>
          </form>
        )}
        {submitted && (
          <div className="xl:w-[50%] bg-primary p-8 rounded-xl">
            <Typography variant="body-large">
              Thanks for reaching out! I'll get back to you as soon as possible.
            </Typography>

            <Button
              variant="quaternary"
              className="mt-[100%]"
              onClick={() => setSubmitted(false)}
            >
              Go Back
            </Button>
          </div>
        )}
      </div>
    </PageSection>
  );
};

export default Contact;
