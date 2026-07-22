/**
 * Banner horizontal de certificación ISO 9001.
 */
function SelloISO() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="h-24 w-24 shrink-0 sm:h-28 sm:w-28"
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="56" fill="#c8102e" />
      <circle cx="60" cy="60" r="48" fill="white" />
      <circle cx="60" cy="60" r="42" fill="none" stroke="#c8102e" strokeWidth="2" />
      <text
        x="60"
        y="48"
        textAnchor="middle"
        fill="#c8102e"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="700"
      >
        ISO 9001
      </text>
      <text
        x="60"
        y="68"
        textAnchor="middle"
        fill="#c8102e"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="600"
        letterSpacing="0.5"
      >
        SYSTEM
      </text>
      <text
        x="60"
        y="80"
        textAnchor="middle"
        fill="#c8102e"
        fontFamily="Arial, sans-serif"
        fontSize="7"
        fontWeight="600"
        letterSpacing="0.5"
      >
        CERTIFIED
      </text>
    </svg>
  );
}

function BannerCertificacionISO() {
  return (
    <section className="border-y border-[#c5ccd6] bg-[#f5f6f8]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-5 px-4 py-10 sm:flex-row sm:gap-8 sm:py-12">
        <SelloISO />

        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-[#0d47a1] sm:text-2xl">
            Certificación ISO 9001
          </h2>
          <p className="mt-1 text-sm text-steel-600 sm:text-base">
            Este certificado es avalado a nivel mundial.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BannerCertificacionISO;
