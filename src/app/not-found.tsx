"use client";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-background text-white flex-col overflow-hidden">
      <style jsx>{`
        .digit-left,
        .digit-right {
          will-change: color, text-shadow;
        }

        .digit-left {
          animation: leftColorCycle 9s linear infinite;
        }

        .digit-right {
          animation: rightColorCycle 9s linear infinite;
        }

        @keyframes rightColorCycle {
          0% {
            color: #38bdf8;
            text-shadow: 0 0 18px rgba(56, 189, 248, 0.2);
          }
          25% {
            color: #22c55e;
            text-shadow: 0 0 18px rgba(34, 197, 94, 0.2);
          }
          50% {
            color: #38bdf8;
            text-shadow: 0 0 18px rgba(56, 189, 248, 0.2);
          }
          75% {
            color: #22c55e;
            text-shadow: 0 0 18px rgba(34, 197, 94, 0.2);
          }
          100% {
            color: #38bdf8;
            text-shadow: 0 0 18px rgba(56, 189, 248, 0.2);
          }
        }

        @keyframes leftColorCycle {
          0% {
            color: #22c55e;
            text-shadow: 0 0 18px rgba(34, 197, 94, 0.2);
          }
          25% {
            color: #38bdf8;
            text-shadow: 0 0 18px rgba(56, 189, 248, 0.2);
          }
          50% {
            color: #22c55e;
            text-shadow: 0 0 18px rgba(34, 197, 94, 0.2);
          }
          75% {
            color: #38bdf8;
            text-shadow: 0 0 18px rgba(56, 189, 248, 0.2);
          }
          100% {
            color: #22c55e;
            text-shadow: 0 0 18px rgba(34, 197, 94, 0.2);
          }
        }
      `}</style>
      <div className="flex flex-row items-center leading-none text-[150px] sm:text-[300px] font-bold">
        <span className="digit-left">4</span>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-40 h-40 sm:w-80 sm:h-80 mt-4 object-cover"
        >
          <source src="/notfound.mp4" type="video/mp4" />
        </video>

        <span className="digit-right -ml-2">4</span>
      </div>

      <p className="text-lg mb-6 ">Página não encontrada</p>

      <a
        href="/"
        className="rounded-lg bg-green-600 px-6 py-2 font-semibold transition hover:scale-105"
      >
        Voltar para a página inicial
      </a>
    </div>
  );
}