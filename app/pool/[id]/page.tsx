'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PoolDetailPage({ params }: { params: { id: string } }) {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-[272px] border-r border-[#F5F5F5] flex flex-col">
        <div className="h-20 flex items-center justify-center border-b border-[#F5F5F5]">
          <div className="flex items-center gap-[7px]">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/4766cf7879611149ec901b558607cf3c359a8bdf?width=132"
              alt="StrataFi Logo"
              width={66}
              height={39}
            />
            <span className="text-[26px] font-normal tracking-[-1.587px] text-black">
              StrataFi
            </span>
          </div>
        </div>

        <nav className="flex-1 flex flex-col justify-between py-16 px-6">
          <div className="flex flex-col gap-1">
            <Link
              href="/"
              className="flex items-center gap-[14px] py-3 px-4 rounded-lg transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2ZM11 4.062C8.98271 4.31868 7.13885 5.33387 5.84319 6.90122C4.54752 8.46857 3.89728 10.4705 4.02462 12.5C4.15196 14.5296 5.04733 16.4345 6.52874 17.8276C8.01016 19.2207 9.96645 19.9975 12 20C13.9486 20 15.8302 19.2888 17.2917 18C18.7533 16.7112 19.6942 14.9333 19.938 13H12C11.7348 13 11.4804 12.8946 11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V4.062ZM13 4.062V11H19.938C19.7154 9.23761 18.9129 7.59934 17.6568 6.34324C16.4007 5.08713 14.7624 4.28459 13 4.062Z"
                  fill="#A3A3A3"
                />
              </svg>
              <span className="text-sm font-medium text-[#BABABA]">Dashboard</span>
            </Link>

            <div className="flex items-center gap-[14px] py-3 px-4 border-l-[3px] border-[#F44C15]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3C14.314 3 16.456 3.408 18.058 4.109C18.857 4.459 19.567 4.901 20.09 5.443C20.575 5.943 20.935 6.571 20.992 7.299L21 7.5V17.5C21 18.314 20.619 19.01 20.09 19.557C19.567 20.099 18.857 20.541 18.058 20.891C16.456 21.591 14.314 22 12 22C9.686 22 7.544 21.592 5.942 20.891C5.143 20.541 4.433 20.099 3.91 19.557C3.425 19.057 3.065 18.429 3.008 17.701L3 17.5V7.5C3 6.686 3.381 5.99 3.91 5.443C4.433 4.901 5.143 4.459 5.942 4.109C7.544 3.409 9.686 3 12 3ZM19 15.407C18.6969 15.5886 18.3822 15.7503 18.058 15.891C16.456 16.591 14.314 17 12 17C9.686 17 7.544 16.592 5.942 15.891C5.6178 15.7503 5.30314 15.5887 5 15.407V17.5C5 17.652 5.066 17.876 5.348 18.167C5.634 18.463 6.096 18.775 6.744 19.059C8.038 19.625 9.895 20 12 20C14.105 20 15.962 19.625 17.256 19.059C17.904 18.775 18.366 18.463 18.652 18.167C18.934 17.877 19 17.652 19 17.5V15.407ZM19 10.407C18.6969 10.5886 18.3822 10.7503 18.058 10.891C16.456 11.591 14.314 12 12 12C9.686 12 7.544 11.592 5.942 10.891C5.6178 10.7503 5.30314 10.5887 5 10.407V12.5C5 12.652 5.066 12.876 5.348 13.167C5.634 13.463 6.096 13.775 6.744 14.059C8.038 14.625 9.895 15 12 15C14.105 15 15.962 14.625 17.256 14.059C17.904 13.775 18.366 13.463 18.652 13.167C18.934 12.877 19 12.652 19 12.5V10.407ZM12 5C9.895 5 8.038 5.375 6.744 5.941C6.096 6.225 5.634 6.537 5.348 6.833C5.066 7.123 5 7.348 5 7.5C5 7.652 5.066 7.876 5.348 8.167C5.634 8.463 6.096 8.775 6.744 9.059C8.038 9.625 9.895 10 12 10C14.105 10 15.962 9.625 17.256 9.059C17.904 8.775 18.366 8.463 18.652 8.167C18.934 7.877 19 7.652 19 7.5C19 7.348 18.934 7.124 18.652 6.833C18.366 6.537 17.904 6.225 17.256 5.941C15.962 5.375 14.105 5 12 5Z"
                  fill="#F44C15"
                />
              </svg>
              <span className="text-sm font-medium text-[#1A1A1A]">My Pool</span>
            </div>

            <Link href="/compliance" className="flex items-center gap-[14px] py-3 px-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2H18C18.5304 2 19.0391 2.21071 19.4142 2.58579C19.7893 2.96086 20 3.46957 20 4V10H18V4H6V20H11V22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4Z"
                  fill="#A3A3A3"
                />
              </svg>
              <span className="text-sm font-medium text-[#BABABA]">Compliance Requests</span>
            </Link>

            <button className="flex items-center gap-[14px] py-3 px-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.00032 12.0003C3.99927 10.375 4.56381 8.80003 5.5971 7.54549C6.63038 6.29095 8.06801 5.43506 9.66338 5.12465C11.2587 4.81423 12.9124 5.06863 14.3407 5.84421C15.769 6.61979 16.8829 7.86821 17.4913 9.37531C17.592 9.61941 17.7851 9.81378 18.0286 9.91602C18.272 10.0183 18.546 10.0201 18.7908 9.92104C19.0356 9.82203 19.2312 9.63022 19.3351 9.38747C19.439 9.14473 19.4427 8.87075 19.3453 8.62531C18.8828 7.47199 18.1865 6.42691 17.3002 5.55586C16.414 4.6848 15.3571 4.00664 14.196 3.56405C13.0348 3.12146 11.7946 2.92403 10.5535 2.98419C9.31231 3.04435 8.09703 3.36079 6.98415 3.9136C5.87126 4.46641 4.88486 5.24361 4.08704 6.19629C3.28922 7.14897 2.69725 8.25649 2.34839 9.44914C1.99954 10.6418 1.90136 11.8937 2.06002 13.1262C2.21869 14.3586 2.63077 15.5449 3.27032 16.6103L2.49032 19.2593C2.43905 19.4331 2.43559 19.6176 2.4803 19.7932C2.52501 19.9688 2.61623 20.1291 2.74438 20.2573C2.87252 20.3854 3.03284 20.4766 3.20846 20.5213C3.38408 20.566 3.56851 20.5626 3.74232 20.5113L6.39232 19.7313C7.45813 20.3688 8.64497 20.7775 9.87732 20.9313C10.1406 20.9642 10.4061 20.8912 10.6154 20.7283C10.8248 20.5654 10.9609 20.326 10.9938 20.0628C11.0267 19.7996 10.9537 19.5341 10.7908 19.3247C10.6279 19.1153 10.3886 18.9792 10.1253 18.9463C9.10011 18.8187 8.11624 18.4641 7.24532 17.9083C7.07345 17.7983 6.88001 17.7264 6.67802 17.6974C6.47604 17.6685 6.27019 17.6831 6.07432 17.7403L4.92232 18.0793L5.26132 16.9273C5.38132 16.5193 5.30832 16.0933 5.09332 15.7573C4.37733 14.6352 3.99801 13.3314 4.00032 12.0003Z"
                  fill="#A3A3A3"
                />
              </svg>
              <span className="text-sm font-medium text-[#BABABA]">Messages</span>
            </button>
          </div>

          <button className="flex items-center gap-[14px] py-3 px-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.035 2.8092C14.405 2.5432 14.925 2.4192 15.436 2.6062C16.5224 3.00418 17.5314 3.58786 18.418 4.3312C18.835 4.6812 18.988 5.1922 18.942 5.6442C18.867 6.3972 18.999 7.1242 19.362 7.7502C19.682 8.3072 20.164 8.7472 20.752 9.0572L20.977 9.1672C21.391 9.3542 21.759 9.7432 21.852 10.2802C22.0495 11.4184 22.0495 12.582 21.852 13.7202C21.769 14.2042 21.462 14.5672 21.099 14.7712L20.977 14.8342C20.287 15.1442 19.723 15.6242 19.361 16.2502C18.999 16.8772 18.867 17.6032 18.942 18.3562C18.987 18.8082 18.835 19.3202 18.418 19.6692C17.5314 20.4125 16.5224 20.9962 15.436 21.3942C15.2038 21.4773 14.9548 21.5022 14.7108 21.4668C14.4667 21.4314 14.235 21.3368 14.036 21.1912C13.42 20.7502 12.723 20.5002 12 20.5002C11.277 20.5002 10.58 20.7492 9.965 21.1912C9.76585 21.337 9.534 21.4317 9.28976 21.4671C9.04552 21.5024 8.79633 21.4774 8.564 21.3942C7.4776 20.9962 6.4686 20.4126 5.582 19.6692C5.39422 19.5097 5.24831 19.3066 5.15698 19.0778C5.06564 18.8489 5.03167 18.6012 5.058 18.3562C5.133 17.6032 5 16.8762 4.638 16.2502C4.3083 15.6913 3.82613 15.2379 3.248 14.9432L3.023 14.8332C2.79735 14.7332 2.59961 14.5795 2.44708 14.3855C2.29455 14.1915 2.19186 13.9631 2.148 13.7202C1.95044 12.582 1.95044 11.4184 2.148 10.2802C2.231 9.7962 2.538 9.4332 2.901 9.2292L3.023 9.1672C3.713 8.8562 4.277 8.3772 4.639 7.7502C5 7.1242 5.133 6.3972 5.058 5.6442C5.03167 5.39921 5.06564 5.15149 5.15698 4.92264C5.24831 4.69379 5.39422 4.49074 5.582 4.3312C6.46861 3.58786 7.47761 3.00418 8.564 2.6062C8.79621 2.52323 9.04519 2.49836 9.28923 2.53374C9.53326 2.56913 9.76492 2.6637 9.964 2.8092C10.579 3.2512 11.276 3.5002 12 3.5002C12.724 3.5002 13.42 3.2512 14.035 2.8092Z"
                fill="#A3A3A3"
              />
            </svg>
            <span className="text-sm font-medium text-[#A3A3A3]">Settings</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-[#F5F5F5] flex items-center justify-end px-8 gap-3">
          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 9C5 7.14348 5.73750 5.36301 7.05025 4.05025C8.36301 2.7375 10.1435 2 12 2C13.8565 2 15.637 2.7375 16.9497 4.05025C18.2625 5.36301 19 7.14348 19 9V12.764L20.822 16.408C20.9058 16.5757 20.9454 16.7621 20.937 16.9494C20.9286 17.1368 20.8724 17.3188 20.7738 17.4783C20.6752 17.6379 20.5375 17.7695 20.3737 17.8608C20.2099 17.9521 20.0255 18 19.838 18H15.874C15.6515 18.8582 15.1504 19.6183 14.4492 20.1609C13.748 20.7035 12.8866 20.9979 12 20.9979C11.1134 20.9979 10.2519 20.7035 9.55076 20.1609C8.8496 19.6183 8.34846 18.8582 8.12602 18H4.162C3.97448 18 3.79006 17.9521 3.62627 17.8608C3.46247 17.7695 3.32474 17.6379 3.22615 17.4783C3.12755 17.3188 3.07138 17.1368 3.06295 16.9494C3.05452 16.7621 3.09413 16.5757 3.178 16.408L5 12.764V9Z"
                fill="#484848"
              />
            </svg>
          </button>

          <button className="p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 19C12.2449 19 12.4813 19.09 12.6644 19.2527C12.8474 19.4155 12.9643 19.6397 12.993 19.883L13 20V21C12.9997 21.2549 12.9021 21.5 12.7272 21.6854C12.5522 21.8707 12.313 21.9822 12.0586 21.9972C11.8042 22.0121 11.5536 21.9293 11.3582 21.7657C11.1627 21.6021 11.0371 21.3701 11.007 21.117L11 21V20C11 19.7348 11.1054 19.4804 11.2929 19.2929C11.4804 19.1054 11.7348 19 12 19Z"
                fill="#484848"
              />
            </svg>
          </button>

          <div className="flex items-center gap-2 h-10 px-3 border border-[#E8E8E8] rounded-full">
            <Image
              src="https://api.builder.io/api/v1/image/assets/TEMP/8b11b2e93fe3d52475e47db57126a19215756726?width=48"
              alt=""
              width={24}
              height={24}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-[#484848]">Finance.loan@...</span>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-10 overflow-auto">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-8">
            <Link
              href="/pool"
              className="inline-flex items-center gap-1 px-4 py-2 border border-[#E8E8E8] rounded-full text-sm font-medium text-[#484848] hover:bg-[#F9F9F9] transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3.03 9.41098C2.87377 9.56726 2.78601 9.77918 2.78601 10.0002C2.78601 10.2211 2.87377 10.433 3.03 10.5893L7.74417 15.3035C7.90133 15.4553 8.11184 15.5393 8.33033 15.5374C8.54883 15.5355 8.75784 15.4478 8.91235 15.2933C9.06685 15.1388 9.1545 14.9298 9.15639 14.7113C9.15829 14.4928 9.0743 14.2823 8.9225 14.1252L5.63083 10.8335H16.6667C16.8877 10.8335 17.0996 10.7457 17.2559 10.5894C17.4122 10.4331 17.5 10.2212 17.5 10.0002C17.5 9.77914 17.4122 9.56718 17.2559 9.41089C17.0996 9.25461 16.8877 9.16682 16.6667 9.16682H5.63083L8.9225 5.87515C9.0743 5.71798 9.15829 5.50748 9.15639 5.28898C9.1545 5.07049 9.06685 4.86147 8.91235 4.70697C8.75784 4.55246 8.54883 4.46482 8.33033 4.46292C8.11184 4.46102 7.90133 4.54502 7.74417 4.69682L3.03 9.41098Z"
                  fill="#484848"
                />
              </svg>
              Back
            </Link>

            <button className="px-4 py-2 border border-[#E8E8E8] rounded-full text-sm font-medium text-[#484848] hover:bg-[#F9F9F9] transition-colors">
              Save Draft
            </button>
          </div>

          {/* Pool Header */}
          <div className="p-8 border border-[#F5F5F5] rounded-[30px] mb-5">
            <div className="flex items-center gap-2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-gray-200"></div>
              <div>
                <h1 className="text-[32px] font-normal leading-[120%] tracking-[-0.64px] text-black mb-2">
                  SME Growth Fund 2025
                </h1>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FFE8B0] bg-[#FFF8E6]">
                  <span className="text-[12px] font-semibold leading-[120%] tracking-[1.44px] uppercase text-[#6B4C00]">
                    PENDING
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="flex justify-between items-center p-5 mb-5 border border-[#BAE1FF] bg-[#E9F5FF] rounded-[20px]">
            <span className="text-sm font-medium text-black">
              We need borrower financial statements for Q2
            </span>
            <button className="inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#484848] hover:underline">
              Submit
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9.16667 16.6667C9.16667 16.8877 9.25446 17.0996 9.41074 17.2559C9.56702 17.4122 9.77899 17.5 10 17.5C10.221 17.5 10.433 17.4122 10.5893 17.2559C10.7455 17.0996 10.8333 16.8877 10.8333 16.6667V10.8333H16.6667C16.8877 10.8333 17.0996 10.7455 17.2559 10.5893C17.4122 10.433 17.5 10.221 17.5 10C17.5 9.77899 17.4122 9.56702 17.2559 9.41074C17.0996 9.25446 16.8877 9.16667 16.6667 9.16667H10.8333V3.33333C10.8333 3.11232 10.7455 2.90036 10.5893 2.74408C10.433 2.5878 10.221 2.5 10 2.5C9.77899 2.5 9.56702 2.5878 9.41074 2.74408C9.25446 2.90036 9.16667 3.11232 9.16667 3.33333V9.16667H3.33333C3.11232 9.16667 2.90036 9.25446 2.74408 9.41074C2.5878 9.56702 2.5 9.77899 2.5 10C2.5 10.221 2.5878 10.433 2.74408 10.5893C2.90036 10.7455 3.11232 10.8333 3.33333 10.8333H9.16667V16.6667Z"
                  fill="#484848"
                />
              </svg>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'overview'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('documents')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'documents'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Documents
              </button>
              <button
                onClick={() => setActiveTab('performance')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeTab === 'performance'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Performance
              </button>
            </div>

            <button className="px-4 py-2 border border-[#E8E8E8] rounded-full">
              <div className="w-5 h-5"></div>
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'overview' && (
            <div className="p-8 border border-[#F5F5F5] rounded-[30px]">
              <div className="max-w-[366px] space-y-[18px]">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#767676]">Date Uploaded</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">12th October, 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#767676]">Asset Class</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">SME Loans</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#767676]">Total Principal</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">$5,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#767676]">Expected Yield</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">8.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#767676]">Maturity</span>
                  <span className="text-sm font-medium text-[#1A1A1A]">12 months</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div className="p-8 border border-[#F5F5F5] rounded-[30px]">
              <div className="space-y-4 max-w-[379px]">
                {[
                  'Individual or combined loan agreements.',
                  'Profit/loss statements or tax returns.',
                  'Terms and covenants applicable to loans.',
                  'Agreement outlining servicing...',
                  'Detailed payment schedule.',
                  'Detailed payment schedule.',
                ].map((doc, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 border border-[#E8E8E8] rounded-[10px]"
                  >
                    <div className="flex items-center gap-2.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.58346 3.33425C7.37596 3.33425 5.61596 5.31758 5.85596 7.50092C5.87819 7.70309 5.82646 7.90647 5.71034 8.07345C5.59422 8.24044 5.42156 8.35972 5.22429 8.40925C4.63507 8.56024 4.12105 8.92074 3.77838 9.4233C3.43572 9.92585 3.28789 10.536 3.36256 11.1397C3.43722 11.7434 3.72927 12.2991 4.18405 12.7031C4.63884 13.107 5.22521 13.3314 5.83346 13.3342H6.66679C6.88781 13.3342 7.09977 13.422 7.25605 13.5783C7.41233 13.7346 7.50013 13.9466 7.50013 14.1676C7.50013 14.3886 7.41233 14.6006 7.25605 14.7568C7.09977 14.9131 6.88781 15.0009 6.66679 15.0009H5.83346C4.87572 15.0015 3.947 14.6722 3.20362 14.0683C2.46024 13.4645 1.94758 12.623 1.75193 11.6854C1.55629 10.7479 1.68959 9.77155 2.12942 8.92078C2.56925 8.07 3.28874 7.39672 4.16679 7.01425C4.18185 5.75086 4.63808 4.53248 5.45654 3.56994C6.27501 2.60739 7.40421 1.96125 8.64875 1.74331C9.89329 1.52537 11.1749 1.74935 12.2717 2.3765C13.3686 3.00364 14.2117 3.99449 14.6551 5.17758C15.8212 5.49916 16.8312 6.23243 17.4982 7.24158C18.1651 8.25073 18.4437 9.46738 18.2824 10.6662C18.1211 11.865 17.5309 12.9647 16.6209 13.7617C15.711 14.5587 14.5431 14.999 13.3335 15.0009C13.1124 15.0009 12.9005 14.9131 12.7442 14.7568C12.5879 14.6006 12.5001 14.3886 12.5001 14.1676C12.5001 13.9466 12.5879 13.7346 12.7442 13.5783C12.9005 13.422 13.1124 13.3342 13.3335 13.3342C14.171 13.3355 14.9783 13.0215 15.5948 12.4545C16.2113 11.8876 16.5918 11.1094 16.6606 10.2747C16.7294 9.44003 16.4814 8.61003 15.9661 7.94983C15.4507 7.28963 14.7057 6.84763 13.8793 6.71175C13.7202 6.68544 13.5719 6.61396 13.4523 6.50581C13.3326 6.39767 13.2465 6.25742 13.2043 6.10175C12.9882 5.30696 12.5166 4.60536 11.8623 4.10521C11.2079 3.60505 10.4071 3.33413 9.58346 3.33425Z"
                          fill="#1A1A1A"
                        />
                      </svg>
                      <div>
                        <div className="text-sm font-medium text-[#1A1A1A]">{doc}</div>
                        <div className="flex gap-1 text-sm font-medium text-[#A3A3A3]">
                          <span>12mb</span>
                          <span>Uploaded</span>
                        </div>
                      </div>
                    </div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14.28 2C14.6998 2.00011 15.1088 2.13229 15.4493 2.37781C15.7898 2.62333 16.0444 2.96975 16.177 3.368L16.72 5H20C20.2652 5 20.5196 5.10536 20.7071 5.29289C20.8946 5.48043 21 5.73478 21 6C21 6.26522 20.8946 6.51957 20.7071 6.70711C20.5196 6.89464 20.2652 7 20 7L19.997 7.071L19.13 19.214C19.0759 19.9706 18.7372 20.6786 18.182 21.1956C17.6269 21.7125 16.8965 21.9999 16.138 22H7.862C7.10346 21.9999 6.37311 21.7125 5.81797 21.1956C5.26283 20.6786 4.92411 19.9706 4.87 19.214L4.003 7.07C4.00119 7.04671 4.00019 7.02336 4 7C3.73478 7 3.48043 6.89464 3.29289 6.70711C3.10536 6.51957 3 6.26522 3 6C3 5.73478 3.10536 5.48043 3.29289 5.29289C3.48043 5.10536 3.73478 5 4 5H7.28L7.823 3.368C7.9557 2.96959 8.21043 2.62305 8.5511 2.37752C8.89176 2.13198 9.30107 1.9999 9.721 2H14.28Z"
                        fill="#767676"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div className="grid grid-cols-[1fr_427px] gap-8">
              {/* Investors Timeline */}
              <div className="p-8 border border-[#F5F5F5] rounded-[30px]">
                <div className="mb-6">
                  <p className="text-base font-normal text-[#767676] mb-4">Investors Timeline</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[28px] font-normal leading-[120%] tracking-[-0.56px] text-[#333]">
                      $850k
                    </span>
                    <div className="flex items-center gap-1 px-3 py-2 border border-[#F5F5F5] rounded-full">
                      <span className="text-sm font-medium text-[#484848]">7days ago</span>
                      <span className="text-sm font-medium text-[#FF3B30]">5.5%</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M14.1667 12.9882V8.33324C14.1667 8.11223 14.2545 7.90026 14.4108 7.74398C14.5671 7.5877 14.779 7.49991 15 7.49991C15.221 7.49991 15.433 7.5877 15.5893 7.74398C15.7456 7.90026 15.8334 8.11223 15.8334 8.33324V14.9999C15.8334 15.2209 15.7456 15.4329 15.5893 15.5892C15.433 15.7454 15.221 15.8332 15 15.8332H8.33336C8.11235 15.8332 7.90039 15.7454 7.74411 15.5892C7.58783 15.4329 7.50003 15.2209 7.50003 14.9999C7.50003 14.7789 7.58783 14.5669 7.74411 14.4107C7.90039 14.2544 8.11235 14.1666 8.33336 14.1666H12.9884L4.6967 5.87491C4.5449 5.71774 4.4609 5.50724 4.4628 5.28874C4.4647 5.07024 4.55234 4.86123 4.70685 4.70672C4.86135 4.55222 5.07036 4.46458 5.28886 4.46268C5.50736 4.46078 5.71786 4.54477 5.87503 4.69657L14.1667 12.9882Z"
                          fill="#FF3B30"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Line Chart Placeholder */}
                <div className="h-64 relative">
                  <svg className="w-full h-full" viewBox="0 0 600 256" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#F44C15" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#F44C15" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 180 L80 150 L160 120 L240 160 L320 100 L400 140 L480 80 L560 60 L600 40 L600 256 L0 256 Z"
                      fill="url(#gradient)"
                    />
                    <path
                      d="M0 180 L80 150 L160 120 L240 160 L320 100 L400 140 L480 80 L560 60 L600 40"
                      fill="none"
                      stroke="#F44C15"
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-12 text-sm font-medium text-[#BABABA]">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thur</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                </div>
              </div>

              {/* Tranches Demand */}
              <div className="p-8 border border-[#F5F5F5] rounded-[30px]">
                <div className="mb-6">
                  <p className="text-base font-normal text-[#767676] mb-4">Tranches Demand</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[28px] font-normal leading-[120%] tracking-[-0.56px] text-[#333]">
                      $1.23M
                    </span>
                    <div className="flex items-center gap-1 px-3 py-2 border border-[#F5F5F5] rounded-full">
                      <span className="text-sm font-medium text-[#484848]">This Month</span>
                      <span className="text-sm font-medium text-[#00D743]">5.5%</span>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M15 4.16675C15.221 4.16675 15.433 4.25455 15.5893 4.41083C15.7456 4.56711 15.8334 4.77907 15.8334 5.00008V11.6667C15.8334 11.8878 15.7456 12.0997 15.5893 12.256C15.433 12.4123 15.221 12.5001 15 12.5001C14.779 12.5001 14.5671 12.4123 14.4108 12.256C14.2545 12.0997 14.1667 11.8878 14.1667 11.6667V7.01175L5.87503 15.3034C5.71786 15.4552 5.50736 15.5392 5.28886 15.5373C5.07036 15.5354 4.86135 15.4478 4.70685 15.2933C4.55234 15.1388 4.4647 14.9297 4.4628 14.7112C4.4609 14.4928 4.5449 14.2823 4.6967 14.1251L12.9884 5.83341H8.33336C8.11235 5.83341 7.90039 5.74562 7.74411 5.58934C7.58783 5.43306 7.50003 5.2211 7.50003 5.00008C7.50003 4.77907 7.58783 4.56711 7.74411 4.41083C7.90039 4.25455 8.11235 4.16675 8.33336 4.16675H15Z"
                          fill="#00D743"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Pie Chart Placeholder */}
                <div className="flex flex-col items-center gap-10">
                  <div className="relative w-60 h-60">
                    <svg width="240" height="240" viewBox="0 0 240 240">
                      <circle cx="120" cy="120" r="100" fill="#FEE6D6" />
                      <path
                        d="M120 20 A 100 100 0 0 1 205 120 L 120 120 Z"
                        fill="#F44C15"
                        transform="rotate(-90 120 120)"
                      />
                      <path
                        d="M205 120 A 100 100 0 0 1 185 180 L 120 120 Z"
                        fill="#FAA577"
                        transform="rotate(-90 120 120)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-normal tracking-[-0.04em] text-[#333]">
                        64.3%
                      </span>
                      <span className="text-lg font-medium text-[#A3A3A3]">Senior</span>
                    </div>
                  </div>

                  {/* Legend */}
                  <div className="flex gap-4 self-stretch">
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-4 h-4 rounded-full bg-[#F44C15]"></div>
                      <span className="text-xs font-medium text-[#A3A3A3]">Senior</span>
                      <span className="text-xs font-semibold text-[#1A1A1A] ml-auto">64.3%</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-4 h-4 rounded-full bg-[#FAA577]"></div>
                      <span className="text-xs font-medium text-[#A3A3A3]">Mezz</span>
                      <span className="text-xs font-semibold text-[#1A1A1A] ml-auto">7.14%</span>
                    </div>
                    <div className="flex items-center gap-2 flex-1">
                      <div className="w-4 h-4 rounded-full bg-[#FEE6D6]"></div>
                      <span className="text-xs font-medium text-[#A3A3A3]">Junior</span>
                      <span className="text-xs font-semibold text-[#1A1A1A] ml-auto">7.14%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
