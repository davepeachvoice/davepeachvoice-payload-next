'use client';

import React, { useRef, useState } from 'react';
import Recaptcha from 'react-google-recaptcha';
import SelectDropdown from '../../design-system/molecules/select-dropdown';
import { ServiceInterface } from '../../services/ServiceInterface';

interface FormState {
  type: string;
  name: string;
  email: string;
  request?: string;
  attribution?: string;
}

const defaultValue: FormState = {
  type: '',
  name: '',
  email: '',
  request: '',
  attribution: '',
};

const RECAPTCHA_KEY = '6Lf7CAMcAAAAACNXsN6-hnIxztE0lFyltbvAOnKu';

interface Props {
  step0Header: string;
  step1Header: string;
  attributionFieldPrompt: string;
  attributionFieldOptions: string[];
  services: ServiceInterface[];
}

export function ContactForm(props: Props) {
  const [value, setValue] = useState<FormState>(defaultValue);
  const recaptchaRef = useRef<Recaptcha>();
  const [submitButtonEnabled, setSubmitButtonEnabled] = useState(false);
  const [fullFormVisible] = React.useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>();
  const [formStep, setFormStep] = useState(0);
  const [formSubmissionMessage, setFormSubmissionMessage] = useState<string>();

  function readyToNavigateToNextStep() {
    setFormStep(formStep + 1);
  }

  function readyToNavigateToPreviousStep() {
    setFormStep(formStep - 1);
  }

  const options = props.services.map((service) => ({
    id: service.title,
    displayName: service.title,
  }));

  return (
    <div className="mx-auto max-w-xl">
      <form
        onReset={() => setValue(defaultValue)}
        onSubmit={handleSubmit}
        data-netlify="true"
        data-netlify-recaptcha="true"
        name="BasicServiceRequest"
      >
        <div className="z-10">
          {selectedServiceTitle && (
            <SelectDropdown
              options={options}
              selectedId={selectedServiceTitle}
              setSelectedId={(value) => setSelectedServiceTitle(value)}
              name="type"
            />
          )}
        </div>

        <div className="h-12" />

        <div>
          {recaptchaRef.current && formSubmissionMessage && (
            <FormBody
              visible={fullFormVisible}
              formStep={formStep}
              readyToNavigateToNextStep={readyToNavigateToNextStep}
              readyToNavigateToPreviousStep={readyToNavigateToPreviousStep}
              step0Header={props.step0Header}
              step1Header={props.step1Header}
              attributionFieldPrompt={props.attributionFieldPrompt}
              attributionFieldOptions={props.attributionFieldOptions}
              submitButtonEnabled={submitButtonEnabled}
              setSubmitButtonEnabled={setSubmitButtonEnabled}
              recaptchaRef={recaptchaRef as any} // TODO
              submissionMessage={formSubmissionMessage}
            />
          )}
        </div>
      </form>
    </div>
  );

  function handleSubmit(event: any) {
    event.preventDefault();

    // TODO: better types
    const form = event.target as Element;
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) throw new Error('Form recaptcha value not found');

    const formName = form.getAttribute('name');
    if (!formName) throw new Error('Cannot determine form name');

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': formName,
        'g-recaptcha-response': recaptchaValue,
        ...value,
      }),
    };

    fetch('/', options)
      .then(() => {
        showFormSubmissionMessageStep(
          "Thanks for reaching out. I'll be in touch soon."
        );
      })
      .catch(() => {
        showFormSubmissionMessageStep(
          'Unable to submit your inquiry. Sorry for the inconvenience. Please reach out to me directly at davepeachvoice@gmail.com.'
        );
      });
  }

  function showFormSubmissionMessageStep(message: string) {
    setFormSubmissionMessage(message);
    readyToNavigateToNextStep();
  }
}

function encode(
  data: { 'form-name': string; 'g-recaptcha-response': string } & FormState
) {
  const keys = Object.keys(data) as (keyof typeof data)[];
  return keys
    .map(
      (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]!) // TODO
    )
    .join('&');
}

interface RenderFormBodyInput {
  visible: boolean;
  step0Header: string;
  step1Header: string;
  setSubmitButtonEnabled: (newValue: boolean) => void;
  submitButtonEnabled: boolean;
  recaptchaRef: React.MutableRefObject<Recaptcha>;
  formStep: number;
  readyToNavigateToNextStep: () => void;
  readyToNavigateToPreviousStep: () => void;
  attributionFieldPrompt: string;
  attributionFieldOptions: string[];
  submissionMessage: string;
}

function FormBody(input: RenderFormBodyInput) {
  return (
    <div style={{ display: input.visible ? undefined : 'none' }}>
      <Step0 {...input} visible={input.formStep === 0}></Step0>
      <Step1 {...input} visible={input.formStep === 1}></Step1>
      <SubmissionMessageStep
        {...input}
        visible={input.formStep === 2}
      ></SubmissionMessageStep>
    </div>
  );
}

interface Step0Props {
  step0Header: string;
  readyToNavigateToNextStep: () => void;
  visible: boolean;
}

function Step0(props: Step0Props) {
  return (
    <div style={{ display: props.visible ? undefined : 'none' }}>
      <StepHeader text={props.step0Header}></StepHeader>
      <FormTextArea></FormTextArea>
      <div className="align-bottom">
        <FormButton onClick={props.readyToNavigateToNextStep} label="Next" />
      </div>
    </div>
  );
}

interface Step1Props {
  setSubmitButtonEnabled: (newValue: boolean) => void;
  submitButtonEnabled: boolean;
  recaptchaRef: React.MutableRefObject<Recaptcha>;
  readyToNavigateToPreviousStep: () => void;
  attributionFieldPrompt: string;
  attributionFieldOptions: string[];
  step1Header: string;
  visible: boolean;
}

function Step1(props: Step1Props) {
  return (
    <div style={{ display: props.visible ? undefined : 'none' }}>
      <StepHeader text={props.step1Header}></StepHeader>
      <label htmlFor="name">Name</label>
      <input name="email" required></input>
      <label htmlFor="name">Email</label>
      <input name="email" required></input>
      <label htmlFor="attribution">Attribution</label>
      <select name="attribution" placeholder="Select">
        {props.attributionFieldOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div>
        <Recaptcha
          ref={props.recaptchaRef}
          sitekey={RECAPTCHA_KEY}
          size="normal"
          onChange={() => props.setSubmitButtonEnabled(true)}
        />
      </div>
      <div className="h-5" />
      <div className="flex flex-row justify-between">
        <FormButton
          label="Back"
          unfilled
          onClick={props.readyToNavigateToPreviousStep}
        />
        <FormButton
          label="Submit"
          type="submit"
          disabled={!props.submitButtonEnabled}
        />
      </div>
    </div>
  );
}

interface SubmissionMessageStepProps {
  submissionMessage: string;
  visible: boolean;
}

function SubmissionMessageStep(props: SubmissionMessageStepProps) {
  return (
    <div style={{ display: props.visible ? undefined : 'none' }}>
      {props.submissionMessage}
    </div>
  );
}

interface FormButtonProps {
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  unfilled?: boolean;
}

function FormButton(props: FormButtonProps) {
  return (
    <>
      <label>{props.label}</label>
      <button
        type={props.type}
        style={{
          width: '150px',
          borderRadius: '5px',
          paddingTop: '5px',
          paddingBottom: '5px',
          backgroundColor: props.unfilled ? '#222' : undefined,
          color: props.unfilled ? 'white' : undefined,
        }}
        onClick={props.onClick}
        disabled={props.disabled}
      />
    </>
  );
}

interface FormTextAreaProps {
  label?: string;
}

function FormTextArea(props: FormTextAreaProps) {
  return (
    <>
      <label>{props.label}</label>
      <textarea
        style={{
          backgroundColor: '#eee',
          color: '#444',
        }}
        color="red"
        name="request"
      ></textarea>
    </>
  );
}

interface StepHeaderProps {
  text: string;
}

function StepHeader(props: StepHeaderProps) {
  return (
    <div style={{ fontSize: '24px', marginBottom: '20px' }}>{props.text}</div>
  );
}
