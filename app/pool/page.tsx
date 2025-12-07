'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MyPoolPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const pools = [
    {
      id: 1,
      name: 'Corporate Real Estate I',
      status: 'active',
      principal: '$3.5M',
      riskScore: '9.5',
      demandPercent: '76%',
    },
    {
      id: 2,
      name: 'SMB Lending Portfolio A',
      status: 'pending',
      principal: '$3.5M',
      riskScore: '9.5',
      demandPercent: '46%',
    },
    {
      id: 3,
      name: 'Private Firm Opportunity',
      status: 'closed',
      principal: '$3.5M',
      riskScore: '9.5',
      demandPercent: '46%',
    },
    {
      id: 4,
      name: 'Corporate Real Estate I',
      status: 'active',
      principal: '$3.5M',
      riskScore: '9.5',
      demandPercent: '46%',
    },
    {
      id: 5,
      name: 'Corporate Real Estate I',
      status: 'active',
      principal: '$3.5M',
      riskScore: '9.5',
      demandPercent: '46%',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      active: 'border-[#B0F3C5] bg-[#E6FBEC] text-[#005A1C]',
      pending: 'border-[#FFE8B0] bg-[#FFF8E6] text-[#6B4C00]',
      closed: 'border-[#FFC2BF] bg-[#FFEBEA] text-[#420C08]',
    };

    const labels = {
      active: 'ACTIVE',
      pending: 'PENDING',
      closed: 'CLOSED',
    };

    return (
      <div
        className={`inline-flex items-center justify-center gap-2.5 px-3 py-1.5 rounded-full border ${
          styles[status as keyof typeof styles]
        }`}
      >
        <span className="text-[10px] font-semibold leading-[120%] tracking-[1.6px] uppercase">
          {labels[status as keyof typeof labels]}
        </span>
      </div>
    );
  };

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
            <div>
              <h1 className="text-[32px] font-medium leading-[120%] tracking-[-0.64px] text-[#1A1A1A] mb-2">
                Your Pools
              </h1>
              <p className="text-base font-medium text-[#A3A3A3]">
                All your uploaded pools are here
              </p>
            </div>

            <Link href="/pool/new" className="flex items-center gap-1 px-5 py-3 bg-[#F44C15] text-white rounded-full text-sm font-medium hover:bg-[#E03D0C] transition-colors">
              Create New Pool
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M9.16667 16.6667C9.16667 16.8877 9.25446 17.0996 9.41074 17.2559C9.56702 17.4122 9.77899 17.5 10 17.5C10.221 17.5 10.433 17.4122 10.5893 17.2559C10.7455 17.0996 10.8333 16.8877 10.8333 16.6667V10.8333H16.6667C16.8877 10.8333 17.0996 10.7455 17.2559 10.5893C17.4122 10.433 17.5 10.221 17.5 10C17.5 9.77899 17.4122 9.56702 17.2559 9.41074C17.0996 9.25446 16.8877 9.16667 16.6667 9.16667H10.8333V3.33333C10.8333 3.11232 10.7455 2.90036 10.5893 2.74408C10.433 2.5878 10.221 2.5 10 2.5C9.77899 2.5 9.56702 2.5878 9.41074 2.74408C9.25446 2.90036 9.16667 3.11232 9.16667 3.33333V9.16667H3.33333C3.11232 9.16667 2.90036 9.25446 2.74408 9.41074C2.5878 9.56702 2.5 9.77899 2.5 10C2.5 10.221 2.5878 10.433 2.74408 10.5893C2.90036 10.7455 3.11232 10.8333 3.33333 10.8333H9.16667V16.6667Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>

          {/* Filters */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'all'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveFilter('approved')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'approved'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Approved
              </button>
              <button
                onClick={() => setActiveFilter('pending')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'pending'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveFilter('closed')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'closed'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Closed
              </button>
              <button
                onClick={() => setActiveFilter('draft')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === 'draft'
                    ? 'border border-[#FEE6D6] bg-[#FFFCFA] text-[#F44C15]'
                    : 'text-[#484848] hover:bg-[#F9F9F9]'
                }`}
              >
                Draft
              </button>
            </div>

            <button className="px-4 py-2 border border-[#E8E8E8] rounded-full">
              <div className="w-5 h-5"></div>
            </button>
          </div>

          {/* Table */}
          <div className="border border-[#F5F5F5] rounded-[30px] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#F5F5F5]">
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-medium text-[#A3A3A3]">Pool Name</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-medium text-[#A3A3A3]">Status</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-medium text-[#A3A3A3]">
                          Total Principal
                        </span>
                        <div className="w-5 h-5"></div>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-medium text-[#A3A3A3]">Oracle Risk Score</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-medium text-[#A3A3A3]">Tranche Demand %</span>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <span className="text-xs font-medium text-[#A3A3A3]">Order ID</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pools.map((pool, index) => (
                    <tr key={pool.id} className="border-b border-[#F5F5F5] last:border-0">
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-[#333]">{pool.name}</span>
                      </td>
                      <td className="px-6 py-4">{getStatusBadge(pool.status)}</td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-[#333]">{pool.principal}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-[#333]">{pool.riskScore}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm font-medium text-[#333]">{pool.demandPercent}</span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/pool/${pool.id}`}
                          className="inline-flex items-center gap-1 px-4 py-2 border border-[#E8E8E8] rounded-full text-sm font-medium text-[#484848] hover:bg-[#F9F9F9] transition-colors"
                        >
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.33329 10.0007C3.33579 9.98734 3.34746 9.914 3.41246 9.76984C3.48413 9.61067 3.59996 9.41067 3.76579 9.17984C4.09746 8.719 4.59329 8.1865 5.21996 7.6815C6.48079 6.66317 8.17663 5.83317 9.99996 5.83317C11.8233 5.83317 13.5191 6.66317 14.78 7.67984C15.4066 8.18484 15.9025 8.71734 16.2341 9.17817C16.4008 9.409 16.5158 9.609 16.5875 9.76817C16.6525 9.91234 16.6641 9.98567 16.6666 9.999V9.99984C16.6641 10.0132 16.6525 10.0865 16.5875 10.2307C16.4891 10.4383 16.3708 10.6359 16.2341 10.8207C15.9025 11.2815 15.4066 11.814 14.78 12.319C13.52 13.3365 11.8241 14.1665 9.99996 14.1665C8.17663 14.1665 6.48079 13.3365 5.21996 12.3198C4.59329 11.8148 4.09746 11.2823 3.76579 10.8215C3.62905 10.6368 3.51071 10.4392 3.41246 10.2315C3.37604 10.1584 3.34942 10.0808 3.33329 10.0007Z"
                              fill="#BABABA"
                            />
                          </svg>
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 p-6">
              <button className="px-4 py-2 border border-[#E8E8E8] rounded-full text-sm font-normal text-[#767676] hover:bg-[#F9F9F9] transition-colors">
                Prev
              </button>
              <button className="px-3 py-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 10.5C6.39782 10.5 6.77936 10.658 7.06066 10.9393C7.34196 11.2206 7.5 11.6022 7.5 12C7.5 12.3978 7.34196 12.7794 7.06066 13.0607C6.77936 13.342 6.39782 13.5 6 13.5C5.60218 13.5 5.22064 13.342 4.93934 13.0607C4.65804 12.7794 4.5 12.3978 4.5 12C4.5 11.6022 4.65804 11.2206 4.93934 10.9393C5.22064 10.658 5.60218 10.5 6 10.5ZM12 10.5C12.3978 10.5 12.7794 10.658 13.0607 10.9393C13.342 11.2206 13.5 11.6022 13.5 12C13.5 12.3978 13.342 12.7794 13.0607 13.0607C12.7794 13.342 12.3978 13.5 12 13.5C11.6022 13.5 11.2206 13.342 10.9393 13.0607C10.658 12.7794 10.5 12.3978 10.5 12C10.5 11.6022 10.658 11.2206 10.9393 10.9393C11.2206 10.658 11.6022 10.5 12 10.5ZM18 10.5C18.3978 10.5 18.7794 10.658 19.0607 10.9393C19.342 11.2206 19.5 11.6022 19.5 12C19.5 12.3978 19.342 12.7794 19.0607 13.0607C18.7794 13.342 18.3978 13.5 18 13.5C17.6022 13.5 17.2206 13.342 16.9393 13.0607C16.658 12.7794 16.5 12.3978 16.5 12C16.5 11.6022 16.658 11.2206 16.9393 10.9393C17.2206 10.658 17.6022 10.5 18 10.5Z"
                    fill="#333333"
                  />
                </svg>
              </button>
              <button className="px-4 py-2 border border-[#E8E8E8] rounded-full text-sm font-normal text-[#767676] hover:bg-[#F9F9F9] transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
