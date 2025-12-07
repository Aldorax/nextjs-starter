'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CustodianLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    country: '',
    website: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    // Navigate to verification page
    router.push('/auth/custodian/verify');
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

          {/* Form Content */}
          <div className="flex flex-col items-center gap-10 w-full">
            {/* Header */}
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-2xl font-normal leading-[120%] tracking-[-0.48px] text-center text-black" style={{ fontFamily: 'Stack Sans Text, -apple-system, Roboto, Helvetica, sans-serif' }}>
                Tell Us About Your Company
              </h1>
              <p className="text-sm font-medium leading-[145%] text-center text-[#A3A3A3]">
                We use this information to verify your eligibility 
                to originate asset pools on StrataFi.
              </p>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4 w-full">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium leading-[145%] text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#F44C15]"
                />
                <input
                  type="text"
                  placeholder="Registration Number"
                  value={formData.registrationNumber}
                  onChange={(e) => handleInputChange('registrationNumber', e.target.value)}
                  className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium leading-[145%] text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#F44C15]"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium leading-[145%] text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#F44C15]"
                />
                <input
                  type="url"
                  placeholder="Website (optional)"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  className="h-[52px] px-4 rounded-[15px] border border-[#E8E8E8] text-sm font-medium leading-[145%] text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#F44C15]"
                />
              </div>

              <button
                onClick={handleContinue}
                className="h-12 px-[18px] py-3 flex items-center justify-center gap-2 rounded-full bg-[#F44C15] text-white text-sm font-medium leading-[145%] hover:bg-[#E63D0C] transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-sm font-medium leading-[145%] text-center">
          <span className="text-[#484848]">Already have an account? </span>
          <Link href="/auth/custodian/signup" className="text-[#F44C15] underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
