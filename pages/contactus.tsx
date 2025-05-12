import type { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import { Layout } from '../components/navbar/layout';
import { Nav } from '../components/navbar/navbar';
import { Box } from '../components/styles/box';
import { Input, Textarea, Button, Text, Spacer, useTheme } from '@nextui-org/react';
import { Flex } from '../components/styles/flex';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactUs: NextPage = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

const onSubmit = async (data: FormData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    
    if (response.ok) {
      alert("Your message has been sent successfully!");
      reset();
    } else {
      alert("Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error('Error sending message:', error);
    alert("There was an error sending your message.");
  }
};

  const { isDark } = useTheme();

  return (
    <Layout>
      <Nav />
      <Box as="main" css={{ px: '$6' }}>
        <Flex direction="column" align="center" justify="center" css={{ pt: '$20', gap: '$10', textAlign: 'center' }}>
          <Text h1>Let&apos;s Build Something Extraordinary</Text>
          <Text css={{ color: '$accents8', maxWidth: '700px' }}>
            Whether you&apos;re looking to streamline operations, explore AI opportunities, or connect your systems, we&apos;re here to help.
          </Text>
        </Flex>

        <Spacer y={3} />

        <Flex align="center" justify="center" css={{ py: '$20' }}>
          <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            css={{
              width: '100%',
              maxWidth: '600px',
              p: '$10',
              borderRadius: '$lg',
              boxShadow: '$lg',
              background: isDark ? '$accents1' : '#fff',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Flex direction="column" css={{ gap: '$6' }}>
              <Input
                label="Name"
                {...register("name", { required: "Name is required" })}
                status={errors.name ? 'error' : 'default'}
                helperText={errors.name?.message}
                fullWidth
              />
              <Input
                label="Email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address"
                  }
                })}
                status={errors.email ? 'error' : 'default'}
                helperText={errors.email?.message}
                fullWidth
              />
              <Input
                label="Subject"
                {...register("subject", { required: "Subject is required" })}
                status={errors.subject ? 'error' : 'default'}
                helperText={errors.subject?.message}
                fullWidth
              />
              <Textarea
                label="Message"
                {...register("message", { required: "Message is required" })}
                status={errors.message ? 'error' : 'default'}
                helperText={errors.message?.message}
                fullWidth
                rows={5}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                css={{
                  bg: '#12caec',
                  color: '#fff',
                  fontWeight: 'bold',
                  py: '$6',
                  px: '$12',
                  fontSize: '1rem',
                  transition: 'all 0.3s',
                  '&:hover': {
                    bg: '#0ea5e9',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
};

export default ContactUs;
