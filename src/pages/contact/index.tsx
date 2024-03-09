import { Button } from '@components/shared/Button';
import { Input } from '@components/shared/Input';
import { PageSection } from '@components/shared/PageSection';
import { TextArea } from '@components/shared/Textarea';
import { Typography } from '@components/shared/Typography';
import { supabase } from '@lib/supabase/client';
import { SubmitHandler, useForm } from 'react-hook-form';

type TInputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>();

  console.log(errors, 'ERRORS');

  const onSubmit: SubmitHandler<TInputs> = (data) => {
    console.log(data, 'DATA');
    supabase
      .from('form')
      .insert(data)
      .then((res) => {
        console.log(res, 'RES');
      });
  };

  return (
    <PageSection className="border-t-0">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row gap-10">
        <div className="md:w-[50%]">
          <Typography as="h1" variant="h3" font="fjalla">
            Contact Me
          </Typography>

          <Typography variant="h6">
            I’m currently looking for opportunities for <b>perm</b>,{' '}
            <b>freelance</b> or <b>contract work</b>, hit me up!
          </Typography>
          <br />
          <Typography variant="h6">
            In specific I’m looking for <b>remote working</b>,{' '}
            <b>an awesome culture</b>, <b>a place to grow and learn </b> and an
            <b> interesting challenge</b>.
          </Typography>
        </div>
        <form
          className="md:w-[50%] flex flex-col bg-primary p-8 rounded-xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Name"
            id="name"
            name="name"
            required
            register={register}
          />
          <Input
            label="Email Address"
            id="email"
            name="email"
            required
            register={register}
          />
          <Input label="Phone" id="phone" name="phone" register={register} />
          <TextArea
            label="Message"
            id="message"
            name="message"
            required
            register={register}
          />

          <Typography className="py-5">
            <b>
              I'll delete your email from the DB after I send one back to you !
            </b>
          </Typography>

          <Button variant="quaternary" type="submit" className="mt-4">
            Send
          </Button>
        </form>
      </div>
    </PageSection>
  );
};

export default Contact;
