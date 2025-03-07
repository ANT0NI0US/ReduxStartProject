export default function PageTitle({ title }) {
  return (
    <div className="flexCenter mb-[65px] inline-block w-full">
      <h1 className="rtl:font-alexandria text-primary ltr:font-protest relative mx-auto w-fit text-center text-xl font-semibold tracking-wider uppercase sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
        <div className="bg-dark-primary absolute left-1/2 h-[5px] w-1/3 -translate-x-1/2 transform rounded-full ltr:-bottom-[12px] rtl:-bottom-[20px]" />
        <div className="border-secondary bg-dark-primary absolute left-1/2 h-[18px] w-[18px] -translate-x-1/2 transform rounded-full border-4 ltr:-bottom-[19px] rtl:-bottom-[27px]" />
      </h1>
    </div>
  );
}
