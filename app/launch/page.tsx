'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LaunchPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    isCompanyAccount: true,
    verificationCode: ['', '', '', '', '', ''],
    companyName: '',
    registrationNumber: '',
    country: '',
    website: '',
    role: '',
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCodeChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...formData.verificationCode];
      newCode[index] = value;
      setFormData(prev => ({ ...prev, verificationCode: newCode }));

      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement;
        nextInput?.focus();
      }
    }
  };

  const handleCodeKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const newCode = [...formData.verificationCode];
      if (formData.verificationCode[index]) {
        newCode[index] = '';
        setFormData(prev => ({ ...prev, verificationCode: newCode }));
      } else if (index > 0) {
        const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement;
        prevInput?.focus();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement;
      prevInput?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement;
      nextInput?.focus();
    }
  };

  const handleCodePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pastedData.length > 0) {
      const newCode = [...formData.verificationCode];
      for (let i = 0; i < pastedData.length && i < 6; i++) {
        newCode[i] = pastedData[i];
      }
      setFormData(prev => ({ ...prev, verificationCode: newCode }));
    }
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      // After OTP, route based on role
      if (formData.role === 'custodian') {
        router.push('/auth/custodian/signup');
      } else if (formData.role === 'originator' || formData.role === 'servicer') {
        setStep(4);
      }
    } else if (step === 4) {
      // After company info, complete onboarding
      router.push('/pool');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 sm:py-8 bg-[#FAFAFA]">
      <div className="w-full max-w-[528px] bg-white rounded-[30px] border border-[#E8E8E8] p-6 sm:p-8 md:p-10">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          {/* Logo */}
          <div className="flex items-center gap-[7px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/4766cf7879611149ec901b558607cf3c359a8bdf?width=132"
              alt="StrataFi Logo"
              width={66}
              height={39}
              className="flex-shrink-0"
            />
            <span className="text-[26px] font-normal tracking-[-1.587px] text-black">
              StrataFi
            </span>
          </div>

          {/* Step 1: Email & Full Name */}
          {step === 1 && (
            <div className="flex flex-col items-center gap-8 w-full">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl sm:text-2xl font-normal leading-[120%] tracking-[-0.48px] text-black">
                  Welcome!<br />Let&apos;s Create Your Account
                </h1>
                <p className="text-sm font-medium leading-[145%] text-[#A3A3A3]">
                  Please enter your Company/Work Email
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium leading-[145%] text-[#1A1A1A]">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium placeholder:text-[#A3A3A3] text-[#1A1A1A] focus:outline-none focus:border-[#F44C15]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium leading-[145%] text-[#1A1A1A]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium placeholder:text-[#A3A3A3] text-[#1A1A1A] focus:outline-none focus:border-[#F44C15]"
                    />
                  </div>

                  <label className="flex items-center gap-1 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={formData.isCompanyAccount}
                        onChange={(e) => handleInputChange('isCompanyAccount', e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-5 h-5 rounded border border-[#E8E8E8] peer-checked:bg-[#F44C15] peer-checked:border-[#F44C15] flex items-center justify-center">
                        {formData.isCompanyAccount && (
                          <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                            <path d="M1 4.5L4.5 8L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm font-medium leading-[145%] text-[#767676]">
                      I am creating an account on behalf of a company
                    </span>
                  </label>
                </div>

                <button
                  onClick={handleContinue}
                  className="h-12 px-[18px] py-3 rounded-[50px] bg-[#F44C15] text-white text-sm font-medium leading-[145%] hover:bg-[#E03D0C] transition-colors"
                >
                  Continue
                </button>
              </div>

              <p className="text-sm font-medium leading-[145%] text-center">
                <span className="text-[#484848]">Already have an account? </span>
                <a href="#" className="text-[#F44C15] underline">Log in</a>
              </p>
            </div>
          )}

          {/* Step 2: Role Selection */}
          {step === 2 && (
            <div className="flex flex-col items-center gap-8 w-full">
              <h1 className="text-xl sm:text-2xl font-normal leading-[120%] tracking-[-0.48px] text-black text-center">
                What best describes your role?
              </h1>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleInputChange('role', 'originator')}
                    className={`flex items-start gap-[13px] p-4 rounded-[20px] border text-left transition-colors ${
                      formData.role === 'originator' ? 'border-[#F44C15]' : 'border-[#E8E8E8]'
                    }`}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path
                        d="M10 11.6667C10 9.45654 10.878 7.33692 12.4408 5.77412C14.0036 4.21132 16.1232 3.33334 18.3334 3.33334C20.5435 3.33334 22.6631 4.21132 24.2259 5.77412C25.7887 7.33692 26.6667 9.45654 26.6667 11.6667C26.6667 13.8768 25.7887 15.9964 24.2259 17.5592C22.6631 19.122 20.5435 20 18.3334 20C16.1232 20 14.0036 19.122 12.4408 17.5592C10.878 15.9964 10 13.8768 10 11.6667ZM8.03671 24.4533C10.7084 22.8233 14.3417 21.6667 18.3334 21.6667C19.0784 21.6667 19.8117 21.7067 20.5267 21.7833C20.813 21.8141 21.0864 21.9184 21.3204 22.0862C21.5544 22.2541 21.7408 22.4796 21.8617 22.741C21.9825 23.0023 22.0336 23.2905 22.01 23.5774C21.9863 23.8644 21.8887 24.1403 21.7267 24.3783C20.5977 26.0354 19.9958 27.9949 20 30C20 31.5333 20.345 32.9833 20.9584 34.2783C21.0779 34.5306 21.1321 34.8089 21.1161 35.0876C21.1 35.3663 20.9142 35.6365 20.8666 35.8734C20.7189 36.1103 20.5141 36.3063 20.271 36.4435C20.0279 36.5806 19.7542 36.6545 19.475 36.6583L18.3334 36.6667C14.6184 36.6667 11.1084 36.4333 8.47837 35.7367C7.17004 35.39 5.93837 34.8933 5.00504 34.1433C4.01671 33.35 3.33337 32.2417 3.33337 30.8333C3.33337 29.5217 3.93004 28.295 4.74004 27.2683C5.56337 26.2267 6.70171 25.2683 8.03671 24.4517V24.4533ZM30 23.3333C30.4421 23.3333 30.866 23.5089 31.1786 23.8215C31.4911 24.1341 31.6667 24.558 31.6667 25V28.3333H35C35.4421 28.3333 35.866 28.5089 36.1786 28.8215C36.4911 29.1341 36.6667 29.558 36.6667 30C36.6667 30.442 36.4911 30.866 36.1786 31.1785C35.866 31.4911 35.4421 31.6667 35 31.6667H31.6667V35C31.6667 35.442 31.4911 35.866 31.1786 36.1785C30.866 36.4911 30.4421 36.6667 30 36.6667C29.5579 36.6667 29.134 36.4911 28.8214 36.1785C28.5089 35.866 28.3333 35.442 28.3333 35V31.6667H25C24.5579 31.6667 24.134 31.4911 23.8214 31.1785C23.5089 30.866 23.3333 30.442 23.3333 30C23.3333 29.558 23.5089 29.1341 23.8214 28.8215C24.134 28.5089 24.5579 28.3333 25 28.3333H28.3333V25C28.3333 24.558 28.5089 24.1341 28.8214 23.8215C29.134 23.5089 29.5579 23.3333 30 23.3333Z"
                        fill={formData.role === 'originator' ? '#F44C15' : '#1A1A1A'}
                      />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-xl font-normal leading-[120%] tracking-[-0.4px] text-[#484848] mb-1">
                        Originator
                      </h3>
                      <p className="text-xs font-medium leading-[145%] text-[#A3A3A3]">
                        Upload loan documents and create asset pools for securitization.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleInputChange('role', 'custodian')}
                    className={`flex items-start gap-[13px] p-4 rounded-[20px] border text-left transition-colors ${
                      formData.role === 'custodian' ? 'border-[#F44C15]' : 'border-[#E8E8E8]'
                    }`}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.3334 3.33331C16.1232 3.33331 14.0036 4.21129 12.4408 5.77409C10.878 7.33689 10 9.45651 10 11.6666C10 13.8768 10.878 15.9964 12.4408 17.5592C14.0036 19.122 16.1232 20 18.3334 20C20.5435 20 22.6631 19.122 24.2259 17.5592C25.7887 15.9964 26.6667 13.8768 26.6667 11.6666C26.6667 9.45651 25.7887 7.33689 24.2259 5.77409C22.6631 4.21129 20.5435 3.33331 18.3334 3.33331ZM18.3334 21.6666C14.3417 21.6666 10.7084 22.8233 8.03671 24.4533C6.70337 25.2666 5.56337 26.2266 4.74004 27.27C3.93004 28.2933 3.33337 29.5216 3.33337 30.8333C3.33337 32.2416 4.01837 33.3516 5.00504 34.1433C5.93837 34.8933 7.17004 35.39 8.47837 35.7366C11.1084 36.4316 14.6184 36.6666 18.3334 36.6666C18.7167 36.6666 19.1 36.6633 19.475 36.6583C19.7542 36.6545 20.0279 36.5806 20.271 36.4434C20.5141 36.3063 20.7189 36.1103 20.8666 35.8734C21.0142 35.6364 21.1 35.3662 21.1161 35.0875C21.1321 34.8089 21.0779 34.5306 20.9584 34.2783C20.325 32.9411 19.9976 31.4796 20 30C20 27.9133 20.6384 25.98 21.7284 24.3783C21.8904 24.1403 21.988 23.8644 22.0116 23.5774C22.0353 23.2905 21.9842 23.0023 21.8634 22.7409C21.7425 22.4796 21.556 22.254 21.3221 22.0862C21.0881 21.9184 20.8147 21.814 20.5284 21.7833C19.8117 21.7066 19.0784 21.6666 18.3334 21.6666ZM36.18 26.78C36.4836 26.4656 36.6516 26.0446 36.6478 25.6076C36.644 25.1706 36.4688 24.7526 36.1597 24.4436C35.8507 24.1346 35.4327 23.9593 34.9957 23.9555C34.5587 23.9517 34.1377 24.1197 33.8234 24.4233L28.52 29.7266L26.1634 27.37C25.849 27.0664 25.428 26.8904 24.9909 26.8942C24.5539 26.898 24.1384 27.0809 23.8339 27.3854C23.5294 27.6899 23.3465 28.1054 23.3427 28.5424C23.3389 28.9794 23.5149 29.4004 23.8183 29.715L27.695 33.5916C27.9074 33.804 28.167 33.96 28.4496 34.0443C28.7322 34.1286 29.0317 34.1375 29.3179 34.0705C29.6041 34.0035 29.8685 33.8635 30.0886 33.6633C30.3087 33.4632 30.4776 33.2092 30.5817 32.9267L36.18 26.78Z"
                        fill={formData.role === 'custodian' ? '#F44C15' : '#1A1A1A'}
                      />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-xl font-normal leading-[120%] tracking-[-0.4px] text-[#484848] mb-1">
                        Custodian
                      </h3>
                      <p className="text-xs font-medium leading-[145%] text-[#A3A3A3]">
                        Review loan documents and issue legal attestations.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => handleInputChange('role', 'servicer')}
                    className={`flex items-start gap-[13px] p-4 rounded-[20px] border text-left transition-colors ${
                      formData.role === 'servicer' ? 'border-[#F44C15]' : 'border-[#E8E8E8]'
                    }`}
                  >
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path
                        d="M18.3334 3.33331C16.1232 3.33331 14.0036 4.21129 12.4408 5.77409C10.878 7.33689 10 9.45651 10 11.6666C10 13.8768 10.878 15.9964 12.4408 17.5592C14.0036 19.122 16.1232 20 18.3334 20C20.5435 20 22.6631 19.122 24.2259 17.5592C25.7887 15.9964 26.6667 13.8768 26.6667 11.6666C26.6667 9.45651 25.7887 7.33689 24.2259 5.77409C22.6631 4.21129 20.5435 3.33331 18.3334 3.33331ZM18.5384 24.25C18.6996 23.99 18.7862 23.6906 18.7885 23.3847C18.7909 23.0787 18.7091 22.778 18.5519 22.5155C18.3948 22.253 18.1684 22.0389 17.8976 21.8965C17.6268 21.7541 17.322 21.689 17.0167 21.7083C13.3334 21.9416 10.025 23.1383 7.59837 24.73C6.38504 25.5266 5.35171 26.4483 4.60504 27.4466C3.86671 28.4283 3.33337 29.5916 3.33337 30.8333C3.33337 33.3916 5.46337 34.7433 7.49171 35.4383C9.62504 36.17 12.475 36.5016 15.545 36.6166C15.8105 36.6268 16.0746 36.5733 16.3153 36.4607C16.5559 36.348 16.7661 36.1795 16.9284 35.9691C17.0907 35.7587 17.2003 35.5126 17.2481 35.2512C17.296 34.9899 17.2806 34.7209 17.2034 34.4666C16.8465 33.2886 16.6657 32.0642 16.6667 30.8333C16.6624 28.507 17.3109 26.2261 18.5384 24.25ZM22.5167 25.4633C23.9467 24.2016 25.99 23.1466 28.3334 23.1466C30.6767 23.1466 32.72 24.2016 34.15 25.4633C34.843 26.0674 35.4373 26.7759 35.9117 27.5633C36.3317 28.275 36.6667 29.13 36.6667 30C36.6667 30.8716 36.3334 31.725 35.9117 32.4366C35.4373 33.224 34.843 33.9326 34.15 34.5366C32.72 35.7983 30.6767 36.8533 28.3334 36.8533C25.99 36.8533 23.9467 35.7983 22.5167 34.5366C21.8238 33.9326 21.2295 33.224 20.7551 32.4366C20.3351 31.725 20 30.8716 20 30C20 29.13 20.3351 28.275 20.7551 27.5633C21.2295 26.7759 21.8238 26.0674 22.5167 25.4633ZM28.3334 31.6666C29.3217 31.6666 30.2666 31.2721 31.0084 30.5303C31.7502 29.7886 32.1667 28.8436 32.1667 27.8553C32.1667 26.8671 31.7502 25.922 31.0084 25.1803C30.2666 24.4385 29.3217 24.0239 28.3334 24.0239C27.3451 24.0239 26.4002 24.4385 25.6584 25.1803C24.9166 25.922 24.5 26.8671 24.5 27.8553C24.5 28.8436 24.9166 29.7886 25.6584 30.5303C26.4002 31.2721 27.3451 31.6666 28.3334 31.6666Z"
                        fill={formData.role === 'servicer' ? '#F44C15' : '#1A1A1A'}
                      />
                    </svg>
                    <div className="flex-1">
                      <h3 className="text-xl font-normal leading-[120%] tracking-[-0.4px] text-[#484848] mb-1">
                        Servicer
                      </h3>
                      <p className="text-xs font-medium leading-[145%] text-[#A3A3A3]">
                        Verify and upload borrower repayments and performance data.
                      </p>
                    </div>
                  </button>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!formData.role}
                  className="h-12 px-[18px] py-3 rounded-[50px] bg-[#F44C15] text-white text-sm font-medium leading-[145%] hover:bg-[#E03D0C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: OTP Verification */}
          {step === 3 && (
            <div className="flex flex-col items-center gap-8 md:gap-10 w-full">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl sm:text-2xl font-normal leading-[120%] tracking-[-0.48px] text-black">
                  Verify Your Email
                </h1>
                <p className="text-sm font-medium leading-[145%]">
                  <span className="text-[#A3A3A3]">We sent a 6-digit code to </span>
                  <span className="text-[#F44C15]">{formData.email || 'your@email.com'}</span>
                  <span className="text-[#A3A3A3]"> Enter it below to secure your account.</span>
                </p>
              </div>

              <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-1 sm:gap-2 w-full">
                  {[0, 1, 2, 3, 4, 5].map((index) => (
                    <input
                      key={index}
                      id={`code-${index}`}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={formData.verificationCode[index]}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      onKeyDown={(e) => handleCodeKeyDown(index, e)}
                      onPaste={handleCodePaste}
                      placeholder=""
                      className="flex-1 h-12 sm:h-14 text-center text-lg font-medium text-[#1A1A1A] rounded-[12px] border border-[#D1D1D1] focus:outline-none focus:border-[#F44C15] focus:border-2 transition-colors"
                    />
                  ))}
                </div>

                <button
                  onClick={handleContinue}
                  className="h-12 px-[18px] py-3 rounded-[50px] bg-[#F44C15] text-white text-sm font-medium leading-[145%] hover:bg-[#E03D0C] transition-colors"
                >
                  Continue
                </button>
              </div>

              <p className="text-sm font-medium leading-[145%] text-center">
                <span className="text-[#484848]">Didn&apos;t Get Code? </span>
                <button className="text-[#F44C15] underline">Resend Code</button>
              </p>
            </div>
          )}

          {/* Step 4: Company Information (only for Originator & Servicer) */}
          {step === 4 && (
            <div className="flex flex-col items-center gap-8 md:gap-10 w-full">
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-xl sm:text-2xl font-normal leading-[120%] tracking-[-0.48px] text-black">
                  Tell Us About Your Company
                </h1>
                <p className="text-sm font-medium leading-[145%] text-[#A3A3A3]">
                  We use this information to verify your eligibility<br />
                  to originate asset pools on StrataFi.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium leading-[145%] text-[#1A1A1A]">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium placeholder:text-[#A3A3A3] text-[#1A1A1A] focus:outline-none focus:border-[#F44C15]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium leading-[145%] text-[#1A1A1A]">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      placeholder="Registration Number"
                      value={formData.registrationNumber}
                      onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                      className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium placeholder:text-[#A3A3A3] text-[#1A1A1A] focus:outline-none focus:border-[#F44C15]"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium leading-[145%] text-[#1A1A1A]">
                      Country
                    </label>
                    <div className="relative">
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="h-[52px] w-full px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium text-[#A3A3A3] focus:outline-none focus:border-[#F44C15] appearance-none bg-white"
                      >
                        <option value="">Country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="CA">Canada</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.5893 13.0892C10.433 13.2454 10.2211 13.3332 10.0001 13.3332C9.77915 13.3332 9.56723 13.2454 9.41096 13.0892L4.69679 8.375C4.6172 8.29813 4.55371 8.20617 4.51004 8.1045C4.46636 8.00283 4.44338 7.89348 4.44241 7.78284C4.44145 7.67219 4.46254 7.56245 4.50444 7.46004C4.54634 7.35763 4.60822 7.26458 4.68646 7.18634C4.7647 7.10809 4.85775 7.04622 4.96016 7.00432C5.06257 6.96242 5.17231 6.94133 5.28296 6.94229C5.39361 6.94325 5.50296 6.96624 5.60463 7.00992C5.7063 7.05359 5.79825 7.11708 5.87512 7.19667L10.0001 11.3217L14.1251 7.19667C14.2823 7.04487 14.4928 6.96087 14.7113 6.96277C14.9298 6.96467 15.1388 7.05231 15.2933 7.20682C15.4478 7.36133 15.5355 7.57034 15.5374 7.78883C15.5393 8.00733 15.4553 8.21783 15.3035 8.375L10.5893 13.0892Z"
                          fill="#BABABA"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium leading-[145%] text-[#1A1A1A]">
                      Website
                    </label>
                    <input
                      type="text"
                      placeholder="Website (optional)"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium placeholder:text-[#A3A3A3] text-[#1A1A1A] focus:outline-none focus:border-[#F44C15]"
                    />
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  className="h-12 px-[18px] py-3 rounded-[50px] bg-[#F44C15] text-white text-sm font-medium leading-[145%] hover:bg-[#E03D0C] transition-colors"
                >
                  Continue
                </button>
              </div>

              <p className="text-sm font-normal leading-[145%] text-center text-[#484848]">
                By continuing, you agree to StrataFi&apos;s{' '}
                <a href="#" className="text-[#F44C15] underline font-normal">Terms</a>,{' '}
                <a href="#" className="text-[#F44C15] underline font-normal">Privacy Policy</a>, and{' '}
                <a href="#" className="text-[#F44C15] underline font-normal">Compliance Requirements</a>.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
