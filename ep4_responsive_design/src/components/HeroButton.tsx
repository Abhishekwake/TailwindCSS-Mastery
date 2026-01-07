import Link from "next/link";

const HeroButton = () => {
  return (
    <div className="herobanner-btn">
      <Link
        href="/products/star-sweat-elemental-water"
        className="group inline-flex items-center gap-3 overflow-hidden rounded-full border border-violet-500 px-6 py-3 text-base font-semibold text-violet-600 transition-all duration-300 hover:bg-violet-50"
      >
        <span>Shop Now</span>

        {/* Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="33"
          viewBox="0 0 34 33"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <path
            d="M5.71248 12.3138C7.45308 11.4245 9.29198 10.9605 11.2244 10.8053C12.6037 10.693 13.9612 10.7907 15.3235 11.0048C15.5764 11.0373 15.8294 11.0699 16.0824 11.1024L16.6796 10.6842C18.0595 9.71797 19.4426 8.73452 20.8192 7.78558C22.34 6.7357 23.9457 5.85095 25.6791 5.2362C28.0329 4.41164 30.4177 4.17933 32.8449 4.62114..."
            fill="url(#paint0_linear)"
          />
          <path
            d="M20.8526 13.7065C21.2958 14.3395 21.1327 15.2025 20.5079 15.625C19.8212 16.0909 18.946 15.8053 18.5866 15.2482..."
            fill="url(#paint1_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="35.1779"
              y1="7.18598"
              x2="10.8095"
              y2="-8.54603"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5E2CFF" />
              <stop offset="1" stopColor="#9200BD" />
            </linearGradient>

            <linearGradient
              id="paint1_linear"
              x1="21.0742"
              y1="14.023"
              x2="17.821"
              y2="13.1601"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#5E2CFF" />
              <stop offset="1" stopColor="#9200BD" />
            </linearGradient>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default HeroButton;
