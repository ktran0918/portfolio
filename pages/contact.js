import styled from "@emotion/styled";
import { useState } from "react";
import fetch from "isomorphic-unfetch";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

import { recaptcha } from '../config/credentials';
import Layout from "../components/Layout";
import Button from '../components/Button';


const ContactBody = styled.main`
  width: 50%;
  margin: 10px auto;
`;

const InputField = styled.div`
  width: 100%;
  margin: 20px 0;

  label, input, textarea {
    display: block;
    font-size: 100%;
  }

  label {
    margin-bottom: 10px;
    font-weight: bold;
  }

  input {
    padding: 5px;

    outline: none;
    border: 0;
    border-bottom: 1px solid #606060;
  }

  input#name {
    width: 30%;
  }

  input#email {
    width: 40%;
  }

  input#subject {
    width: 70%;
  }

  textarea {
    width: 100%;
    padding: 10px;
    
    outline: none;
    border: 0;
    border-radius: 2px;
    border: 1px solid #606060;
  }

  @media(max-width: 900px) {
    input, textarea {
      font-size: 90%;
    }

    input#name {
      width: 50%;
    }

    input#email {
      width: 70%;
    }

    input#subject {
      width: 100%;
    }
  }
`;

const Status = styled.div`
  font-weight: bold;
  color: ${props => props.color || '#606060'};
`;

export default function Contact() {
  // Contact form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  // Sending mail statuses
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  let submittable = !(submitting || submitted || error) && captchaVerified;

  async function submitForm(data) {
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        headers: {
          "Accept": "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      // console.log(response);
      if (response.status === 200) {
        setSubmitted(true);
      } else if (response.status === 500) {
        setError(true);
      }

    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  function onVerifyCaptcha(token) {
    // console.log(token);
    setCaptchaVerified(true);
  }

  return (
    <Layout>
      <h1>Contact me</h1>
      <ContactBody>
        <form
          onSubmit={(e) => { e.preventDefault(); submitForm({ name, email, subject, body }); }}
        >
          <InputField>
            <label htmlFor="name">Your Name:</label>
            <input
              id="name" type="text" name="name" required
              placeholder="ex: Jane Doe"
              onChange={(e) => setName(e.target.value)}
            />
          </InputField>

          <InputField>
            <label htmlFor="email">Your Email:</label>
            <input
              id="email" type="text" name="email" required
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputField>

          <InputField>
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject" type="text" name="subject" required
              placeholder="What is your message about?"
              onChange={(e) => setSubject(e.target.value)}
            />
          </InputField>

          <InputField>
            <label htmlFor="body">Body:</label>
            <textarea
              id="body" name="body" rows="10" required
              placeholder="Your message here"
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </InputField>

          <GoogleReCaptchaProvider
            reCaptchaKey={recaptcha.sitekey}
          >
            <GoogleReCaptcha onVerify={onVerifyCaptcha} />
          </GoogleReCaptchaProvider>

          {submittable && <Button type="submit">Send message</Button>}

          {/** render sending statuses */}
          {submitting && <Status>Submitting...</Status>}
          {submitted && <Status color='green'>Submitted!</Status>}
          {error && <Status color='red'>Unable to send your message 😞</Status>}
        </form>
      </ContactBody>
    </Layout>
  );
}