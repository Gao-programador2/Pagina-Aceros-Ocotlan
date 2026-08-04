import insigniaIso9001 from '../../assets/LOGO ISO 9001.png';

/**
 * Banner horizontal de certificación ISO 9001.
 */
function BannerCertificacionISO() {
  return (
    <section className="border-y border-[#c5ccd6] bg-[#f5f6f8]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-4 py-10 sm:flex-row sm:gap-8 sm:py-12">
        <img
          src={insigniaIso9001}
          alt="Insignia ISO 9001 System Certified"
          className="h-28 w-28 shrink-0 object-contain sm:h-32 sm:w-32"
        />

        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-[#0d47a1] sm:text-3xl">
            Certificación ISO 9001
          </h2>
          <p className="mt-1.5 text-base text-steel-600 sm:text-lg">
            Este certificado es avalado a nivel mundial.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BannerCertificacionISO;
