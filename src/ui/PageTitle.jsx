export default function PageTitle({ title }) {
  return (
    <div className="flexCenter mb-[65px] inline-block w-full">
      <h1 className="rtl:font-alexandria relative mx-auto w-fit text-center text-xl font-semibold uppercase tracking-wider text-primary sm:text-2xl md:text-3xl lg:text-4xl ltr:font-protest">
        {title}
        <div className="absolute left-1/2 h-[5px] w-1/3 -translate-x-1/2 transform rounded-full bg-darkPrimary ltr:-bottom-[12px] rtl:-bottom-[20px]" />
        <div className="absolute left-1/2 h-[18px] w-[18px] -translate-x-1/2 transform rounded-full border-4 border-secondary bg-darkPrimary ltr:-bottom-[19px] rtl:-bottom-[27px]" />
      </h1>
    </div>
  );
}
