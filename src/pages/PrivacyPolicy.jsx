import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background: #18191c;
  color: #fff;
  padding: 2.5rem 2rem;
  border-radius: 20px;
  max-width: 900px;
  margin: 3rem auto;
  box-shadow: 0 4px 32px #0002;
  font-size: 1.05rem;
  line-height: 1.7;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: #7ecfff #23243a;
}
  &::-webkit-scrollbar {
    width: 10px;
    background: #23243a;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #7ecfff;
    border-radius: 8px;
  }
`;

const PolicyContent = styled.div`
  flex: 1;
  margin-bottom: 2.5rem;
`;

const PolicyHeader = styled.h2`
  color: #7ecfff;
  font-size: 1.25rem;
  font-weight: 800;
  margin: 2.2rem 0 1.1rem 0;
  letter-spacing: 0.01em;
`;

const PolicySubHeader = styled.h3`
  color: #4fd1c5;
  font-size: 1.08rem;
  font-weight: 700;
  margin: 1.5rem 0 0.7rem 0;
  letter-spacing: 0.01em;
`;

const PolicyParagraph = styled.p`
  margin: 0 0 1.1rem 0;
  white-space: pre-wrap;
`;

const BackButton = styled.button`
  align-self: flex-end;
  background: #fff;
  color: #18191c;
  border: none;
  border-radius: 8px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
  transition:
    background 0.2s,
    color 0.2s;
  &:hover {
    background: #18191c;
    color: #fff;
    border: 1px solid #fff;
  }
`;

const TopBackButton = styled.button`
  background: none;
  color: #7ecfff;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  cursor: pointer;
  margin-bottom: 1.2rem;
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.2em 0.5em 0.2em 0;
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

const policyText = `1. WHAT INFORMATION DO WE COLLECT?
Personal information you disclose to us
In Short: We collect personal information that you provide to us.


We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.


Personal Information Provided by You. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:
email addresses
passwords
usernames
Sensitive Information. When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:
workout data
Social Media Login Data. We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.


All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.
Information automatically collected
In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.


We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.


The information we collect includes:
Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).
Device Data. We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.
Google API
Our use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.




2. HOW DO WE PROCESS YOUR INFORMATION?
In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.


We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
To facilitate account creation and authentication and otherwise manage user accounts. We may process your information so you can create and log in to your account, as well as keep your account in working order.
To deliver and facilitate delivery of services to the user. We may process your information to provide you with the requested service.
To request feedback. We may process your information when necessary to request feedback and to contact you about your use of our Services.
To save or protect an individual's vital interest. We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.


3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
In Short: We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.


If you are located in the EU or UK, this section applies to you.


The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:
Consent. We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about withdrawing your consent.
Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.
Legitimate Interests. We may process your information when we believe it is reasonably necessary to achieve our legitimate business interests and those interests do not outweigh your interests and fundamental rights and freedoms. For example, we may process your personal information for some of the purposes described in order to:
Understand how our users use our products and services so we can improve user experience
Legal Obligations. We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.
Vital Interests. We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.


If you are located in Canada, this section applies to you.


We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.


In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:
If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
For investigations and fraud detection and prevention
For business transactions provided certain conditions are met
If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim
For identifying injured, ill, or deceased persons and communicating with next of kin
If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province
If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records
If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced
If the collection is solely for journalistic, artistic, or literary purposes
If the information is publicly available and is specified by the regulations
We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments


4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
In Short: We may share information in specific situations described in this section and/or with the following third parties.


We may need to share your personal information in the following situations:
Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.


5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
In Short: We may use cookies and other tracking technologies to collect and store your information.


We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services and your account, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.


We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.


To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?"


Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
Google Analytics
We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Remarketing with Google Analytics. To opt out of being tracked by Google Analytics across the Services, visit https://tools.google.com/dlpage/gaoptout. You can opt out of Google Analytics Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt out means include http://optout.networkadvertising.org/ and http://www.networkadvertising.org/mobile-choice. For more information on the privacy practices of Google, please visit the Google Privacy & Terms page.


6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
In Short: If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.


Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.


We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.


7. HOW LONG DO WE KEEP YOUR INFORMATION?
In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.


We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.


When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.


8. HOW DO WE KEEP YOUR INFORMATION SAFE?
In Short: We aim to protect your personal information through a system of organizational and technical security measures.


We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.


9. DO WE COLLECT INFORMATION FROM MINORS?
In Short: We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.


We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at __________.


10. WHAT ARE YOUR PRIVACY RIGHTS?
In Short: Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.


In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.


We will consider and act upon any request in accordance with applicable data protection laws.
 
If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your Member State data protection authority or UK data protection authority.


If you are located in Switzerland, you may contact the Federal Data Protection and Information Commissioner.


Withdrawing your consent: If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below or updating your preferences.


However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.
Account Information
If you would at any time like to review or change the information in your account or terminate your account, you can:
Log in to your account settings and update your user account.
Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.


If you have questions or comments about your privacy rights, you may email us at support@zaggathletics.com.


11. CONTROLS FOR DO-NOT-TRACK FEATURES
Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.


California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.


12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
In Short: If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
Categories of Personal Information We Collect
The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "WHAT INFORMATION DO WE COLLECT?"


Category
Examples
Collected
A. Identifiers
Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name

NO




B. Personal information as defined in the California Customer Records statute
Name, contact information, education, employment, employment history, and financial information

NO




C. Protected classification characteristics under state or federal law
Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data

NO


D. Commercial information
Transaction information, purchase history, financial details, and payment information

NO


E. Biometric information
Fingerprints and voiceprints

NO


F. Internet or other similar network activity
Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements

NO


G. Geolocation data
Device location

NO


H. Audio, electronic, sensory, or similar information
Images and audio, video or call recordings created in connection with our business activities

NO


I. Professional or employment-related information
Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us

NO


J. Education Information
Student records and directory information

NO


K. Inferences drawn from collected personal information
Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics

NO


L. Sensitive personal Information
Account login information and health data

YES




We only collect sensitive personal information, as defined by applicable privacy laws or the purposes allowed by law or with your consent. Sensitive personal information may be used, or disclosed to a service provider or contractor, for additional, specified purposes. You may have the right to limit the use or disclosure of your sensitive personal information. We do not collect or process sensitive personal information for the purpose of inferring characteristics about you.


We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
Receiving help through our customer support channels;
Participation in customer surveys or contests; and
Facilitation in the delivery of our Services and to respond to your inquiries.
We will use and retain the collected personal information as needed to provide the Services or for:
Category L - As long as the user has an account with us
Sources of Personal Information
Learn more about the sources of personal information we collect in "WHAT INFORMATION DO WE COLLECT?"
How We Use and Share Personal Information
Learn more about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"


Will your information be shared with anyone else?


We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"


We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.


We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.
Your Rights
You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
Right to know whether or not we are processing your personal data
Right to access your personal data
Right to correct inaccuracies in your personal data
Right to request the deletion of your personal data
Right to obtain a copy of the personal data you previously shared with us
Right to non-discrimination for exercising your rights
Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")
Depending upon the state where you live, you may also have the following rights:
Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)
Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)
Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)
Right to review, understand, question, and correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Minnesota)
Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)
Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)
How to Exercise Your Rights
To exercise these rights, you can contact us by visiting http://localhost:5173/settings, by emailing us at support@zaggathletics.com, or by referring to the contact details at the bottom of this document.


Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
Request Verification
Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.


If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.
Appeals
Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at support@zaggathletics.com. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.
California "Shine The Light" Law
California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"


13. DO WE MAKE UPDATES TO THIS NOTICE?
In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.


We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.


14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
If you have questions or comments about this notice, you may contact us by post at:


Zaggathletics
Lupwaldstrasse 6
Pfalzen Italy, Bolzano 39030
Italy


15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: http://localhost:5173/settings.

`;

function renderPolicy(text) {
  const lines = text.split('\n');
  const elements = [];
  let buffer = [];
  function flushBuffer() {
    if (buffer.length) {
      elements.push(
        <PolicyParagraph key={elements.length}>
          {buffer.join('\n')}
        </PolicyParagraph>
      );
      buffer = [];
    }
  }
  lines.forEach((line, idx) => {
    // Main section headers: e.g. "1. WHAT INFORMATION DO WE COLLECT?"
    if (/^\d+\.\s+.+/.test(line.trim())) {
      flushBuffer();
      elements.push(
        <PolicyHeader key={elements.length}>{line.trim()}</PolicyHeader>
      );
    }
    // Subheaders: all-caps lines or lines ending with a question mark
    else if (
      /^[A-Z0-9\s\-&]+\??$/.test(line.trim()) &&
      line.trim().length > 0 &&
      !/^\d+\./.test(line.trim())
    ) {
      flushBuffer();
      elements.push(
        <PolicySubHeader key={elements.length}>{line.trim()}</PolicySubHeader>
      );
    } else if (line.trim() === '') {
      flushBuffer();
    } else {
      buffer.push(line);
    }
  });
  flushBuffer();
  return elements;
}

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  return (
    <Container ref={containerRef}>
      <TopBackButton onClick={() => navigate('/settings')}>
        <span
          style={{ fontSize: '1.3em', lineHeight: 1, display: 'inline-block' }}
        >
          &lt;
        </span>
        Back to Settings
      </TopBackButton>
      <PolicyContent>{renderPolicy(policyText)}</PolicyContent>
      <BackButton onClick={() => navigate('/')}>Back to Home</BackButton>
    </Container>
  );
};

export default PrivacyPolicy;
