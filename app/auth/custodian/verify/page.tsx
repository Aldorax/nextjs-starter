'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CustodianVerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const email = "octavianmx@gmail.com"; // This would come from signup flow

  useEffect(() => {
    // Focus first input on mount
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (index: number, value: string) => {
    // Only allow single digit
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    const newCode = [...code];
    
    for (let i = 0; i < pastedData.length; i++) {
      if (i < 6) {
        newCode[i] = pastedData[i];
      }
    }
    
    setCode(newCode);
    
    // Focus last filled input or next empty
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleContinue = () => {
    // Verify code and navigate
    console.log('Verification code:', code.join(''));
    router.push('/pool');
  };

  const handleResendCode = () => {
    setCode(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F9F9F9]">
      <div className="w-full max-w-[528px] mx-4 flex flex-col items-center gap-[60px] rounded-[30px] border border-[#E8E8E8] bg-white p-8 md:p-12">
        <div className="flex flex-col items-center gap-10 w-full">
          {/* Logo */}
          <div className="flex items-center gap-[7.345px]">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/4766cf7879611149ec901b558607cf3c359a8bdf?width=132" 
              alt="StrataFi Logo" 
              className="w-[66.13px] h-[38.737px]"
            />
            <div className="text-[26px] font-normal tracking-[-1.587px] text-black" style={{ fontFamily: 'Stack Sans Text, -apple-system, Roboto, Helvetica, sans-serif' }}>
              StrataFi
            </div>
          </div>

          {/* Verification Content */}
          <div className="flex flex-col items-center gap-10 w-full">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-normal leading-[120%] tracking-[-0.48px] text-center text-black" style={{ fontFamily: 'Stack Sans Text, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Verify Your Email
              </h1>
              <p className="text-sm font-medium leading-[145%] text-center">
                <span className="text-[#A3A3A3]">We sent a 6-digit code to </span>
                <span className="text-[#F44C15]">{email}</span>
                <span className="text-[#A3A3A3]">. Enter it below to secure your account.</span>
              </p>
            </div>

            {/* Code Input */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex items-center gap-2 w-full">
                {code.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={`flex-1 h-16 flex items-center justify-center text-center rounded-[15px] border text-sm font-medium leading-[145%] focus:outline-none ${
                      digit 
                        ? 'border-[#D1D1D1] text-[#1A1A1A]' 
                        : 'border-[#D1D1D1] text-[#D1D1D1]'
                    } ${
                      inputRefs.current[index] === document.activeElement 
                        ? 'border-[#F44C15]' 
                        : ''
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleContinue}
                disabled={code.some(d => !d)}
                className="h-12 px-[18px] py-3 flex items-center justify-center gap-2 rounded-full bg-[#F44C15] text-white text-sm font-medium leading-[145%] hover:bg-[#E63D0C] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Resend Link */}
        <button
          onClick={handleResendCode}
          className="text-sm font-medium leading-[145%] text-center"
        >
          <span className="text-[#484848]">Didn't Get Code? </span>
          <span className="text-[#F44C15] underline">Resend Code</span>
        </button>
      </div>
    </div>
  );
}
