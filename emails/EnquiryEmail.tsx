import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Link,
  Section,
  Row,
  Column,
  Hr,
  Tailwind,
} from '@react-email/components';
import * as React from 'react';

interface EnquiryEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: 'Arial, sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
};

export const EnquiryEmail = ({ name, email, phone, message }: EnquiryEmailProps) => (
  <Html>
    <Head />
    <Tailwind>
      <Body style={main}>
        <Container style={container} className="rounded-lg shadow-xl border border-gray-200">
          <Section className="px-6 py-4 border-b border-gray-200 bg-blue-600">
            <Text className="text-white text-lg font-bold">New Enquiry for JBSS</Text>
          </Section>
          <Section className="p-6">
            <Text className="text-base text-gray-700">
              You have received a new contact submission from your website's enquiry form.
            </Text>
            
            <Hr className="my-4" />
            
            <Row className="text-base">
                <Column className="font-semibold w-1/3">Name:</Column>
                <Column className="w-2/3">{name}</Column>
            </Row>
            <Row className="text-base">
                <Column className="font-semibold w-1/3">Email:</Column>
                <Column className="w-2/3"><Link href={`mailto:${email}`}>{email}</Link></Column>
            </Row>
            <Row className="text-base">
                <Column className="font-semibold w-1/3">Phone:</Column>
                <Column className="w-2/3">{phone}</Column>
            </Row>

            <Hr className="my-4" />

            <Text className="text-base font-semibold">Message:</Text>
            <Section className="border border-gray-300 rounded-md p-4 bg-gray-50">
                <Text className="text-sm italic whitespace-pre-line">{message}</Text>
            </Section>

          </Section>
          <Text className="text-xs text-center text-gray-500 mt-4">
            Submission received from EduPlatform Contact Form.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default EnquiryEmail;